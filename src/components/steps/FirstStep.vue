<template>
    <div class="first-step">
        <div class="first-step--info_item">
            <span class="first-step--info__title">Thành phố</span>
            <Selected 
               :selects="getCities"
               :firstSelected="true"
               :onSelected="onSelectedCity"
               :placeholder="`Bấm để chọn thành phố`"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Quận/Huyện</span>
            <Selected 
                :selects="getDistricts"
               :onSelected="onSelectedDistrict"
               :placeholder="`Bấm để chọn quận`"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Phường/Xã</span>
            <Selected 
                :selects="getTowns"
               :onSelected="onSelectedTown"
               :placeholder="`Bấm để chọn phường`"
            />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Đường</span>
            <a-input size="large" placeholder="large size" />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Số nhà</span>
            <a-input size="large" placeholder="large size" />
        </div>
    </div>
</template>
<script>
import { Selected } from '@/components/selected';
import { getCitiesByCode, getDistrictsByCode, getTownsByCode } from '@/helpers/readLocation.js';

export default {
    components: { Selected },
    data() {
        return {
            city: {
                code: '',
                data: ''
            },
            district: {
                code: '',
                data: ''
            },
            town: {
                code: '',
                data: ''
            }
        }
    },
    computed: {
        getCities() {
            return getCitiesByCode(79)
        },
        getDistricts() {
            if(!this.city.code) return [];
            return getDistrictsByCode(this.city.code)
        },
        getTowns() {
            if(!this.district.code) return [];
            return getTownsByCode(this.district.code)
        }
    },
    methods: {
        onSelectedCity({ code, data }) {
            Object.assign(this.city, { code, data })
        },
        onSelectedDistrict({ code, data }) {
            Object.assign(this.district, { code, data })
        },
        onSelectedTown({ code, data }) {
            Object.assign(this.town, { code, data })
        },
    },
    mounted() {
        // console.log(getCitiesByCode(this.city.code))
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


