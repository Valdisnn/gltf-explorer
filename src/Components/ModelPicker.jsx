import React from "react";
import { SiBlender } from "react-icons/si";

const ModelPicker = ({ updateSelectedModel }) => {
  return (
    <>
      <div className="model-selector">
        <div onClick={() => updateSelectedModel("Shoe")}>
          <SiBlender alt="Тапок" />
          <h4>Обувь 1</h4>
        </div>
        <div onClick={() => updateSelectedModel("Zelda")}>
          <SiBlender alt="Зельда" />
          <h4>Макет 1</h4>
        </div>
        <div onClick={() => updateSelectedModel("Girl")}>
          <SiBlender alt="Герл" />
          <h4>Макет 2</h4>
        </div>
      </div>
    </>
  );
};

export default ModelPicker;
