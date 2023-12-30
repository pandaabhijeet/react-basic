
import styles from "./App.module.css";

function App() {
  return (
   
    <div id="calcultor" className={styles.calculator}>
      <input id="display" className={styles.display} type="text"></input>
      <div id="buttons-container" className={styles.buttonsContainer}>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
        <button className={styles.buttons}>0</button>
      </div>
    </div>
    
  )
}

export default App
