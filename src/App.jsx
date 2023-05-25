import { useState } from 'react';
import "./App.css";
import dbQuotes from "./db/quote.json";
import { getRandom } from "./utils/random.js"
import QuoteBox from "./components/QuoteBox.jsx";

const bgImages = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes)) 
  
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
  }
  return (
  
    <main className={`app ${bgImage}`}>
    
    <section className='app_container'>
      <h1><strong>Fortune Cookies</strong></h1>

      <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase}/>

      <footer>
        <h3>Fuente: {quote.author}</h3>
      </footer>
      
    </section>
  
  </main>
  )
}

export default App
