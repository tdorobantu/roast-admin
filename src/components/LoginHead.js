import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import "./LoginHead.css";

const LoginHead = () => {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    setCanvas((prev) => document.getElementsByClassName("loginHead")[0]);
    if (canvas !== null) {
      console.log(canvas.toDataURL());
    }
  }, [canvas]);

  useEffect(() => {
    window.addEventListener("mousemove");

    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  const updateCanvas = () => {
    setCanvas((prev) => document.getElementsByClassName("loginHead")[0]);
    console.log(canvas.toDataURL());
  };

  return (
    <Spline
      onMouseMove={updateCanvas}
      className="loginHead"
      scene="https://prod.spline.design/XfHlIvOSpgjwjwEb/scene.splinecode"
    />
  );
};

export default LoginHead;
