import { createPortal } from 'react-dom';
import { Hamburger } from './Hamburger';

interface Props {
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Portal = ({ isOpen, setModal }: Props) => {

  const modal: HTMLElement = document.getElementById("modal") as HTMLElement;

  if (!isOpen) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }

  return (
    createPortal(
      isOpen && <Hamburger isOpen={isOpen} setModal={setModal} />,
      modal
    )
  );

};
