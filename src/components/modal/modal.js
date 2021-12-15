import React, { useState } from "react";
import "./modal.scss";
import Flipcard from "./inmodal/card/card";
import Diary from "./inmodal/diary/diary";
import TextArea, { DiarySaveBtn } from "./inmodal/textarea/textarea";
// import styled from 'styled-components'

function Modal({ date, toggle, saveData }) {
  const [showMention, setShowMention] = useState(false);
  const Savediary = () => {
    setShowMention(true);
  };

  const [showTextarea, setShowTextarea] = useState(true);
  const ShowupTextarea = () => setShowTextarea(false);

  const [mention, setMention] = useState(null);

  return (
    <div className={`ModalBack ${toggle ? "" : "hidden"}`}>
      <div className="title">
        <p>{date}</p>
      </div>
      <div className="body_card">
        <Flipcard />
      </div>
      <div className="body_textarea">
        {!showMention && (
          <>
            <TextArea setMention={setMention} />
            <DiarySaveBtn className="diary-save" onClick={Savediary}>
              저장fd
            </DiarySaveBtn>
          </>
        )}

        {showMention && (
          <Diary setShowMention={setShowMention} mention={mention} />
        )}
        {/* <div className="saveBtn" onClick={SaveBtn}>저장</div> */}
        {/* <SaveBtn /> */}
      </div>
    </div>
  );
}

export default Modal;
