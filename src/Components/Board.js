import Card from './Card';
import AddCard from './AddCard';
function Board(props) {
   // Getting column info and the cards inside it:
   const { column } = props;
   const cards = column.cards;

   return (
      <div className={`board`}>
         {/* Top Part of Each Column Stating Title and Number of cards in inside it*/}
         <div className="boardtop">
            <p className="boardtitle">{column.title}</p>
            <span style={{ color: 'rgba(125, 128, 127)' }}>
               {column.cards.length}
            </span>
         </div>

         {/* Mapping of the Cards in each column */}
         <div className="boardcards">
            {cards &&
               cards.length > 0 &&
               cards.map((card, index) => {
                  return (
                     <Card
                        key={card.id}
                        card={card}
                        boardId={column.id}
                        removeCard={props.removeCard}
                        updateCard={props.updateCard}
                        dragEntered={props.dragEntered}
                        dragEnded={props.dragEnded}
                     />
                  );
               })}
         </div>

         {/* This component give us a input form to add new card with title */}
         <AddCard
            displayClass="board_card_add"
            text="Add Card..."
            default=""
            placeholder="Enter Card Title"
            onSubmit={(value) => props.addCard(value, props.column?.id)}
         />
         <div></div>
      </div>
   );
}
export default Board;
