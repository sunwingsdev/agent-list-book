import { useState } from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { imageUpload } from "../../../api/api";
import "./LogoDashboard.css";
import LogoCard from "../../../component/dashboard/LogoCard/LogoCard";
import {
  useAddLogoMutation,
  useDeleteALogoMutation,
  useGetAllLogosQuery,
  useUpdateLogoSelectionMutation,
} from "../../../redux/features/allApis/logoApi/logoApi";
import ConfirmationModal from "../../../component/shared/ConfirmationModal";
import SimpleModal from "../../../component/shared/SimpleModal";
import { SuccessToast } from "../../../component/shared/SuccessToast";
import ErrorToast from "../../../component/shared/ErrorToast";

const LogoDashboard = () => {
  const [addLogo] = useAddLogoMutation();
  const [updateLogoSelection] = useUpdateLogoSelectionMutation();
  const [deleteLogo] = useDeleteALogoMutation();
  const { data } = useGetAllLogosQuery();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      setLoading(true);
      const imageData = await imageUpload(selectedFile);
      console.log("image url ", imageData?.url);
      const logoInfo = { logoUrl: imageData?.url };
      try {
        const result = await addLogo(logoInfo);
        if (result.data.insertedId) {
          SuccessToast("Logo uploaded successfully");
          handleRemoveImage();
          setLoading(false);
        }
      } catch (error) {
        ErrorToast(error.message);
        setLoading(false);
      }
    } else {
      ErrorToast("No file selected");
    }
  };

  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteLogo(id);
      if (result.data.deletedCount > 0) {
        SuccessToast("Logo deleted successfully");
        setShow(false);
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  const handleUpdate = async (id, value) => {
    try {
      const result = await updateLogoSelection({ id, isSelected: value });
      if (result.data.modifiedCount > 0) {
        setShow(false);
        SuccessToast("Logo selected successfully");
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <Container className="form-container mt-5 p-4 shadow rounded bg-light">
      <Form id="photo-upload-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Upload Your Photo</h2>
        <Form.Group className="form-group">
          <div
            className={`upload-container ${previewUrl ? "image-selected" : ""}`}
            onClick={() => document.getElementById("photo").click()}
          >
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {previewUrl ? (
              <div className="image-preview">
                <Button
                  variant="danger"
                  onClick={handleRemoveImage}
                  className="remove-button"
                >
                  X
                </Button>
                <Image src={previewUrl} alt="Selected" fluid />
              </div>
            ) : (
              <div className="upload-placeholder">
                <i className="bi bi-upload" style={{ fontSize: "2rem" }}></i>
                <p>Click to upload image</p>
              </div>
            )}
          </div>
        </Form.Group>
        <Form.Group className="form-group text-center">
          <Button
            disabled={loading}
            type="submit"
            className="mt-3"
            variant="primary"
          >
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </Form.Group>
      </Form>
      {data && data?.length !== 0 ? (
        <div className="logo-container">
          {data?.map((logo) => (
            <LogoCard
              key={logo?._id}
              logo={logo}
              handleShow={handleShow}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <h3>No logos has been uploaded</h3>
        </div>
      )}
      <>
        <SimpleModal
          show={show}
          handleClose={() => setShow(false)}
          handleShow={() => setShow(true)}
        >
          <ConfirmationModal
            handleClose={() => setShow(false)}
            handleDelete={handleDelete}
          />
        </SimpleModal>
      </>
    </Container>
  );
};

export default LogoDashboard;
