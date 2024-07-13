export default function Loader({ large }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 hv-center" style={{ zIndex: 1000 }}>
      <div className="h-full w-full bg-black bg-opacity-20 backdrop-blur-sm fixed"></div>
      <span
        className={`w-20 h-20 bg-transparent border-4 border-t-1 border-t-primary rounded-full animate-spin relative z-20`} style={{ zIndex: 1001 }}
      ></span>
    </div>
  );
}
