import { Outlet } from 'react-router-dom';
import { Epic } from './Epic';

export const Projects = () => {
  return (
    <div className='main'>
      <h1>Projects</h1>
      <Epic message={`Hola esto es un mensaje en el head de Projects`} />
      <Outlet />
    </div>
  );
};
