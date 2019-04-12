<template>
    <div class="forgot-password">
        <div class="forgot-password--title">Reset password</div>
        <div class="forgot-password--sub">Enter the email address associated with your account, and we’ll email you a link to reset your password.</div>
        <a-form :form="form" @submit="handleSubmit">
            <a-form-item label="Nhập email của bạn">
                <a-input type="email" v-decorator="['email', { rules: rules.email}]">
                    <a-icon slot="addonAfter" type="mail"/>
                </a-input>
            </a-form-item>
            <a-row :gutter="16">
                <a-col :xs="12">
                    <div class="forgot-password__back" @click="this.onToggleLogin">
                        <i class="fal fa-angle-left"></i>
                        <span>Quay lại đăng nhập</span>
                    </div>
                </a-col>
                <a-col :xs="12">
                    <a-button html-type="submit" class="forgot-password__button">
                        Gửi
                    </a-button>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script>
export default {
    beforeCreate () {
        this.form = this.$form.createForm(this);
    },
    props: {
        onToggleLogin: { type: Function, required: true }
    },
    data() {
        return {
            rules: {
                email: [{ required: true, message: 'Nhập email của bạn !' }]
            }
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.forgot-password {

    &--title {
        font-size: 22px;
        font-weight: 600;
        margin: 10px 0;
    }

    &--sub {
        font-weight: 400;
        margin: 10px 0;

    }

    &__back {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #008489;

        & > i {
            font-size: 28px;
            padding-right: 10px;
        }
        & > span {
            line-height: 28px;
        }
    }

    &__button,
    &__button:focus {
        float: right;
        width: 120px;
        background: #FD3D76;
        color: #fff;

        &:hover {
            border: none;
            color: #fff;
            background: #FD3D76;
        }
    }
}
</style>


