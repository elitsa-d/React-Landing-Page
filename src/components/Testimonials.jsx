import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonialItems = [
    {
      paragraph:
        "Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.",
      name: "Catherine Soft",
      jobTitle: "Managing Director",
    },
    {
      paragraph:
        "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
      name: "Kelvin Wood",
      jobTitle: "Digital Marketer",
    },
    {
      paragraph:
        "Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.",
      name: "David Martin",
      jobTitle: "Website Manager",
    },
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        {/* <!-- ***** Section Title Start ***** --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">What do they say?</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                libero.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- ***** Section Title End ***** --> */}

        <div className="row">
          {testimonialItems.map((item) => (
            <Testimonial
              key={item.name}
              paragraph={item.paragraph}
              name={item.name}
              jobTitle={item.jobTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
