import React from 'react'

const Input = ({recievedLabel , sentInput }) => {
  return (
    <>
        <label htmlFor={recievedLabel}>{recievedLabel}</label>
        <input name={recievedLabel}  type="number" onChange={sentInput}/>
    </>
  )
}

export default Input

//four input boxes
// we need input from all four
// then we need to take that input from all the four boxes 
// give it to the "investment.js" 
//take the inputs from that and show them in a tabular form 
//run a for of loop on the data -- not sure yet but something like that

//well this is an attempt to build a generic channel not a study with me channel -> vievership accordingly

