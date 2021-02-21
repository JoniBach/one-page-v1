import { styles } from "./styles";
import { themes } from "./themes";

export default function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        display: props.flex ? "flex" : "none",
        padding:  props.padding ? themes.spacing(props.padding) : themes.spacing(2),
      }}
    >
      {props.children}
    </div>
  );
}
