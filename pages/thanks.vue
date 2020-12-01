<template>
  <div class="container">
    <h1 class="subtitle" data-test-id="heading">Thank You, {{ firstName }}!</h1>

    <p>You are very appreciated!</p>
  </div>
</template>

<script>
export default {
  computed: {
    firstName() {
      return this.$route.params.first_name;
    },
  },
};
</script>

<style></style>
