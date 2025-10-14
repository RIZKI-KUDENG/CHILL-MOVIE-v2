import { Button } from "../Elements/Button";
import InputField from "./InputField";

export const MovieModal = (props) => {
  const { onClose, titleEdit, imageEdit, kategoriEdit, children } = props;
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#181A1C] p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between">
          <h2 className=" text-2xl">Edit Movie</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            &times;
          </button>
        </div>
        <div>
          <form action='' className="p-2">
            <InputField
              name="title"
              text="Edit Title"
              type="text"
              placeholder={titleEdit}
            />
            <InputField
              name="image"
              text="Edit Image"
              type="text"
              placeholder={imageEdit}
            />
            <InputField
              name="kategori"
              text="Edit Kategori"
              type="text"
              placeholder={kategoriEdit}
            />
          </form>
        </div>
        <div className=" flex gap-2 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
