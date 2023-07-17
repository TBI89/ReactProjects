import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../About/About";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Products from "../../Products/Products";
import SuccessStoreys from "../../SuccessStoreys/SuccessStoreys";
import Youtube from "../Home/Youtube/Youtube";
import Employees from "../../EmployeesArea/Employees/Employees";
import UserList from "../../UserArea/UserList/UserList";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";

function Routing(): JSX.Element {
    return (

        <Routes>

            {/* Home Route */}
            <Route path="/home" element={<Youtube />} />

            {/* Products Route */}
            <Route path="/products" element={<Products />} />

            {/* SuccessStoreys Route */}
            <Route path="/success" element={<SuccessStoreys />} />

            {/* Employees Route */}
            <Route path="/employees" element={<Employees />} />

            {/* Add Employee */}
            <Route path="/employees/add" element={<AddEmployee />} />

            {/* Users Route */}
            <Route path="/users" element={<UserList />} />

            {/* About Route */}
            <Route path="/about" element={<About />} />

            {/* PageNotFound Route */}
            <Route path="*" element={<PageNotFound />} />

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/home" />} />

        </Routes>

    );
}

export default Routing;
