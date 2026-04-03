import { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/')
      .then(r => r.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Could not reach backend'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '10vh' }}>
      <h1>🚀 DevOps Portfolio CI/CD</h1>
      <p>{message}</p>
    </div>
  )
}
