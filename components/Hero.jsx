import SignUpForm from "./SignUpForm";

export default function Hero(props) {
  return (
    <section className="lg:h-screen">
      <article className="px-10 py-5 mt-5 text-center">
        <h1 className="font-bold text-4xl my-5 lg:text-[65px] lg:px-[150px] lg:my-8 lg:mt-12">
          {props.h1}
        </h1>
        <p className="text-xl">{props.p}</p>
      </article>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center">
        <SignUpForm />
        <button className="p-2 w-[90%] mx-5 rounded-md font-bold border-2 border-white lg:w-[250px] lg:mx-3 lg:py-[15px]">
          {props.btn}
        </button>
      </div>
    </section>
  );
}
