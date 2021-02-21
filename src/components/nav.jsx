import Card from "./card";
import { styles } from "./styles";

export default function Nav(props) {
  return (
    // <div style={styles.nav.container}>
    //   <div style={styles.nav.button}>x</div>
    //   <div style={styles.nav.content}>Title</div>
    // </div>
    <Card flex="true" padding="1">
      <div style={styles.nav.button.container}>
        <div style={styles.nav.button.child}>=</div>
      </div>
      <div style={styles.nav.content.container}>
        <div style={styles.nav.content.child}>Title</div>
      </div>
    </Card>
  );
}
