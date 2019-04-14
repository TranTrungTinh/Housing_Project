<template>
    <div class="second-step">
        <div class="second-step--item">
            <span class="second-step--info__title">Loại phòng</span>
            <Selected 
                :placeholder="'Chọn loại phòng'"
                :size="'large'"
            />
        </div>
        <div class="second-step--item__title">Thông tin</div>
        <div class="second-step--item">
            <span class="second-step--info__title">Sức chứa</span>
            <a-input class="second-step--item__input" size="large" type="number" addonAfter="người/phòng" placeholder="Số người/phòng" />
        </div>
        <div class="second-step--item">
            <span class="second-step--info__title">Diện tích</span>
            <a-input size="large" type="number" addonAfter="m2" placeholder="Diện tích" />
        </div>
        <div class="second-step--item__title">Tiện ích</div>
        <div class="second-step--item">
            <a-row :gutter="20">
                <a-col :xs="12" v-for="item in utils" :key="item.id">
                    <Utilities
                        :id="item.id" 
                        :icon="item.icon" 
                        :title="item.mainData" 
                        :choose="item.choose"
                        :onChoose="onChoose"
                    />
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import { Selected } from '@/components/selected';
import { Utilities } from '@/components/utils';

export default {
    components: { Selected, Utilities },
    data() {
        return {
            utils: [
                {id: 1, icon: 'fal fa-tv', preData: '', mainData: 'TV', subData: '', choose: false},
                {id: 2, icon: 'fal fa-microchip', preData: '', mainData: 'Microwave', subData: '', choose: false},
                {id: 3, icon: 'fal fa-wind-warning', preData: '', mainData: 'Air conditioner', subData: '', choose: false},
                {id: 4, icon: 'fal fa-fire-smoke', preData: '', mainData: 'Smoke detector', subData: ''},
                {id: 5, icon: 'far fa-fire-extinguisher', preData: '', mainData: 'Fire extinguisher', subData: '', choose: false},
                {id: 6, icon: 'fal fa-industry-alt', preData: '', mainData: 'Balcony', subData: '', choose: false},
                {id: 7, icon: 'fal fa-bath', preData: '', mainData: 'Bathhub', subData: '', choose: false},
                {id: 8, icon: 'fal fa-trash-restore-alt', preData: '', mainData: 'Geyser', subData: '', choose: false},
                {id: 9, icon: 'fal fa-digital-tachograph', preData: '', mainData: 'Dish washer', subData: '', choose: false},
                {id: 10, icon: 'fas fa-plug', preData: '', mainData: 'Electric Chimney', subData: '', choose: false},
                {id: 11, icon: 'fal fa-parking-circle', preData: '', mainData: 'Parking', subData: '', choose: false},
                {id: 12, icon: 'fal fa-person-booth', preData: '', mainData: 'Room Heater', subData: '', choose: false},
                {id: 13, icon: 'fal fa-medkit', preData: '', mainData: 'First Aid Kit', subData: '', choose: false},
                {id: 14, icon: 'fal fa-universal-access', preData: '', mainData: 'Essentials', subData: '', choose: false},
                {id: 15, icon: 'fal fa-dog', preData: '', mainData: 'Pet Allowed', subData: '', choose: false},
                {id: 16, icon: 'fal fa-swimmer', preData: '', mainData: 'Pool', subData: '', choose: false},
                {id: 17, icon: 'fal fa-knife-kitchen', preData: '', mainData: 'Kitchen', subData: '', choose: false},
                {id: 18, icon: 'fab fa-elementor', preData: '', mainData: 'Elevator', subData: '', choose: false},
                {id: 19, icon: 'fas fa-dumpster', preData: '', mainData: 'Washing Machine', subData: '', choose: false},
                {id: 20, icon: 'fal fa-wifi', preData: '', mainData: 'Wi-Fi', subData: '', choose: false},
                {id: 21, icon: 'fal fa-network-wired', preData: '', mainData: 'Internet', subData: '', choose: false},
            ]
        }
    },
    methods: {
        onChoose(id) {
            this.utils = this.utils.map(item => {
                if(item.id !== id) return item;
                return { ...item, choose: !item.choose }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.second-step {

    &--item {
        margin-bottom: 20px;

        &__title {
            font-size: 24px;
            font-weight: 600;
            color: #3E74FF;
            margin: 40px 0 20px 0;
        }

    }

    &--info {

        &__title {
            display: inline-block;
            padding-bottom: 5px;
            font-weight: 600;
            font-size: 20px;
        }
    }
}

</style>

