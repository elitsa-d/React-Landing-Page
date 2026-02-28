import BlogPost from "./BlogPost";

export default function Blog() {
  const blogItems = [
    {
      image: "assets/images/blog-item-01.png",
      title: "Vivamus ac vehicula dui",
      content:
        "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.",
    },
    {
      image: "assets/images/blog-item-02.png",
      title: "Phasellus convallis augue",
      content:
        "Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. finibus urna ut velit venenatis, vel ultrices sapien mattis.",
    },
    {
      image: "assets/images/blog-item-03.png",
      title: "Nam gravida purus non",
      content:
        "Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.",
    },
  ];

  return (
    <section className="section" id="blog">
      <div className="container">
        {/* <!-- ***** Section Title Start ***** --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Blog Entries</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Integer molestie aliquam gravida. Nullam nec arcu finibus,
                imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                molestie.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- ***** Section Title End ***** --> */}

        <div className="row">
          {blogItems.map((item) => (
            <BlogPost
              key={item.title}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
