import styles from './NewTask.module.css'
import { PlusCircle } from "@phosphor-icons/react"

export function NewTask() {
  return (
    <form className={styles.newTaskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  )
}