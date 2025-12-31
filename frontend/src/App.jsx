import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [diff, setDiff] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  

  const submit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ diff, language: "JavaScript" }),
      });

      const data = await response.json();
      setReview(data.review);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting diff:', error);
    }
  }


  return (
      <div style ={{padding: "20px"}}>
        <h1>AI Code Reviewer</h1>

        <textarea
          rows="12"
          placeholder="Paste your PR diff here..."
          value={diff}
          onChange={(e) => setDiff(e.target.value)}
        ></textarea>

        <br />

        <button onClick={submit} >{loading ? "Reviewing" : "Review Code"}</button>

        <pre>{review}</pre>
      </div>
  );
}

export default App
