//ハンドラ 特定の処理が行われたときに受動的に起動するプログラム 
//API addEventListener,removeEventListener
//イベントに登録したハンドラを削除するためにはaddEventListenerで登録した "イベント名","要素","ハンドラ"をコード内で保持する必要がある
//コードが複雑になるのを防ぐためにEventListener.tsに処理を記述することで後々ハンドラを実装しやすいようにするのが目的
//
import {v4 as uuid } from "uuid"

type Handler<T> = T extends keyof HTMLElementEventMap
    ?(e: HTMLElementEventMap[T]) => void
    :(e:Event) => void

type Listeners = {
    [id: string]:{
        event: string
        element:HTMLElement
        handler:Handler<string>
    }
}

export class EventListener{
    private readonly listeners : Listeners={}

    //listenerIdにデフォルト値をを渡すことでオプショナルな引数に変更
    //オプショナルの引数は最後に記述する
    add<T extends string>(event:T,element:HTMLElement,handler:Handler<T>,listenerId = uuid()){
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