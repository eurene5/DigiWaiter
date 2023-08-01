import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Website = ({Component, pageProps}) => {
    return (
        <QueryClientProvider  client={queryClient}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default Website