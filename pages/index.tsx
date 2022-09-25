import Link from 'next/link'

import Post from 'entity/post/type'
import { getAllPosts } from 'entity/post/util'
import { Layout } from 'components'

const Home = ({ posts }: { posts: Pick<Post, 'slug' | 'data'>[] }) => {
  return (
    <div>
      {posts?.map(({ data: { title, description, createAt, tags }, slug }) => (
        <article key={slug}>
          <header>
            <h3>
              <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <span>{createAt}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
          {tags?.map((tag, i) => (
            <div key={`${tag}_${i}`}>{tag}</div>
          ))}
        </article>
      ))}
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}
