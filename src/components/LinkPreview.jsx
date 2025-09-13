// LinkPreview.jsx
import React from "react";

const LinkPreview = ({ url }) => {
  return (
    <div
      className="my-4 p-2 rounded shadow"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "60vh",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        className="iframe-container"
      >
        <iframe
          src={url}
          title="Website Preview"
          style={{
            width: "100%",
            height: "1000px",
            border: "none",
            background: "white",
            transform: "scale(1)",
            transformOrigin: "top left",
            zoom: "25%",
            scrollbarColor: "rgba(0, 0, 0, 0.2) rgba(255, 255, 255, 0.8)",
            scrollbarWidth: "2px",
          }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <style>
        {`
                @media (max-width: 600px) {
                    .iframe-container {
                        height: 180px !important;
                        max-height: 40vh !important;
                    }
                }
            `}
      </style>
    </div>
  );
};

export default LinkPreview;
