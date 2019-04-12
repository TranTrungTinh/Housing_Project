<template>
    <div class="second-step">
        <div class="second-step--item">
            <span class="second-step--info__title">Loại phòng</span>
            <Selected />
        </div>
        <div class="second-step--item_title">Thông tin</div>
        <div class="second-step--item">
            <span class="second-step--info__title">Sức chứa</span>
            <a-input size="large" type="number" addonAfter="người/phòng" placeholder="Số người/phòng" />
        </div>
        <div class="second-step--item">
            <span class="second-step--info__title">Diện tích</span>
            <a-input size="large" type="number" addonAfter="m2" placeholder="Diện tích" />
        </div>
        <div class="second-step--item_title">Tiện ích</div>
        <div class="second-step--item">
            <span class="second-step--info__title">Sức chứa</span>
            <a-input size="large" type="number" addonAfter="người/phòng" placeholder="Số người/phòng" />
        </div>
    </div>
</template>
<script>
import { Selected } from '@/components/selected';

export default {
    components: { Selected }
}
</script>
<style lang="scss" scoped>
.second-step {

    &--item {
        margin-bottom: 20px;

        &_title {
            font-size: 22px;
            color: #3E74FF;
            margin: 40px 0 10px 0;
        }
    }

    &--info {


        &__title {
            font-size: 18px;
        }
    }
}
</style>

