import React from 'react';
import { useRouter } from 'next/router';
import ScrollPage from '../../components/ScrollPage';
import { processContent,whatIsContent} from '../../constants/siteContent'
function contentSwitch(type){
  if(type === 'process'){
    return processContent;
  }else if(type === 'whatIs'){
    return whatIsContent;
  }
}
const KnowledgePage = () => {
    const router = useRouter();
    const {type} = router.query;
    return (
        <ScrollPage content={contentSwitch(type)}/>
    )
}

export default KnowledgePage;