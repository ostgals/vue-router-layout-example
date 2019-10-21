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

<style lang="scss" scoped>
.plan {
  margin: 0.5rem auto;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 1rem;

  &.active {
    border-color: black;
    background: #ffc600;
  }
}
</style>
