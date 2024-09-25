<template>
    <div class="home-container text-center">
      <!-- Hero Section -->
      <section class="hero bg-primary text-white py-5">
        <div class="container">
          <h1 class="display-4">Welcome to TaskMasta</h1>
          <p class="lead">Manage your tasks efficiently and stay on top of your schedule</p>
          <router-link to="/tasks" class="btn btn-light btn-lg mt-3">Get Started</router-link>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features py-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4">
              <div class="feature-card p-4">
                <i class="fas fa-tasks fa-3x mb-3 text-primary"></i>
                <h5>Task Management</h5>
                <p>Easily organize your tasks and track your progress.</p>
                <router-link to="/tasks" class="btn btn-outline-primary">View Tasks</router-link>
              </div>
            </div>
  
            <div class="col-md-4">
              <div class="feature-card p-4">
                <i class="fas fa-calendar-alt fa-3x mb-3 text-primary"></i>
                <h5>Calendar View</h5>
                <p>Keep an eye on upcoming deadlines and events.</p>
                <router-link to="/calendar" class="btn btn-outline-primary">View Calendar</router-link>
              </div>
            </div>
  
            <div class="col-md-4">
              <div class="feature-card p-4">
                <i class="fas fa-user fa-3x mb-3 text-primary"></i>
                <h5>Profile</h5>
                <p>Manage your profile settings and preferences.</p>
                <router-link to="/profile" class="btn btn-outline-primary">Go to Profile</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeM',
  };
  </script>
  
  <style scoped>
  .home-container {
    background-color: #f8f9fa;
    min-height: 100vh;
  }
  
  .hero {
    background-image: linear-gradient(120deg, #6a1b9a, #8e44ad);
    color: #fff;
  }
  
  .features .feature-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .features .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .features .btn-outline-primary {
    margin-top: 10px;
  }
  </style>
  