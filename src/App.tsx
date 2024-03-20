

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './css/App.css';
import { Portal } from './hamburger/Portal';

function App(): JSX.Element {
  const [isOpen, setModal] = useState(false);
  const [iconX, setIconX] = useState(false);

  const handleMenuClick = () => {
    setModal(!isOpen);
    iconX ? setIconX(false) : setIconX(true);
  };

  return (
    <div className='app'>
      <div className="head">
        <Link to="/" className='link' >App</Link>
        <button type="button" onClick={handleMenuClick} className='btn-menu' >
          {iconX ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>
      {/* Modal aca */}
      <Portal isOpen={isOpen} setModal={setModal} openCloseButtonFn={setIconX} />
      <Outlet />
    </div>
  );
}

export default App;
