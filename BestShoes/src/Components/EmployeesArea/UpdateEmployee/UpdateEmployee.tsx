import { useForm } from "react-hook-form";
import Employee from "../../../Models/Employee";
import "./UpdateEmployee.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import employeesService from "../../../Services/EmployeeService";

function UpdateEmployee(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<Employee>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.empId;

    useEffect(() => {
        employeesService.getOneEmployee(id)
            .then(employee => {
                setValue("firstName", employee.firstName);
                setValue("lastName", employee.lastName);
                setValue("title", employee.title);
                setValue("country", employee.country);
                setValue("city", employee.city);
                setValue("birthDate", employee.birthDate);
                setValue("imageName", employee.imageName);
            })
            .catch(err => alert(err.message));
    }, []);

    async function updateEmployee(employee: Employee) {
        try {
            employee.id = id;
            employee.imageName = (employee.imageName as unknown as FileList)[0];
            await employeesService.updateEmployee(employee);
            alert("Employee has been updated");
        }
        catch (err: any) {
            alert(err.message);
        }

    }

    return (
        <div className="UpdateEmployee">

            <h2>Update Employee</h2>

            <form onSubmit={handleSubmit(updateEmployee)}>

                <label>First Name:</label>
                <input type="text"{...register("firstName")} required minLength={2} maxLength={15} />

                <label>Last Name:</label>
                <input type="text"{...register("lastName")} required minLength={2} maxLength={15} />

                <label>Title:</label>
                <input type="text"{...register("title")} required minLength={2} maxLength={15} />

                <label>Country:</label>
                <input type="text"{...register("country")} required minLength={2} maxLength={15} />

                <label>City:</label>
                <input type="text"{...register("city")} />

                <label>Birth Date:</label>
                <input type="text"{...register("birthDate")} />

                <label>Image:</label>
                <input type="file"{...register("imageName")} />

                <button>Update</button>

            </form>

        </div>
    );
}

export default UpdateEmployee;
