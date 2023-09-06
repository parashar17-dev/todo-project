import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function NavRight() {
   return (
      <div className="navright">
         <FontAwesomeIcon className="icon_r" icon={faBars} />
         <div className="menu">Show Menu</div>
      </div>
   );
}
export default NavRight;
