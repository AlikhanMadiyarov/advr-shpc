import React, { useState } from 'react'

export default function Profile(props) {
  const[ua,setua]=useState(0)
  const[ya,setya]=useState(0)
  function qw(){
  setua(ua +1)
  }
  function as(){
    setya(ya +1)
  }
  return (
   <div class="ja">
    <h1>друзей:{ua}</h1>
    <h1>блокировок:{ya}</h1>
     <button onClick={qw}>fr</button>
     <button onClick={as}>ban</button>

    <h1>{props.name}</h1>
     <p>{props.login}</p>
   </div>
  )
}
