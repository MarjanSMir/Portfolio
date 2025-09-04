import CircleBubblesSlider from "./../../types/CircleBubblesSlider";
const Skills: React.FC = () => {
  return (
    <article className="w-full h-80 font-monospace home-bg flex justify-center flex-column items-center bg-linear-65 from-cyan-600 to-pink-500">
     <div style={{ padding: 24 }}>
      <CircleBubblesSlider
        items={[
          { src: "/client/src/assets/1.png", label: "HTML 5" },
          { src: "/client/src/assets/2.png", label: "CSS 3" },
          { src: "/client/src/assets/3.png", label: "JS" },
          { src: "/client/src/assets/4.png", label: "React" },
          { src: "/client/src/assets/5.png", label: "Tailwind" },
          { src: "/client/src/assets/6.png", label: "Bootstrap" },
          { src: "/client/src/assets/7.png", label: "NodeJS" },
          { src: "/client/src/assets/8.png", label: "MongoDB" },
          { src: "/client/src/assets/1.png", label: "Figma" },

         
        ]}
        size={130}
        gap={30}
        sideFade
      />
    </div>
    </article>
  );
};

export default Skills;
