import User from "../../../Models/User";
import userService from "../../../Services/UserService";
import "./UserList.css";
import { useEffect, useState } from "react";

function UserList(): JSX.Element {

    // Users state:
    const [frontendUsers, setFrontendUsers] = useState<User[]>([]);

    // Go to the backend once:
    useEffect(() => {
        userService.getUsers()
            .then(backendUsers => setFrontendUsers(backendUsers))
            .catch(err => alert(err.message));
    }, []);

    console.log(frontendUsers);
    
    return (
        <div className="UserList">

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>

                {frontendUsers.map(u =>

                    <tbody>

                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.username}</td> {/*Doesn't display */}
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.city}</td>   {/*Doesn't display */}
                        </tr>

                    </tbody>

                )}

            </table>

        </div>
    );
}

export default UserList;
