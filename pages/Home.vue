<template>
  <div class="page-content">
    <h1>Home</h1>
    <h3>Pick your plan:</h3>
    <plan-picker></plan-picker>
  </div>
</template>

<script>
import PlanPicker from '../components/PlanPicker'

export default {
  components: { PlanPicker },
}
</script>
