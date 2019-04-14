<template>
    <div class="third-step">
        <div class="third-step--item">
            <span class="third-step--info__title">Giá thuê</span>
            <a-input class="third-step--item__input" size="large" type="number" addonAfter="đ/tháng" placeholder="VD: 3.000.000" />
        </div>
        <div class="third-step--item">
            <span class="third-step--info__title">Tiền điện</span>
            <a-input size="large" type="number" addonAfter="đ" placeholder="Nhập giá tiền điện" />
        </div>
        <div class="third-step--item">
            <span class="third-step--info__title">Tiền nước</span>
            <a-input size="large" type="number" addonAfter="đ" placeholder="Nhập giá tiền nước" />
        </div>
        <div class="third-step--item">
            <span class="third-step--info__title">Internet/wifi</span>
            <a-input size="large" type="number" addonAfter="đ" placeholder="Nhập giá tiền internet/wifi" />
        </div>
        <div class="third-step--item">
            <span class="third-step--info__title">Chi phí khác</span>
            <div class="third-step--item__addition">
              <i class="fal fa-plus"></i>
              <span>Thêm chi phí khác</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.third-step {

    &--item {
        margin-bottom: 20px;

        &__title {
            font-size: 24px;
            font-weight: 600;
            color: #3E74FF;
            margin: 40px 0 20px 0;
        }

        &__addition {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #3E74FF;
          border-radius: 8px;
          padding: 15px 0;
          color: #3E74FF;
          cursor: pointer;

          &:hover {
            font-weight: 600;
          }

          & > i {
            font-size: 28px;
            padding-right: 20px;
          }

          & > span {
            font-size: 18px;
          }
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

