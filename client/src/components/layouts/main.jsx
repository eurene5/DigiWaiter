import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const Main = ({children}) => {
    return (
        <Box as='main'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>DigiWaiter - Homepage</title>
            </Head>

            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Main