import { allArticles } from '../../lib/blog';
import Layout from '../../components/Layout';
import Cards from '../../components/Cards';
import SubHeader from '../../components/SubHeader';
import { useUser } from '../../lib/hooks';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(5)
    }
}));

export default function Dashboard({ data }) {
    useUser({ redirectTo: '/login' });

    const classes = useStyles();

    return (
        <Layout>
            <SubHeader title={'Dashboard'} description={'List of articles.'} />
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={() => Router.push('/dashboard/create')}>
                    Create Article
                </Button>
            </div>
            <Cards cards={data} loggedIn={true} />
        </Layout>
    );
}

export async function getServerSideProps() {
    const data = await allArticles();

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        }
    };
}
