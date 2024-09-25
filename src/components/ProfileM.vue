<template>
    <div class="profile-page container py-5">
      <h2 class="mb-4">My Profile</h2>
  
      <!-- Profile Form -->
      <form @submit.prevent="updateProfile">
        <!-- Name Field -->
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>
  
        <!-- Email Field -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
  
        <!-- Password Field -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="user.password"
            placeholder="Enter new password"
          />
        </div>
  
        <!-- Update Button -->
        <button type="submit" class="btn btn-primary">Update Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileM',
    data() {
      return {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: '',
        },
      };
    },
    methods: {
      updateProfile() {
        console.log('Profile updated:', this.user);
        alert('Profile updated successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    margin: auto;
  }
  
  h2 {
    color: #6a1b9a;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  button.btn-primary {
    background-color: #6a1b9a;
    border-color: #6a1b9a;
  }
  </style>
  