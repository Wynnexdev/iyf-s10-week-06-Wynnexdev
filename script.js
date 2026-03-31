async function getSingleUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function getUserPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getSingleUser();
getAllUsers();
getUserPosts();
