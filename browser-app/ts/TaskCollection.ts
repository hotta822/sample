import {Status,Task,TaskObject} from "./Task"

    const STORAGE_KEY = 'TASKS'

export class TaskCollection{
    private readonly storage
    private tasks

    constructor(){
        this.storage = localStorage
        this.tasks = this.getStoredTasks()
    }

    add(task:Task){
        this.tasks.push(task) //importしてきたTaskで作成したtaskをtasksの配列に入れる
        this.updateStorage()
    }
    
    delete(task:Task){
        this.tasks = this.tasks.filter(({id}) => id !== task.id) //filter(){}条件に当てはまる要素だけで配列を作る
        this.updateStorage()
    }

    find(id:string){
        return this.tasks.find((task) => task.id === id)

    }

    update(task:Task){
        this.tasks = this.tasks.map((item) => {
            if(item.id === task.id) return task
            return item
        })
    }

    filter(filterStatus:Status){
        return this.tasks.filter(({status})=> status === filterStatus)
    }

    private updateStorage(){
        this.storage.setItem(STORAGE_KEY,JSON.stringify(this.tasks))
    }

    private getStoredTasks(){
        const jsonString = this.storage.getItem(STORAGE_KEY)
        
        if(!jsonString) return[]

        try{
            const storedTasks = JSON.parse(jsonString)

            assertIsTaskObjects(storedTasks)
    
            const tasks = storedTasks.map((task)=>new Task(task))

            return tasks
        }catch{
            this.storage.removeItem(STORAGE_KEY)
            return []
        }
    }

    //タスクの位置を動かしたときに配列の順番を入れ替えることで対応させる
    //taskIndexでtaskの添え字を取得、targetIndexで移動後の添え字を取得
    moveAboveTarget(task:Task,target:Task){
        const taskIndex = this.tasks.indexOf(task)
        const targetIndex = this.tasks.indexOf(target)
        
        //タスクを下に移動させたい時、taskが消える分配列が一つずれるため targetIndexに-1をする
        this.changeOrder(task,taskIndex,taskIndex < targetIndex ? targetIndex - 1 :targetIndex)
    }

    //
    moveToLast(task:Task){
        //リストを移動させる場合は元のリストにあったtaskを削除して、移動先のリストにtaskを追加する
        const taskIndex = this.tasks.indexOf(task)

        this.changeOrder(task, taskIndex,this.tasks.length)
    }

    private changeOrder(task:Task,taskIndex:number,targetIndex:number){
        this.tasks.splice(taskIndex,1)  //taskを消す
        this.tasks.splice(targetIndex,0,task)   //移動先にtaskを挿入する
        this.updateStorage() //localStorageの更新
    }
}

    
    function assertIsTaskObjects(value:any):asserts value is TaskObject[]{
        //配列ではない または 型情報が間違っている とエラー
        if(!Array.isArray(value) || !value.every((item) => Task.validate(item))){
            throw new Error("引数「value」はTaskObject[]型と一致しません。")
        }
    }

    /*
    assertIsTaskObjectsでやりたいこと
    ユーザーがlocalStorageを変更した場合、正しくない状態で表示されてしまう場合がある。
    しかし、storedTasksがany型の配列として宣言されているため、変更されてもそのまま動作してしまう
    それを防ぐため、assertsを使うことで予めstoredTasksの型を定義することが目標
    assertIsTaskObjectsではlocalStorageから受けとったvalueをTaskObject型と定義した上で受け取った
    受け取ったvalueが正しい値であることを確認している
     */