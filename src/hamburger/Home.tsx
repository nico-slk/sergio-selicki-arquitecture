import { Outlet } from 'react-router-dom';
import { Epic } from './Epic';

export const Home = () => {
  return (
    <div className='main'>
      <h1>Home</h1>
      <Epic message={`Hola esto es un mensaje en el head de HOME`} />
      <Outlet />
    </div>
  );
};
