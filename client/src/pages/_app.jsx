import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const Website = ({Component, pageProps}) => {
    const queryClient = new QueryClient()
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