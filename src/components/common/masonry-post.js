import React from 'react'
import {categoryColors} from './styles'
//import Imgs from '../../assets/images/circuito.jpg'

    

export default function MasonryPost ({post, tagsOnTop}) {

    const windowWidth = window.innerWidth
  
    const imageBackground =  { 
         // backgroundImage : `url(`+Imgs+`)`
          backgroundImage:`url(${require(`../../assets/images/${post.image}`)})`
       };

         
      //const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground 
      const style = imageBackground 
    return (
       <a className="masonry-post overlay" style={style} href="www.hsh.sdj">
           <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' :'flex-end'}}>
               <div className="tags-container">
                   { post.categories.map((tag, ind) =>
                       <span key={ind} className="tag" style={{backgroundColor:categoryColors[tag]}}>
                           {tag.toUpperCase()}
                       </span>
                    )}
               </div>
                <div>
                    <h2  className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
           </div>
       </a>

   )

}