import QrReader from 'react-qr-scanner';
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const Page = () => {
    const [ScanResult, setScanResult] = useState(null)
    const router = useRouter()
    useEffect(()=>{
        const scanner =  new Html5QrcodeScanner("reader",{
            buttonText: "Mon bouton",
            qrbox : {
                width : 250,
                height : 250
            },
            fps : 5,
            
        })
        scanner.render(succes, error);
    
        function succes(result){
            scanner.clear()
            setScanResult(result)
            router.push("accueil")
        }

        function error(err){
            console.warn(err);
        }
    },[])
    

    return(
        <Box>
            {ScanResult
             ? <div id='reader'  >Success: <a href={`http://localhost:3000/accueil`}>{ScanResult}</a>  </div>
            : <div id='reader'>tsisy</div>
            }
        </Box>
    )
    // const videoRef = useRef(null);

    // const handleScan= (data) => {
    //     if(data) {
    //         console.log('voila', data)
    //         router.push('accueil')
    //     }
    // }
    // const handleError = (error) => {
    //     console.error('error', error)
    // }

    // return (
    //     <>
    //         <QrReader
    //             onScan={handleScan}
    //             ref={videoRef}
    //             onError={handleError}
    //         />
    //     </>

    // )
}



export default Page