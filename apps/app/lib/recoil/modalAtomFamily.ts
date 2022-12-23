import { atomFamily, useRecoilValue, useSetRecoilState } from "recoil";

type ModalName = "leadModal";

export const modalStateAtom = atomFamily<boolean, ModalName>({
  key: "modalStateAtom",
  default: false,
});

export const useModalOpened = (modalName: ModalName) => {
  const opened = useRecoilValue(modalStateAtom(modalName));
  return opened;
};

export const useSetModalState = (modalName: ModalName) => {
  const setModal = useSetRecoilState(modalStateAtom(modalName));
  return setModal;
};
