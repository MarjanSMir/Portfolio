import Nav from "./../Menu/Nav";
import "animate.css";
const Footer: React.FC = () => {
  return (
    <article className="w-full h-screen  bg-[url(/client/src/assets/footer.jpg)] bg-cover font-serif home-bg flex justify-center flex-column items-center">
        <footer className="w-screen h-72">
            <h2>Contact Me</h2>
            <a href="">Email</a>
            <a href="">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Phone Number</a>
        </footer>
    </article>
  );
};

export default Footer;
