import React from 'react';
import '../CSSFiles/Card.css';
import Labels from './Labels';
import { useState } from 'react';
import CardInfo from './CardInfo';
import { Clock, CheckSquare, AlignLeft } from 'react-feather';
export default function Card(props) {
   // destructuring Card props:
   const { title, tasks, labels, desc, date, image } = props.card;

   // Creating a State for Modal to hide and unhide it:
   const [showModal, setShowModal] = useState(false);
   const calPercent = () => {
      if (!props.card.tasks?.length) return 0;
      const completed = props.card.tasks?.filter(
         (item) => item.completed
      )?.length;
      return (completed / props.card.tasks?.length) * 100;
   };
   return (
      <>
         {/* To show info of a particular Card when clicked */}
         {showModal && (
            <CardInfo
               card={props.card}
               updateCard={props.updateCard}
               boardId={props.boardId}
               onClose={() => setShowModal(false)}
            />
         )}

         {/* Card Component for each Column */}
         <div
            className={`card`}
            onClick={() => setShowModal(true)}
            draggable
            onDragEnd={() => props.dragEnded(props.boardId, props.card?.id)}
            onDragEnter={() => props.dragEntered(props.boardId, props.card?.id)}
         >
            {/* Top Part of the Card containing a Image and Labels */}
            <div className="cardtop">
               {/* Card Image */}
               {image && <img className="cardimg" src={image} alt="Card img" />}

               {/* Card ProgressBar Same as CardInfo*/}
               {props.card.tasks?.length > 0 && (
                  <div className="cardInfo_box_progress-bar card-progress">
                     <div
                        className="cardInfo_box_progress"
                        style={{
                           width: calPercent() + '%',
                           backgroundColor:
                              calPercent() === 100 ? 'limegreen' : '',
                        }}
                     />
                  </div>
               )}
               {/* Mapping all the labels inside the Card to a new Labels Component*/}
               <div className="cardLabels">
                  {labels &&
                     labels.map((l, index) => {
                        return (
                           <Labels text={l.text} color={l.color} key={index} />
                        );
                     })}
               </div>
            </div>

            {/* Middle Part of the Card Containing a Title*/}
            <div className="cardtitle">{title}</div>

            {/* Bottom Part Containing Tasks and date*/}
            <div className="cardFooter">
               {date && (
                  <p className="card_footer_svg">
                     <Clock />
                     {date}
                  </p>
               )}
               {props.card?.desc.length > 0 && (
                  <p className="card_footer_svg">
                     <AlignLeft />
                  </p>
               )}
               {props.card?.tasks?.length > 0 && (
                  <p className="card_footer_svg">
                     <CheckSquare />
                     {
                        props.card?.tasks?.filter((item) => item.completed)
                           .length
                     }
                     /{props.card?.tasks?.length}
                  </p>
               )}
            </div>

            {/* A button to delete the Card from Column*/}
            <div className="cardDelete">
               <button
                  onClick={() =>
                     props.removeCard(props.card?.id, props?.boardId)
                  }
               >
                  Delete
               </button>
            </div>
         </div>
      </>
   );
}
