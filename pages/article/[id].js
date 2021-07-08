import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from '../../components/Markdown';
import Layout from '../../components/Layout';
import { fetchArticle } from '../../lib/blog';
import Head from 'next/head';
import Image from 'next/image';
import Prism from 'prismjs';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2
    },
    header: {
        padding: theme.spacing(4, 20, 4),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(4, 2, 6)
        }
    }
}));

export default function Main({ data }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const classes = useStyles();
    return (
        <Layout override={true}>
            <Head>
                <title>{data.title}</title>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Ayush Chowdhury" />
                <meta name="theme-color" content="#B1A7F0" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.image} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={data.title} />
                <meta property="twitter:description" content={data.description} />
                <meta property="twitter:image" content={data.image} />
            </Head>
            <Grid item xs={12}>
                <div className={classes.header}>
                    <Typography variant="h3" gutterBottom align="center">
                        {data.title}
                        <Divider />
                    </Typography>

                    <Image src={data.image} layout="responsive" width={556} height={278} />
                    <br />
                    <Typography variant="h6" gutterBottom>
                        <Divider />
                        <br />
                        {data.description}
                    </Typography>
                </div>

                <Divider />
                <Container maxWidth="md">
                    <article>
                        <Markdown>{data.body}</Markdown>
                    </article>
                </Container>
            </Grid>
        </Layout>
    );
}
// className={classes.markdown}
export async function getServerSideProps(router) {
    const data = await fetchArticle(router.query);

    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        }
    };
}
