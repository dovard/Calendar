import React, { useState } from 'react'
import './modal.scss'
// import Card from './InModal/Card'
// import TextArea, { DiarySaveBtn } from './InModal/Textarea'
// import styled from 'styled-components'

function Modal({ date, toggle, saveData }) {
  const [showMention, setShowMention] = useState(false)
  const Savediary = () => {
    setShowMention(true)
  }

  const [showTextarea, setShowTextarea] = useState(true)
  const ShowupTextarea = () => setShowTextarea(false)

  const [mention, setMention] = useState(null)

  return (
    <div className={`ModalBack ${toggle ? '' : 'hidden'}`}>
      <div className='title'>
        <p>{date}</p>
      </div>
      <div className='body_card'>
        {/* <Card /> */}
      </div>
      <div className='body_textarea'>
        {/* {!showMention && (
          <>
            <TextArea setMention={setMention} />
            <DiarySaveBtn className='diary-save' onClick={Savediary}>
              저장fd
            </DiarySaveBtn>
          </>
        )}

        {showMention && (
          <Diary setShowMention={setShowMention} mention={mention} />
        )} */}
        {/* <div className="saveBtn" onClick={SaveBtn}>저장</div> */}
        {/* <SaveBtn /> */}
      </div>
    </div>
  )
}

export default Modal


