import { useEffect } from "react";

const useClickOutside = (
  modalRef: any,
  IsModalVisible: boolean,
  closeModal: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (IsModalVisible && !modalRef.current?.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default useClickOutside;
