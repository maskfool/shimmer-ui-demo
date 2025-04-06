import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";

const Body = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json.memes);
  };

  return (
    <div className="flex flex-wrap">
      {memes &&
        memes.map((meme, i) => {
          return <MemeCard key={i} data={meme} />;
        })}
    </div>
  );
};

export default Body;
