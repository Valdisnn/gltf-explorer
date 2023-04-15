import { React, Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { proxy } from "valtio";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BiCheck } from "react-icons/bi";

import Loader from "./Components/Loader";
import ModelPicker from "./Components/ModelPicker";
import ColorPicker from "./Components/ColorPicker";

import Shoe from "./Components/Shoe";
import Zelda from "./Components/Zelda";
import Girl from "./Components/Girl";

const ShoeState = proxy({
  current: null,
  colors: {
    laces: "#d3d3d3",
    mesh: "#d3d3d3",
    caps: "#d3d3d3",
    inner: "#d3d3d3",
    sole: "#d3d3d3",
    stripes: "#d3d3d3",
    band: "#d3d3d3",
    patch: "#d3d3d3",
  },
});

const ZeldaState = proxy({
  current: null,
  colors: {
    mat_zelda: "#fff",
    mat_zeldaEyes: "#fff",
    mat_zeldaHair: "fff",
  },
});

const GirlState = proxy({
  current: null,
  colors: {
    e79cbce79d9b: "#fff",
    e5a4b4e58f91: "#fff",
    e8a1a3e69c8d: "#fff",
    e885b0e5b8a6: "#fff",
    e8a3a4e5ad90: "#fff",
    e68aabe882a9: "#fff",
    e8a1a8e68385: "#fff",
  },
});

function App() {
  const [selectedModel, setSelectedModel] = useState("Shoe");
  const controls = useRef();

  const updateShoeCurrent = (value) => {
    ShoeState.current = value;
  };

  const updateZeldaCurrent = (value) => {
    ZeldaState.current = value;
  };

  const updateGirlCurrent = (value) => {
    GirlState.current = value;
  };

  const updateShoeColor = (pro, value) => {
    ShoeState.colors[pro] = value;
  };

  const updateZeldaColor = (pro, value) => {
    ZeldaState.colors[pro] = value;
  };

  const updateGirlColor = (pro, value) => {
    GirlState.colors[pro] = value;
  };

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "Shoe":
        return (
          <Shoe
            castShadow
            colors={ShoeState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );
      case "Zelda":
        return (
          <Zelda
            castShadow
            colors={ZeldaState.colors}
            updateCurrent={updateZeldaCurrent}
          />
        );
      case "Girl":
        return (
          <Girl
            castShadow
            colors={GirlState.colors}
            updateCurrent={updateGirlCurrent}
          />
        );
      default:
        break;
    }
  };

  const renderSelectedColorPicker = () => {
    switch (selectedModel) {
      case "Shoe":
        return <ColorPicker state={ShoeState} updateColor={updateShoeColor} />;
      case "Zelda":
        return (
          <ColorPicker state={ZeldaState} updateColor={updateZeldaColor} />
        );
      case "Girl":
        return <ColorPicker state={GirlState} updateColor={updateGirlColor} />;
      default:
        break;
    }
  };

  const updateSelectedModel = (selectedModel) => {
    controls.current.reset();
    setSelectedModel(selectedModel);
  };

  return (
    <>
      <ModelPicker updateSelectedModel={updateSelectedModel} />
      {renderSelectedColorPicker()}
      <Canvas shadows camera={{ position: [1, 0, 2] }}>
        <ambientLight />
        <spotLight
          intensity={0.5}
          penumbra={1}
          position={[7, 15, 10]}
          castShadow
        />
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 1.1]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
        <Suspense fallback={<Loader />}>
          <Float speed={1} rotationIntensity={0} floatIntensity={1}>
            {renderSelectedModel()}
          </Float>
        </Suspense>
        <OrbitControls ref={controls} maxDistance={5} minDistance={0.5} />
      </Canvas>
      <div className="info-icon">
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>Обозреватель GLTF проектов /тестовая версия/</span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>
            В обязательном порядке создается папка с моделью в папке public
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>Команда преобразования в JSX : npx gltfjsx 'scene'.gltf</span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>В дальнейшем планируется реализация backend состовляющей</span>
        </div>
        <div className="holder">
          <span>
            <br />
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>
            ЛКМ - перемещение камеры (клик на объекте - цветовая палитра)
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>ПКМ - перемещение объекта</span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>Колесо - изменение масштаба</span>
        </div>
        <div className="holder">
          <span>
            <br />
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>
            * Цветовая палитра может отличаться (зависит от свойств макета)
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>
            ** На данный момент нельзя добавлять из браузера новые модели
          </span>
        </div>
        <div className="holder">
          <HiChevronDoubleRight color="#a8a8a8" size={24} />
          <span>
            *** Чтобы добавить новые модели, необходимо вмешательство в код
          </span>
        </div>
      </div>
      {/*  */}
      <div className="info-icon-bottom">
        <div className="holder">
          <BiCheck color="#a8a8a8" size={24} />
          <a
            href="https://sketchfab.com/3d-models/botw-zelda-cb493bf5aaa24aa098964799cceca8fb"
            target="_blank"
            rel="noreferrer"
          >
            CC-BY-4.0 Автор Макета 1 : Landon & Emma / Название : BOTW Zelda
          </a>
        </div>
        <div className="holder">
          <BiCheck color="#a8a8a8" size={24} />
          <a
            href="https://sketchfab.com/3d-models/genshin-impact-jean-219f469862534dc5b1edeeba10b3d78e"
            target="_blank"
            rel="noreferrer"
          >
            CC-BY-4.0 Автор Макета 2 : archiveblue51121 / Название : Genshin
            Impact = Jean
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
