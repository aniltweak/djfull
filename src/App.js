import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 111111111111111111111
  const firstName = 'Anil' ;
  const lastName = 'k';
  const age = 26;
  const job = 'd e v l o p e r'
  const nn = 'bond'
  const single = 'basha manik'


  // 222222222222222222222222222222222222
// to get first name last name using function 
  // const getFullName =() =>{ return}
  const getFullName =(nn,lastName) =>{ return `${nn}  ${lastName}`}
  const getSingle =(single) => { return `${single}`}

  // with out return
  const getSsingle =(single) =>  `${single}`


  // calling detail 33333333333333333333333
  const inputPlaceHolder = "enter details "

  // input to be varible 444444444444444444444
   const inpvar =<input placeholder={inputPlaceHolder}/>


  //  creating array 5555555555555
  const mArr= [1,2,3,45,6]

  // to acess object 
  const myObj ={
    "name" : 'Maze',
    "brand" : 'honda',
    "cost " : 10 
  }



  return (
    <div className="App">
      {/* 111111111111111111111111 */}
     <h3>Full Name : {firstName} {lastName} </h3>

    <h2>name : {firstName + ' ' + nn}  </h2>
        {/*  above method is concatenation */}

     <h2> Name :  {`${firstName}  ${lastName}`} </h2>    
          {/*      above are not quotes those are back tics which are under esc button */}
          
     <p>Age : {age} yrs</p>
     <p>Job : {job}</p>


     {/* 222222222222222222 */}
     <h3>Full Name : {getFullName(nn,lastName)} </h3>

  <h1> sig : {getSingle(single)}</h1>
  <h2> test : {getSsingle(single)} </h2>
 
  {/* nnnnn */}

  <input  placeholder='enter details'/> <br/>

  {/* 33333333333 */}
  <input placeholder={inputPlaceHolder} /> <br/>


  {/* 44444444444 calling input html tag       html tag assignd to a varible*/}
  {inpvar} <br/>


  {/* 555555555555 acess array */}
  {mArr[0]}

  {/* 666666666666666   acess object */}

  <p> carName : {myObj.name} yrs</p>
  <p> carBrand : {myObj.brand} yrs</p>
    </div>
  );
}

export default App;
