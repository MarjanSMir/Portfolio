import Nav from "./../Menu/Nav"
const Header: React.FC = ()=> {

  return (
    <article className="w-full h-screen  bg-[url(/client/src/assets/Home-bg.webp)] bg-cover font-serif home-bg flex justify-center flex-column items-center">
      <Nav />
      <div className="text-gray-800 w-[70rem] h-[25rem] backdrop-blur-xs flex justify-center items-center flex-col box">
        <h1 className="text-5xl">Hi! I'm Marjan</h1>
        <h2 className="text-3xl leading-20">UI/UX Designer and Web Developer</h2>
      </div>
    </article>

  );
}

export default Header;
