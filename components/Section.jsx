export default function Section(props) {
  return (
    <section className="h-[70vh] px-6 flex flex-col items-center justify-center space-y-3">
      <img src={props.img} alt={props.alt} />
      <h1 className="font-bold text-4xl text-center lg:text-5xl">{props.h1}</h1>
      <p className="text-center font-bold text-gray-400 text-[17px] px-8 lg:text-[25px] lg:max-w-[750px] lg:text-[#d9d9d9] lg:font-[400]">
        {props.p}
      </p>
    </section>
  );
}
