import React from "react";

import { ModalWindow } from "../ModalWindow";
import { AddMovieModalContent } from "../AddMovieModalContent";
import "./AddMovieModalManager.scss";

interface AddMovieModalManagerState {
  IsModalVisible: boolean;
}
export class AddMovieModalManager extends React.Component<
  React.Attributes,
  AddMovieModalManagerState
> {
  state: AddMovieModalManagerState = {
    IsModalVisible: false,
  };

  openModal = () => {
    this.setState({
      IsModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      IsModalVisible: false,
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <button className="add-movie-button" onClick={this.openModal}>
          + add movie
        </button>
        {this.state.IsModalVisible && (
          <ModalWindow
            IsModalVisible={this.state.IsModalVisible}
            modalTitle="ADD MOVIE"
            leftButton="RESET"
            rightButton="SUBMIT"
            closeModal={this.closeModal}
          >
            <AddMovieModalContent />
          </ModalWindow>
        )}
      </>
    );
  }
}
