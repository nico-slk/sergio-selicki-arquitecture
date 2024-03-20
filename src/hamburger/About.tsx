import { Outlet } from 'react-router-dom';
import { Epic } from './Epic';

export const About = () => {
  return (
    <div className='main'>
      <h1>About</h1>
      <Epic message={`Hola esto es un mensaje en el head de About`} />
      <Outlet />
    </div>
  );
};
