import type { NextApiRequest, NextApiResponse } from "next";

import {
    getMood
} from '../../utils/db';

import { collection } from 'firebase/firestore';
import { db } from "../../utils/firebase";


export default async function handler_get(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let userId: string = req.query.userId as string;

    let instance = collection(db, userId);
    let moods: any = [];

    getMood(instance).then((data) => {
        data.docs.map((item) => {
            const itemData = item.data();
            if (typeof itemData === 'object') {
                moods.push({ ...itemData, id: item.id });
            }
        });
        res.status(200).json({ moods });
    })
}