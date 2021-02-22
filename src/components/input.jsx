import { styles } from "./styles";

export default function Input(props) {
  return (
    <div style={styles.input.container}>
      <input
        onChange={props.onChange}
        value={props.value}
        type="number"
        placeholder={props.placeholder}
        style={{ ...styles.input.field, ...props.style }}
      />
      {props.buttonEnd && (
        <button style={styles.calculator.input.btn}>{props.buttonEnd}</button>
      )}
    </div>
  );
}
