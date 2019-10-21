<template>
  <div class="layout">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import router from './router'
export default {
  router,
}
</script>
