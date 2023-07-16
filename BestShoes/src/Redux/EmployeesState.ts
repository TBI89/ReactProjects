import { createStore } from "redux";
import Employee from "../Models/Employee";

// 1. Global state
export class EmployeesState {
    public employees: Employee[] = []; // Initialized with an empty arr.
}

// 2. Action types:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
}

// 3. Actions:
export interface EmployeesActions {
    type: EmployeesActionType; // Action type.
    payload?: any; // Data related to that action.
}

// 4. Reducer (invoked by Redux library):
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesActions): EmployeesState {

    const newState = { ...currentState }; // Duplicate the global state.

    // Change the duplicated global state according to the action:
    switch (action.type) {
        case EmployeesActionType.FetchEmployees: 
            newState.employees = action.payload; 
            break;
        case EmployeesActionType.AddEmployee:
            newState.employees.push(action.payload);
            break;
        case EmployeesActionType.UpdateEmployee:
            const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id);
            if (indexToUpdate >= 0) newState.employees[indexToUpdate] = action.payload;
            break;
        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload);
            if (indexToDelete >= 0) newState.employees.splice(indexToDelete, 1);
            break;
    }

    return newState;
}

// 5. Store:
export const employeesStore = createStore(employeesReducer);