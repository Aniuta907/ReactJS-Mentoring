import React from "react";

import { ModalWindow } from "../ModalWindow";
import { DottedIconImage } from "./DottedIconImage";
import { EditMovieModalContent } from "../EditMovieModalContent";
import { DeleteMovieModalContent } from "../DeleteMovieModalContent";
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

  openDropdown = (): void => {
    this.setState({
      IsDropdownVisible: true,
    });
  };

  closeDropdown = (): void => {
    this.setState({
      IsDropdownVisible: false,
    });
  };

  openEditModal = (): void => {
    this.setState({
      IsEditModalVisible: true,
    });
    this.closeDropdown();
  };

  closeEditModal = (): void => {
    this.setState({
      IsEditModalVisible: false,
    });
  };

  openDeleteModal = (): void => {
    this.setState({
      IsDeleteModalVisible: true,
    });
    this.closeDropdown();
  };

  closeDeleteModal = (): void => {
    this.setState({
      IsDeleteModalVisible: false,
    });
  };

  componentDidMount = (): void => {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  componentWillUnmount = (): void => {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  handleClickOutside = (event: Event): void => {
    if (
      this.state.IsDropdownVisible &&
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target as Node)
    ) {
      this.closeDropdown();
    }
  };

  render(): React.ReactNode {
    return (
      <div className="dotted-icon">
        <div className="dotted-icon-image" onClick={this.openDropdown}>
          <DottedIconImage />
        </div>
        {this.state.IsDropdownVisible && (
          <div className="dotted-icon-modal" ref={this.modalRef}>
            <div className="dotted-icon-close-icon" onClick={this.closeDropdown}>
              X
            </div>
            <div className="dotted-icon-option" onClick={this.openEditModal}>
              Edit
            </div>
            <div className="dotted-icon-option" onClick={this.openDeleteModal}>
              Delete
            </div>
          </div>
        )}
        {this.state.IsEditModalVisible && (
          <ModalWindow
            IsModalVisible={this.state.IsEditModalVisible}
            modalTitle="EDIT MOVIE"
            leftButton="RESET"
            rightButton="SAVE"
            closeModal={this.closeEditModal}
          >
            <EditMovieModalContent />
          </ModalWindow>
        )}
        {this.state.IsDeleteModalVisible && (
          <ModalWindow
            IsModalVisible={this.state.IsDeleteModalVisible}
            modalTitle="DELETE MOVIE"
            rightButton="CONFIRM"
            closeModal={this.closeDeleteModal}
          >
            <DeleteMovieModalContent />
          </ModalWindow>
        )}
      </div>
    );
  }
}
