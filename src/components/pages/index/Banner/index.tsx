import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Variants, motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    let width: number;
    let height: number;
    if (canvas && document) {
      canvas.width = width = document!
        .querySelector(".banner")!!!
        .getBoundingClientRect().width;
      canvas.height = height = document!
        .querySelector(".banner")!!!
        .getBoundingClientRect().height;
      const ctx = canvas.getContext("2d");
      const resize = () => {
        canvas.width = width = document!
          .querySelector(".banner")!!!
          .getBoundingClientRect().width;
        canvas.height = height = document!
          .querySelector(".banner")!!!
          .getBoundingClientRect().height;
        ctx!.clearRect(0, 0, width, height);
        circles = [];
        create();
      };

      window.addEventListener("resize", resize);

      interface CircleImpl {
        x: number;
        y: number;
        radius: number;
        dx: number;
        dy: number;
        color: string;
        draw: () => void;
        update: () => void;
      }

      class Circle implements CircleImpl {
        x: number;
        y: number;
        radius: number;
        dx: number;
        dy: number;
        color: string;
        constructor(
          x: number,
          y: number,
          radius: number,
          dx: number,
          dy: number,
          color: string
        ) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.dx = dx;
          this.dy = dy;
          this.color = color;
        }
        draw() {
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx!.fillStyle = this.color;
          ctx!.fill();
        }
        update() {
          if (this.x > width || this.x < 0) {
            this.dx = -this.dx;
          }
          if (this.y > height || this.y < 0) {
            this.dy = -this.dy;
          }
          this.x += this.dx;
          this.y += this.dy;
          this.draw();
        }
      }
      let circles: CircleImpl[] = [];
      let colors = [
        "rgba(73, 88, 105, 0.3)",
        // "rgba(73, 83, 105, 0.5)",
        // "rgba(73, 83, 98, 0.5)",
        // "rgba(73, 88, 98, 0.5)",
      ];

      const create = () => {
        for (let i = 0; i < 10; i++) {
          var radius = 500 * 0.2;
          var x = Math.random() * width;
          var y = Math.random() * height;

          var dx = Math.random() * 0.5 + 1;
          var dy = Math.random() * 0.5 + 1;
          var color = colors[Math.floor(Math.random() * colors.length)];

          circles.push(new Circle(x, y, radius, dx, dy, color));
        }
      };

      const animation = () => {
        ctx!.clearRect(0, 0, width, height);

        requestAnimationFrame(animation);
        circles.map((c) => c.update());
      };

      animation();
      create();
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  return (
    <section
      className="h-screen flex flex-col justify-center items-center banner"
      id="home">
      <div className="relative">
        <h1 className="font-bold text-[40px] md:text-[60px] leading[70px] text-white">
          {"Hi, I'm Yu Takaki"}
        </h1>
        <h2
          ref={ref}
          className="text-[#15513d] text-lg m-auto bg-[#12ffb0] w-max px-2 font-medium">
          Full Stack Software Engineer
        </h2>
      </div>
      <motion.figure
        className="w-full max-w-[700px]"
        variants={initialVariants}
        animate={isInView ? "visible" : "hidden"}>
        <Image
          src="/images/banner.png"
          height={1072}
          width={1908}
          alt="banner"
        />
      </motion.figure>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen -z-50"></canvas>
    </section>
  );
};

export default Banner;
