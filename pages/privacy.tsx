import type { NextPage } from 'next'
import { ContentBlock, Page } from '../components/UI'

const Privacy: NextPage = () => {
    return (
        <Page center>
            <ContentBlock>
                We do not store any personal information about our users. We collect the minimum amount of data necessary to provide our services. Any data we do collect is protected and will not be shared with any third party.
            </ContentBlock>
        </Page>
    )
}

export default Privacy
