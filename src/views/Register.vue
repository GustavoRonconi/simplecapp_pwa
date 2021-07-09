<template>
  <div class="container mt-3">
    <StepNavigation :steps="steps" :currentstep="currentstep" />

    <div v-show="currentstep == 1" class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">IRFácil</h1>
        <p class="lead">
          Por favor, nos diga o seu perfil para que possamos lhe indicar o
          produto correto.
        </p>
        <select
          class="form-select"
          v-model="profileType"
        >
          <option value="1">Pessoa Física</option>
          <option value="2">Escritório/Contabilidade</option>
        </select>
      </div>

      <div v-show="profileType==1" class="row card-deck mb-3 text-center">
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Free</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $0 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                class="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $15 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $29 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="currentstep == 2">
      <h3>Step 2</h3>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
    </div>

    <div v-show="currentstep == 3">
      <h3>Step 3</h3>
      <div class="form-group">
        <label for="textarea">Example textarea</label>
        <textarea class="form-control" name="textarea" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label for="file">File input</label>
        <input
          type="file"
          class="form-control-file"
          name="file"
          aria-describedby="fileHelp"
        />
        <small id="fileHelp" class="form-text text-muted"
          >This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.</small
        >
      </div>
    </div>
    <Step
      v-for="step in steps"
      :currentstep="currentstep"
      :key="step.id"
      :step="step"
      :stepcount="steps.length"
      @step-change="stepChanged"
    />
  </div>
</template>

<script lang="ts">
import Step from "../components/wizzard/Step.vue";
import StepNavigation from "../components/wizzard/StepNavigation.vue";
import { defineComponent } from "vue";

declare interface StepIn {
  id: number;
  title: string;
  icon_class: string;
}

declare interface Wizzard {
  currentstep: number;
  profileType: string;
  steps: StepIn[];
}

export default defineComponent({
  name: "Wizzard",
  data() {
    return {
      profileType: "1",
      currentstep: 1,
      steps: [
        {
          id: 1,
          title: "Detalhes",
          icon_class: "fa fa-th-list",
        },
        {
          id: 2,
          title: "Cadastro",
          icon_class: "fa fa-user-circle",
        },

        {
          id: 3,
          title: "Pagamento",
          icon_class: "far fa-credit-card",
        },
      ],
    } as Wizzard;
  },
  methods: {
    stepChanged(stepId: number) {
      this.currentstep = stepId;
    }
  },
  components: {
    Step,
    StepNavigation,
  },
});
</script>


<style scoped lang="scss">
$wizard-color-neutral: #ccc !default;
$wizard-color-active: #f7de50 !default;
$wizard-color-complete: #87d37c !default;
$wizard-step-width-height: 64px !default;
$wizard-step-font-size: 24px !default;

@import "https://fonts.googleapis.com/css?family=Roboto";

.container {
  max-width: 960px;
}

.card-deck .card {
  min-width: 220px;
  max-width: 300px;
}

.mt-4 {
  margin-top: 100px !important;
}

::v-deep(.step-wrapper) {
  padding: 20px 0;
  display: none;

  &.active {
    display: block;
  }
}

::v-deep(.step-indicator) {
  border-collapse: separate;
  display: table;
  margin-left: 0px;
  position: relative;
  table-layout: fixed;
  text-align: center;
  vertical-align: middle;
  padding-left: 0;
  padding-top: 20px;

  li {
    display: table-cell;
    position: relative;
    float: none;
    padding: 0;
    width: 1%;

    &:after {
      background-color: $wizard-color-neutral;
      content: "";
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
      top: $wizard-step-width-height/2;
    }

    &:after {
      left: 50%;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &.active {
      .step {
        border-color: $wizard-color-active;
        color: $wizard-color-active;
      }

      .caption {
        color: $wizard-color-active;
      }
    }

    &.complete {
      &:after {
        background-color: $wizard-color-complete;
      }

      .step {
        border-color: $wizard-color-complete;
        color: $wizard-color-complete;
      }

      .caption {
        color: $wizard-color-complete;
      }
    }
  }

  .step {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid $wizard-color-neutral;
    font-size: $wizard-step-font-size;
    color: $wizard-color-neutral;
    height: $wizard-step-width-height;
    line-height: $wizard-step-width-height;
    margin: 0 auto;
    position: relative;
    width: $wizard-step-width-height;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  .caption {
    color: $wizard-color-neutral;
    padding: 11px 16px;
  }
}
</style>