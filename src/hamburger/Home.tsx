import { NavLink, Outlet } from 'react-router-dom';
import '../css/home.css';
import { Epic } from './Epic';

export const Home = () => {
  return (
    <div className='main'>
      <h1>Home</h1>
      <Epic message={`Hola esto es un mensaje en el head de HOME`} />
      <div className='tab-container'>
        <ul className='tab-list'>
          <li className='tab-list-item'>
            <NavLink to="/projects" className="tab-navlink ">Projects</NavLink>
          </li>
          <li className='tab-list-item'>
            <NavLink to="/models" className="tab-navlink ">Models</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
