
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Portal } from './hamburger/Portal';

function App(): JSX.Element {
  const [modal, setModal] = useState(false);

  return (
    <>
      <p className="read-the-docs">
        APP
      </p>
      {/* Modal aca */}
      <Portal isOpen={modal} />
      <Outlet />
      <button type="button" onClick={() => setModal(!modal)}>X</button>
    </>
  );
}

export default App;
