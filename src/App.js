import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const myBlog = {
    "title" : "B L O G",
    "description" : " testing the page passing data from object acess the data like myblogdottitle or myblogdotdescription"
  }


  return (
    <div className="App">
     <h3> {myBlog.title} </h3>
     <p> {myBlog.description} </p>
    </div>
  );
}

export default App;
