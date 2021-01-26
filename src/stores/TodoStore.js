import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

class TodoStore {
    arrTaskList = [
        {
            title: 'title 1',
            content: 'hoc react',
            status: 'done',
        },
        {
            title: 'title 2',
            content: 'lam bai  react lay diem',
            status: 'cancel',
        },
        {
            title: 'title 3',
            content: 'di tre nop phat',
            status: 'pending',
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }

    addNewTask(task) {
        this.arrTaskList.push(task);
    }
    deleteTask(task) {
        this.arrTaskList.pop(this.arrTaskList.indexOf(task),1);
    }
}

const todoStore = new TodoStore()

export default todoStore;