<template>
    <div class="tasks-page container py-5">
      <h2 class="mb-4">My Tasks</h2>
  
      <!-- Task Form -->
      <div class="task-form mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="newTask"
            placeholder="Add a new task..."
          />
          <button @click="addTask" class="btn btn-primary">Add Task</button>
        </div>
      </div>
  
      <!-- Task List -->
      <ul class="list-group">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
          :class="{ 'task-completed': task.completed }"
        >
          <span>{{ task.title }}</span>
          <div>
            <button
              class="btn btn-sm btn-success me-2"
              @click="completeTask(index)"
              v-if="!task.completed"
            >
              Mark Complete
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteTask(index)">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TasksM',
    data() {
      return {
        newTask: '',
        tasks: [
          { title: 'Complete project report', completed: false },
          { title: 'Plan team meeting', completed: false },
        ],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ title: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      completeTask(index) {
        this.tasks[index].completed = true;
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .tasks-page {
    background-color: #f8f9fa;
    min-height: 100vh;
    padding: 20px;
    border-radius: 8px;
  }
  
  .task-form .form-control {
    margin-right: 10px;
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .task-completed {
    text-decoration: line-through;
    color: #aaa;
  }
  
  button.btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  button.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  </style>
  