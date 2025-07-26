export default function AccordionItem(props) {
  return (
    <section className="flex items-center justify-between p-6 border-b-[1px] border-b-gray-200">
      <a
        href="#"
        className="text-gray-400  hover:text-white text-[20px] font-bold"
      >
        {props.text}
      </a>
      <a href="#" className="text-[#8a7cee] hover:text-white  text-[20px]">
        +
      </a>
    </section>
  );
}
