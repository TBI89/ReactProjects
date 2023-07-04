import "./Home.css";

function Home(): JSX.Element {

    const date = new Date();  // Initialize the current date

    return (

        <div className="Home">
            {/* Display the message only on the 1st of each month */}
             {date.getDate() === 1 && <p>מבצע החודש! 50% הנחה על הזוג השני🥾</p>}
        </div>
    );
}

export default Home;
