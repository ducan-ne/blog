import {lazy, useEffect, useState} from 'react'
import {io} from './socket.io.js'

const TodoRemote = lazy(() => {
  return new Promise(resolve => {
    const socket = io('https://hard-pig-89-3g9tt4qmhcvb.deno.dev')
    socket.on('connect', () => {
      socket.emit('loadTodoModule', info => {
        console.log(info)
      })
    })
    // the component
    resolve(() => null)
  })
})

export default function App() {
  return (
    <div style={{height: '200px'}}>
      <TodoRemote/>
    </div>
  )
}
