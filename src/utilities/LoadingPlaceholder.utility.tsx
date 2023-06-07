const LoadingPlaceholder = () => {
  return (
    <div className="center_items" style={{ height: "100vh" }}>
      <div aria-busy="true" style={{ transform: "scale(2)" }} />
    </div>
  );
};

export default LoadingPlaceholder;
