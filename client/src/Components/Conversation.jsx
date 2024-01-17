import React from 'react'

function Conversation({props}) {
  return (
    <div className='conversation-container'>
        <p className='cn-icon'>{props.name[0]}</p>
        <p className='cn-name'>{props.name}</p>
        <p className='cn-lastMsg'>{props.lastMsg}</p>
        <p className='cn-time'>{props.time}</p>
    </div>
  )
}

export default Conversation