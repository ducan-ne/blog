import { serve } from "https://deno.land/std@0.150.0/http/server.ts"
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts"

const io = new Server()

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`)

  socket.on("loadTodoModule", (cb) => {
    cb({
      todos: [{
        id: 1,
        text: 'hello',
        completed: false
      }],
      componentUrl: ''
    })
  })

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`)
  })
})

const handler = io.handler()
await serve(async (req, connInfo) => {
  if (req.url === '/todo.js') {
    return new Response(`
      import React from 'https://cdn.skypack.dev/react@18';
      export function TodoList({ todo }) {
         return React.createElement('div', null, 
            React.createElement('h2', null, 'Todo Data:'),
            React.createElement('pre', null, JSON.stringify(todo, null, 2)),
         )
      }
    `)
  }
  return handler(req, connInfo)
}, {
  port: 3000,
})
