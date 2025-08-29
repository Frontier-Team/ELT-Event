import { useUnityContext } from "react-unity-webgl";
import { PacmanLoader } from "react-spinners";
import { GameContainer, PacmanContainer, UnityCanvas } from "./Game.styled";
import React, { useEffect } from "react";
import { Title } from "../styles/sharedStyles";

export const Game: React.FC = () => {
  const { unityProvider, isLoaded, initialisationError, unload } = useUnityContext({
    loaderUrl: "/ELT-Event/build/game/web.loader.js",
    dataUrl: "/ELT-Event/build/game/web.data",
    frameworkUrl: "/ELT-Event/build/game/web.framework.js",
    codeUrl: "/ELT-Event/build/game/web.wasm",
  });

  useEffect(() => {
    return () => {
      unload();
    };
  }, [unload]);

  if (initialisationError) {
    return <div> Oops, sorry! There was an error loading the game!</div>;
  }

  return (
    <>
      {isLoaded === false && (
        <PacmanContainer>
          <Title>Loading</Title>
          <PacmanLoader color="#B061FF" data-testid="pacman-loader" />
        </PacmanContainer>
      )}
      <GameContainer>
        <UnityCanvas unityProvider={unityProvider} />
      </GameContainer>
    </>
  );
};
