import { constrainPoint } from '@fullcalendar/react'
import React, { Component, useState } from 'react'
import styled from 'styled-components'
// import Diary from './Diary'
// import './Textarea.css'

export const DiarySaveBtn = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 3px;
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`

function TextArea({ setMention }) {
  const formStyle = {
    textArea: {
      border: 8,
      margin: 6,
      resize: 'none',
      ariaHidden: 'true',
      width: '80%',
      height: '80%',
      backgroundColor: 'transparent',
      color: 'white',
    },
  }

  function getData(val) {
    setMention(val.target.value)
    // setCheck(false)
  }

  // const saveData = () => {
  //   const userObj = { name: mention }
  //   window.localStorage.setItem('mention', JSON.stringify(userObj))
  // }

  // const [showResult, setShowResult] = useState(false)
  // const Savediary = () => setShowResult(true)

  // const [showTextarea, setShowTextarea] = useState(true)
  // const ShowupTextarea = () => setShowTextarea(false)

  return (
    <>
      <textarea
        className='input'
        type='text'
        rows='10'
        cols='90'
        onChange={getData}
        placeholder='일기(300자 제한)'
        style={formStyle.textArea}
        maxLength='300'
      />
      {/* <DiarySaveBtn className='diary-save' onClick={Savediary}>
        저장fd
      </DiarySaveBtn>
      {showResult && <Diary />} */}

      {/* <SaveBtn /> */}
    </>
  )
}
export default TextArea


