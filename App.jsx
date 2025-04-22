import Container from "./Components/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import DisplayList from "./Components/DisplayList";
import { useState } from "react";
import NoTask from "./Components/NoTask";

const App = () => {
  let [addTodo, setAddTodo] = useState([]);

  const handleAddTaskBtn = (addedtask, addedtaskdate) => {
    console.log(addedtask);
    console.log(addedtaskdate);
    let newtodo = [...addTodo, { name: addedtask, dueDate: addedtaskdate }];

    setAddTodo(newtodo);
  };

  const handleDelbtnclick = (itemName) => {
    const newtodo = addTodo.filter((item) => item.name !== itemName);
    setAddTodo(newtodo);
  };

  return (
    <Container>
      <h1 className="title">Todo App</h1>

      <TodoInput handleAddTaskBtn={handleAddTaskBtn} />

      {addTodo.length === 0 && <NoTask />}
      <DisplayList todoItems={addTodo} handleOnClick={handleDelbtnclick} />
    </Container>
  );
};

export default App;
