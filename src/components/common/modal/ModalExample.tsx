import {
  ModalBody,
  ModalButton,
  ModalButtonWithBorder,
  ModalContents,
  ModalDimmer,
  ModalFooter,
  ModalTitle,
} from "./ModalExampleStyle";
import { useModal } from "./useModal";

export const ModalExample = () => {
  const { modalDataState, closeModal } = useModal();

  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer>
          <ModalBody>
            <ModalTitle>{modalDataState.title}</ModalTitle>
            <ModalContents>{modalDataState.content}</ModalContents>
            <ModalFooter>
              <ModalButtonWithBorder onClick={closeModal}>
                취소
              </ModalButtonWithBorder>
              <ModalButton onClick={modalDataState.callBack}>삭제</ModalButton>
            </ModalFooter>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  );
};
