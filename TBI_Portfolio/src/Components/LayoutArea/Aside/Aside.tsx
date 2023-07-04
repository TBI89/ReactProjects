import "./Aside.css";

function Aside(): JSX.Element {
    return (
        <div className="Aside">
			<ul>
                <h3>My Stack:</h3>
                <br/>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>TypeScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Aside;
