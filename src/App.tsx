import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<null | { id: number, name: string, value: number }[]>()

  const testGetRequest = async () => {
    const res = await fetch('/api/test', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    setItems(data)
  };


  useEffect(() => {
    testGetRequest()
  }, [])

  return (
    <>
      <div>
        <h1> {import.meta.env.VITE_LOL}</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ul>
        {items?.map(item => (
          <li>ID: {item.id}, Name: {item.name}</li>
        ))}
      </ul>
      <div>

      </div>
    </>
  )
}

export default App
