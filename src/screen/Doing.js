import React, { useState }  from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Task from '../component/Task.js';
import "../styles/home.css";
import TodoStore from "../stores/TodoStore";
export default function Doing() {
    function deleteData() {
        // const [dataTask, setDataTask] = useState(DATA);
        const task = (value, index) => {
          // const task = {
          //     ...dataTask[index],
          //     content : value,
          // }
          // const dataTemp = [...dataTask];
          // dataTemp.splice(index, 1, task);
          // setDataTask(dataTemp);
        };


    const deleteData = (value, index) => {
        
    }

    const renderTask = () => {
        return TodoStore.arrTaskList.map((item, index) => {
        });
      };

    return(
        <BrowserRouter>
        <switch>
          <Route path="/Doing">
          <button
            onClick={() =>
              TodoStore.deleteData({
                title: "Task nay la task moi",
                content: "content",
                status: "pending",
              })
            }
          >
            Delete
          </button>
          <button type="button" class="btn btn-danger">Delete</button>
          <ul>{renderTask()}</ul>
        </Route>
        </switch>
        </BrowserRouter>
    )
        
}}
