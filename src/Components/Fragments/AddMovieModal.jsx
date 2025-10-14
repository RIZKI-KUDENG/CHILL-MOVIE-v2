import { useState } from "react";
import MovieModal from "./MovieModal";
import { Button } from "../Elements/Button";

const AddMovieModal = (props) => {
  const { onClose, onAdd } = props;

  return (
    <div>
      <MovieModal onClose={onClose}>
        <Button
          clas="py-3 px-3 mx-auto bg-[#3254FF] cursor-pointer rounded-lg"
          btn="Tambah Film"
          
        />
      </MovieModal>
    </div>
  );
};
export default AddMovieModal;
