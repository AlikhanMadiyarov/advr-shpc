import React from 'react'
import Friend from './Friend'

export default function Friends(props) { 

  let Friend_Elements = props.data.map(p=>{
    return  <Friend name={p.name} description={p.description} />
    })
  return (
    <div >
      {Friend_Elements}
    </div>
     )
    }
