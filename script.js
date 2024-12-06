class UserAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async addUser(name, email) {
        try {
            const response = await fetch(`${this.baseURL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                const newUser = await response.json();
                console.log('User added:', newUser);
                return newUser;
            } else {
                const error = await response.json();
                console.error('Error adding user:', error);
                alert('Error adding user: ' + error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    }

    async updateUser(userId, name, email) {
        try {
            const response = await fetch(`${this.baseURL}/api/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                console.log('User updated:', updatedUser);
                return updatedUser;
            } else {
                const error = await response.json();
                console.error('Error updating user:', error);
                alert('Error updating user: ' + error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    }

    async getUsers() {
        try {
            const response = await fetch(`${this.baseURL}/api/users`);
            if (response.ok) {
                const users = await response.json();
                console.log('Users retrieved:', users);
                return users;
            } else {
                const error = await response.json();
                console.error('Error retrieving users:', error);
                alert('Error retrieving users: ' + error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    }

    async deleteUser(userId) {
        try {
            const response = await fetch(`${this.baseURL}/api/users/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('User deleted');
                return true;
            } else {
                const error = await response.json();
                console.error('Error deleting user:', error);
                alert('Error deleting user: ' + error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    }
}

// Використання класу
const api = new UserAPI('http://localhost:3000');

// Приклад виклику методів
// api.addUser('John Doe', 'john.doe@example.com');
// api.updateUser(1, 'John Smith', 'john.smith@example.com');
// api.getUsers().then(users => console.log(users));
// api.deleteUser(1);
