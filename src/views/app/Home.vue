<template src="./Home.html"></template>
<style src="./Home.scss" lang="scss" scoped></style>

<script>
import { Selected } from '@/components/selected';
import { CardHire } from '@/components/card-hire';
import { Thumbnail } from '@/components/thumbnail';

import { getCitiesByCode, getDistrictsByCode } from '@/helpers/readLocation.js';
import { mapActions } from 'vuex';

export default {
  components: { Selected, CardHire, Thumbnail },
  data () {
    return {
      address: {
        city: {
            code: '79',
            data: ''
        },
        district: {
            code: '',
            data: ''
        }
      }
    }
  },
  methods: {
    ...mapActions({
      firstLoading: 'user/firstLoading'
    }),

    onSelectedCity({ code, data }) {
      Object.assign(this.address.city, { code, data })
    },
    onSelectedDistrict({ code, data }) {
      Object.assign(this.address.district, { code, data })
    }
  },
  computed: {
    getCities() {
      return getCitiesByCode(this.address.city.code)
    },
    getDistricts() {
        if(!this.address.city.code) return [];
        return getDistrictsByCode(this.address.city.code)
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


