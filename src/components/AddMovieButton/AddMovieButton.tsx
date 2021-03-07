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

  toggleModal(): void {
    this.setState((state) => ({
      IsModalVisible: !state.IsModalVisible,
    }));
  }

  render(): React.ReactNode {
    return (
      <>
        <button className="add-movie-button" onClick={this.toggleModal.bind(this)}>
          + add movie
        </button>
        {this.state.IsModalVisible ? (
          <ModalWindow
            IsModalVisible={this.state.IsModalVisible}
            modalType="add"
            modalTitle="ADD MOVIE"
            leftButton="RESET"
            rightButton="SUBMIT"
            toggleModal={this.toggleModal.bind(this)}
          />
        ) : null}
      </>
    );
  }
}
