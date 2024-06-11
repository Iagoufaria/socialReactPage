export default function listItem(props) {
  return (
    <li>
      <a target="_blank" rel="noopener" href={props.url}>
        <img src={props.imgLink} alt={props.alt} />
      </a>
    </li>
  );
}
