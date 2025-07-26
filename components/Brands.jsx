export default function Brands(props) {
  return (
    <article className="h-[45vh] py-10 px-6 my-3 text-xl border-b-1">
      <img src={props.img} alt={props.alt} className="mb-20" />
      <p className="text-gray-400 font-bold my-2">{props.grayText}</p>
      <p className="font-bold text-white text-[21px]">{props.boldText}</p>
    </article>
  );
}
