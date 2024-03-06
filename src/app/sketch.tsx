import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5'; 

interface Dot {
  x: number;
  y: number;
  diameter: number;
}

const P5Sketch: React.FC = () => {
  const numDots = 50;
  const dots: Dot[] = [];

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        diameter: 10,
      });
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(255);
    p5.noStroke();

    dots.forEach((dot, index) => {
      const distance = p5.dist(p5.mouseX, p5.mouseY, dot.x, dot.y);

      if (distance < 50) {
        // Move the dot away from the mouse
        dot.x += p5.random(-5, 5);
        dot.y += p5.random(-5, 5);
      }

      // Keep the dots within the canvas
      dot.x = p5.constrain(dot.x, 0, p5.width - dot.diameter);
      dot.y = p5.constrain(dot.y, 0, p5.height - dot.diameter);

      p5.fill(0, 0, 255);
      p5.ellipse(dot.x, dot.y, dot.diameter, dot.diameter);
    });
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketch;