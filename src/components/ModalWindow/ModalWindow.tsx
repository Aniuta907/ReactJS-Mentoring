import React from "react";

import "./ModalWindow.scss";

interface ModalWindowProps {
  modalTitle: string;
  leftButton?: string;
  rightButton?: string;
  IsModalVisible: boolean;
  closeModal: () => void;
}
export class ModalWindow extends React.Component<ModalWindowProps> {
  private modalRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: Event): void => {
    if (
      this.props.IsModalVisible &&
      !this.modalRef.current?.contains(event.target as Node)
    ) {
      this.props.closeModal();
    }
  };

  render(): React.ReactNode {
    return (
      <>
        {this.props.IsModalVisible && (
          <div className="modal-shim">
            <div className="modal" ref={this.modalRef}>
              <div className="modal-close-icon" onClick={this.props.closeModal}>
                X
              </div>
              <div className="modal-guts">
                <span className="modal-span">{this.props.modalTitle}</span>

                {this.props.children}

                <div className="modal-footer">
                  {this.props.leftButton && (
                    <button className="modal-left-button">
                      {this.props.leftButton}
                    </button>
                  )}
                  {this.props.rightButton && (
                    <button className="modal-right-button">
                      {this.props.rightButton}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
