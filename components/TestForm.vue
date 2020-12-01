<template>
  <form @submit.prevent="submit">
    <label>
      First Name
      <input v-model="form.first_name" required />
    </label>

    <label>
      Last Name
      <input v-model="form.last_name" required />
    </label>

    <label>
      Email
      <input v-model="form.email" type="email" required />
    </label>

    <button type="submit" class="button--green">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
      },
    };
  },

  methods: {
    submit() {
      this.$router.push({
        name: 'thanks',
        params: { first_name: this.form.first_name },
      });
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

button {
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
}
</style>
