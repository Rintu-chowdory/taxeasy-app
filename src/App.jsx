<<<<<<< HEAD
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My DevOps Portfolio</h1>
        <p>
          Explore my projects and expertise in DevOps practices.
        </p>
      </header>
      <main>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: CI/CD Pipeline - Automated deployment workflows with GitHub Actions</li>
            <li>Project 2: Infrastructure as Code - Terraform and CloudFormation templates</li>
            <li>Project 3: Monitoring and Logging - ELK stack and Prometheus setup</li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2026 Rintu Chowdory - DevOps Engineer</p>
      </footer>
    </div>
  );
}

export default App;
=======
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
>>>>>>> devops-portfolio
