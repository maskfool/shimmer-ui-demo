import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log(json);
  };

  return <div>Body</div>;
};

export default Body;
