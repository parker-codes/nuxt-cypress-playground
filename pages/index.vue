<template>
  <div class="container">
    <h1 class="title" data-test-id="heading">
      testing-e2e
    </h1>

    <TestForm />
  </div>
</template>

<script>
import TestForm from '~/components/TestForm.vue';

export default {
  components: {
    TestForm,
  },
};
</script>
