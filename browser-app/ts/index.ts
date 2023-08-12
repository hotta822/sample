import {EventListener} from "./EventListener"

class Application {
    private readonly eventListener = new EventListener

    start(){
        const createForm = document.getElementById("createForm") as HTMLElement //タスクを作成するためにHTMLのidがcreateFormの要素を取得する
        
        this.eventListener.add("submit-handler","submit",createForm,this.handleSubmit) //id名,フォームを送信するイベント,要素の指定,行う処理
    }
    
    private handleSubmit = (e:Event) =>{
        e.preventDefault() //submitのデフォルトに設定されているform送信先が指定されていない場合、現在のURLに対してフォームの送信を行う処理を防ぐ(prevent)ようにする
        console.log("submitted")
    }
}

window.addEventListener("load",()=>{
    const app = new Application()
    app.start()
})