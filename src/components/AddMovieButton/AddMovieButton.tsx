import React from "react";

import { ModalWindow } from "../ModalWindow";
import "./AddMovieButton.scss";
interface AddMovieButtonState {
  IsModalVisible: boolean;
}
export class AddMovieButton extends React.Component<
  React.Attributes,
  AddMovieButtonState
> {
  state: AddMovieButtonState = {
    IsModalVisible: false,
  };

  openModal(): void {
    this.setState({
      IsModalVisible: true,
    });
  }

  closeModal(): void {
    this.setState({
      IsModalVisible: false,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <button className="add-movie-button" onClick={this.openModal.bind(this)}>
          + add movie
        </button>
        {this.state.IsModalVisible ? (
          <ModalWindow
            IsModalVisible={this.state.IsModalVisible}
            modalType="add"
            modalTitle="ADD MOVIE"
            leftButton="RESET"
            rightButton="SUBMIT"
            closeModal={this.closeModal.bind(this)}
          />
        ) : null}
      </>
    );
  }
}
