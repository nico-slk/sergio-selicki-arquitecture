import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
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
  const [toggleModal, setToggleMenu] = useState("menu-container");

  const activeStyle = (data: NavStyle) => {
    return {
      textDecoration: 'none',
      color: data.isActive ? "#8a5004" : "#f8aa43",
    };
  };

  const serModalFalse = () => {
    setToggleMenu("hide-modal");

    setModal(!isOpen);
  };

  useEffect(() => {
  }, [toggleModal]);


  return (
    <div className={`${toggleModal}`}>
      <div className='menu-list-container'>
        <button type="button" onClick={serModalFalse} className='btn-menu-close' >
          <FontAwesomeIcon icon={faX} />
        </button>
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
