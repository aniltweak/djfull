import React from 'react'


const BlogCard = (properties) => {
    console.log(properties);

    return(
        <div className="pageborder"  >
            {/*  here title description consits of data which is passed in blog car in main app dot js file that is 
             rendered here */}
        <h3> {properties.title} </h3>             
        <p> {properties.description} </p>
        <h3></h3>
        </div>
    )
}   



export default BlogCard;