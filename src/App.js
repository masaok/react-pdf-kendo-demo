import React, { useState } from 'react'
import './App.css'

import { PDFExport } from '@progress/kendo-react-pdf'

const App = () => {
  const [resume, setResume] = useState(null)

  // Add this method to the React
  const exportPDF = () => {
    resume.save()
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={exportPDF}>download</button>
        <PDFExport paperSize={'Letter'} fileName="_____.pdf" title="" subject="" keywords="" ref={r => setResume(r)}>
          <div
            style={{
              color: 'black',
              height: 792,
              width: 612,
              padding: 'none',
              backgroundColor: 'white',
              boxShadow: '5px 5px 5px black',
              margin: 'auto',
              overflowX: 'hidden',
              overflowY: 'hidden',
            }}
          >
            content
          </div>
        </PDFExport>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
