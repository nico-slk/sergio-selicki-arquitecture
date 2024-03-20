import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Hamburger } from './Hamburger';

interface Props {
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Portal = ({ isOpen, setModal }: Props) => {
  const firstRender = useRef(true);
  const modal: HTMLElement = document.getElementById("modal") as HTMLElement;
  const keyframeAnimation = [
    {
      opacity: 1,
      transform: "translate(0px, 0px)"
    },
    {
      opacity: 0,
      transform: "translate(+50%, 0px)"
    },
  ];
  useEffect(() => {

    if (!firstRender.current) {
      if (!isOpen) {
        modal.animate(keyframeAnimation, 300);
        setTimeout(() => {
          modal.style.display = "none";
        }, 250);
      } else {
        modal.style.display = "flex";
      }
    } else {
      firstRender.current = false;
      modal.style.display = "none";
    }

  }, [isOpen]);


  return createPortal(
    isOpen && <Hamburger isOpen={isOpen} setModal={setModal} />,
    modal
  );

};
