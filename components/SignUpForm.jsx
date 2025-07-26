export default function SignUpForm() {
  return (
    <form
      action=""
      className="bg-white mx-6 p-1 flex flex-col items-center space-y-2 border-2 rounded-xl my-5 lg:flex-row lg:mx-0 lg:w-[450px] lg:space-y-0"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        className="w-full py-2 pl-4 text-black"
      />
      <button className="bg-green-800 p-3 w-full rounded-md font-bold lg:w-[60%] lg:py-3">
        Sign up for Github
      </button>
    </form>
  );
}
