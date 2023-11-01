The future of social media is here, introducing DoodleBin!

1. Identify your user(s)
Mass appeal.

2. What is the problem you’re solving?
There’s no way for the average person to express themselves creatively daily nor to see what your friends are thinking about when idle.

3. What is the solution?
Instagram-like app where users are able to doodle whatever they’d like in a paint-like interface and then upload it to a feed to share with other users.

4. What is the MVP scope? (core features you must get working)
-drawing functionality works
-able to save drawings as images
-upload data to database (going to use mongoose)
-generate a feed

5. What are the tough technical challenges involved with solving this problem?
-setting up webpack
-setting up database
-getting the drawing pad functionality to work

6. What are the stretch goals?
-multiple users
-comment section on each doodle
-likes
-customize your profile
-prompt of the day that all users see and you can upload specifically to that feed

HIGH LEVEL OVERVIEW
Setup Your Development Environment:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your computer.
    Create a new directory for your project.
    Initialize the Project:

2. Use npm init to create a package.json file and set up your project.
    Install necessary dependencies, including Express, Mongoose, and any other libraries you plan to use. You can do this using npm install.
    Create a Web Server with Express:

3. Set up an Express.js server to serve your web application.
    Create a basic HTML file for the main application structure and a canvas element for drawing.
    Implement the Drawing Functionality:

4. Use JavaScript to capture mouse events (e.g., mousedown, mousemove, and mouseup) on the canvas element.
    Implement code to draw on the canvas as the user moves the mouse.
    You may need to use HTML5 Canvas API for this purpose.
    Save Drawings on the Server:

5. Create an API endpoint to handle the submission of drawings.
    Use Mongoose to define a data model for drawings, and save the drawings in a MongoDB database.
    When a user submits a drawing, send it to the server using AJAX (e.g., fetch or Axios).
    Display Drawings on the Feed:

6. Create a feed page where users can view all the uploaded drawings.
    Fetch drawings from the database using Mongoose and render them on the feed page.
    Webpack Configuration:

7. Set up Webpack to bundle your JavaScript code and other assets (CSS, images, etc.) into a single file for production.
    Frontend Styling:

8. Use CSS to style your web application and make it visually appealing.
    User Authentication (Optional):

9. If needed, implement user authentication to allow users to log in, upload drawings, and track their submissions.
    Error Handling and Validation:

10. Implement error handling and validation to ensure that the user input is correct and secure.
    Testing and Debugging:

11. Test your app thoroughly to identify and fix any issues.
    Use debugging tools like browser developer tools and server logs.

Deployment: (extension lmao)
Deploy your web application to a hosting service or platform of your choice (e.g., Heroku, AWS, or Vercel).
Ensure that the database is properly configured in the production environment.
Security:
Implement security measures to protect your application from common web vulnerabilities.
This is a high-level overview of the steps involved in creating a drawing app using JavaScript, Mongoose, and Webpack. The specific implementation details will depend on your project requirements and design choices. Be sure to consult relevant documentation and tutorials for each technology and library you use, and continually test and refine your application as you develop it.

-build - this folder is copied from webpack unit, not sure what its for yet, probably development vs production server thing which i dont know if i care about
-client - the drawing functionality and feed display functionlity should go in here
-server - get request to get image file, post request to send it back (similar to those assessments)

-used npm to install express, mongoose and body-parser