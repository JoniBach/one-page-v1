import { styles } from "./styles";

export default function Text(props) {
    switch (props.type) {
        case 'h1': return <h1 style={styles.text}>{props.children}</h1>;
        case 'h2': return <h2 style={styles.text}>{props.children}</h2>;
        case 'h3': return <h3 style={styles.text}>{props.children}</h3>;
        case 'h4': return <h4 style={styles.text}>{props.children}</h4>;
        case 'h5': return <h5 style={styles.text}>{props.children}</h5>;
        case 'h6': return <h6 style={styles.text}>{props.children}</h6>;
        case 'p': return <p style={styles.text}>{props.children}</p>;
        case 'b': return <b style={styles.text}>{props.children}</b>;
        case 'strong': return <strong style={styles.text}>{props.children}</strong>;
        case 'i': return <i style={styles.text}>{props.children}</i>;
        case 'em': return <em style={styles.text}>{props.children}</em>;
        case 'mark': return <mark style={styles.text}>{props.children}</mark>;
        case 'small': return <small style={styles.text}>{props.children}</small>;
        case 'del': return <del style={styles.text}>{props.children}</del>;
        case 'ins': return <ins style={styles.text}>{props.children}</ins>;
        case 'sub': return <sub style={styles.text}>{props.children}</sub>;
        case 'sup': return <sup style={styles.text}>{props.children}</sup>;
        default: return <p style={styles.text}>{props.children}</p>;
    }
//   return <h4>{props.children}</h4>;
}
