import { useState } from "react";

const TodoInput = ({ handleAddTaskBtn }) => {
  let [addTask, setAddTask] = useState("");

  let [taskDate, setTaskDate] = useState("");

  const inputTask = (event) => {
    setAddTask(event.target.value);
  };

  const inputTaskDate = (event) => {
    if (event.target.value === "") {
      setTaskDate(toLocaleDateString());
    } else {
      setTaskDate(event.target.value);
    }
  };

  const handleOnClick = () => {
    handleAddTaskBtn(addTask, taskDate);
    setAddTask("");
    setTaskDate("");
  };

  return (
    <div className="container text-center inputcontainer">
      <div className="row">
        <input
          type="text"
          placeholder="Enter your task"
          className="col inputtask"
          value={addTask}
          onChange={inputTask}
        ></input>
        <input
          type="date"
          className="col inputdate"
          value={taskDate}
          onChange={inputTaskDate}
        ></input>

        <button
          type="button"
          className="col btn btn-success col addtaskbtn"
          onClick={handleOnClick}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
