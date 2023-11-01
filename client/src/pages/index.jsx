import { useQuery } from "react-query";
import QrReader from 'react-qr-scanner';
import { useRef } from "react";

const Page = () => {
    const videoRef = useRef(null);

    const handleScan= (data) => {
        if(data)
        console.log('voila', data)
    }

    const handleError = (error) => {
        console.error(error);
    }

    return (
        <>
            <QrReader
                onScan={handleScan}
                onError={handleError}
                ref={videoRef}
            />
        </>

    )
}

export default Page