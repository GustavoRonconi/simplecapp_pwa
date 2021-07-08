<template>
  <div class="step-wrapper" :class="stepWrapperClass">
    <button
      type="button"
      class="btn btn-primary"
      @click="lastStep"
      :disabled="firststep"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-primary"
      @click="nextStep"
      :disabled="laststep"
    >
      Next
    </button>
    <button type="submit" class="btn btn-primary" v-if="laststep">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: ["step", "stepcount", "currentstep"],
  computed: {
    active() {
      return this.step.id == this.currentstep;
    },

    firststep() {
      return this.currentstep == 1;
    },

    laststep() {
      return this.currentstep == this.stepcount;
    },

    stepWrapperClass() {
      return {
        active: this.active,
      };
    },
  },
  methods: {
    nextStep() {
      this.$emit("step-change", this.currentstep + 1);
    },

    lastStep() {
      this.$emit("step-change", this.currentstep - 1);
    },
  },
};
</script>