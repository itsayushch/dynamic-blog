import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import A from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

export default function Cards({ cards, loggedIn } = { cards: [], loggedIn: false }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {cards.map((m, i) => {
                    return (
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Image
                                    src={m.image}
                                    alt={`Cover Image ${m.title}`}
                                    layout='responsive'
                                    width={556}
                                    height={278}
                                />
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    <Link href={`/article/${m.slug}`}><A style={{ color: 'inherit' }}>{m.title}</A></Link>
                                </Typography>
                                <Typography gutterBottom>
                                    {m.description}
                                </Typography>
                                <Divider />
                                <br />
                                <Button size="large" variant="contained" color="primary" onClick={() => Router.push(`/article/${m.slug}`)}>
                                    View
                                </Button>
                                {loggedIn &&
                                    <Button size="large" variant="contained" color="primary" onClick={() => Router.push(`/dashboard/edit/${m.slug}`)}>
                                        Edit
                                    </Button>
                                }
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
