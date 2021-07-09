<template>
  <ol class="step-indicator">
    <StepNavigationStep
      v-for="step in steps"
      is="step-navigation-step"
      :key="step.id"
      :step="step"
      :currentstep="currentstep"
    />
  </ol>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import StepNavigationStep from "./StepNavigationStep.vue";
export default defineComponent({
  name: "StepNavigation",
  props: ["steps", "currentstep"],
  components: {
    StepNavigationStep,
  },
});
</script>