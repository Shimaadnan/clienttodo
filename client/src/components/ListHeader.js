import React, { useState } from 'react'
import {useCookies} from 'react-cookie'
import Modal from './Modal'

export default function ListHeader({listName,getData}) {
  const[showModal,setShowModal]=useState(false)
  const [cookies,setCookie,removeCookie]=useCookies(null)
  const signOut=()=>{
    console.log('signout');
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  }
  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create' onClick={()=>setShowModal(true)}>Add New</button>
        <button className='sign-out' onClick={signOut}>Sign Out</button>

      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal } getData={getData}/>}
    </div>
  )
}
