import "./Main.css";
import imgSrc1 from "../../.././assets/images/main-image-1.jpg";
import imgSrc2 from "../../.././assets/images/main-image-2.jpg";
import imgSrc3 from "../../.././assets/images/main-image-3.jpg";

function Main(): JSX.Element {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    return (
        <div className="Main">
            <p>I'm a frontend developer, and i enjoy every second of it!</p>
            <p>Currently, i am web development student at John Bryce collage.<br />
                I'm aiming to become a fullstack developer in the near future🙂</p>
            <p>In the past, i was a personal trainer, and i managed my own business for almost a decade!<br />
                Skills like problem solving, high work ethic and self learning i used in a daily basis as a coach.</p>
            <p>I'm really enjoying my new journey, and consistently adding new tools to my toolbox💪</p>
            {randomNumber === 1 && <img className="my-image" src={imgSrc1} />}
            {randomNumber === 2 && <img className="my-image" src={imgSrc2} />}
            {randomNumber === 3 && <img className="my-image" src={imgSrc3} />}
        </div>
    );
}

export default Main;
