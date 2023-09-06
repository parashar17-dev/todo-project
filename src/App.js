import { Fragment } from 'react';
import Boards from './Components/Boards';
import Navbar from './Components/Navbar';
function App() {
   return (
      <Fragment>
         {/* Navbar for the App */}
         <Navbar />

         {/* 4 Columns in the Board */}
         <Boards />
      </Fragment>
   );
}

export default App;
