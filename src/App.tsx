function App() {
  return (
    <div className="w-[120vh] flex flex-col items-center justify-center h-screen">
      <div className="p-16 flex justify-center items-center flex-col">
        <img className="w-22 h-22" src="/logo.png" alt="logo" />
        <h3 className="text-md m-2 font-bold">No Reels</h3>
      </div>
      <div className="footer p-4">
        made by{" "}
        <a href="https://github.com/hclank" target="_blank">
          @hclank
        </a>
      </div>
    </div>
  );
}

export default App;
