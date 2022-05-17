import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import RepoWidget from '../widgets/RepoWidget/RepoWidget';
import Header from '../Header/Header';
import {useNavigate} from 'react-router-dom';
import './Repos.css';

function Repos(){
    const {userData,username} = useContext(AppContext);
    const [repos, setRepos] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(username){
            setIsLoading(true);
            fetch(userData.reposUrl)
            .then((res)=>res.json())
            .then((data)=>{setRepos(data); setIsLoading(false)})
            .catch((err)=>console.log(err))
        }else{
            navigate('/')
        }
    },[userData])

    return (
        <>
            <Header/>
            {
                !isLoading ? (
                    <div className='repos-list'>
                        {repos && (
                            repos.map((repo)=><RepoWidget key={repo.id} repo={repo}/>)
                        )}
                    </div>
                ):
                <i class="fa-solid fa-spinner fa-spin"></i>
            }
            
        </>
    )
}

export default Repos;