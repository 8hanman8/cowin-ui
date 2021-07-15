import { useState } from "react";
import styles from "./drop-down-menu.module.css";

function DropDownMenu({ data, onChange, ...rest }) {
  const [state, setState] = useState({ openPopup: false });
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.dataset.key);
    }
    setState({ ...state, openPopup: !state.openPopup });
  };
  const clickedOnOverlay = () => {
    setState({ ...state, openPopup: !state.openPopup });
  };
  if (!data || !data.title) {
    throw new Error("Title is required for drop down menu");
  }
  if (!data.menuOptions) {
    throw new Error("menu options are required for drop down menu");
  }
  const keysArray = data.menuOptions.map((x) => x.key);
  const keysSet = new Set(keysArray);
  if (keysSet.size !== keysArray.length) {
    throw new Error("keys must be unique in menu options array");
  }
  return (
    <div {...rest}>
      <div
        className={styles.dropDownMenu}
        style={{ cursor: "pointer" }}
        onClick={() => setState({ ...state, openPopup: !state.openPopup })}
      >
        <span>{data.title || "none"}</span>
        <span className={styles.downArrow}>&#9660;</span>
        {state.openPopup ? (
          <div className={styles.popup}>
            <ul className={styles.ul}>
              {data.menuOptions &&
                data.menuOptions.map((item) => (
                  <li className={styles.ulItem} key={item.key}>
                    <button
                      className={styles.btn}
                      onClick={handleChange}
                      data-key={item.key}
                    >
                      {item.description}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {state.openPopup ? (
        <div className={styles.overlay} onClick={clickedOnOverlay}></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropDownMenu;
