export interface TaskType {
  comment: string
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  return (
    <div>{task.comment}</div>
  )
}