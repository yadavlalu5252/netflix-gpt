const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-8 absolute text-white bg-gradient-to-r from-black/50 to-transparent">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="py-6 text-lg w-1/2">{overview}</h2>
      <div>
        <button className="bg-white text-black p-2 px-8 text-xl rounded-md hover:bg-opacity-80">
          ▷Play
        </button>
        <button className="mx-2 bg-gray-700 text-white p-2 px-8 text-xl rounded-md">
          ❕More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
