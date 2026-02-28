export default function Stat({ stat, title, last }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className={`count-item ${last ? "" : "decoration-bottom"}`}>
        <strong>{stat}</strong>
        <span>{title}</span>
      </div>
    </div>
  );
}
