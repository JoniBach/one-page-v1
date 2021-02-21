import { styles } from "./styles";
import { themes } from "./themes";

export default function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        background: props.img ? `url(${props.img}) no-repeat center center fixed` : 'auto',
        backgroundSize: 'cover',
        display: props.flex ? "flex" : "block",
        padding:  props.padding ? themes.spacing(props.padding) : themes.spacing(2),
        borderRadius:  props.radius ? themes.radius(props.radius) : themes.radius(1),
      }}
    >
      {props.children}
    </div>
  );
}
