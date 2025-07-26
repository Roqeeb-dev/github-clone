import Link from "./Link";

export default function OpenAccordion(props) {
  return (
    <section className="p-6">
      <h2 className="font-bold text-2xl ">{props.h2}</h2>
      <p className="text-gray-400 text-[18px]">{props.p}</p>
      <a href="#">{<Link a={props.a} />}</a>
    </section>
  );
}
