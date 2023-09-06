import { initData } from '../Storage/initData';
import { useState, useEffect } from 'react';
import Board from './Board';
function Boards() {
   // State for all columns data:
   const [columns, setColumns] = useState(
      JSON.parse(localStorage.getItem('Project') || [initData.columns])
   );
   const [targetCard, setTargetCard] = useState({ bid: '', cid: '' });
   // use effect to load initial data of the columns from fake API:
   useEffect(() => {
      localStorage.setItem('Project', JSON.stringify(columns));
   }, [columns]);

   // Function to add a Card in a column:
   const addCard = (title, boardId) => {
      const card = {
         id: Date.now() + Math.random(),
         image: '',
         title,
         labels: [],
         tasks: [],
         date: '',
         desc: '',
      };
      const index = columns.findIndex((item) => item.id === boardId);
      if (index < 0) return;
      const tempColumns = [...columns];
      tempColumns[index].cards.push(card);
      setColumns(tempColumns);
   };

   // Function to delete Card from a column:
   const removeCard = (cardId, boardId) => {
      console.log(cardId, boardId);
      const bIndex = columns.findIndex((item) => item.id === boardId);
      if (bIndex < 0) return;
      const cIndex = columns[bIndex].cards.findIndex(
         (item) => item.id === cardId
      );
      if (cIndex < 0) return;
      console.log(bIndex, cIndex);
      const tempColumns = [...columns];
      tempColumns[bIndex].cards.splice(cIndex, 1);
      setColumns(tempColumns);
   };

   const updateCard = (cardId, boardId, card) => {
      const bIndex = columns.findIndex((item) => item.id === boardId);
      if (bIndex < 0) return;
      const cIndex = columns[bIndex].cards.findIndex(
         (item) => item.id === cardId
      );
      if (cIndex < 0) return;
      const tempColumns = [...columns];
      tempColumns[bIndex].cards[cIndex] = card;
      setColumns(tempColumns);
   };

   const dragEnded = (bid, cid) => {
      let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
      s_boardIndex = columns.findIndex((item) => item.id === bid);
      if (s_boardIndex < 0) return;

      s_cardIndex = columns[s_boardIndex]?.cards?.findIndex(
         (item) => item.id === cid
      );
      if (s_cardIndex < 0) return;

      t_boardIndex = columns.findIndex((item) => item.id === targetCard.bid);
      if (t_boardIndex < 0) return;

      t_cardIndex = columns[t_boardIndex]?.cards?.findIndex(
         (item) => item.id === targetCard.cid
      );
      if (t_cardIndex < 0) return;

      const tempBoards = [...columns];
      const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
      tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
      tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
      setColumns(tempBoards);

      setTargetCard({
         bid: '',
         cid: '',
      });
   };

   const dragEntered = (bid, cid) => {
      if (targetCard.cid === cid) return;
      setTargetCard({
         bid,
         cid,
      });
   };
   // Mapping multiple columns in the Board:
   return (
      <div className="boards">
         {columns &&
            columns.length > 0 &&
            columns.map((column, index) => {
               return (
                  <Board
                     key={column.id}
                     column={column}
                     addCard={addCard}
                     removeCard={removeCard}
                     updateCard={updateCard}
                     dragEnded={dragEnded}
                     dragEntered={dragEntered}
                  />
               );
            })}
      </div>
   );
}
export default Boards;
