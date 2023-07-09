import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../About/About";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Products from "../../Products/Products";
import SuccessStoreys from "../../SuccessStoreys/SuccessStoreys";
import Youtube from "../Home/Youtube/Youtube";
import Employees from "../../EmployeesArea/Employees/Employees";

function Routing(): JSX.Element {
    return (

        <Routes>

            {/* Home Route */}
            <Route path="/home" element={<Youtube />}></Route>

            {/* Products Route */}
            <Route path="/products" element={<Products />}></Route>

            {/* SuccessStoreys Route */}
            <Route path="/success" element={<SuccessStoreys />}></Route>

            {/* Employees Route */}
            <Route path="/employees" element={<Employees />}></Route>

            {/* About Route */}
            <Route path="/about" element={<About />}></Route>

            {/* PageNotFound Route */}
            <Route path="*" element={<PageNotFound />}></Route>

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/home" />}></Route>

        </Routes>

    );
}

export default Routing;
