import type { NextPage } from 'next'
import Markdown from '../components/Markdown'
import { ContentBlock, Page } from '../components/UI'

const Contact: NextPage = () => {
    return (
        <Page center>
            <ContentBlock>
                Timezone: Netherlands / Amsterdam (UTC+1)
                Email: <a href="mailto:theodoreche@icloud.com">theodoreche@icloud.com</a>
                LinkedIn: <a href="https://www.linkedin.com/">Theodore Che</a>
            </ContentBlock>
        </Page>
    )
}

export default Contact
