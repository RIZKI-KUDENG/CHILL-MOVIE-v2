import CardSliders from "../Elements/CardSliders";
import { movieSlider } from "../../Data/MovieSlider";
const Content = () => {
  return (
    <div className="flex gap-4">
    {movieSlider.map((item) => (
      <CardSliders
        key={item.id}
        title={item.title}
        image={item.image}
        rating={item.rating}
      />
    ))}
  </div>
  )
};
export default Content;