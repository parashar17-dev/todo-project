import React, { useState } from 'react';
import '../CSSFiles/AddCard.css';
import { X } from 'react-feather';
export default function AddCard(props) {
   const [showEdit, setShowEdit] = useState(false);
   const [inputValue, setInputValue] = useState(props.default || '');
   return (
      <div className="addCard">
         {showEdit ? (
            <form
               className={`addCard_edit ${props.editClass || ''}`}
               onSubmit={(event) => {
                  event.preventDefault();
                  if (props.onSubmit) {
                     props.onSubmit(inputValue);
                  }
                  setShowEdit(false);
               }}
            >
               <input
                  className="addCard_edit_input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                     setInputValue(e.target.value);
                  }}
                  placeholder={props.placeholder || 'Enter Item'}
               />
               <div className="addCard_editFooter">
                  <button type="submit">{props.buttonText || 'Add'}</button>
                  <X
                     onClick={() => {
                        setShowEdit(false);
                     }}
                  />
               </div>
            </form>
         ) : (
            <p
               className={`addCard_display ${props.displayClass || ''}`}
               onClick={() => setShowEdit(true)}
            >
               {props.text || 'Add Card...'}
            </p>
         )}
      </div>
   );
}
