import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface Task {
  id: number;
  comment: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
  handleCompletingTask: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void
}

export function Task({ task, handleCompletingTask, handleDeleteTask }: TaskProps) {
  function completeTask() {
    handleCompletingTask(task.id)
  }

  function deleteTask() {
    handleDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
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