<template>
    <div class="calendar-page container py-5">
      <h2 class="mb-4">Task Calendar</h2>
  
      <!-- FullCalendar Component -->
      <FullCalendar
        :plugins="[dayGridPlugin]"
        :events="calendarEvents"
      />
    </div>
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  
  export default {
    name: 'CalendarM',
    components: {
      FullCalendar,
    },
    data() {
      return {
        calendarEvents: [
          { title: 'Complete project report', start: '2024-09-25' },
          { title: 'Team meeting', start: '2024-09-28T10:30:00' },
          { title: 'Client call', start: '2024-10-01T14:00:00' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .calendar-page {
    background-color: #f8f9fa;
    min-height: 100vh;
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    color: #6a1b9a;
  }
  </style>
  