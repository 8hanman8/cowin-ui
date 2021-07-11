import React from "react";
import "./index.css";

class PopupModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hidePopup: false,
    };
  }

  render() {
    const { header, body, footer, noClose, ...props } = this.props;
    return (
      <div
        className={`modal ${this.props.show === "true" ? "" : "hidden"} ${
          this.state.hidePopup ? "hidden" : ""
        }`}
        {...props}
      >
        <div className="modal-dialog">
          {/*  Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              {/* <span className="close">&times;</span>
          <h2>Modal Header</h2>  */}
              <h3 className="modal-title">{header}</h3>
              {!noClose ? (
                <button type="button" className="close" onClick={this.closeMe}>
                  <span>×</span>
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
    );
  }
  closeMe = () => {
    this.setState({ hidePopup: true });
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  };
}

export default PopupModal;
