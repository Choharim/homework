import { Layout } from '../components'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <div>home</div>
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}
