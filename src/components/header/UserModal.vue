<template>
<div>
    <div @click="showModal">Đăng nhập</div>
    <a-modal v-model="visible" :footer="null" :closable="false">
        <span class="header-close" @click="visible = false">
            <i class="far fa-times"></i>
        </span>
        <div class="header-modal">
            <a-tabs :activeKey="tab" size="small" >
                <a-tab-pane :key="1">
                    <span slot="tab"> 
                        <!-- <i class="fal fa-sign-in-alt"></i>
                        <span class="header-modal--tag">ĐĂNG NHẬP</span> -->
                    </span>
                    <a-row :gutter="16">
                        <a-col :span="24">
                            <Auth :enableTab="enableTab"/>
                        </a-col>
                    </a-row>
                </a-tab-pane>
                <a-tab-pane :key="2">
                    <span slot="tab"> 
                        <!-- <i class="fal fa-envelope"></i>
                        <span class="header-modal--tag">EMAIL</span> -->
                    </span>
                    <a-row :gutter="16">
                        <a-col :span="24">
                            <Login v-if="isLogin" :onToggleLogin="onToggleLogin" :enableTab="enableTab" />
                            <ForgotPassword v-else :onToggleLogin="onToggleLogin"/>
                        </a-col>
                    </a-row>
                </a-tab-pane>
                <a-tab-pane :key="3">
                    <span slot="tab">
                        <!-- <i class="fal fa-user-plus"></i>
                        <span class="header-modal--tag">ĐĂNG KÝ</span> -->
                    </span>
                    <a-row :gutter="16">
                        <a-col :span="24">
                            <SignUp :enableTab="enableTab" />
                        </a-col>
                    </a-row>
                </a-tab-pane>
            </a-tabs>
        </div>
    </a-modal>
</div>
</template>
<script>
import { Login, SignUp, ForgotPassword, Auth } from '@/components/auth';
import { EventBus } from '@/helpers/event-bus';

export default {
    components: { Login, SignUp, ForgotPassword, Auth },
    data() {
        return {
            visible: false,
            isLogin: true, // show component login or forgotPassword
            tab: 1 // 1: auth, 2: login, 3: signup
        }
    },
    methods: {
        showModal() {
            this.visible = true;
        }, 
        onToggleLogin() {
            this.isLogin = !this.isLogin;
        },
        enableTab(number) {
            this.tab = number
        }
    },
    created() {
        EventBus.$on('signup-success', () => this.enableTab(2))
    },
    destroyed() {
        EventBus.$off('signup-success');
    }
}
</script>
<style lang="scss" scoped>
.header-close {
    color: #FD3D76;
    font-size: 24px;
    cursor: pointer;
}
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
