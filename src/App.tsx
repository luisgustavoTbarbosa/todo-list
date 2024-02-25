import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'
import { useState } from 'react'
import uuid from 'react-uuid'

export function App() {
  const [tasks, setTasks] = useState<{id: string; comment: string; completed: boolean}[]>([])

  function handleCreateNewTask(newTaskText: string) {
    const newTask = {
      id: uuid(),
      comment: newTaskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function handleCompletingTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed}
      }

      return task
    })
    setTasks(updatedTasks)
  }

  function handleDeleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask handleCreateNewTask={handleCreateNewTask} />
        <Tasks
          tasks={tasks}
          handleCompletingTask={handleCompletingTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  )
}