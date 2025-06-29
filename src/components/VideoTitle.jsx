const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-8 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="py-6 text-lg w-1/2">{overview}</h2>
      <div>
        <button className="bg-gray-500 text-white p-2 px-8 text-xl rounded-md">
          ▷Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-xl rounded-md">
          ❕More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
