import { ways } from "../data";
import List from "../components/List";


export default function TeachingSection() {
  return (
    <>
      <h3>List below:</h3>
      {ways.map((way) => (
        <List key={way.description} {...way} />
      ))}
    </>
  );
}
