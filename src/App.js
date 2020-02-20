import React from 'react';

import BlogCard from './BlogCard';
import './App.css';

function App() {
  //  creating a list and assigning  list a varible
  const blogArr = [
    {
      'id' : 1,
      'title' : 'anil',
      'description' : 'python, django , aws, reactjs'
    },
    {
      'id' : 2,
      'title' : 'siva',
      'description' : 'python, django '
    },
    {
      'id' :3,
      'title' : 'sukumar',
      'description' : 'python, django, etc '
    }
  ]

  //  creating a varible and mapping above list to check in console  here we have pos beside item 
  // which tells when a item in list updated deleted or changed
  // another way is having id and calling id instead of having a key name pos
  const blogcard = blogArr.map( (item,pos) =>{
    // console.log(item);

    return(
      // here we have a key name pos which refers any change in items in list
      // another way is calling id in key to specify changes deletions updates  key = {pos} or{item.id}
    //   <div className="pageborder" key={item.id} >
    //  <h3> {item.title} </h3>
    //  <p> {item.description} </p>
    //  <h3></h3>
    //  </div>


    // <BlogCard key={pos} title='anil nnn' description='testimg data is passing or not' />     // imported a dotjs file calling the component varible
    //  in above line we are calling component blog card  and passing hard code data to test 


    <BlogCard key={pos} title={item.title} description={item.description}  id = {item.id}/> 
    )
  }  )

  return (

    <div className="App">
     {/* calling a varible which have list iterating  function  */}
    {blogcard}
         
    </div>
    
  );
}

export default App;
