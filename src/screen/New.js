import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "../styles/home.css";
import Task from "../component/Task.js";
import TodoStore from "../stores/TodoStore";

import { observer } from "mobx-react";
function Home() {
  // const [dataTask, setDataTask] = useState(DATA);
  const updateData = (value, index) => {
    // const task = {
    //     ...dataTask[index],
    //     content : value,
    // }
    // const dataTemp = [...dataTask];
    // dataTemp.splice(index, 1, task);
    // setDataTask(dataTemp);
  };

  const renderTask = () => {
    return TodoStore.arrTaskList.map((item, index) => {
      return (
        <Task
          // title={item.title}
          // content={item.content}
          // status={item.status}
          {...item}
          //  status={'cancel'}
          // isLastItem={index === dataTask.length - 1}
          isFirstItem={index === 0}
          updateData={updateData}
          index={index}
          key={index}
        />
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new">
          <button className='btnNew-1'
            onClick={() =>
              TodoStore.addNewTask({
                title: "Task nay la task moi",
                content: "content",
                status: "pending",
              })
            }
          >
            Add neww task
          </button>
          <button onClick={() => TodoStore.deleteTask()} className='btnNew-2'>Delete</button>
          <ul>{renderTask()}</ul>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default observer(Home);
