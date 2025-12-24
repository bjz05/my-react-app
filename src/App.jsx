import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import the database tools
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase"; 

function App() {
  const [count, setCount] = useState(0)

  // Load the saved number when app starts
  useEffect(() => {
    const loadCount = async () => {
      console.log("Loading data from cloud...");
      const docRef = doc(db, "counts", "main"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Found saved number:", docSnap.data().value);
        setCount(docSnap.data().value);
      } else {
        console.log("No saved number found yet.");
      }
    }
    loadCount();
  }, []) 

  // Save the number when button is clicked
  const handleIncrement = async () => {
    const newCount = count + 1;
    setCount(newCount); 
    
    try {
      console.log("Attempting to save...");
      await setDoc(doc(db, "counts", "main"), {
        value: newCount
      });
      console.log("Save SUCCESS!"); 
    } catch (error) {
      console.error("FIREBASE ERROR:", error);
      alert("Database Error: " + error.message);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Benny's App 🚀 (Auto-Deployed) </h1>
      <div className="card">
        <button onClick={handleIncrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App