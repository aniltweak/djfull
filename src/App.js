import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const myBlog = {
    "title" : "B L O G",
    "description" : " testing the page passing data from object acess the data like myblogdottitle or myblogdotdescription"
  }

  // 111  assigning styles to varible and assign/calling these styles to th each div
  const styles ={
    margin : '16px',
    padding : '16px',
    boxSizing : 'border-box',
    borderRadius : '5px',
    boxShadow :'0 2px 5px #ccc'

  }


  return (
    <div className="App">
      {/* adding styles */}
      <div style={
        {
          margin : '16px',
          padding : '16px',
          boxSizing : 'border-box',
          borderRadius : '5px',
          boxShadow :'0 2px 5px #ccc'

        }
      } >
     <h3> {myBlog.title} </h3>
     <p> {myBlog.description} </p>
     <h3> assigning style directly in div</h3>
     </div>
     {/* hr  means give horizontal line  */}
     <hr></hr>

     <div style={styles}>
     <h3> {myBlog.title} </h3>
     <p> {myBlog.description} </p>
     <h3>asssigning style to a varible and callign that varible and assigning to style in div</h3>
     </div>
     <hr></hr>

     <div style={styles}>
     <h3> {myBlog.title} </h3>
     <p> {myBlog.description} </p>
     </div>
     <hr></hr>



{/* how to call css style from another file like appp dot css */}
<div class="pageborder">
    <h3> {myBlog.title} </h3>
     <p> {myBlog.description} </p>
     <h3> created a class for div and in app dot css file we are creating a style how to border particular class</h3>
</div>



    </div>
    
  );
}

export default App;
