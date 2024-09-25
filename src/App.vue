<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container">
        <router-link class="navbar-brand text-white" to="/">TaskMasta</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/tasks">Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/calendar">Calendar</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/profile">Profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view/>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-4 mt-5">
      <div class="container">
        <div class="row">
          <!-- About Section -->
          <div class="col-md-4">
            <h5>About Us</h5>
            <p>
              We are committed to helping you manage tasks efficiently.
            </p>
          </div>

          <!-- Links Section -->
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-white">Home</router-link></li>
              <li><router-link to="/tasks" class="text-white">Tasks</router-link></li>
              <li><router-link to="/calendar" class="text-white">Calendar</router-link></li>
            </ul>
          </div>

          <!-- Contact Section -->
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <i class="fas fa-phone-alt"></i> {{ phone }} <br>
              <i class="fas fa-envelope"></i> info@TaskMasta.com
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="text-center py-3">
        <p>&copy; 2024 TaskMasta. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      phone: '+123 456 7890'
    };
  }
};
</script>

<style scoped>
/* Customize styles here */
.navbar {
  border-bottom: 2px solid #333;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
}

footer {
  border-top: 2px solid #333;
}
</style>
