import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };

  const handleFileUpload = () => {
    if (!file) return;
    console.log(file);
  };

  const handleImageManipulation = async () => {
    if (!file || !file.type.startsWith('image/')) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'jabulani');

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dqmt1otz8/image/upload',
      formData
    );

    const imageUrl = res.data.secure_url;
    const transformedImageUrl = imageUrl.replace('/upload/', '/upload/e_grayscale/');
    setPreview(transformedImageUrl);
  };

  const renderPreview = () => {
    if (!file) return null;

    const fileType = file.type;
    if (fileType.startsWith('image/')) {
      return <img src={preview} alt="Preview" className="w-full h-auto rounded-lg shadow-lg border" />;
    } else if (fileType.startsWith('video/')) {
      return <video controls className="w-full h-auto rounded-lg shadow-lg border" src={preview}></video>;
    } else if (fileType.startsWith('audio/')) {
      return <audio controls className="w-full h-auto" src={preview}></audio>;
    } else if (fileType === 'application/pdf') {
      return <iframe className="w-full h-96 rounded-lg shadow-lg border" src={preview}></iframe>;
    }
  };

  return (
    <div className=" items-center m-auto flex flex-col justify-center min-h-screen p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">File Upload</h2>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,audio/*,video/*,.pdf"
          className="border-2 border-dashed border-gray-400 rounded-lg p-4 w-full mb-4 cursor-pointer hover:border-blue-500 transition duration-200"
        />
        {renderPreview()}
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex-grow mr-2"
            onClick={handleFileUpload}
          >
            Upload File
          </button>
          {file && file.type.startsWith('image/') && (
            <button
              className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex-grow ml-2"
              onClick={handleImageManipulation}
            >
              Manipulate Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
