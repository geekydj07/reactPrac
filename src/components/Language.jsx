import React from 'react'

const Language = () => {
    let lang=["java", "javascript", "python", "c++", "kotlin"]
  return (
    <div><h1>Best Programming Languages</h1>
    <ul>{lang.map((item,index)=>(
    <li key={index}>{item}</li>))}

    </ul>
    </div>
  )
}

export default Language