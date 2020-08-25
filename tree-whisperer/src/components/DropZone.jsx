import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop your leaf here</p>
        ) : (
          <p className="dropzone-content">
            Drag and drop your plant photo here, or click to select photos
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
