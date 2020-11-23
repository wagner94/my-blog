import React from 'react'
//import { PostMasonry} from '../components/common'
// <MasonryPost posts={lastFeatured} tagsOnTop={true}/>


import {MasonryPost, PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'


const trendingConfig = {

    1: {
        gridArea : '1 / 2 / 3 / 3'
    }

}

const featuredConfig = {

    0: {
        gridArea : '1/ 1 / 2 / 3',
        height: '300px'
    },

    1: {
        height: '300px'
    },
    3: {
        height: '630px' ,
        //marginLeft:'30px',
        width: '630px'

    }
}

const mergeStyles = function(posts, config) {
       posts.forEach((post, index) => {
          post.style = config[index]
       }) 
}

mergeStyles (trending, trendingConfig)
mergeStyles (featured, featuredConfig)

const lastFeatured = featured.pop()


export default function Blog () {

   return (
        <section className="container home">
            <div className="row">
                <h1> Posts em destaque </h1>
                <section className="featured-posts-container">
                  <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                </section>
                <h1> Posts de Tendência </h1>
                  <PostMasonry posts={trending} columns={3}/>
            </div>
        </section>
   )

}