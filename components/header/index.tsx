import { createStyles, Header, Group, Container, rem } from '@mantine/core';
import { MoodTrackerLogo } from '../logo';

import { UserButton } from "@clerk/nextjs";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: rem(56),

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    profile: {
        width: rem(260),

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },
}));

export function HeaderMiddle() {
    const { classes, cx } = useStyles();

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <MoodTrackerLogo />

                <Group spacing={0} className={classes.profile} position="right" noWrap>
                    <UserButton />
                </Group>
            </Container>
        </Header>
    );
}