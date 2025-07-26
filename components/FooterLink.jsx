export default function FooterLink(props) {
  const featureArray = props.array;
  const featureList = featureArray.map((feature) => {
    return (
      <a
        href="#"
        className="text-gray-400 my-3 text-[14px] block hover:text-[#79c0ff]"
      >
        {feature}
      </a>
    );
  });
  return featureList;
}
