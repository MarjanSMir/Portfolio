import Nav from "./../../components/Menu/Nav";
function About() {
  return (
    <article className="w-full h-screen  bg-gray-500 bg-cover font-serif home-bg flex justify-center flex-column items-center bg-[url(/client/src/assets/Home-bg.webp)]">
      <Nav />

      <div className="box-2 w-10/12 h-9/12 backdrop-blur-md opacity-80 shadow-md fixed  mt-25 flex justify-center flex-column items-center leading-8">
        <h1 className="text-3xl mr-36">About Me</h1>
        <p className="w-4/6 text-2xl ">
          I’m a web developer with a Bachelor’s degree in{" "}
          <strong>Computer Engineering</strong> from West Tehran University. My
          journey into web development began with learning web design, which
          quickly grew into a deep passion for building modern, responsive
          websites. <br /> Specialize in{" "}
          <strong>front-end and back-end technologies</strong> including HTML,
          CSS, JavaScript, React.js, Node.js, Tailwind, and Bootstrap. I enjoy
          crafting clean, efficient code and continuously learning new tools and
          frameworks to enhance my skills. <br /> I’m committed to creating
          digital experiences that are both visually appealing and
          user-friendly.
        </p>
      </div>
    </article>
  );
}

export default About;
