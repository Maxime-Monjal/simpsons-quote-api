import React from 'react';
import './QuoteCard.css';




function QuoteCard ({quote}) {
    return (
      <figure className="QuoteCard">
        <figcaption>
          <img src={quote[0].image} alt={quote[0].character} />
          <blockquote> {quote[0].quote}
          </blockquote>
          <p>
            <cite>{quote[0].character}</cite>
            </p>
        </figcaption>
      </figure>
    );

  }




export default QuoteCard;
