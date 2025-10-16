import { useState } from "react";
import InputField from "./InputField";
import { Button } from "../Elements/Button";

const AddMovieModal = (props) => {
  const { onClose, onInput,onAdd } = props;
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    kategori: "New",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.image || !formData.kategori) {
      alert("Semua field harus diisi");
    } else {
      onAdd(formData)
      console.log(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#181A1C] p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between">
          <h2 className=" text-2xl">Tambah Movie</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            &times;
          </button>
        </div>
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="p-2"
          >
            <InputField
              name="title"
              text="Masukan Title"
              type="text"
              placeholder="Contoh: Avengers"
              value={formData.title}
              onChange={handleChange}
            />
            <InputField
              name="image"
              text="Masukan Image"
              type="text"
              placeholder="Contoh: https://..."
              value={formData.image}
              onChange={handleChange}
            />
            <InputField
              name="kategori"
              text="Masukan Kategori"
              type="text"
              placeholder="Top/New/Trending"
              value={formData.kategori}
              onChange={handleChange}
            />
            <div className=" flex gap-2 mt-2 justify-center items-center">
              <Button
                onClick={onInput}
                btn="Simpan"
                clas="py-3 px-3 rounded-full bg-[#3254FF] hover:bg-[#3254FF] hover:bg-opacity-20 transition-colors font-normal"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddMovieModal;
