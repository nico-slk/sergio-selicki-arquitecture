import { createPortal } from 'react-dom';
import { Hamburger } from './Hamburger';

interface Props {
  isOpen: boolean;
}

export const Portal = ({ isOpen }: Props) => {

  const modal: HTMLElement = document.getElementById("modal") as HTMLElement;

  return (
    createPortal(
      isOpen && <Hamburger />,
      modal
    )
  );
};
