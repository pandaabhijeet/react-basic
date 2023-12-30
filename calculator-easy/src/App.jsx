
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
   
    <div id="calcultor" className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
    
  )
}

export default App
