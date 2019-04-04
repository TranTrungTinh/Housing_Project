<template>
    <a-layout class="layout">
      <a-layout-header>
          Header
      </a-layout-header>
      <a-layout-content>
          <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
export default {
    name: 'Layout'
}
</script>
<style src="./Layout.scss" lang="scss" scoped></style>
