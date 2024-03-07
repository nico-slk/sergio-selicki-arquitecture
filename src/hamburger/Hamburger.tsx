import { NavLink } from 'react-router-dom';
interface Props {
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavStyle {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}

export const Hamburger = ({ isOpen, setModal }: Props) => {

  const activeStyle = (data: NavStyle) => {
    return {
      textDecoration: 'none',
      color: data.isActive ? "#8a5004" : "#f8aa43",
    };
  };

  const serModalFalse = () => setModal(!isOpen);


  return (
    <div className="menu-container">
      <div className='menu-closebutton-container'>
        <button type="button" onClick={serModalFalse} className='btn-menu' >X</button>

      </div>
      <div className='menu-list-container'>

        <ul className='menu-list'>
          <li className='menu-item'>
            <NavLink to="/" style={activeStyle} onClick={serModalFalse} >Home</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to="/projects" style={activeStyle} onClick={serModalFalse} >Proyectos</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to="/models" style={activeStyle} onClick={serModalFalse} >Modelos</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to="/about" style={activeStyle} onClick={serModalFalse} >About</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to="/contact" style={activeStyle} onClick={serModalFalse} >Contact</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};
