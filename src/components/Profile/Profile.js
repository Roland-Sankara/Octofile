
import React, {useContext, useEffect} from 'react';
import {AppContext} from '../../context/AppContext';
import StatsWidget from '../widgets/StatsWidget/StatsWidget';
import BioInfo from '../BioInfo/BioInfo';
import Header from '../Header/Header';
import './Profile.css';

function Profile(){
    const {username,userData,updateUserData} = useContext(AppContext);

    
    useEffect(()=>{
        let apiUrl = `https://api.github.com/users/${username}`;
        fetch(apiUrl)
        .then((res)=>res.json())
        .then((data)=>{
            let newUserData = {
                name: data.name,
                image: data.avatar_url,
                gitProfile: data.html_url,
                location: data.location,
                dateJoined: formatDate(data.created_at),
                reposUrl: data.repos_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following
            }
            updateUserData(newUserData)
        })
    },[username])

    function formatDate(date){
        let newDate = new Date(date);
        let dateArray = newDate.toDateString().split(' ');
        dateArray.splice(0,1);
        dateArray.splice(2,0,',');
        return dateArray.join(' ');
    }

    return (
        <>
            <Header/>
            <div className='profile-component'>
                <img src={userData.image} alt={`${username}'s profile image`}/>
                <h2>{userData.name}</h2>
                <a href={userData.gitProfile} target="_blank"><h4>@{username}</h4></a>

                <div className='bio-info'>
                    <BioInfo icon="fa-solid fa-location-dot" info={userData.location}/>
                    <BioInfo icon="fa-solid fa-calendar-days" info={`Joined ${userData.dateJoined}`}/>
                </div>

                {/* stat cards */}
                <div className='stats'>
                    <StatsWidget stat={userData.repos} statName="REPOSITORIES"/>
                    <StatsWidget stat={userData.followers} statName="FOLLOWERS"/>
                    <StatsWidget stat={userData.following} statName="FOLLOWING"/>
                </div>

            </div>
        </>
    )
}

export default Profile;