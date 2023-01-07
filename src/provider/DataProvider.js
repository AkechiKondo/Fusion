import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [ isSignout, setIsSignout ] = useState(true);
    const [ userToken, setUserToken ] = useState('');
    const [ msgList, setMsgList ] = useState([]);
    
    const store = {
        isSignout: [ isSignout, setIsSignout ],
        userToken: [ userToken, setUserToken ]
    }
    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    );
};