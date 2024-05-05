import React from 'react'
import Profile from './profile'

export default function Profiles(props) {

let Profile_elements = props.data.map(p=>{
    return  <Profile name={p.name} login={p.login} />
})
  return (
    <div >
      {Profile_elements}
    </div>
  )
}
