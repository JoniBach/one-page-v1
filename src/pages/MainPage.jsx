import Card from "../components/card";
import Nav from "../components/nav";
import { styles } from "../components/styles";
export default function MainPage() {
  return (
    <div style={styles.grid.container}>
      <div style={styles.grid.header}>
        <Nav />
      </div>
      <div style={styles.grid.main}>
        <Card padding="1">
          <img
            style={styles.halo.img}
            alt=""
            src="https://www.4seasonstreecare.co.uk/wp-content/uploads/2018/07/tree-surgeon.jpg"
          />
          <div style={styles.halo.txt}>I am a tree surgeon</div>
        </Card>
        <Card>Calculator</Card>
      </div>
      <div style={styles.grid.footer}>
        <Card>Contact me</Card>
      </div>
    </div>
  );
}
