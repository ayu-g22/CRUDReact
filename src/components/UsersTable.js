import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);  // State to control form visibility
  const [newUser, setNewUser] = useState({ name: '', email: '' });  // State to handle form data

  // Fetch users from a dummy API (JSONPlaceholder for demo)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Handle edit button click
  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setIsFormOpen(false); // Ensure add form is closed
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle update of user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, currentUser);
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
      setIsEditing(false);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle adding a new user
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' }); // Reset form after submission
      setIsFormOpen(false); // Close the form
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Handle input change for editing and adding user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setCurrentUser((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setNewUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Users Table</h3>

      {/* Add or Edit User Form */}
      {(isFormOpen || isEditing) && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h4 className="text-lg font-medium text-gray-800">{isEditing ? 'Edit User' : 'Add New User'}</h4>
          <form onSubmit={isEditing ? handleUpdate : handleAddUser} className="space-y-4">
            <input
              type="text"
              name="name"
              value={isEditing ? currentUser.name : newUser.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="User Name"
            />
            <input
              type="email"
              name="email"
              value={isEditing ? currentUser.email : newUser.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">
              {isEditing ? 'Update User' : 'Add User'}
            </button>
            <button
              type="button"
              className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md"
              onClick={() => {
                setIsFormOpen(false);
                setIsEditing(false);
                setCurrentUser(null);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Plus Icon to open the Add User form */}
      {!isEditing && !isFormOpen && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white w-16 pb-2 rounded-full shadow-lg hover:scale-110 transform transition duration-300 ease-in-out focus:outline-none flex items-center justify-center"
          >
            <span className="text-3xl font-bold">+</span>
          </button>
        </div>
      )}

      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left text-sm text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Email</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleEdit(user)} className="text-blue-500 hover:underline mr-4">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
