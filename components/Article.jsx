import Link from "./Link";
export default function Article(props) {
  return (
    <div className="p-8 pb-12">
      <p className="font-bold text-xl text-gray-400">
        <span className="text-white text-[22px]">{props.span}</span>
        {props.text}
      </p>
      <a href="#">
        <Link a={props.a} />
      </a>
    </div>
  );
}
