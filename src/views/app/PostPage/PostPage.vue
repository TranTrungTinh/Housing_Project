<template>
    <section class="post-page">
        <div class="container">
            <div class="steps">
                <div class="steps--item">
                    <div :class="[classArray, { 'current-step': step >= 1}, { 'done-step': step > 1}]" >
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="steps--item__title">Vị trí</div>
                </div>
                <div :class="[classBridge, { 'done-bridge': step >= 2}]"></div>
                <div class="steps--item">
                    <div :class="[classArray, { 'current-step': step >= 2}, { 'done-step': step > 2}]">
                        <i class="fas fa-home-alt"></i>
                    </div>
                    <div class="steps--item__title">Thông tin</div>
                </div>
                <div :class="[classBridge, { 'done-bridge': step >= 3}]"></div>
                <div class="steps--item">
                    <div :class="[classArray, { 'current-step': step >= 3}, { 'done-step': step > 3}]">
                        <i class="far fa-dollar-sign"></i>
                    </div>
                    <div class="steps--item__title">Chi phí</div>
                </div>
                <div :class="[classBridge, { 'done-bridge': step >= 4}]"></div>
                <div class="steps--item">
                    <div :class="[classArray, { 'current-step': step >= 4}, { 'done-step': step > 4}]">
                        <i class="far fa-check"></i>
                    </div>
                    <div class="steps--item__title">Xác nhận</div>
                </div>
            </div>
            <div class="steps--content">
                 <a-row :gutter="30">
                     <a-col :xs="24" :lg="12">
                         <div class="steps--content__intro">
                            <div class="steps--content__intro-img">
                                <img src="~@/assets/img/post-img.svg" alt="Image cover" />
                            </div>
                            <span>Kết nối phòng của bạn với người thuê nhanh chóng hơn khi đăng qua hệ thống của Housie</span>
                        </div>
                     </a-col>
                     <a-col :xs="24" :lg="12">
                        <FirstStep v-if="step === 1"/>
                        <SecondStep v-if="step === 2"/>
                     </a-col>
                 </a-row>
            </div>

            <div class="steps--control">
                <div class="steps--control__back" @click="pre">
                    <i class="far fa-angle-left"></i>
                    <span>Quay lại</span>
                </div>
                <div class="steps--control__continute" @click="next">
                    Tiếp tục
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { FirstStep, SecondStep } from '@/components/steps';

export default {
    components: { FirstStep, SecondStep },
    data() {
        return {
            step: 1,
            classArray: ['steps--item__icon'],
            classBridge: ['steps--bridge']
        }
    },
    methods: {
        next() {
            if(this.step > 5) return;
            this.step++
        },
        pre() {
            if(this.step === 1) return;
            this.step--
        }
    }
}
</script>
<style lang="scss" scoped src="./PostPage.scss"></style>


