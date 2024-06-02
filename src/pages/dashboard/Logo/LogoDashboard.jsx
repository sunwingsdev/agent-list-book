import { useState } from "react";
import "./LogoDashboard.css";
import { imageUpload } from "../../../api/api";

const LogoDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const imageData = await imageUpload(selectedFile);
      console.log("image url ", imageData?.url);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="form-container">
      <form id="photo-upload-form" onSubmit={handleSubmit}>
        <h2>Upload Your Photo</h2>
        <div className="form-group">
          <label htmlFor="photo">Choose a photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default LogoDashboard;
