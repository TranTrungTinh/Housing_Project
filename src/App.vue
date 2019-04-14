<template>
    <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  
body {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 16px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.container-fluid {
  margin-left: 20px;
  margin-right: 20px;
}
/* custom theme ant vue design */
.ant-input-group-addon {
    color: #3E74FF !important;
    font-weight: 500;
}
</style>
