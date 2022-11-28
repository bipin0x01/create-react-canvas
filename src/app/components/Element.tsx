import { FC } from "react";
import { useCanvasContext } from "app/hooks/useCanvas";
import useResponsiveSize from "app/hooks/useResponsiveSize";
import useColor from "app/hooks/useColor";

const Element: FC = () => {
  const { context } = useCanvasContext();
  const { width, height } = useResponsiveSize();
  const { generateColor } = useColor();

  // generate bg color using custom hook
  generateColor();

  const render = () => {
    if (context) {
      var img = new Image();
      img.src =
        "http://www.html5canvastutorials.com/demos/assets/wood-pattern.png";
      // Clear the canvas
      context.clearRect(0, 0, width, height);
      // Demopattern
      context.fillStyle = "white";
      context.fillRect(400, 200, width / 2, height / 2);

      requestAnimationFrame(render);
    }
  };

  if (context) render();
  return null;
};

export default Element;
