import  React  from  'react';

const GenerateQuote = ({selectQuote}) =>{
    return(
    <div>
        <button onClick={selectQuote}>Generate Quote</button>
    </div>
    )
}


export default GenerateQuote;