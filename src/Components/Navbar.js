import NavRight from './NavRight';
import NavLeft from './Navleft';
function Navbar() {
   return (
      <div className="navbar">
         {/* Left Part of Navbar */}
         <NavLeft />

         {/*Right Part of Navbar */}
         <NavRight />
      </div>
   );
}
export default Navbar;
