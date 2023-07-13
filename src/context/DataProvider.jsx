import React, { createContext, useState } from 'react';

export const Datacontext = createContext();

const DataProvider = ({children}) => {

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
            {children}
        </Datacontext.Provider>
    </div>
  )
}

export default DataProvider