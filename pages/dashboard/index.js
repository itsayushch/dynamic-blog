import { allArticles } from '../../lib/blog';
import Layout from '../../components/Layout';
import Cards from '../../components/Cards';
import SubHeader from '../../components/SubHeader';
import Typography from '@material-ui/core/Typography';
import { useUser } from '../../lib/hooks';

export default function Dashboard({ data }) {
  const user = useUser({ redirectTo: '/login' });

  return (
    <Layout>
      <SubHeader title={'Dashboard'} description={'List of articles.'} />
      <Cards cards={data} loggedIn={true} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await allArticles();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    }
  }
}