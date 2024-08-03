import React from 'react'
import avatar from '../../assets/avatar.svg'


export default function Home() {
  return (
    <div>
      <div className="avatar w-[20%] mx-auto">
        <img src={avatar} />
      </div>
        <h1>start Framework</h1>
        <p className='py-[30px]'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
