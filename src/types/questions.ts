export interface Question {
    title: string,
    description?: string,
    options: string[]
}

export interface Questions {
  [key: number]: Question
}
