import { useState } from "react";
import ShortenedLinkCard from "./ShortenedLinkCard";
import LinkForm from "./linkForm";

const LinkSection = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [urlData, setUrlData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUrl(url);
    setError(null);

    if (!url) {
      setError("Please add a link");
      return;
    }

    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      const result = await response.text();
      setUrlData((prevUrlData) => {
        return (prevUrlData = [...prevUrlData, { url: url, shortUrl: result }]);
      });
      setUrl("");
    } catch (err) {
      setError("Failed to shorten URL");
      console.error("Error:", err);
    }
  };

  return (
    <section className="container mx-auto md:px-7 2xl:px-20 px-5 bg-stone-100 pb-10">
      <LinkForm url={url} setUrl={setUrl} onSubmit={handleSubmit} error={error} />
      <ul className="flex flex-col gap-4">
        {urlData.map((urlInfo, index) => {
          return <ShortenedLinkCard key={index + url} url={urlInfo.url} shortUrl={urlInfo.shortUrl} />;
        })}
      </ul>
    </section>
  );
};

export default LinkSection;
