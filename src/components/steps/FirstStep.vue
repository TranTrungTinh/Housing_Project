<template>
    <div class="first-step">
        <div class="first-step--info_item">
            <span class="first-step--info__title">Thành phố</span>
            <Selected 
               :selects="getCities"
               :firstSelected="true"
               :onSelected="onSelectedCity"
               :placeholder="`Bấm để chọn thành phố`"
               :size="'large'"
               :setSelected="address.city"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Quận/Huyện</span>
            <Selected 
                :selects="getDistricts"
               :onSelected="onSelectedDistrict"
               :placeholder="`Bấm để chọn quận`"
               :size="'large'"
               :setSelected="address.district"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Phường/Xã</span>
            <Selected 
                :selects="getTowns"
               :onSelected="onSelectedTown"
               :placeholder="`Bấm để chọn phường`"
               :size="'large'"
               :setSelected="address.town"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Đường</span>
            <a-input size="large" placeholder="large size" v-model="address.lane"/>
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Số nhà</span>
            <a-input size="large" placeholder="large size" v-model="address.home"/>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Selected } from '@/components/selected';
import { getCitiesByCode, getDistrictsByCode, getTownsByCode } from '@/helpers/readLocation.js';

export default {
    props: {
        onData: { type: Function }
    },
    components: { Selected },
    data() {
        return {
            address: {
                city: {
                    code: '79',
                    data: ''
                },
                district: {
                    code: '',
                    data: ''
                },
                town: {
                    code: '',
                    data: ''
                },
                lane: '',
                home: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            postAddress: 'post/postAddress'
        }),
        getCities() {
            return getCitiesByCode(this.address.city.code)
        },
        getDistricts() {
            if(!this.address.city.code) return [];
            return getDistrictsByCode(this.address.city.code)
        },
        getTowns() {
            if(!this.address.district.code) return [];
            return getTownsByCode(this.address.district.code)
        }
    },
    methods: {
        onSelectedCity({ code, data }) {
            Object.assign(this.address.city, { code, data })
        },
        onSelectedDistrict({ code, data }) {
            Object.assign(this.address.district, { code, data })
        },
        onSelectedTown({ code, data }) {
            Object.assign(this.address.town, { code, data })
        },
    },
    mounted() {
        if(this.postAddress && this.postAddress.city.code) {
            Object.assign(this.address, this.postAddress);
        }
    },
    destroyed() {
        this.onData(this.address);
    }
}
</script>
<style lang="scss" scoped>
.first-step {

    &--info {

        &_item {
            margin-bottom: 20px;
        }

        &__title {
            font-size: 18px;
        }
    }
}
</style>


