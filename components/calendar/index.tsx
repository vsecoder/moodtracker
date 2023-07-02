import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import moment from 'moment';

export function Calendar() {
    const [value, setValue] = useState<Date | null>(null);
    return (
        <>
            <h1>Календарь:</h1>
            <Group position="center">
                <DatePicker
                    value={value}
                    onChange={setValue}
                    defaultDate={new Date()}
                    getDayProps={(date) => {
                        if (date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                            return {
                                sx: (theme) => ({
                                    backgroundColor: "#ff6b6b",
                                    ...theme.fn.hover({ backgroundColor: theme.colors.red[7] }),
                                }),
                            };
                        }

                        return {};
                    }}
                    getYearControlProps={(date) => {
                        if (date.getFullYear() === new Date().getFullYear()) {
                            return {
                                sx: (theme) => ({
                                    color: theme.fn.primaryColor(),
                                    fontWeight: 700,
                                }),
                            };
                        }

                        return {};
                    }}
                    getMonthControlProps={(date) => {
                        if (date.getMonth() === new Date().getMonth()) {
                            return {
                                sx: (theme) => ({
                                    color: theme.fn.primaryColor(),
                                    fontWeight: 700,
                                }),
                            };
                        }

                        return {};
                    }}
                />
            </Group>
        </>
    );
}