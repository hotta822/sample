import {EventListener} from "./EventListener"
import {Status,Task,statusMap} from "./Task"
import {TaskCollection} from "./TaskCollection"
import {TaskRenderer} from "./TaskRenderer"

class Application {
    private readonly eventListener = new EventListener()
    private readonly taskCollection = new TaskCollection()
    private readonly taskRenderer = new TaskRenderer(
        document.getElementById("todoList") as HTMLElement, 
        document.getElementById("doingList") as HTMLElement,
        document.getElementById("doneList") as HTMLElement  
    )

    start(){
        const taskItems = this.taskRenderer.renderAll(this.taskCollection)
        const createForm = document.getElementById("createForm") as HTMLElement //タスクを作成するためにHTMLのidがcreateFormの要素を取得する
        const deleteAllDoneTaskButton = document.getElementById("deleteAllDoneTask") as HTMLElement

        taskItems.forEach(({task,deleteButtonEl})=>{
            this.eventListener.add(task.id,"click",deleteButtonEl,
                                    ()=>this.handleClickDeleteTask(task))
        })

        this.eventListener.add("submit-handler","submit",createForm,this.handleSubmit) //id名,フォームを送信するイベント,要素の指定,行う処理
        this.eventListener.add("click-handler","click",deleteAllDoneTaskButton,this.handleClickDeleteAllDoneTasks)

        this.taskRenderer.subscribeDragAndDrop(this.handleDropAndDrop)
    }
    
    private handleSubmit = (e:Event) =>{
        e.preventDefault() //submitのデフォルトに設定されているform送信先が指定されていない場合、現在のURLに対してフォームの送信を行う処理を防ぐ(prevent)ようにする
        
        const titleInput = document.getElementById("title") as HTMLInputElement

        if(!titleInput.value) return
        
        const task = new Task({title:titleInput.value})
        this.taskCollection.add(task)
        
        const {deleteButtonEl} = this.taskRenderer.append(task)

        this.eventListener.add(
            task.id,
            "click",
            deleteButtonEl,
            ()=> this.handleClickDeleteTask(task),
        )

        titleInput.value = ""
    }

    private executeDeleteTask = (task:Task) =>{
        this.eventListener.remove(task.id)
        this.taskCollection.delete(task)
        this.taskRenderer.remove(task)
    }

    private handleClickDeleteTask = (task:Task) => {
        if (!window.confirm(`「${task.title}」を削除してよろしいですか？`)) return
        
        this.executeDeleteTask(task)
    }

    private handleDropAndDrop = (el:Element,sibling:Element|null,newStatus:Status)=>{
        const taskId = this.taskRenderer.getId(el)

        if(!taskId)return
        
        const task = this.taskCollection.find(taskId)

        if(!task) return
        task.update({status:newStatus})
        this.taskCollection.update(task)

        console.log(sibling)
    }

    

    private  handleClickDeleteAllDoneTasks= () =>{
        if(!window.confirm("DONEのタスクを一括削除してよろしいですか？")) return

        const doneTasks = this.taskCollection.filter(statusMap.done)

        doneTasks.forEach((task)=>this.executeDeleteTask(task))
    }

   
}

window.addEventListener("load",()=>{
    const app = new Application()
    app.start()
})