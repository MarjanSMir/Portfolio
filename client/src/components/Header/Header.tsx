import Nav from "./../Menu/Nav";
const Header: React.FC = () => {
  return (
    <article className="w-full h-screen  bg-[url(/client/src/assets/Home-bg.webp)] bg-cover font-serif home-bg flex justify-center flex-column items-center">
      <Nav />
      <div className="text-gray-800 w-[70rem] h-[25rem] backdrop-blur-xs flex justify-center items-center flex-col box mt-20">
        <h1 className="text-5xl">Hi! I'm Marjan</h1>
        <h2 className="text-3xl leading-20">
          UI/UX Designer and Web Developer
        </h2>
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 mt-10"
        >
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <a href="" className="text-l">My Resume</a>
        </button>
      </div>
    </article>
  );
};

export default Header;
