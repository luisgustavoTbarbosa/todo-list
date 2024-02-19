import { EmptyTask } from './EmptyTask'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks({ tasks }) {
  return (
    <main className={styles.tasksBox}>
      <header>
        <p className={styles.createdTasksMarker}>Tarefas criadas <span className={styles.count}>0</span></p>
        <p className={styles.completedTasksMarker}>Concluídas <span className={styles.count}>0</span></p>
      </header>
      <div>
        {
          tasks.length > 0 ? tasks.map(task => {
            return (
              <Task task={task} />
            )
          }) : <EmptyTask />
        }
      </div>
    </main>
  )
}