import { EmptyTask } from './EmptyTask'
import { Task } from './Task'
import styles from './Tasks.module.css'

interface Task {
  id: string;
  comment: string;
  completed: boolean;
}

interface TasksProps {
  tasks: Task[];
  handleCompletingTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void
}

export function Tasks({ tasks, handleCompletingTask, handleDeleteTask }: TasksProps) {
  return (
    <main className={styles.tasksBox}>
      <header>
        <p className={styles.createdTasksMarker}>Tarefas criadas <span className={styles.count}>
          {tasks.length}
        </span></p>
        <p className={styles.completedTasksMarker}>Concluídas <span className={styles.count}>
          {tasks.filter(task => task.completed).length} de {tasks.length}
        </span></p>
      </header> 
      <div>
        {
          tasks.length > 0 ? tasks.map(task => {
            return (
              <Task
                key={task.id}
                task={task}
                handleCompletingTask={handleCompletingTask}
                handleDeleteTask={handleDeleteTask}
              />
            )
          }) : <EmptyTask />
        }
      </div>
    </main>
  )
}