import { useState } from "react";
import ShortenedLinkCard from "./ShortenedLinkCard";
import LinkForm from "./linkForm";

const LinkSection = () => {
  const [error, setError] = useState(null);
  const [urlData, setUrlData] = useState([]);

  const handleSubmit = async (urlValue) => {
    setError(null);

    if (!urlValue.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlValue)}`);
      const result = await response.text();
      if (!response.ok) {
        setError("Failed to shorten URL");
        return;
      }
      setUrlData((prevUrlData) => {
        return (prevUrlData = [...prevUrlData, { url: urlValue, shortUrl: result }]);
      });
    } catch (err) {
      setError("Failed to shorten URL");
      console.error("Error:", err);
    }
  };

  return (
    <section className="container mx-auto md:px-7 2xl:px-20 px-5 bg-stone-100 pb-10">
      <LinkForm onSubmit={handleSubmit} error={error} />
      <ul className="flex flex-col gap-4">
        {urlData.map((urlInfo, index) => {
          return <ShortenedLinkCard key={index + urlInfo.url} url={urlInfo.url} shortUrl={urlInfo.shortUrl} />;
        })}
      </ul>
    </section>
  );
};

export default LinkSection;
