import { EmptyTask } from './EmptyTask'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <main className={styles.tasksBox}>
      <header>
        <p className={styles.createdTasksMarker}>Tarefas criadas <span className={styles.count}>0</span></p>
        <p className={styles.completedTasksMarker}>Concluídas <span className={styles.count}>0</span></p>
      </header>
      <div>
        <EmptyTask />
      </div>
    </main>
  )
}