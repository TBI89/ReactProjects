import { useForm } from "react-hook-form";
import Employee from "../../../Models/Employee";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import employeesService from "../../../Services/EmployeeService";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit } = useForm<Employee>();
    const navigate = useNavigate();

    async function addNewEmployee(employee: Employee) {
        try {
            await employeesService.addNewEmployee(employee);
            console.log("New employee was added", employee);

        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="AddEmployee">

            <h2>Add New Employee</h2>

            <form>

                <label>First Name:</label>
                <input type="text" {...register("firstName")} required minLength={2} maxLength={15}/>

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} required minLength={2} maxLength={20}/>

                <label>title:</label>
                <input type="text" {...register("title")} required minLength={2} maxLength={25}/>

                <label>Country:</label>
                <input type="text" {...register("country")} required minLength={2} maxLength={15}/>

                <label>City:</label>
                <input type="text" {...register("city")}/>

                <label>Birth Date:</label>
                <input type="text" {...register("birthDate")}/>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("imageName")}/>

                <button>Send</button>

            </form>

        </div>
    );
}

export default AddEmployee;
