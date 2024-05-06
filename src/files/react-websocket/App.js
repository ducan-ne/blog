import {createElement, lazy, useEffect, useState} from 'react'

const TodoRemote = lazy(async() => {
  return new Promise(resolve => {
    const socket = new WebSocket('wss://websocket-component.graphvn.workers.dev/ws')
    socket.addEventListener("open", (event) => {
      socket.send('hello')
    })
    socket.addEventListener('message', async(event) => {
      const {todos, componentUrl} = JSON.parse(event.data)
      console.log(todos)
      // workaround for dynamic import
      const {TodoList} = await new Function(`return import('${componentUrl}')`)()
      // the component
      resolve(Promise.resolve({
        default: () => todos.map(todo => {
          return createElement(TodoList, {
            todo,
            key: todo.id,
          })
        })
      }))
    })
  })
})

export default function App() {
  return (
    <div style={{height: '200px'}}>
      <TodoRemote />
    </div>
  )
}
