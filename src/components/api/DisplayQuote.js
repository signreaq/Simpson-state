import React from "react";


const DisplayQuote = ({ quote }) =>{
    return(
           <div>
               <p>{ quote.quote }</p>
               <p>{quote.character}</p>
               <img src={quote.image} alt={quote.character} />
           </div>
        
        )
    }

export default DisplayQuote;
