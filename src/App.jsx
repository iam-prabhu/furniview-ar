// File: src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import { furnitureData } from "./data/furnitureData";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

function App() {
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureData[0]);
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (selectedFurniture) {
      initAR();
    }
  }, [selectedFurniture]);

  const initAR = async () => {
    if (!containerRef.current) return;

    // Clear previous renderer
    if (rendererRef.current) {
      rendererRef.current.dispose();
      containerRef.current.innerHTML = "";
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    containerRef.current.appendChild(ARButton.createButton(renderer));

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      selectedFurniture.glbUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0, 0, -1);
        scene.add(model);
      },
      undefined,
      (error) => console.error('GLTF load error:', error)
    );

    function animate() {
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    }

    animate();

    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Live AR Furniture Viewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Choose Furniture</h2>
          <ul className="space-y-2">
            {furnitureData.map((item) => (
              <li
                key={item.id}
                className={`p-3 rounded-lg cursor-pointer shadow-md bg-white hover:bg-blue-100 transition ${
                  selectedFurniture.id === item.id ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedFurniture(item)}
              >
                <div className="font-medium">{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:col-span-2 bg-black rounded-lg"
          style={{ height: "80vh" }}
          ref={containerRef}
        ></div>
      </div>
    </div>
  );
}

export default App;
