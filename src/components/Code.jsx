import React, { useContext } from 'react'
import Editor from './Editor';
import { Box, styled } from "@mui/material";
import { Datacontext } from "../context/DataProvider";

const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 63vh;
`;

const Code = () => {

  const {  html,setHtml, css, setCss, js, setJs} = useContext(Datacontext);

  return (
    <Container>
        <Editor 
         heading ="HTML"
         icon="/" 
         color="#FF3C41"
         value={html}
         onChange={setHtml}
        />
        <Editor 
         heading ="CSS" 
         icon="*"
         color="#0EBEFF"
         value={css}
         onChange={setCss}
        />        
        <Editor 
         heading ="JS" 
         icon="( )"
         color="#FCD000"
         value={js}
         onChange={setJs}
        />
    </Container>
  )
}

export default Code