// Define the asynchronous function
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the data container element
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a ul element to hold the user list
    const userList = document.createElement("ul");

    // Loop through each user and create li elements
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle any errors that occur during fetching
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Invoke fetchUserData when the DOM content has fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
