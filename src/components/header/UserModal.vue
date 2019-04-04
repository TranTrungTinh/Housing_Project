<template>
  <div>
    <div @click="showModal">Đăng nhập</div>
    <a-modal v-model="visible" :footer="null">
      <div class="header-modal">
        <a-tabs defaultActiveKey="1">
            <a-tab-pane key="1">
                <span slot="tab"> 
                    <i class="fal fa-sign-in-alt"></i>
                    <span class="header-modal--tag">ĐĂNG NHẬP</span>
                </span>
                <a-row :gutter="16">
                    <a-col :span="24">
                        <Login />
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="2">
                <span slot="tab">
                    <i class="fal fa-user-plus"></i>
                    <span class="header-modal--tag">ĐĂNG KÝ</span>
                </span>
                <a-row :gutter="16">
                    <a-col :span="24">
                        <SignUp />
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { Login, SignUp } from '@/components/auth';

export default {
    components: { Login, SignUp },
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showModal() {
            this.visible = true
        }
    }
}
</script>
<style lang="scss" scoped>
.header-modal {
    // min-height: 700px;
    padding: 10px 30px;

    &--login {
        margin: 0px 0 20px 0;

        & img {
            display: block;
            margin: 0 auto;
            max-width: 292px;
            max-height: 350px;
        }
    }

    &--signup {
        margin-top: 60px;

        & img {
            display: block;
            margin: 0 auto;
            max-width: 292px;
            max-height: 350px;
            // margin: 0 20px;
        }
    }

    &--tag {
        padding-left: 20px;
    }

}
</style>
