import { Outlet } from 'react-router-dom';
import { Epic } from './Epic';

export const Contact = () => {
  return (
    <div className='main'>
      <h1>Contact</h1>
      <Epic message={`Hola esto es un mensaje en el head de Contact`} />
      <Outlet />
    </div>
  );
};
