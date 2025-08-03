import React ,{useRef} from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const gradientBackground = assets.gradientBackground;
  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  }
  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };
  return (
    <div className="mx-8 sm:mx-16 xl:m-24 relative">
      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center justify-center gap-4 px-6 py-1.5
         mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary"
        >
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-teal-700">
          Write your own <span className="text-pink-700">Blog</span> today.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Empowering your words with AI. Blog better, faster, and more
          creatively. An AI-powered space to write, refine, and share your voice
          with the world.
        </p>
        <form onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto
         border border-gray-300 bg-white rounded overflow-hidden "
        >
          <input ref={inputRef} 
            type="text"
            placeholder="Search for Blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && 
        <button onClick={onClear} className="border font-light text-xs px-3 py-1 rounded-sm shadow-custom-sm cursor-pointer">
          Clear Search
        </button>}
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
