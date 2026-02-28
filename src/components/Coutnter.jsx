import Stat from "./Stat.jsx";

export default function Counter() {
  const statItems = [
    { stat: 126, title: "Projects" },
    { stat: 63, title: "Happy Clients" },
    { stat: 18, title: "Award Wins" },
    { stat: 27, title: "Countries", last: true },
  ];
  return (
    <section className="counter">
      <div className="content">
        <div className="container">
          <div className="row">
            {statItems.map((item) => (
              <Stat
                key={item.stat}
                stat={item.stat}
                title={item.title}
                last={item.last}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
