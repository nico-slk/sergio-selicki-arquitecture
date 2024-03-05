import { NavLink } from 'react-router-dom';

export const Hamburger = () => {

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/models">Modelos</NavLink>
        </li>
      </ul>
    </div>
  );
};
