// import { Icon } from '../../Icon';
// import { PrimaryButton } from '../..';
import { Transition } from 'react-transition-group';
import {
  Modal,
  MadalContent,
  Image,
  Span,
  P,
  Button,
  Div,
  Svg,
  H2,
  Button2,
} from './AddExerciseSuccess.style';
import sprite from '../../../assets/images/sprite.svg';
import { useEffect } from 'react';

export const AddExerciseSuccess = ({ isOpen, onClose, calories }) => {
  const onWrapperClick = event => {
    if (event.target.classList.contains('modal-wrapper')) onClose();
  };

  useEffect(() => {
    const onKeydownEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeydownEsc);
    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [onClose]);

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        <Modal className="modal-wrapper" onClick={onWrapperClick}>
          <MadalContent className="modal-content">
            <Svg onClick={() => onClose()}>
              <use href={`${sprite}#icon-x`}></use>
            </Svg>
            <Div>
              <Image></Image>
              <H2>Well done</H2>
              <P>
                Your time:<Span> 3 minutes</Span>
              </P>
              <P>
                Burned calories: <Span>{calories}</Span>
              </P>
            </Div>
            <Button type="button">
              Next product
            </Button>
              <Button2 type="button">
                To the diary
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1"
                  stroke="#EFEDE8"
                  stroke-opacity="0.3"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </Button2>
          </MadalContent>
        </Modal>
      </Transition>
    </>
  );
};

