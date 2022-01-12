import React from "react";
import AddTask from "./AddTask/AddTask";
import ViewTasks from "./ViewTasks/ViewTasks";

import './ToDoList.scss';


const ToDoList =()=>{

    return (
      <section className="ToDoList">
        <AddTask />
        <ViewTasks />
      </section>
    );
}

export default ToDoList;