<template>
  <li :class="indicatorclass">
    <div class="step"><i :class="step.icon_class"></i></div>
    <div class="caption hidden-xs hidden-sm text-navigation">
      Passo <span v-text="step.id"></span>: <span v-text="step.title"></span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "StepNavigationStep",
  props: ["step", "currentstep"],

  computed: {
    indicatorclass(): { active: boolean; complete: boolean } {
      return {
        active: this.step.id == this.currentstep,
        complete: this.currentstep > this.step.id,
      };
    },
  },
});
</script>

<style scoped>
.text-navigation {
  color: #4b4949 !important;
}
</style>