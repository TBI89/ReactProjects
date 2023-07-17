import axios from "axios";
import appConfig from "../Utils/AppConfig";
import Employee from "../Models/Employee";
import { EmployeesActionType, EmployeesActions, employeesStore } from "../Redux/EmployeesState";

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

    // Fetch one employee from the server:
    public async getOneEmployee(id: number): Promise<Employee> {

        // Get employees from global state:
        let employees = employeesStore.getState().employees;

        // Find the specific employee:
        let employee = employees.find(e => e.id === id);

        // Check if the employee exist:
        if (!employee) {
            const response = await axios.get<Employee>(appConfig.employeesUrl + id); // Get one employee as a response obj.
            employee = response.data; // Extract his data.
        }

        return employee;
    }

    // Add a new employee:
    public async addNewEmployee(employee: Employee): Promise<void> {

        // Header for configuration:
        const options = {
            headers: { "Content type": "multipart/form-data" }
        }

        // Send employee to the backend:
        const response = await axios.post<Employee>(appConfig.employeesUrl, employee, options);

        // Extract the added data:
        const newEmployee = response.data;

        // Add the new employee to global state:
        const action: EmployeesActions = { type: EmployeesActionType.AddEmployee, payload: newEmployee };
        employeesStore.dispatch(action);
    }

    // Update employee:
    public async updateEmployee(employee: Employee): Promise<void> {

        // Headers:
        const options = {
            headers: { "Content type": "multipart/form-data" }
        }

        // Send to backend:
        const response = await axios.put<Employee>(appConfig.employeesUrl + employee.id, employee, options);

        // Extract:
        const updatedEmployeeData = response.data;

        // Update in global state:
        const action: EmployeesActions = { type: EmployeesActionType.UpdateEmployee, payload: updatedEmployeeData };
        employeesStore.dispatch(action);
    }

    // Delete employee:
    public async deleteEmployee(id: number): Promise<void> {

        // Remove from backend:
        await axios.delete(appConfig.employeesUrl + id);

        // Remove from global state:
        const action: EmployeesActions = { type: EmployeesActionType.DeleteEmployee, payload: id };
        employeesStore.dispatch(action);
    }
}

const employeesService = new EmployeesService(); // Singleton

export default employeesService;