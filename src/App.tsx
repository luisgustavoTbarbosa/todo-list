import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <Tasks />
      </div>
    </>
  )
}