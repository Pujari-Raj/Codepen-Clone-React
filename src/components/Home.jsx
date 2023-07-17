import React, {useState} from 'react'
import Header from './Header'
import Code from './Code';
import Result from './Result';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

const Home = () => {
    const [sizes, setSizes] = useState([
        // 100,
        // '30%',
        // 'auto',
    ]);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div className=''>

            <Header />
            <Code />
            <Result />
        </div>
    )
}

export default Home