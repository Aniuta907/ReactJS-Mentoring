import React from "react";

import { ModalWindow } from "../ModalWindow";
import { DottedIconImage } from "./DottedIconImage";
import "./DottedIcon.scss";
interface DottedIconState {
  IsDropdownVisible: boolean;
  IsEditModalVisible: boolean;
  IsDeleteModalVisible: boolean;
}
export class DottedIcon extends React.Component<React.Attributes, DottedIconState> {
  state: DottedIconState = {
    IsDropdownVisible: false,
    IsEditModalVisible: false,
    IsDeleteModalVisible: false,
  };

  private modalRef = React.createRef<HTMLDivElement>();

  toggleDropdown(): void {
    this.setState((state) => ({
      IsDropdownVisible: !state.IsDropdownVisible,
    }));
  }

  toggleEditModal(): void {
    this.setState((state) => ({
      IsEditModalVisible: !state.IsEditModalVisible,
    }));
  }

  toggleDeleteModal(): void {
    this.setState((state) => ({
      IsDeleteModalVisible: !state.IsDeleteModalVisible,
    }));
  }

  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: Event): void => {
    if (
      this.state.IsDropdownVisible &&
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target as Node)
    ) {
      this.toggleDropdown();
    }
  };

  render(): React.ReactNode {
    return (
      <div className="dotted-icon">
        <div className="dotted-icon-image" onClick={this.toggleDropdown.bind(this)}>
          <DottedIconImage />
        </div>
        {this.state.IsDropdownVisible ? (
          <div className="dotted-icon-modal" ref={this.modalRef}>
            <div
              className="dotted-icon-close-icon"
              onClick={this.toggleDropdown.bind(this)}
            >
              X
            </div>
            <div
              className="dotted-icon-option"
              onClick={this.toggleEditModal.bind(this)}
            >
              Edit
            </div>
            {this.state.IsEditModalVisible ? (
              <ModalWindow
                IsModalVisible={this.state.IsEditModalVisible}
                modalType="edit"
                modalTitle="EDIT MOVIE"
                leftButton="RESET"
                rightButton="SAVE"
                toggleModal={this.toggleEditModal.bind(this)}
              />
            ) : null}
            <div
              className="dotted-icon-option"
              onClick={this.toggleDeleteModal.bind(this)}
            >
              Delete
            </div>
            {this.state.IsDeleteModalVisible ? (
              <ModalWindow
                IsModalVisible={this.state.IsDeleteModalVisible}
                modalType="delete"
                modalTitle="DELETE MOVIE"
                modalText="Are you sure you want to delete this movie?"
                rightButton="CONFIRM"
                toggleModal={this.toggleDeleteModal.bind(this)}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}
