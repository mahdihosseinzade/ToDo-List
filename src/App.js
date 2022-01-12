import React , {useEffect, useState} from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';


function App() {

  useEffect(()=>{
    const VT = document.getElementsByClassName("ViewTasks");
    VT[0].addEventListener("scroll",()=>{
      VT[1].scrollTop = VT[0].scrollTop;
    });

    VT[1].addEventListener("scroll",()=>{
      VT[0].scrollTop = VT[1].scrollTop;
    });

    VT[0].addEventListener("mousewheel", () => {
      VT[1].scrollTop = VT[0].scrollTop;
    });

    VT[1].addEventListener("mousewheel", () => {
      VT[0].scrollTop = VT[1].scrollTop;
    })
    
  })
  
  
  

  return (
    <div className="App container pt-4">
      <header>
        <h1>To-Do List</h1>
      </header>
      <section className=' d-flex justify-content-between mt-5'>
        <ToDoList/>
        <ToDoList/>
      </section>
    </div>
  );
}

export default App;
