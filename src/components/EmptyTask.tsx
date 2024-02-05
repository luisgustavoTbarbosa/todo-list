import clipBoard from '../assets/clipboard.png'
import styles from './EmptyTask.module.css'

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskContent}>
      <img src={clipBoard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}