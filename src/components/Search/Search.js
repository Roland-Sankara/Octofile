import React,{useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {useNavigate} from 'react-router-dom';
import './Search.css';

function Search(){
    const {updateUsername} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='search-component'>
            <i class="fa-brands fa-github"></i>
            <p className='search-title'>Find Your Octofile</p>
            <input type="text" 
                onChange={(e)=>updateUsername(e.target.value)} 
                onKeyUp={(e)=>{
                if(e.key === 'Enter' && e.target.value){
                    navigate('/profile');
                }
            }}/>
            <p className='search-info'>Press Enter &rarr;</p>
        </div>
    )
}

export default Search;