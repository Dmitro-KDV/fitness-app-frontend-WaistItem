// import { Icon } from '../../Icon';
// import { PrimaryButton } from '../..';
import { Transition } from 'react-transition-group';
import {
  Modal,
  MadalContent,
  Image,
  Timer,
  BurnedCal,
  BurnedInformName,
  Ul,
  Li,
  Span,
  P,
  Button,
  Div,
  SvgPlay,
  SvgPause,
  Btn,
  Svg,
} from './AddExerciseSuccess.style';
import sprite from '../../../assets/images/sprite.svg';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { ModalProps } from 'antd';
// import { AppDispatch } from '../../../redux';
// import { setCalculatedCalories } from '../../../redux/products';

// interface ProductAddedModalProps extends ModalProps {
//   handleClose: () => void;
//   calories: number;
// }

export const AddExerciseSuccess = ({ isOpen, onClose, calories }) => {
  //   const dispatch = useDispatch<AppDispatch>();
  //   const [buttonHover, setButtonHover] = useState(false);
  const onWrapperClick = event => {
    if (event.target.classList.contains('modal-wrapper')) onClose();
  };


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
              <h2>Well done</h2>
              <p>
                Your time:<span> 3 minutes</span>
              </p>
              <p>
                Burned calories: <span>{calories}</span>
              </p>
            </Div>
            <Button type="button">
              Next exercise
            </Button>
              <button type="button">
                To the diary
              </button>
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
          </MadalContent>
        </Modal>
      </Transition>
    </>
  );
};

