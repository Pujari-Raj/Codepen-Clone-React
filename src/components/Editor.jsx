import React from 'react';
import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import {Controlled as ControlledEditor, Controlled} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "../App.css";

// 
const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`
const Header = styled(Box)`
    background: #060606;
    display: flex;
    justify-content: space-between;
    color: #fff;
`


const Editor = () => {
  return (
    <div>
        <Box>
            <Header>
                <Heading>
                    <Box component='span'
                    style={{
                        background: 'red',
                        height: 20,
                        width: 20,
                        display: 'flex',
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2
                    }}>
                        /
                    </Box>
                    HTML
                </Heading>
                <CloseFullscreen/>
            </Header>
            {/* <Box>

            </Box> */}
            <ControlledEditor className='controlled-editor'
            options={{
                theme: 'material',
                lineNumbers: true
            }}/>
        </Box>
    </div>
  )
}

export default Editor