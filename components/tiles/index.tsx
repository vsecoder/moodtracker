import { ColorSwatch, Group, Skeleton } from '@mantine/core';
import moment from 'moment';
import { Tile } from '../tile';
import { useAuth } from "@clerk/nextjs";

import {
    mergeTiles
} from '../../utils/tile';
import { useEffect, useState } from 'react';


type Tile = {
    date: string;
    mood: string;
    description: string;
}

type Tiles = Tile[];


const mood_colors: any = {
    "happy": "#ffe066",
    "sad": "#91a7ff",
    "angry": "#ff6b6b",
    "neutral": "#ced4da",
}

// кол-во дней в году
const days = 100;

// массив дней в году
const tiles_default = Array.from({ length: days }, (_, i) => {
    return {
        date: moment().date(i - 98 + 1).format("YYYY-MM-DD"),
        // random mood
        mood: "neutral",
        description: "",
    }
});


export function Tiles() {
    const { isLoaded, userId } = useAuth();

    const [loading, setLoading] = useState<boolean>(true);

    const [tiles, setTiles] = useState();

    useEffect(() => {
        if (!isLoaded) return;
        // fetch data from db
        fetch(`/api/get?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log("data", data.moods);
                setTiles(
                    mergeTiles(tiles_default, data.moods).map((tile: Tile) => (
                        <Tile
                            date={tile.date}
                            mood={tile.mood}
                            description={tile.description}
                            key={tile.date}
                        />
                    ))
                );
                setLoading(false);
            }
            )
    }, [isLoaded])

    return (
        <>
            <h1>Плитка:</h1>
            {/* Mood tiles */}
            {loading ? (
                <Skeleton>
                    <Group spacing="xs">
                        {
                            tiles_default.map((tile: Tile) => (
                                <Tile
                                    date={tile.date}
                                    mood={tile.mood}
                                    description={tile.description}
                                    key={tile.date}
                                />
                            ))
                        }
                    </Group>
                </Skeleton>
            ) : (
                <Group spacing="xs">
                    {tiles}
                </Group>
            )}

            {/* Colors info */}
            <Group spacing="xs" mt={20}>
                <ColorSwatch color={mood_colors["happy"]} size={20} />Счастливый
                <ColorSwatch color={mood_colors["sad"]} size={20} />Грустный
                <ColorSwatch color={mood_colors["angry"]} size={20} />Злой
            </Group>
        </>
    );
}