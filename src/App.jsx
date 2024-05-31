import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [articles, setArticles] = useState("")

  function nextPage() {
    setCount(count + 1)
  }

  function prevPage() {
    setCount(count - 1)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/posts/' + count).then((res => res.json())).then(data => setArticles(data))
  }, [count])

  return (
    <>
      <main>
        <article>
          <header>
            <p>{count}</p>
          </header>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
          <h3>{articles.title}</h3>
          <p>{articles.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
