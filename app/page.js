'use client';
import React from 'react';
import FullPage from '../components/FullPage';
import { homeContent } from "../constants/siteContent";
function Home(){
    return (
        <FullPage 
        title={homeContent.mainTitle}
        hero={homeContent.hero}
        mainText={homeContent.mainText} 
        // alt={homeContent.alt}
        // imgHeight={homeContent.imgHeight}
        // imgWidth={homeContent.imgWidth}
        />
    )
}

export default Home;