import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
function NavLeft() {
   return (
      <div className="navleft">
         <div className="left left1">
            <div className="name">Atul's Board</div>
            <FontAwesomeIcon className="star" icon={faStar} />
         </div>
         <div className="left left2">Atul & Co.</div>
         <div className="left left3">
            <FontAwesomeIcon className="icon3" icon={faPeopleGroup} />
            <div>Team Visible</div>
         </div>
      </div>
   );
}
export default NavLeft;
