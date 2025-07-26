import Link from "./Link";
export default function Div(props) {
  return (
    <div className="p-8">
      <p className="text-[18px] text-gray-400">
        <span className="text-white">{props.span}</span>
        {props.text}
      </p>
      <a href="#">
        <Link a={props.a} />
      </a>
    </div>
  );
}
