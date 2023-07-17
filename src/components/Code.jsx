import React, { useContext, useState } from 'react'
import Editor from './Editor';
import { Box, styled } from "@mui/material";
import { Datacontext } from "../context/DataProvider";
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 63vh;
`;

const Code = () => {

  const { html, setHtml, css, setCss, js, setJs } = useContext(Datacontext);

  const [sizes, setSizes] = useState([
    // 100,
    // '30%',
    // 'auto',
    
  ]);

  const layoutCSS = {
    // height: '100%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // overflow: 'hideen',
  };
  return (
    <Container style={{ height: 385}}>
      <SplitPane split='vertical' sizes={sizes} onChange={setSizes}>
        
        <Editor
          heading="HTML"
          icon="/"
          color="#FF3C41"
          value={html}
          onChange={setHtml}
        />
        <Editor
          heading="CSS"
          icon="*"
          color="#0EBEFF"
          value={css}
          onChange={setCss}
        />
        <Editor
          heading="JS"
          icon="( )"
          color="#FCD000"
          value={js}
          onChange={setJs}
        />
      </SplitPane>
    </Container>
  )
}

export default Code