const MemeCard = ({ data }) => {
  console.log(data);

  const { url, title, author } = data;
  return (
    <div className="p-2 m-5 border border-black">
      <img className=" w-64 h-64" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
