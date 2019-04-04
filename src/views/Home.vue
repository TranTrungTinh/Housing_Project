<template>
<div class="container">
  <div class="steps">
    <div class="steps-status">
      <a-steps class="steps-wrap" :current="current" direction="vertical" size="small">
        <a-step 
          v-for="(item, i) in steps" :key="i" :title="item.title" 
          :class="{'steps-wrap--item' : current === i}"
        />
      </a-steps>
      <div class="steps-content">
        <FirstStep  v-if="current % 2 === 0"/>
        <SecondStep v-else/>
      </div>
    </div>
    <div class="steps-action">
      <a-button
        v-if="current < steps.length - 1"
        type="primary" @click="next"
      >
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button
        v-if="current>0"
        style="margin-left: 8px"
        @click="prev"
      >
        Previous
      </a-button>
      <p>{{ windowWidth }}</p>
    </div>
  </div>
</div>
</template>
<script>
import { FirstStep, SecondStep } from '@/components/steps';

export default {
  components: { FirstStep, SecondStep },
  data() {
    return {
      current: 0,
      steps: [
        { title: 'First', content: 'First-content' },
        { title: 'Second', content: 'First-content' },
        { title: 'Third', content: 'First-content' },
        { title: 'Fourth', content: 'First-content' },
        { title: 'Fifth', content: 'First-content' },
        { title: 'Sixth', content: 'First-content' },
        { title: 'Seventh', content: 'First-content' },
        { title: 'Eighth', content: 'First-content' },
        { title: 'Nineth', content: 'First-content' },
      ],
      windowWidth: window.innerWidth
    }
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    }
  },
  mounted() {
      window.onresize = () => {
          this.windowWidth = window.innerWidth
      }
  }
}
</script>
<style lang="scss" scoped>
.steps {
  margin: 50px 0 0 0;

  &-status {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 500px;
    width: 100%;
    text-align: center;
    padding-top: 80px;
  }

  &-action {
    margin-top: 24px;
  }

  &-wrap {
    max-width: 110px;

    &--item {
      position: relative;
  
      &::after {
        content: "";
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent; 
        border-right: 10px solid #eee; 
        position: absolute;
        top: 2px;
        left: 100px;
      }
    }
  }

}
</style>
