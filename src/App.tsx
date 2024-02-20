import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState([])

  function handleCreateNewTask(newTaskText) {
    const newTask = {
      id: tasks.length + 1,
      comment: newTaskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function handleCompletingTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed}
      }

      return task
    })
    setTasks(updatedTasks)
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask createNewTask={handleCreateNewTask} />
        <Tasks
          tasks={tasks}
          handleCompletingTask={handleCompletingTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  )
}