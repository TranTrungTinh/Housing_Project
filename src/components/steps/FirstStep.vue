<template>
    <div class="first-step">
        <div class="first-step--info_item">
            <span class="first-step--info__title">Thành phố</span>
            <Selected />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Quận/Huyện</span>
            <Selected />
        </div>
        <div class="first-step--info_item">
            <span class="first-step--info__title">Phường/Xã</span>
            <Selected />
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

export default {
    components: { Selected }
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


