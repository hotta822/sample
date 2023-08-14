import { v4 as uuid } from 'uuid'

//列挙型 Javascriptと互換性がない型であるため使用は極力避けたほうがよい
enum Status{ 
    Todo = "TODO",
    Doing = "DOING",
    Done = "DONE"
}

export class Task{
    readonly id
    title
    status

    constructor(properties:{ title:string}){
        this.id = uuid()
        this.title = properties.title
        this.status = Status.Todo
    }
}