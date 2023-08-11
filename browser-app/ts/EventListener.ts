//ハンドラ 特定の処理が行われたときに受動的に起動するプログラム 
//API addEventListener,removeEventListener
//イベントに登録したハンドラを削除するためにはaddEventListenerで登録した "イベント名","要素","ハンドラ"をコード内で保持する必要がある
//コードが複雑になるのを防ぐためにEventListener.tsに処理を記述することで後々ハンドラを実装しやすいようにするのが目的
//

type Listeners = {
    [id: string]:{
        event: string
        element:HTMLElement
        handler:(e:Event)=>void
    }
}

export class EventListener{
    private readonly listeners : Listeners={}

    add(listenerId:string,event:string,element:HTMLElement,handler:(e:Event)=>void){
        this.listeners[listenerId] = {
            event,
            element,
            handler
        }
        element.addEventListener(event,handler)
    }

    remove(listenerId:string){
        const listener = this.listeners[listenerId]
        if(!listener)return
        
        listener.element.removeEventListener(listener.event,listener.handler)
        
        delete this.listeners[listenerId]
    }
}