import { createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    inline: {
        display: 'inline-block',
        cursor: 'pointer',
        fontSize: '1.3rem',
        fontWeight: 'bolder',

        [theme.fn.smallerThan('sm')]: {
            fontSize: '1.4rem',
        },
    },
    image: {
        width: '64px',
        display: 'inline-block',
        margin: '5px',
        marginTop: '-5px'
    },
    link: {
        color: 'white',
        cursor: 'pointer'
    },
}));


export function MoodTrackerLogo() {
    const { classes } = useStyles();

    return (
        <Link href='/' className={classes.link}>
            <div className={classes.inline}>
                {/* <img src="/logo.png" className={classes.image} /> */}
                <h2 className={classes.inline}>MoodTracker</h2>
            </div>
        </Link>
    );
}