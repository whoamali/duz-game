import * as React from "react";

import checker from "./utils/checker";

import "./assets/css/App.css";
import XImage from "./assets/images/X.png";
import OImage from "./assets/images/O.png";

interface BackgroundImage {
  backgroundImage: {
    sec0: string | undefined;
    sec1: string | undefined;
    sec2: string | undefined;
    sec3: string | undefined;
    sec4: string | undefined;
    sec5: string | undefined;
    sec6: string | undefined;
    sec7: string | undefined;
    sec8: string | undefined;
  };
}

function App() {
  const [turn, setTurn] = React.useState<"X" | "O">("X");
  const [secBackgroundImage, setSecBackgroundImage] = React.useState<
    BackgroundImage["backgroundImage"]
  >({
    sec0: undefined,
    sec1: undefined,
    sec2: undefined,
    sec3: undefined,
    sec4: undefined,
    sec5: undefined,
    sec6: undefined,
    sec7: undefined,
    sec8: undefined,
  });
  const [_update, setUpdate] = React.useState<boolean>(true);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    const secId =
      id === "sec0"
        ? "sec0"
        : id === "sec1"
        ? "sec1"
        : id === "sec2"
        ? "sec2"
        : id === "sec3"
        ? "sec3"
        : id === "sec4"
        ? "sec4"
        : id === "sec5"
        ? "sec5"
        : id === "sec6"
        ? "sec6"
        : id === "sec7"
        ? "sec7"
        : "sec8";
    if (secBackgroundImage[secId] === undefined) {
      setSecBackgroundImage((prevSecBackgroundImage) => {
        prevSecBackgroundImage[secId] = turn === "X" ? XImage : OImage;
        return prevSecBackgroundImage;
      });
    }
    setUpdate((perUpdate) => !perUpdate);
  };

  React.useEffect(() => {
    if (checker(secBackgroundImage) === "win") {
      console.log("win");
      setSecBackgroundImage({
        sec0: undefined,
        sec1: undefined,
        sec2: undefined,
        sec3: undefined,
        sec4: undefined,
        sec5: undefined,
        sec6: undefined,
        sec7: undefined,
        sec8: undefined,
      });
      alert(`Game Over! Winner: ${turn}`);
      setUpdate((perUpdate) => !perUpdate);
    } else if (checker(secBackgroundImage) === false) {
      setTurn((preTurn) => (preTurn === "O" ? "X" : "O"));
      setUpdate((perUpdate) => !perUpdate);
    } else {
      console.log("equal");
      setSecBackgroundImage({
        sec0: undefined,
        sec1: undefined,
        sec2: undefined,
        sec3: undefined,
        sec4: undefined,
        sec5: undefined,
        sec6: undefined,
        sec7: undefined,
        sec8: undefined,
      });
      alert(`Equal!`);
      setUpdate((perUpdate) => !perUpdate);
    }
  }, [JSON.stringify(secBackgroundImage)]);

  return (
    <main>
      <section className="sections">
        {Object.keys(secBackgroundImage).map((secId) => (
          <div
            key={secId}
            id={secId}
            className="sections-item"
            onClick={handleClick}
            style={{
              backgroundImage: `url(${
                secBackgroundImage[
                  secId === "sec0"
                    ? "sec0"
                    : secId === "sec1"
                    ? "sec1"
                    : secId === "sec2"
                    ? "sec2"
                    : secId === "sec3"
                    ? "sec3"
                    : secId === "sec4"
                    ? "sec4"
                    : secId === "sec5"
                    ? "sec5"
                    : secId === "sec6"
                    ? "sec6"
                    : secId === "sec7"
                    ? "sec7"
                    : "sec8"
                ]
              })`,
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </section>
    </main>
  );
}

export default App;
