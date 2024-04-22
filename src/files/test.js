import {Test2} from './t2'
import {useEffect, useState} from 'react'

console.log(Test2())

export default function App() {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div style={{height: '200px'}}>
      Timer: {timer}
    </div>
  )
}
