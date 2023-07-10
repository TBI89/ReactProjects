import axios from "axios";
import User from "../Models/User";
import appConfig from "../Utils/AppConfig";

class UserService {

    // Get users from the backend:
    public async getUsers(): Promise<User[]> {

        // Get all users as a response object:
        const response = await axios.get<User[]>(appConfig.usersUrl);

        // Extract data from response:
        const users = response.data;

        // Return data:
        return users;
    }
}

const userService = new UserService(); // Singleton.
export default userService;