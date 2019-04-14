<template>
  <div :class="['util', { 'active': choose } ]" @click="onChoose(id)">
    <div class="util--icon">
      <i :class="icon"></i>
    </div>
    <div class="util--title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    icon: { type: String, required: true, default: 'fal fa-question-circle' },
    title: { type: String, required: true, default: 'Sample' },
    choose: { type: Boolean, default: false },
    onChoose: { type: Function }
  }
}
</script>
<style lang="scss" scoped>
.util {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  margin: 10px 0;
  background: #EFEFF4;
  border-radius: 8px;
  cursor: pointer;

  &--icon {
    font-size: 28px;
    margin: 0 10px;
  }
  &--title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 10px;
  }
}
.active {
    color: #fff;
    background: #3E74FF;
}
</style>



