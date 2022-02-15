import "./star.css";

export default function Star({rating}) {
  const width = (rating * 75) / 4.2;

  return (
    <div className="gold-star" style={{ width: `${width}px` }}>
      <div style={{ width: "100px" }}>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
    </div>
  );
}