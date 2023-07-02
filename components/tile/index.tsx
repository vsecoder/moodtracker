import { ColorSwatch, NativeSelect, Tooltip, Modal, Input, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAuth } from "@clerk/nextjs";
import moment from 'moment';
import { useState } from 'react';


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

const mood_colors: any = {
    "happy": "#ffe066",
    "sad": "#91a7ff",
    "angry": "#ff6b6b",
    "neutral": "#ced4da",
}

export function Tile(props: TileProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const { userId } = useAuth();

    const [mood, setMood] = useState(props.mood);
    const [description, setDescription] = useState(props.description);

    const updateMood = () => {
        fetch(`/api/pull?userId=${userId}&date=${props.date}&mood=${mood}&description=${description}`)
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            });
    };

    return (
        <>
            <Modal opened={opened} onClose={close} title={props.date}>
                <NativeSelect
                    data={["happy", "sad", "angry", "neutral"]}
                    label="Выберите настроение"
                    description="Как вы себя чувствовали в этот день?"
                    defaultValue={props.mood}
                    onChange={(event) => {
                        setMood(event.currentTarget.value);
                    }}
                    withAsterisk
                />
                <Input.Wrapper label="Почему вы выбрали это настроение?" required>
                    <Input
                        placeholder="Пример: Я сегодня сдал экзамен!"
                        defaultValue={props.description}
                        onChange={(event) => {
                            setDescription(event.currentTarget.value);
                        }}
                        required
                    />
                </Input.Wrapper>
                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt={10}
                    onClick={() => {
                        updateMood();
                    }}
                >
                    Сохранить
                </Button>
            </Modal>

            <Tooltip label={props.date}>
                {/* if day is now, radius 100 */}
                <ColorSwatch
                    color={mood_colors[props.mood]}
                    m={0}
                    radius={moment().format("YYYY-MM-DD") === props.date ? 8 : 0}
                    size={20}
                    sx={{ color: '#fff', cursor: 'pointer' }}
                    onClick={open}

                />
            </Tooltip>
        </>
    )
}