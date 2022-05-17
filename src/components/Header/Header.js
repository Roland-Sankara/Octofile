import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header(){
    
    return (
        <div className="header-component">
            <h2><i class="fa-brands fa-github"> </i> Octofile</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> 
                            <span><i class="fa-solid fa-magnifying-glass"> </i> Search</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/repositories"> 
                            <span><i class="fa-solid fa-box-archive"> </i> Repositories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile"> 
                            <span><i class="fa-solid fa-user"> </i> Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;