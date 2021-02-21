import Card from "./card";
import { styles } from "./styles";
import { GiPineTree } from 'react-icons/gi';

export default function Nav(props) {
  return (

    <Card flex="true" padding="1" radius='40'>
      <div style={styles.nav.button.container}>
        <div style={styles.nav.button.child}><GiPineTree /></div>
      </div>
      <div style={styles.nav.content.container}>
        <div style={styles.nav.content.child}>Title</div>
      </div>
    </Card>
  );
}
