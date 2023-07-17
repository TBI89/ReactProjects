import { useEffect, useState } from "react";
import employeesService from "../../../Services/EmployeeService";
import appConfig from "../../../Utils/AppConfig";
import "./Employees.css";
import Employee from "../../../Models/Employee";
import { NavLink } from "react-router-dom";

function Employees(): JSX.Element {

    // Employees state:
    const [frontendEmployees, setFrontendEmployees] = useState<Employee[]>([]);

    // Go the backend once:
    useEffect(() => {

        // Get employees:
        employeesService.getAllEmployees()
            .then(backendEmployees => setFrontendEmployees(backendEmployees))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="Employees">
            
            <h3>New Employee</h3>
            <NavLink to="/employees/add" >➕</NavLink>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Birth Date</th>
                        <th>Image</th>
                    </tr>
                </thead>

                {frontendEmployees.map(e =>

                    <tbody>
                        <tr key={e.id}>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.title}</td>
                            <td>{e.country}</td>
                            <td>{e.city}</td>
                            <td>{e.birthDate}</td>
                            <td>
                                <img src={`${appConfig.employeesImageUrl}/${e.imageName}`} />
                            </td>
                        </tr>
                    </tbody>
                )}

            </table>

        </div>
    );
}

export default Employees;
