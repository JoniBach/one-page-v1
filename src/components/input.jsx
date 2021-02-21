import { styles } from "./styles";

export default function Input(props) {
  return (
    <div style={styles.input.container}>
      <input type="number" placeholder={props.placeholder} style={{...styles.input.field, ...props.style}} />
      <button style={styles.calculator.input.btn}>mm</button>
    </div>
  );
}
