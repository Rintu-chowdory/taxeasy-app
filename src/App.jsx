import React from 'react';
import './App.css';

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
            <li>Project 1: CI/CD Pipeline</li>
            <li>Project 2: Infrastructure as Code</li>
            <li>Project 3: Monitoring and Logging</li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2026 Rintu Chowdory</p>
      </footer>
    </div>
  );
}

export default App;