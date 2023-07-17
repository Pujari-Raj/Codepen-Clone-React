import React, { useState } from 'react';
import { Box, styled } from "@mui/material";
import { CloseFullscreen, Settings } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Controlled as ControlledEditor, Controlled } from 'react-codemirror2'
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
const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0 8px 8px;
`;

const ToolBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
`;


const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        // <div>
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header >
                <Heading>
                    <Box component='span'
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>

                <ToolBox >
                    <Settings style={{ alignSelf: 'center',
                                background: '#1D1E22',
                                // height: 20,
                                width: 30,
                                borderRadius: 2,
                                cursor: 'pointer',
                                padding: 2 }} 
                    fontSize='small' />
                    {/* <CloseFullscreen fontSize='small' 
                    style={{ alignSelf: 'center' }} onClick={() => setOpen(prevState => !prevState)} 
                    /> */}
                    <KeyboardArrowDownIcon 
                    style={{ alignSelf: 'center', 
                            background: '#1D1E22',
                            // height: 20,
                            width: 30,
                            borderRadius: 2,
                            cursor: 'pointer' }}
                    fontSize='medium' onClick={() => setOpen(prevState => !prevState)} />
                </ToolBox>
            </Header>

            <ControlledEditor className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
        // </div>
    )
}

export default Editor