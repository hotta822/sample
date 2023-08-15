import {Task} from "./Task"

export class TaskCollection{
    private tasks : Task[] = []

    add(task:Task){
        this.tasks.push(task) //importしてきたTaskで作成したtaskをtasksの配列に入れる

    }
    
    delete(task:Task){
        this.tasks = this.tasks.filter(({id}) => id !== task.id) //filter(){}条件に当てはまる要素だけで配列を作る
    }
}