<template>
    <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&subset=vietnamese');
  
body {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 16px;
  overflow-x: hidden;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
