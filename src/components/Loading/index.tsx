import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/loading.json";
import * as S from "./styles";

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <S.Container>
        <Lottie options={defaultOptions} height={100} width={100} />
      </S.Container>
    </div>
  );
};

export default Loading;
