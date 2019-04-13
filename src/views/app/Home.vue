<template src="./Home.html"></template>
<style src="./Home.scss" lang="scss" scoped></style>

<script>
import { Selected } from '@/components/selected';
import { CardHire } from '@/components/card-hire';
import { Thumbnail } from '@/components/thumbnail';

import { devConfig } from '@/configs/env/development';
import { mapActions } from 'vuex';

export default {
  components: { Selected, CardHire, Thumbnail },
  data () {
    return {
      city: devConfig.city,
      district: devConfig.district,

    }
  },
  methods: {
    ...mapActions({
      firstLoading: 'user/firstLoading'
    }),

    onSelected(value) {
      console.log(value);
    }
  },
  mounted() {
    this.$Progress.start();
    setTimeout(() => {
      this.firstLoading();
      this.$Progress.finish();
    }, 1000);
  },
}
</script>


