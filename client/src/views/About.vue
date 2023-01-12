<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a v-on:click="this.test">POST</a>
  </div>
</template>

<script>
import $api from '../../API/http';

export default {
  name: 'About',

  methods: {
    async test() {
      await $api.post('api', { test: "HELLO! I`M RESPONSE FROM SERVER" })
      .then(({ data }) => console.log(data));
    }

  }
}
</script>