
interface WayProps {
  title: string;
  description: string;
}

export default function List({ title, description }: WayProps) {
  return (
    <section>
      <ul>
        <li>
          <p>
            <strong>{title}</strong>
            <br />
            {description}
          </p>
        </li>
      </ul>
    </section>
  );
}
