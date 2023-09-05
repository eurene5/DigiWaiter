import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

const Website = ({Component, pageProps}) => {
    return (
        <QueryClientProvider  client={queryClient}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false}/>
                </Layout>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default Website