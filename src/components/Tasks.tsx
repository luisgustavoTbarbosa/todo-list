import { EmptyTask } from './EmptyTask'
import { Task, TaskType } from './Task'
import styles from './Tasks.module.css'

const tasksArray: TaskType[] = [
  {
    comment: 'Comprar pão'
  },
  {
    comment: 'Lavar a louça'
  }
]

export function Tasks() {
  return (
    <main className={styles.tasksBox}>
      <header>
        <p className={styles.createdTasksMarker}>Tarefas criadas <span className={styles.count}>0</span></p>
        <p className={styles.completedTasksMarker}>Concluídas <span className={styles.count}>0</span></p>
      </header>
      <div>
        {
          tasksArray.length > 0 ? tasksArray.map(task => {
            return (
              <Task task={task} />
            )
          }) : <EmptyTask />
        }
      </div>
    </main>
  )
}