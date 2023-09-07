<template>
  <div>
  <h1>Modelos:</h1>
    <router-link v-for="route in routes" :key="route.name" :to="{ name: route.name }">
      {{ route.name }}
    </router-link>
  </div>
</template>
<script lang="ts">
export default {

  computed: {
    routes() {
      return this.$router.options.routes.filter(r => r.name === 'Page').flatMap(r => r.children || r);
    }
  }
}
</script>
