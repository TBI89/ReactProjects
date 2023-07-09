class AppConfig {
    public readonly employeesUrl = "http://localhost:3030/api/employees/";
    public readonly employeesImageUrl = "http://localhost:3030/api/employees/images";
}

// Singleton:
const appConfig = new AppConfig;

export default appConfig;