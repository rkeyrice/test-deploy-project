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

  const getTributeData = async () => {
    const response = await fetch('https://tribute.tg/api/v1/subscriptions', {
      method: 'GET',
      headers: {
        "Api-Key": "f9c9d6cc-73d4-49d5-b472-a46c9381",
        "Accept": "*/*"
      },
    });
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    testGetRequest()
    getTributeData()
  }, [])

  return (
    <>
      <div>
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
    </>
  )
}

export default App
