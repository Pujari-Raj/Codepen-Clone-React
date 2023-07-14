import React,{ useContext,useState, useEffect }  from 'react';
import { Datacontext } from "../context/DataProvider";
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 63vh;
`;

const Result = () => {

    const [src, setSrc] = useState('');

    const {  html, css, js} = useContext(Datacontext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

    useEffect(() => {
      
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000);

    // clering timeout bcz it create the performance issues
      return () => clearInterval(timeout);
    }, [html, css, js])
    

  return (
    <Container>
        <iframe
            srcDoc={src}
            title='Output'
            sandbox='allow-scripts'
            frameBorder={0}
            width="100%"
            height="100%"
        />
    </Container>
  )
}

export default Result