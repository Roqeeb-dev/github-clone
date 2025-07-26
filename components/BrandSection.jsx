import Link from "./Link";

export default function BrandSection(props) {
  return (
    <section className="h-[45vh] py-10 px-5 lg:pr-25 ">
      <img src={props.img} alt={props.alt} className="my-6" />
      <p className="text-xl text-gray-400">{props.p}</p>
      <a href="#">{<Link a={props.a} />}</a>
    </section>
  );
}
