import { NavLink } from "react-router-dom";
import "./Links.css";

function Links(): JSX.Element {
    return (
        <div dir="rtl" className="Links">
            <h2>תפריט</h2>
            <hr />
            <NavLink to="/home">דף הבית</NavLink><br />
            <NavLink to="/products">מוצרים</NavLink><br />
            <NavLink to="/success">סיפורי הצלחה</NavLink><br />
            <NavLink to="/about">מי אנחנו</NavLink><br />
            <NavLink to="/employees">עובדים</NavLink><br />
            <NavLink to="/users">משתמשים</NavLink>
        </div>
    );
}

export default Links;
