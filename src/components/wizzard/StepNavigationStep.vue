<template>
  <li :class="indicatorclass">
    <div class="step"><i :class="step.icon_class"></i></div>
    <div class="caption hidden-xs hidden-sm text-navigation">
      Passo <span v-text="step.id"></span>: <span v-text="step.title"></span>
    </div>
  </li>
</template>

<script>
export default {
  name: "StepNavigationStep",
  props: ["step", "currentstep"],

  computed: {
    indicatorclass() {
      return {
        active: this.step.id == this.currentstep,
        complete: this.currentstep > this.step.id,
      };
    },
  },
};
</script>

<style scoped>
.text-navigation {
  color: #4b4949 !important;
}
</style>