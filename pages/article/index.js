import { allArticles } from '../../lib/blog';
import Layout from '../../components/Layout';
import Cards from '../../components/Cards';
import SubHeader from '../../components/SubHeader';

export default function Blogs({ data }) {
  return (
    <Layout>
      <SubHeader title={'Articles'} description={'List of articles.'} />
      <Cards cards={data} loggedIn={false} />
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