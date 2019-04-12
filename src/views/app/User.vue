<template>
  <div class="user-container">
    <UserMain/>
  </div>
</template>

<script>
import {UserMain} from '@/components/user';
export default {
  components: {UserMain},
}
</script>
<style scoped>
  .user-container {
    background: #F9F9F9;
  }
</style>

