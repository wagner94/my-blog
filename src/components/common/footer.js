import React from 'react';
import  {Link} from 'react-router-dom';
//import {Avatar} from 'antd';

const navLinks = [
    {
        title:'Categiras',
        path:'/',
        tags: ['Ataques', 'CyberSecurity']
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'Contact Us',
        path:'/contact-us'
    },
 
]

export default function Footer (){
    return (
        <nav className="site-navigation">
             
             <div className="menu-content-container">
                <ul>
                    
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.tags}</Link>
                        </li>
                    ))} 
                            
                </ul>
             
             </div>
        </nav>
        )

}