import MovieModal from "./MovieModal";
import { Button } from "../Elements/Button";

const AddMovieModal = (props) => {
  const { onClose, onClick } = props;
  return (
    <div>
      <MovieModal onClose={onClose}>
        <Button
          clas="py-3 px-3 mx-auto bg-[#3254FF] cursor-pointer rounded-lg"
          btn="Tambah Film"
        />
      </MovieModal>
      <Button
        onClick={() => onClick}
        btn="Tambah Film"
        clas="py-3 rounded-full bg-[#E7E3FC3B] w-full hover:bg-[#E7E3FC3B] hover:bg-opacity-20 transition-colors font-normal flex items-center justify-center gap-2"
      />
    </div>
  );
};
export default AddMovieModal;
