import React from 'react';
// import {useEffect} from 'react'
// import { useRouter } from 'next/router'
export default function Head() {
    const icon = "/whisky-still.webp";
    // const router = useRouter()
    // const handleRouter = (url) => {
    //     console.log('url:',url);
    // }
    // useEffect(()=>{
    //     router.events.on('routeChangeComplete', handleRouter)
    //     return () => {
    //         router.events.off('routeChangeComplete', handleRouter)
    //     }
    // },[router])
    return (
        <>
          <title>Scotch_Tour</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="emotion-insertion-point" content="" />
          <link rel="icon" href={icon} />
        </>
    )
}