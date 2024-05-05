import React, { useState } from 'react'

export default function Post(props) {
  const[ua,setua]=useState(0)
  const[ya,setya]=useState(0)
  function qw(){
  setua(ua +1)
  }
  function as(){
    setya(ya +1)
  }
 
  return (
    <div className="ja">
    <h1>подписок:{ua}</h1>
    <h1>отписок:{ya}</h1>
     <button onClick={qw}className="butt">подписка</button>
     <button onClick={as} className="butt">отписка</button>
     <button className='delete-btn' onClick={()=> props.deletePost(props.id)}>удалить пост!</button>


    <h1>{props.postTitle}</h1>
    <p>{props.text}</p>
    </div>
  )
}
