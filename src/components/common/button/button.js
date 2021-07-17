import React, { Component } from "react";
import styles from "./button.module.css";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const {
      children,
      onClick,
      btnColor = "#001F60",
      labelColor,
      disabled,
      type,
      style,
      ...props
    } = this.props;
    const { hover } = this.state;
    const commonStyles = {
      backgroundColor: btnColor,
      color: labelColor || "white",
    };
    const outlineStyles = {
      border: `1px solid ${btnColor}`,
      color: btnColor,
      backgroundColor: "white",
    };
    const outlineHoverStyle = {
      color: labelColor || "white",
      backgroundColor: btnColor,
    };

    const roundedStyle = {
      backgroundColor: btnColor,
      color: labelColor || "white",
      borderRadius: "25px",
    };
    const disabledStyle = {
      cursor: "default",
      backgroundColor: btnColor,
      color: labelColor || "white",
      opacity: 0.4,
    };
    const blockStyles = {
      width: "95%",
      margin: "0 auto",
    };
    const textStyles = {
      background: "none",
      color: btnColor,
    };
    const roundedOutline = {
      border: `1px solid ${btnColor}`,
      color: btnColor,
      backgroundColor: "white",
      borderRadius: "25px",
    };
    let btnStyle;
    switch (type) {
      case "rounded":
        btnStyle = roundedStyle;
        break;
      case "block":
        btnStyle = blockStyles;
        break;
      case "outline":
        if (hover) {
          btnStyle = outlineHoverStyle;
        } else {
          btnStyle = outlineStyles;
        }
        break;
      case "text":
        btnStyle = textStyles;
        break;
      case "roundedOutline":
        btnStyle = roundedOutline;
        break;
      default:
        btnStyle = {
          backgroundColor: btnColor,
          color: labelColor || "white",
        };
        break;
    }
    return (
      <button
        style={
          disabled
            ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style }
            : { ...commonStyles, ...btnStyle, ...style }
        }
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        {...props}
        type="button"
        onClick={!disabled ? onClick : () => {}}
        className={styles.btn}
      >
        {children || "button"}
      </button>
    );
  }
}

export default Button;
