export default function Testimonial(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="team-item">
        <div className="team-content">
          <i>
            <img src="assets/images/testimonial-icon.png" alt="" />
          </i>
          <p>{props.paragraph}</p>
          <div className="user-image">
            <img src="http://placehold.it/60x60" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">{props.name}</h3>
            <span>{props.jobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
