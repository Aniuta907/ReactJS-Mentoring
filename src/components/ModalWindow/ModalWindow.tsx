import React from "react";

import "./ModalWindow.scss";

interface ModalWindowProps {
  modalType: string;
  modalTitle: string;
  modalText?: string;
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
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target as Node)
    ) {
      this.props.closeModal();
    }
  };

  render(): React.ReactNode {
    return (
      <>
        {this.props.IsModalVisible ? (
          <div className="modal-shim">
            <div className="modal" ref={this.modalRef}>
              <div
                className="modal-close-icon"
                onClick={this.props.closeModal.bind(this)}
              >
                X
              </div>
              <div className="modal-guts">
                <span className="modal-span">{this.props.modalTitle}</span>

                {this.props.modalType === "edit" && (
                  <>
                    <label className="modal-label">movie id</label>
                    <label className="modal-edit-id">MO3282OTH</label>
                  </>
                )}

                {(this.props.modalType === "add" ||
                  this.props.modalType === "edit") && (
                  <>
                    <label className="modal-label">title</label>
                    <input className="modal-input" placeholder="Title here" />

                    <label className="modal-label">release date</label>
                    <input type="date" className="modal-input" />

                    <label className="modal-label">movie url</label>
                    <input className="modal-input" placeholder="Movie URL here" />

                    <label className="modal-label">genre</label>
                    <select className="modal-select">
                      <option value="" style={{ display: "none" }}>
                        Select Genre
                      </option>
                      <option className="modal-option" value="name">
                        Crime
                      </option>
                      <option className="modal-option" value="name">
                        Documentary
                      </option>
                      <option className="modal-option" value="name">
                        Horror
                      </option>
                      <option className="modal-option" value="name">
                        Comedy
                      </option>
                    </select>

                    <label className="modal-label">overview</label>
                    <input className="modal-input" placeholder="Overview here" />

                    <label className="modal-label">runtime</label>
                    <input className="modal-input" placeholder="Runtime here" />
                  </>
                )}

                {this.props.modalType === "delete" && (
                  <p className="modal-text">{this.props.modalText}</p>
                )}

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
        ) : null}
      </>
    );
  }
}
