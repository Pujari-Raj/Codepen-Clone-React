import React, { createContext, useState } from 'react';

const Datacontext = createContext();

const DataProvider = () => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
  return (
    <div>
        <Datacontext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}
        >
        </Datacontext.Provider>
    </div>
  )
}

export default DataProvider