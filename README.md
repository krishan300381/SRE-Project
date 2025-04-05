Backend Setup (Spring Boot with Maven)
Install Maven:

Download and install Maven from:
https://maven.apache.org/download.cgi

Configure the Maven environment variable:

Add the MAVEN_HOME environment variable.

Add Maven's bin directory to the system PATH.

Install MySQL:

Download and install MySQL from:
https://dev.mysql.com/downloads/installer/

Create a database in MySQL for this project.

Configure MySQL in the Spring Boot project:

Open application.properties (or application.yml) in the backend project.

Update the database configuration: at application.properties


spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
Frontend Setup (React)
Install Node.js:

Download and install Node.js from:
https://nodejs.org/

Install npm (Node Package Manager):

npm is automatically installed with Node.js.

Verify installation by running in terminal:

nginx
Copy
Edit
node -v
npm -v
Run the Project
Start the project:

Locate and double-click the run.bat batch file provided in the project directory.

This will automatically start both the backend and frontend servers.

Notes:
Make sure your MySQL server is running before executing run.bat.

Ensure all environment variables and configurations are properly set.


