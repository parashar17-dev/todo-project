import React from 'react';
import '../CSSFiles/Labels.css';
import { X } from 'react-feather';
export default function Labels(props) {
   return (
      <div className="labels " style={{ backgroundColor: props.color }}>
         {props.text}
         {props.close && (
            <X onClick={() => (props.onClose ? props.onClose() : '')} />
         )}
      </div>
   );
}
