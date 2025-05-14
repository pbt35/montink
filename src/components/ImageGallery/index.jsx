import { useEffect, useState } from "react";

const ImageGallery = ({ colors, selectedColor, setSelected, selected }) => {
  const selectedColorObj = colors.find(c => c.name === selectedColor);
  const defaultImage = colors[0]?.image || "";
  const [mainImage, setMainImage] = useState(selectedColorObj?.image || defaultImage);

  useEffect(() => {
    if (selectedColorObj?.image) {
      setMainImage(selectedColorObj.image);
    } else {
      setMainImage(defaultImage);
    }
  }, [selectedColorObj, defaultImage]);

  const handleThumbnailClick = (img, name) => {
    setMainImage(img);
    setSelected({ ...selected, color: name });
  };

  return (
    <div className="w-full">
    <div className="shadow-md p-4 rounded-lg border bg-gray-50">
        <div className="w-full h-[350px] md:h-[400px] flex items-center justify-center bg-white">
            <img
                src={mainImage}
                alt="Produto"
                className="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    <div className="flex gap-2 mt-4 flex-wrap justify-center">
      {colors.map(({ name, image }) => (
        <img
          key={name}
          src={image}
          onClick={() => handleThumbnailClick(image, name)}
          className={`w-[75px] h-[75px] object-cover rounded cursor-pointer border-2 ${
            mainImage === image ? "border-blue-500" : "border-transparent"
          }`}
          alt={`Miniatura ${name}`}
        />
      ))}
    </div>
  </div>
  
  );
};

export default ImageGallery;
