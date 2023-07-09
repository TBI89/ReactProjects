import axios from "axios";
import appConfig from "../Utils/AppConfig";

class EmployeesService {

    // Get employees from the backend:
    public async getAllEmployees(): Promise<Employee[]> {

        // Get all employees as a respond object:
        const response = await axios.get<Employee[]>(appConfig.employeesUrl);

        // Extract data from the response:
        const employees = response.data;

        // Return data:
        return employees;
    }
}

const employeesService = new EmployeesService(); // Singleton

export default employeesService;