import { ColorSwatch, Group, NativeSelect, Tooltip, Modal, Input, Button } from '@mantine/core';
import moment from 'moment';
import { useDisclosure } from '@mantine/hooks';


interface TileProps {
    date: string;
    mood: string;
    description: string;
}

type Tile = {
    date: string;
    mood: string;
    description: string;
}

type Tiles = Tile[];


////////////////////
// dev only
const mood_colors: any = {
    "happy": "#ffe066",
    "sad": "#91a7ff",
    "angry": "#ff6b6b",
    "neutral": "#ced4da",
}

let full_tiles: Tiles = [];
let tiles_default: Tiles = [];
let tiles_user: Tiles = [];

// кол-во дней в году
const daysInYear = moment().dayOfYear();

// массив дней в году
tiles_default = Array.from({ length: daysInYear }, (_, i) => {
    return {
        date: moment().date(i + 1).format("YYYY-MM-DD"),
        // random mood
        mood: "neutral",
        description: "",
    }
});

tiles_user = [
    {
        date: "2023-07-10",
        mood: "happy",
        description: "С Новым Годом!",
    }
]
////////////////////


const mergeTiles = (tiles_default: any, tiles_user: any) => {
    const full_tiles = tiles_default.map((tile: any) => {
        const user_tile = tiles_user.find((user_tile: any) => user_tile.date === tile.date);
        if (user_tile) {
            return user_tile;
        }
        return tile;
    });
    return full_tiles;
}

const editTile = (tiles: any, date: string, mood: string, description: string) => {
    const tile = tiles.find((tile: any) => tile.date === date);
    if (tile) {
        tile.mood = mood;
        tile.description = description;
    } else {
        tiles.push({
            date: date,
            mood: mood,
            description: description,
        });
    }
    console.log(tiles);
}


function Tile(props: TileProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title={props.date}>
                <NativeSelect
                    data={["happy", "sad", "angry", "neutral"]}
                    label="Выберите настроение"
                    description="Как вы себя чувствовали в этот день?"
                    withAsterisk
                />
                <Input.Wrapper label="Почему вы выбрали это настроение?" required>
                    <Input
                        placeholder="Пример: Я сегодня сдал экзамен!"
                        defaultValue={props.description}
                        required
                    />
                </Input.Wrapper>
                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt={10}
                    onClick={() => {
                        editTile(tiles_user, props.date, props.mood, props.description);
                        close();
                    }}
                >
                    Сохранить
                </Button>
            </Modal>

            <Tooltip label={props.date}>
                <ColorSwatch
                    color={mood_colors[props.mood]}
                    m={0}
                    radius={0}
                    size={20}
                    sx={{ color: '#fff', cursor: 'pointer' }}
                    onClick={open}
                />
            </Tooltip>
        </>
    )
}


export function Tiles() {
    full_tiles = mergeTiles(tiles_default, tiles_user);

    return (
        <>
            <h1>Пример(не привязан к БД):</h1>
            {/* Mood tiles */}
            <Group spacing="xs">
                {full_tiles.map((tile) => (
                    <Tile
                        date={tile.date}
                        mood={tile.mood}
                        description={tile.description}
                        key={tile.date}
                    />
                ))}
            </Group>

            {/* Colors info */}
            <Group spacing="xs" mt={20}>
                <ColorSwatch color={mood_colors["happy"]} size={20} />Счастливый <br />
                <ColorSwatch color={mood_colors["sad"]} size={20} />Грустный <br />
                <ColorSwatch color={mood_colors["angry"]} size={20} />Злой <br />
                <ColorSwatch color={mood_colors["neutral"]} size={20} />Нейтральный <br />
            </Group>
        </>
    );
}