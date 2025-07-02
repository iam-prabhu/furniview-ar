import React from "react";
import "@google/model-viewer";

const FurnitureViewer = ({ model }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
      <model-viewer
        src={model.glbUrl}
        ios-src={model.usdzUrl}
        alt={`3D view of ${model.name}`}
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "500px", borderRadius: "1rem" }}
      >
        <button
          slot="ar-button"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          📱 View in Your Space
        </button>
      </model-viewer>
    </div>
  );
};

export default FurnitureViewer;
