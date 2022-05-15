import React, {createContext,useState} from 'react';

const AppContext = createContext();

function ContextProvider({children}){
    const [username,setUsername] = useState('');
    const [userData,setUserData] = useState({
        name: '',
        image: '',
        gitProfile: '',
        location: '',
        dateJoined: '',
        reposUrl: '',
        repos: '',
        followers: '',
        following: ''
    })

    function updateUsername(username){
        setUsername(username);
    }

    function updateUserData(data){
        setUserData(data);
    }

    return (
        <AppContext.Provider value={{username, userData, updateUsername, updateUserData}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    ContextProvider
}