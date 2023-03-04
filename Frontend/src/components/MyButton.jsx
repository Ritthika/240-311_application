import React from 'react'

function MyButton() {
    function handleClick(){
        alert("YOU clicked me!");
    }
  return (
    <button onClick={handleClick}>MyButton</button>
  )
}


export default MyButton