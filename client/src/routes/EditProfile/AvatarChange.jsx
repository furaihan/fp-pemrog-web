import { useState } from 'react';

const AvatarChange = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {

    console.log('Uploading image...', selectedImage);
  };

  return (
    <div className="avatar-change">
      <div className="avatar-preview">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected Avatar" />
        ) : (
          <img
            src="default-avatar.png" // You can set a default avatar image
            alt="Default Avatar"
          />
        )}
      </div>
      <div className="avatar-input">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleImageUpload} disabled={!selectedImage}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default AvatarChange;
