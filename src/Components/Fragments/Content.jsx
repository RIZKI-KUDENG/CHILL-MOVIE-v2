import CardSliders from "../Elements/CardSliders";
import { movieContent } from "../../Data/MovieContent";
const Content = () => {
  return (
    <div className="flex gap-4">
    {movieContent.map((item) => (
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