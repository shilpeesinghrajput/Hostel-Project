
import { useState } from 'react';
import "./masonry.css"
import Heading from '../Heading/Heading';

const MasonryGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {

    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };


  // Function to render images in patches of three
function renderImagePatches(images) {
  const patches = [];
  for (let i = 0; i < images.length; i += 3) {
    const patch = images.slice(i, i + 3);
    const patchHtml = (
      <div className="grid gap-4">
        {patch.map((image, index) => (
          <div key={index} className='group'  onClick={() => {handleImageClick(image)}}>
            <img className="h-auto max-w-full rounded-lg" src={image.url} />
            <div
         
          className="overlay">

                <span className="search-icon">🔍</span>
            
          </div>
          </div>
        ))}
      </div>
    );
    patches.push(patchHtml);
  }
  return patches;
}
const imagePatches = renderImagePatches(images);

  return (
    <>

<Heading
        header={"Our Staff"}
        title={"MEET THE TEAM"}
        classname="mb-[8rem] mt-[7rem]"
      />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imagePatches.map((patch, index) => (
         <div key={index} className="grid gap-4">
         {patch}
    </div>
      ))}
      <div className="">


</div>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="max-w-3xl max-h-3/4">
            <img
              src={selectedImage.url}  
              className="object-contain w-full h-full"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={handleCloseClick}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MasonryGallery;
