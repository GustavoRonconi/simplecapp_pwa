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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Step",
  props: ["step", "stepcount", "currentstep"],
  computed: {
    active(): boolean {
      return this.step.id == this.currentstep;
    },

    firststep(): boolean {
      return this.currentstep == 1;
    },

    laststep(): boolean {
      return this.currentstep == this.stepcount;
    },

    stepWrapperClass(): { active: boolean } {
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
});
</script>