import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const LinkForm = ({ error, onSubmit }) => {
  const [urlValue, setUrlValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(urlValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 px-5 py-6 lg:px-12 lg:py-12 rounded-lg gap-2 lg:gap-4 flex flex-col lg:flex-row justify-center lg:justify-stretch items-stretch bg-primary-violet bg-shorten-mobile lg:bg-shorten-desktop bg-no-repeat bg-right-top lg:bg-cover relative"
    >
      <input
        value={urlValue}
        type="text"
        placeholder="Shorten a link here..."
        onChange={(e) => setUrlValue(e.target.value)}
        className={`w-full rounded-md p-3 focus:outline-primary-cyan ${
          error ? "border-2 border-secondary-red placeholder:text-secondary-red" : ""
        }`}
      />
      {error && <span className="text-secondary-red text-sm lg:absolute lg:bottom-5 mb-2 lg:mb-0 italic">{error}</span>}
      <PrimaryButton size="rectangularBig" text="Shorten it!" type="submit" />
    </form>
  );
};

export default LinkForm;
