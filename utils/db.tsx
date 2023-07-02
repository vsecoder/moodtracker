import { doc, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

type Tile = {
    date: string;
    mood: string;
    description: string;
}

const saveMood = (tile: Tile, dbInstance: any) => {
    return addDoc(dbInstance, {
        date: tile.date,
        mood: tile.mood,
        description: tile.description,
    });
}

const getMood = (dbInstance: any) => {
    return getDocs(dbInstance)
}

const deleteMood = (id: string, db: any, userId: string) => {
    const collectionById = doc(db, userId, id)

    return deleteDoc(collectionById)
}


export { saveMood, getMood, deleteMood };
