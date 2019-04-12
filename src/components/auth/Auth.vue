<template>
    <div class="auth">
        <div class="auth-header">
            Đăng nhập
        </div>
        <div class="auth-body">
            <div class="auth-body--item">
                <a-button class="auth-body--item__button auth-body--item__bface">
                    <i class="fab fa-facebook-f"></i>
                    Đăng nhập bằng Facebook
                </a-button>
            </div>
            <div class="auth-body--item">
                <!-- <a-button class="auth-body--item__button auth-body--item__bgoogle">
                    <i class="fab fa-google"></i>
                    Đăng nhập bằng Google
                </a-button> -->
                <GoogleLogin 
                    class="auth-body--item__button auth-body--item__bgoogle"
                    :params="params" :onSuccess="onSignInSuccess" :onFailure="onSignInError"
                >
                    <i class="fab fa-google"></i>
                    Đăng nhập bằng Google
                </GoogleLogin>            
            <!-- <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin> -->
            </div>
            <div class="auth-body--item">
                <a-button class="auth-body--item__button auth-body--item__bemail" @click="enableTab(2)">
                    Đăng nhập bằng Email
                </a-button>
            </div>
            <div class="auth-body--item">
                <a-button class="auth-body--item__button auth-body--item__bnew" @click="enableTab(3)">
                    Tạo tài khoản mới
                </a-button>
            </div>
        </div>
    </div>
</template>
<script>
import GoogleLogin from 'vue-google-login';

export default {
    components: { GoogleLogin },
    props: {
        enableTab: { type: Function, required: true }
    },
    data () {
        return {
            params: {
                client_id: '712079716641-8nd3l5gd77rqnlieiu9gbhu530qhg8dg.apps.googleusercontent.com'
            }
        }
    },
    methods: {
        onSignInSuccess (googleUser) {
            console.log(googleUser)
            const profile = googleUser.getBasicProfile()
            console.log(profile);
        },
        onSignInError (error) {
            console.log('OH NOES', error)
        }
    }
}
</script>
<style lang="scss" scoped>
.auth {
    &-header {
        font-size: 36px;
        font-weight: 700;
    }
    &-body {
        margin: 40px 0;
        &--item {
            margin: 20px 0;

            &__button {
                width: 100%;
                height: 50px;
                border-radius: 16px;
                font-size: 18px;
                border: none;
            }

            &__bface,
            &__bface:focus {
                
                background: #0066C5;
                color: #fff;

                &:hover {
                    background: #3b5998;
                    color: #fff;
                    border: none;
                }
                & > i {
                    padding-right: 20px;
                }
                
            }

            &__bgoogle,
            &__bgoogle:focus {
                background: #d62d20;
                color: #fff;
                outline: 0;
                cursor: pointer;

                &:hover {
                    background: #DB4437;
                    color: #fff;
                    border: none;
                }
                & > i {
                    padding-right: 20px;
                }
            }

            &__bemail,
            &__bemail:focus {
                background: #FD3D76;
                color: #fff;

                &:hover {
                    background: #FD3D76;
                    color: #fff;
                    border: none;
                }
            }

            &__bnew,
            &__bnew:focus {
                margin-top: 20px;
                background: #EFEFF4;

                &:hover {
                    background: #EFEFF4;
                    border: none;
                    color: #000;
                }
            }
        }
    }
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>


