import type { NextApiRequest, NextApiResponse } from "next";

import {
    saveMood,
    deleteMood,
    getMood
} from '../../utils/db';

import { collection } from 'firebase/firestore';
import { db } from "../../utils/firebase";
import { get } from "http";

type Mood = {
    mood: string;
    description: string;
    date: string;
}

type MoodDB = {
    mood: string;
    description: string;
    date: string;
    id: string;
}


export default async function handler_get(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!req.query.userId || !req.query.mood || req.query.description == undefined || !req.query.date) {
        res.status(400).json({ error: 'Missing query parameter' });
        return;
    }

    let userId: string = req.query.userId as string;

    let instance = collection(db, userId);

    let mood: Mood = {
        mood: req.query.mood as string,
        description: req.query.description as string,
        date: req.query.date as string,
    }

    getMood(instance).then((data) => {
        data.docs.map((item: any) => {
            if (item.data().date === mood.date) {
                deleteMood(item.id, db, userId);
            }
        });
        saveMood(mood, instance);
    })

    res.status(200).json({ message: 'Mood saved' });
}