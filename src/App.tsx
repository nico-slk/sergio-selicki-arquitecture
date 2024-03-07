

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './css/App.css';
import { Portal } from './hamburger/Portal';

function App(): JSX.Element {
  const [isOpen, setModal] = useState(false);

  return (
    <>
      <div className="head">
        <p>
          APP
        </p>
        <button type="button" onClick={() => setModal(!isOpen)} className='btn-menu' >X</button>
      </div>
      {/* Modal aca */}
      <Portal isOpen={isOpen} setModal={setModal} />
      <Outlet />
    </>
  );
}

export default App;
