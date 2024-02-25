import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface Task {
  id: string;
  comment: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
  handleCompletingTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void
}

export function Task({ task, handleCompletingTask, handleDeleteTask }: TaskProps) {
  const checkedClass = task.completed ? styles.checked : ''

  function completeTask() {
    handleCompletingTask(task.id)
  }

  function deleteTask() {
    handleDeleteTask(task.id)
  }

  return (
    <div className={`${styles.task} ${checkedClass}`}>
      <label className={styles.checkboxContainer}>
        <input onClick={completeTask} type="checkbox"/>
        <span className={styles.checkmark} />
      </label>
      <p>{task.comment}</p>
      <button onClick={deleteTask}>
        <Trash size={20} color="#808080" />
      </button>
    </div>
  )
}