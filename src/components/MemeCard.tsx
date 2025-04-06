const MemeCard = ({ data }) => {
  console.log(data);

  const { url, title, author } = data;
  return (
    <div>
      <img className=" w-64 h-64" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
