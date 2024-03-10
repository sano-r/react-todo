import { Container } from "@mui/material";
import { useState } from "react";
import { InputArea } from "./components/InputArea";
import { UncompletedTodo } from "./components/UncompletedTodo";
import { CompletedTodo } from "./components/CompletedTodo";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [unCompletedTodos, setUnCompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const onChangeTodoText = (event) => {
    return setInputTodo(event.target.value);
  };

  const onClickAdd = () => {
    if (inputTodo === "") {
      return;
    }
    const newTodos = [...unCompletedTodos, inputTodo];
    setUnCompletedTodos(newTodos);
    setInputTodo("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...unCompletedTodos];
    newTodos.splice(index, 1);
    setUnCompletedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // unCompletedTodosをコピーしたのがnewUnCompletedtodos.
    // 新完了TODOに追加するのは旧未完了TODOの配列からの要素。
    const newUnCompletedTodos = [...unCompletedTodos];
    newUnCompletedTodos.splice(index, 1);
    setUnCompletedTodos(newUnCompletedTodos);
    const newCompletedTodos = [...completedTodos, unCompletedTodos[index]];
    //                                            ========================
    setCompletedTodos(newCompletedTodos);
  };

  const onClickBack = (index) => {
    const newUnCompletedTodos = [...unCompletedTodos, completedTodos[index]];
    setUnCompletedTodos(newUnCompletedTodos);

    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  };
  const isMaxUncompletedTodo = unCompletedTodos.length >= 5;

  return (
    <>
      <Container style={{ padding: "10px" }}>
        <InputArea
          inputTodo={inputTodo}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={isMaxUncompletedTodo}
        />
        {isMaxUncompletedTodo && (
          <p style={{ color: "#DA003D" }}>
            ※登録できるのは5個までです。TODOを消化してください。
          </p>
        )}

        <UncompletedTodo
          todos={unCompletedTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompletedTodo todos={completedTodos} onClick={onClickBack} />
      </Container>
    </>
  );
}

export default App;
