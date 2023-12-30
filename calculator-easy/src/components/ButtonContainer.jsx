import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div id="buttons-container" className={styles.buttonsContainer}>
      {buttonName.map((buttonName) => (
        <button className={styles.buttons}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
