import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface TaskType {
  comment: string
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark} />
      </label>
      <p>{task.comment}</p>
      <button>
        <Trash size={20} color="#808080" />
      </button>
    </div>
  )
}