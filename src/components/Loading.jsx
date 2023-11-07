const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-16">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-8 h-8 border-4 border-red-600 rounded-full animate-spin"
      ></div>
      <p className="ml-2 text-gradient dark:text-red-600">Loading...</p>
    </div>
  );
};

export default Loading;
