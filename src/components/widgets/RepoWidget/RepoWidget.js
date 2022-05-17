import React from 'react';
import './RepoWidget.css';

function RepoWidget({repo}){

    function circleColor(){
        switch(repo.language){
            case "JavaScript":
                return "color-orange";
            case "HTML":
                return "color-orangered";
            default:
                return "color-teal"
        }
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className='repo-widget'>
            <a href={repo.html_url} target="_blank" rel="noreferrer"><h3><i class="fa-solid fa-box-archive"> </i> {repo.name}</h3></a>
            <p>{repo.description}</p>

            <div className='repo-info'>
                <div>
                    <p><i class={`fa-solid fa-circle ${circleColor()}`}></i> {repo.language}</p>
                    <p><i class="fa-solid fa-star"> </i> {repo.stargazers_count}</p>
                    <p><i class="fa-solid fa-code-branch"> </i> {repo.forks}</p>
                </div>
                <p className='repo-size'>{numberWithCommas(repo.size)} KB</p>
            </div>
        </div>
    )
}

export default RepoWidget;