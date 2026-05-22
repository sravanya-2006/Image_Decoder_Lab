import { useState } from "react";

function ImageUploader() {
    const [image,setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if(file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <input 
               type = "file"
               accepts = "image/*"
               onChange = {handleImageUpload}
            />

            {image && (
                <div>
                    <h3>Preview</h3>

                    <img
                      src = {image}
                      alt = "Preview"
                      width = "300"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageUploader;