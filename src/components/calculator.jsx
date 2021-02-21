import Card from "./card";
import { styles } from "./styles";
import { GiPineTree } from "react-icons/gi";
import Input from "./input";
import Text from "./text";

export default function Calculator(props) {
  return (
    <Card>
      {/* <div style={styles.nav.button.container}></div> */}
      <Text type="h3">Calculator</Text>
      <div style={styles.calculator.container}>
        <div style={styles.calculator.input}>
          <Input placeholder='length' style={styles.calculator.input.field}/>
          <Input placeholder='width' style={styles.calculator.input.field}/>
        </div>
        <div style={styles.calculator.result}>
          <Text type="h4">Total</Text>
          <Text type="h4">$20</Text>
        </div>
      </div>
    </Card>
  );
}
