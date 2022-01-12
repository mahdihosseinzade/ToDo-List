import React ,{useState} from "react";
import { addTask } from "../../../store/Tasks/TasksActions";
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { Form, FormGroup, FormLabel, FormControl ,Button} from "react-bootstrap";

import "./AddTask.scss";


const AddTask = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [imageValue, setImageValue] = useState("");

    const handelChangeInput = (e) => {
      setInputValue(e.target.value);
    };

    const setSelectedImage = (e) => {
      const files = e.target.files;

      if (FileReader && files && files.length) {
        const fr = new FileReader();
        fr.onload = () => {
          setImageValue(fr.result);
        };
        fr.readAsDataURL(files[0]);
      }
           
    };

    const handelClick = (e) => {
        e.preventDefault();
        dispatch(addTask({
            id:uuid(),
            text:inputValue,
            image:imageValue,
            done:false,
        }));

        setImageValue('');
        setInputValue('');
        document.getElementById("form-image").value="";
    };

  return (
    <Form id="form" onSubmit={handelClick}>
      <FormGroup className="d-flex justify-content-center align-items-center w-100 mb-3">
        <FormLabel htmlFor="form-input"> Add Task </FormLabel>
        <FormControl
          type="text"
          id="form-input"
          onChange={handelChangeInput}
          value={inputValue}
          required
          placeholder="task"
        />
      </FormGroup>

      <FormGroup className="d-flex justify-content-center align-items-center w-100 mb-3">
        <FormLabel htmlFor="form-image"> Add Image </FormLabel>
        <FormControl
          type="file"
          id="form-image"
          onChange={setSelectedImage}
          required
          multiple
        />
      </FormGroup>

      <Button type="submit" id="form-button">
        Add
      </Button>
    </Form>
  );
};

export default AddTask;

