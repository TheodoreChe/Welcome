import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Markdown from '../components/Markdown'
import { ContentBlock, Page } from '../components/UI'
import { markdownToHtml, getMarkdown } from '../lib'

type Props = {
  content: string
}

const contentPath = 'README.md'

const Home: NextPage<Props> = ({ content }) => {
  return (
    <Page>
      <ContentBlock>
        <Markdown content={content} />
      </ContentBlock>
    </Page>
  )
}

export async function getStaticProps() {
  const info = getMarkdown(contentPath)
  const content = await markdownToHtml(info.content || '')

  return {
    props: {
      content,
    },
  }
}

export default Home
