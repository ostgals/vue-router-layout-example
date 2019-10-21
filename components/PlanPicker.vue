<template>
  <div class="plans">
    <plan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedPlan"
      @select="selectPlan"
    ></plan>
  </div>
</template>

<script>
import Plan from './Plan'

export default {
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null,
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    },
  },
  components: {
    Plan,
  },
}
</script>
