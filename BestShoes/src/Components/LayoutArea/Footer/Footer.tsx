import "./Footer.css";


function Footer(): JSX.Element {

    const currentYear = new Date().getFullYear();

    function displayMyName() {
        alert("Tomer Ben Israel");
    }

    return (
        <div className="Footer">

            <button onClick={displayMyName}> ©️  {currentYear}כל הזכויות שמורות למשה אופניק אתרים </button>
			
        </div>
    );
}

export default Footer;
