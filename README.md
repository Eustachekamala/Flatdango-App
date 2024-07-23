# Flatdango-App

Film Application
This web application allows users to view films and add new films to the collection. It retrieves film data from a RESTful API and renders it dynamically on the page.

Features
View the first film prominently displayed in the sidebar.
Browse through a list of additional films displayed in the main section.
Add new films using a form.
Installation
Clone the repository:

Start the application:

Open index.html in your web browser.
Usage
View Films:

Upon loading the page, the first film will be displayed prominently in the sidebar (#aside).
Additional films will be listed in the main section (#card-films).
Add a New Film:

Click the "Add Film" button (#btnAdd) to reveal the film submission form (#formSection).
Fill in the required fields: title, poster URL, runtime, capacity, showtime, description.
Click "Submit" to add the film. The new film will be appended to the list of films displayed on the page.
API Integration
The application interacts with a RESTful API hosted locally (http://localhost:3000/films).
It fetches films using GET requests to retrieve film data.
It adds new films using a POST request to submit film data.
Error Handling
If there are any issues fetching or adding films, appropriate error messages will be displayed to the user.
Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


