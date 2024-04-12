import Header from "./components/Header";
import List from "./components/List";

import { ways } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h3>List below:</h3>
        <List {...ways[0]} />
        <List {...ways[1]} />
      </main>
    </>
  );
}
