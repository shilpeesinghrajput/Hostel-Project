import { useState } from "react";
import './masonry.css';
import Heading from "../Heading/Heading";
const MasonryOpus = ({ images }) => {
    const [modalImage, setModalImage] = useState(null);
  
    const handleImageClick = (imageUrl) => {
      setModalImage(imageUrl);
    };
  
    const handleCloseModal = () => {
      setModalImage(null);
    };
  
    return (
      <div className="flex justify-center">
    
  
        <div className="masonry">
          {images.map((image, index) => (
            <div key={index} className="masonry-item" onClick={() => handleImageClick(image)}>
              <img src={image.url} alt={`Gallery item ${index}`} />
              <div className="overlay">
                <span className="search-icon">🔍</span>
              </div>
            </div>
            
          ))}
        </div>
       
  
        {modalImage && (
          <div className="modal" onClick={handleCloseModal}>
            <span className="close-icon">✖</span>
            <img src={modalImage.url} alt="Modal content" className="modal-content" />
          </div>
        )}
      </div>
    );
  };
  
  export default MasonryOpus;
  