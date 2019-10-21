<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
import Layout from './layout/Layout'
import router from './router'
export default {
  router,
  components: { Layout },
}
</script>
