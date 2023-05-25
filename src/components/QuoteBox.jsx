import React from 'react'
import "./style/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className='quoteBox'>
        <button className='quoteBox_btn' onClick={handleChangeQuote}> <strong>Try yur luck</strong></button>

        <article className='quoteBox_phrase'>
          <p className='random_phrases'>{phrase}</p>
        </article>

    </section>
  )
}

export default QuoteBox