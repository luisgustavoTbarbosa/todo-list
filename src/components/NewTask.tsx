import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'
import { PlusCircle } from "@phosphor-icons/react"

interface NewTaskProps {
  createNewTask: (taskText: string) => void
}

export function NewTask({ createNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    createNewTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskTextChange}
      />

      <button type="submit">
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  )
}