import React from "react";
import { ModalBox, Overlay } from "./styled"

export class Modal extends React.Component {
    onKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    };

    onBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        return (
            <Overlay onClick={this.onBackdropClick}>
                <ModalBox>
                    <img src={this.props.url} alt="" />
                </ModalBox>
            </Overlay>
        );
    }
};