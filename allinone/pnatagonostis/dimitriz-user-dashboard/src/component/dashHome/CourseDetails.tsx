import React, { useState } from "react";
import { Upload, Button, Input, Typography, message } from "antd";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import EditTermsAndCondition from "../../pages/EditTermsAndConditions";

const { TextArea } = Input;
const { Paragraph } = Typography;
const MAX_FIELDS = 8;
const MAX_CHARACTERS = 120;

const CourseDetails: React.FC = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState(Array(4).fill(""));
  const [inputFields2, setInputFields2] = useState(Array(4).fill(""));
  const [inputFields3, setInputFields3] = useState(Array(4).fill(""));

  // Helper function to handle image preview
  const handlePreviewImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setThumbnail(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Helper function to handle video preview
  const handlePreviewVideo = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVideo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddField = () => {
    if (inputFields.length < MAX_FIELDS) {
      setInputFields([...inputFields, ""]);
    }
  };

  const handleInputChange = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields);
  };

  const handleAddField2 = () => {
    if (inputFields2.length < MAX_FIELDS) {
      setInputFields2([...inputFields2, ""]);
    }
  };
  const handleInputChange2 = (index, value) => {
    const newInputFields = [...inputFields2];
    newInputFields[index] = value;
    setInputFields2(newInputFields);
  };
  const handleAddField3 = () => {
    if (inputFields3.length < MAX_FIELDS) {
      setInputFields3([...inputFields3, ""]);
    }
  };
  const handleInputChange3 = (index, value) => {
    const newInputFields = [...inputFields3];
    newInputFields[index] = value;
    setInputFields2(newInputFields);
  };

  // Function to count the number of words in a string
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Course Thumbnail Preview */}
        <div className="flex gap-4 items-center border p-4 rounded-md w-full">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt="Course Thumbnail"
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">No image uploaded</span>
            </div>
          )}
          <div className="flex flex-col items-center">
            <Paragraph className="mt-4 text-center">
              Upload your course thumbnail (1200x800 pixels, .jpg, .jpeg, or
              .png).
            </Paragraph>
            <Upload
              beforeUpload={(file) => {
                handlePreviewImage(file);
                return false; // Prevent auto-upload
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />} className="bg-gray-200 mt-4">
                Upload image
              </Button>
            </Upload>
          </div>
        </div>

        {/* Course Trailer Preview or Placeholder */}
        <div className="flex  items-center border p-4 rounded-md gap-4 w-full">
          {video ? (
            <video
              src={video}
              controls
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">No video uploaded</span>
            </div>
          )}
          <div className="flex flex-col items-center">
            <Paragraph className="mt-4 text-center">
              Great promo videos boost enrollment by 5X, and exceptional ones
              can increase it to 10X.
            </Paragraph>
            <Upload
              beforeUpload={(file) => {
                handlePreviewVideo(file);
                return false; // Prevent auto-upload
              }}
              showUploadList={false}
            >
              <Button
                icon={<VideoCameraOutlined />}
                className="bg-gray-200 mt-4"
              >
                Upload Video
              </Button>
            </Upload>
          </div>
        </div>
      </div>

      {/* Course Descriptions */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Course Descriptions</h3>

        <EditTermsAndCondition />
        <div className="p-4">
          {/* Header with Flexbox */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">
              What you will teach in this course ({inputFields.length}/
              {MAX_FIELDS})
            </h3>
            {inputFields.length < MAX_FIELDS && (
              <Button onClick={handleAddField} type="primary">
                + Add new
              </Button>
            )}
          </div>

          {/* Input Fields */}
          {inputFields.map((field, index) => {
            const charCount = field.length; // Count characters in the current input field
            return (
              <div key={index} className="mb-4">
                <label className="text-sm text-[#344054] font-medium">
                  0{index + 1}
                </label>
                <Input
                  style={{
                    width: "100%",
                    height: "44px",
                    borderColor: "#D0D5DD",
                    color: "#667085",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  value={field}
                  placeholder={`What you will teach in this course...`}
                  maxLength={MAX_CHARACTERS} // Limit the input to 120 characters
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <p className="text-right text-gray-500 text-sm">
                  {charCount}/{MAX_CHARACTERS} characters
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-4">
          {/* Header with Flexbox */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">
              Target Audience ({inputFields2.length}/{MAX_FIELDS})
            </h3>
            {inputFields2.length < MAX_FIELDS && (
              <Button onClick={handleAddField2} type="primary">
                + Add new
              </Button>
            )}
          </div>

          {/* Input Fields */}
          {inputFields2.map((field, index) => {
            const charCount = field.length; // Count characters in the current input field
            return (
              <div key={index} className="mb-4">
                <label className="text-sm text-[#344054] font-medium">
                  0{index + 1}
                </label>
                <Input
                  style={{
                    width: "100%",
                    height: "44px",
                    borderColor: "#D0D5DD",
                    color: "#667085",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  value={field}
                  placeholder={`Who this course is for...`}
                  maxLength={MAX_CHARACTERS} // Limit the input to 120 characters
                  onChange={(e) => handleInputChange2(index, e.target.value)}
                />
                <p className="text-right text-gray-500 text-sm">
                  {charCount}/{MAX_CHARACTERS} characters
                </p>
              </div>
            );
          })}
        </div>
        <div className="p-4">
          {/* Header with Flexbox */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">
              Course requirements ({inputFields3.length}/{MAX_FIELDS})
            </h3>
            {inputFields3.length < MAX_FIELDS && (
              <Button onClick={handleAddField3} type="primary">
                + Add new
              </Button>
            )}
          </div>

          {/* Input Fields */}
          {inputFields3.map((field, index) => {
            const charCount = field.length; // Count characters in the current input field
            return (
              <div key={index} className="mb-4">
                <label className="text-sm text-[#344054] font-medium">
                  0{index + 1}
                </label>
                <Input
                  style={{
                    width: "100%",
                    height: "44px",
                    borderColor: "#D0D5DD",
                    color: "#667085",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  value={field}
                  placeholder={`What is you course requirements...`}
                  maxLength={MAX_CHARACTERS} // Limit the input to 120 characters
                  onChange={(e) => handleInputChange3(index, e.target.value)}
                />
                <p className="text-right text-gray-500 text-sm">
                  {charCount}/{MAX_CHARACTERS} characters
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-8">
          <Button>Preview</Button>
          <Button
            style={{ height: "44px", fontSize: "16px", fontWeight: 400 }}
            type="primary"
          >
            Save & Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
