import React from 'react'


const BlogCard = (props) => {
    console.log(props);

    return(
        <div className="pageborder"  >
            {/*  here title description consits of data which is passed in blog car in main app dot js file that is 
             rendered here */}
        <h3> {props.title} </h3>  
        <h4>{props.id}  </h4>         
        <p> {props.description} </p>
        <h3></h3>
        </div>
    )
}   



export default BlogCard;