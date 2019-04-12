<template>
    <section>
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
export default {
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


