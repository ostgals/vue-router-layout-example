<template>
  <div class="plan" @click="select" :class="{active: selected}">{{ name }}</div>
</template>

<script>
export default {
  props: ['name', 'selected'],
  methods: {
    select() {
      this.$emit('select', this.name)
    },
  },
}
</script>
