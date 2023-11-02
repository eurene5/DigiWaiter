
import QrReader from 'react-qr-scanner';
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Link } from '@chakra-ui/react';

const Page = () => {
    const [isClient, setIsClient ] = useState(false)
    useEffect(() => {
        setIsClient(true)
    })
    const router = useRouter()
    const videoRef = useRef(null);

        const handleScan = (data) => {
            if(data) {
                console.log('voila', data)
                router.push('/accueil')
            }
        }
        const handleError = (error) => {
            console.error('error', error)
        }
    

    return (
        <Box>
            {
                isClient ? (
                    <QrReader
                        ref={videoRef}
                        onScan={handleScan}
                        onError={handleError}
                    />
                    
            ): ''}
        </Box>

    )
}

export default Page