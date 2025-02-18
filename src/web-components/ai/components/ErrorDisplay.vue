<template>
  <div class="error-message">
    <span>⚠️</span>
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String
})
</script>

<style scoped>
.error-message {
  color: #dc3545;
  padding: 8px;
  background: #f8d7da;
  border-radius: 4px;
}
</style>