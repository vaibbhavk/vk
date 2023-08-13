import Image from "next/image";

const BusinessCard = () => {
  return (
    <div className="border border-grey-200 dark:border-gray-800 rounded transition-all duration-500 w-full h-[25rem] bg-white dark:bg-gray-900 shadow-xl [translate-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <img
        class="w-full shadow-black/40 shadow-xl absolute inset-0"
        src="/bcard_front.png"
        alt="My Business card front"
      />

      <img
        class="w-full absolute inset-0 shadow-black/40 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]"
        src="/bcard_back.png"
        alt="My Business card back"
      />
    </div>
  );
};

export default BusinessCard;
