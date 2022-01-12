import React ,{useEffect, useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { deleteTask, editTask , checkedTask } from "../../../../store/Tasks/TasksActions";

import "./SingleTask.scss";
import { useDispatch } from "react-redux";

const SingleTask = ({ task }) => {

  const [textValue,setTextValue] = useState(task.text);
  const dispatch = useDispatch();

  useEffect(()=>{
    setTextValue(task.text);
  },[task])
  
  const handelChangeText = (e) => {
    setTextValue(e.target.value);
  };

  const handelClickEdit =()=>{
    dispatch(editTask({
      id:task.id,
      text:textValue
    }));
    
  }

  const handelDelete =()=>{
    dispatch(deleteTask(task.id));
  }
  
  const handelChangeChecked = () => {
    dispatch(
      checkedTask({
        id: task.id,
        done: !task.done,
      })
    );
  };
  

  return (
    <Card className="SingleTask flex-row align-items-center ">
      <Card.Img
        className="SingleTask-img"
        id="imageTask"
        src={task.image}
        alt={task.text}
      />
      <Card.Body className="SingleTask-txt">
        {/* <Card.Text>{task.text}</Card.Text> */}

        <input type="text" value={textValue} onChange={handelChangeText} />
      </Card.Body>
      <FontAwesomeIcon icon={faTrash} className="SingleTask-delete" onClick={handelDelete} />
      <Form className="SingleTask-check">
        <FormCheckInput id="check-done" onChange={handelChangeChecked} checked={task.done} />
      </Form>
      <Button
        className="SingleTask-btn"
        onClick={() => handelClickEdit(task.id)}
      >
        edit
      </Button>
    </Card>
  );
};

export default SingleTask;
