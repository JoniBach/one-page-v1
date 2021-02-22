import Card from "./card";
import { styles } from "./styles";
import Input from "./input";
import Text from "./text";
import { useEffect, useState } from "react";

export default function Calculator(props) {
  const [params, setParams] = useState({});
  const [total, setTotal] = useState({});
  const dimensions = "cm";
  const cost = (Math.round(total * 2.5 * 100) / 100).toFixed(2);
  useEffect(() => {
    setTotal(params.l * params.w);
  }, [params]);
  return (
    <Card>
      <Text type="h3">Calculator</Text>
      <div style={styles.calculator.container}>
        <div style={styles.calculator.input}>
          <Input
            value={params.l}
            onChange={(e) => setParams({ ...params, l: e.target.value })}
            placeholder="length"
            style={styles.calculator.input.field}
            buttonEnd={dimensions}
          />
          <Input
            value={params.w}
            onChange={(e) => setParams({ ...params, w: e.target.value })}
            placeholder="width"
            style={styles.calculator.input.field}
            buttonEnd={dimensions}
          />
        </div>
        <div style={styles.calculator.result}>
          {params.l && params.w ? (
            <Text type="h3">
              {Math.round(total)} {dimensions} <Text type='sup'>2</Text>
            </Text>
          ) : (
            <Text type="h4">Total</Text>
          )}
          <Text type="h4">${cost}</Text>
        </div>
      </div>
      {!params.l || !params.w ? (
        <Text type="p">
          Curious how much a job might cost? Why not enter some dimensions above
          and get an instant rough estimate...
        </Text>
      ) : (
        <Text type="p">
          The above is a rough ball park estimate. Root depth, travel and
          environmental factors may effect the actual quote. See the details
          below to request a formal quote
        </Text>
      )}
    </Card>
  );
}
