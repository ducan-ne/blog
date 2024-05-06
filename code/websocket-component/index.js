import {Hono} from 'hono'
import {upgradeWebSocket} from 'hono/cloudflare-workers'
import {cors} from 'hono/cors'

const app = new Hono()

app.use(cors())
app.get('/todo.js', c => {
  c.header('content-type', 'application/javascript')
  return c.body(`import React from 'https://cdn.skypack.dev/react@18';
      export function TodoList({ todo }) {
         return React.createElement('div', null, 
            React.createElement('h2', null, 'Todo Data:'),
            React.createElement('pre', null, JSON.stringify(todo, null, 2)),
         )
      }`, {
    headers: {
      'content-type': 'application/javascript',
    }
  })
})
app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        ws.send(JSON.stringify({
          todos: [{
            id: 1,
            text: 'hello',
            completed: false,
          }],
          componentUrl: 'https://websocket-component.graphvn.workers.dev/todo.js'
        }))
      },
      onClose: () => {
      },
    }
  })
)

export default app