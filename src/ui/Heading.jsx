const Heading = ({ as = "h1", className = "", children }) => {
  return (
    <>
      {as === "h1" && <h1 className={className}>{children}</h1>}
      {as === "h2" && <h2 className={className}>{children}</h2>}
      {as === "h3" && <h3 className={className}>{children}</h3>}
    </>
  );
};

export default Heading;
