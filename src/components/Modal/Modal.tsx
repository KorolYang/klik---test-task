import { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseSVG from '../../assets/icons/close.svg?react';
import s from './Modal.module.css';

export type TModalProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, setIsOpen, children }: TModalProps) => {
  const handler = () => {
    setIsOpen(false);
  };

  const nodeRefModal = useRef(null);
  const nodeRefContent = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRefModal}
      in={isOpen}
      timeout={300}
      classNames={{
        enter: s.modalEnter,
        enterActive: s.modalEnterActive,
        exit: s.modalExit,
        exitActive: s.modalExitActive,
      }}
      unmountOnExit
    >
      <div ref={nodeRefModal} className={s.modal} onClick={handler}>
        <CSSTransition
          nodeRef={nodeRefContent}
          in={isOpen}
          timeout={500}
          classNames={{
            enter: s.modalContentEnter,
            enterActive: s.modalContentEnterActive,
            exit: s.modalContentExit,
            exitActive: s.modalContentExitActive,
          }}
          unmountOnExit
        >
          <div ref={nodeRefContent} className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={handler} className={s.closeBtn}>
              <CloseSVG />
            </button>
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};
