import React from 'react'

function Title({text,classes}) {
  return (
    <>
        <h1 className = {!classes? "Title text-center": classes && "title"}>
            {!text? "Title":text}
        </h1>
        
    </>
  )
}

export default Title