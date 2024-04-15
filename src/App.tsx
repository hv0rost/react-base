import Header from "./components/Header";
import List from "./components/List";
import Button from "./components/button/Button";

import { ways } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h3>List below:</h3>
          <List {...ways[0]} />
          <List {...ways[1]} />
        </div>
        <div>
          <h3>What our difference</h3>
          <Button>213</Button>
        </div>
      </main>
    </>
  );
}
