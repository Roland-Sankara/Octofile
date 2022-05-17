import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import RepoWidget from '../widgets/RepoWidget/RepoWidget';
import Header from '../Header/Header';
import './Repos.css';

function Repos(){
    const {userData} = useContext(AppContext);
    const [repos, setRepos] = useState();

    useEffect(()=>{
        fetch(userData.reposUrl)
        .then((res)=>res.json())
        .then((data)=>setRepos(data))
        .catch((err)=>console.log(err))
    },[userData])

    return (
        <>
            <Header/>
            <div className='repos-list'>
                {repos && (
                    repos.map((repo)=><RepoWidget key={repo.id} repo={repo}/>)
                )}
            </div>
        </>
    )
}

export default Repos;