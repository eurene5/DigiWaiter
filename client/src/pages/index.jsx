import QrReader from 'react-qr-scanner';
import { useRef } from "react";
import { useRouter } from "next/router";


const Page = () => {
    const router = useRouter()
    const videoRef = useRef(null);

    const handleScan= (data) => {
        if(data) {
            console.log('voila', data)
            router.push('accueil')
        }
    }
    const handleError = (error) => {
        console.error('error', error)
    }

    return (
        <>
            <QrReader
                onScan={handleScan}
                ref={videoRef}
                onError={handleError}
            />
        </>

    )
}

export default Page