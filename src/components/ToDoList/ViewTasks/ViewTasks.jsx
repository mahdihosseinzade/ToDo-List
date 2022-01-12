import React from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask/SingleTask";

import './ViewTasks.scss';

const ViewTasks=()=>{

    const tasks = useSelector(state=>state.tasks);
    return (
      <div className="ViewTasks d-flex flex-column p-2 mt-4">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    );
}

export default ViewTasks;