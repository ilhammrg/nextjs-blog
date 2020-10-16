import { getAllPostIds, getPostData } from '../../lib/posts'

import { parseISO, format } from 'date-fns'

import Head from 'next/head'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default function Post({ postData }) {
  return (
    <div style={{ padding: '10rem' }}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <strong>{postData.title}</strong>
      <br />
      <em><Date dateString={postData.date} /></em>
      
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <br />
      <Link href='/'><a><strong>&larr; Back to Home</strong></a></Link>
    </div>
  )
}