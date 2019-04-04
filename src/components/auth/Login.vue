<template>
<div class="login-form">
  <a-form :form="form" @submit="handleSubmit">
    <div class="login-form--welcome">
      <span></span>
      <h1>Đăng nhập</h1>
    </div>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'username', { rules: [rules.username] }]"
        placeholder="Your username"
      >
        <a-icon slot="prefix" type="user" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item" hasFeedback :validateStatus="rules.status.password">
      <a-input
        v-decorator="[ 'password', { rules: rules.password }]"
        type="password"
        placeholder="Your password"
      >
        <a-icon slot="prefix" type="lock" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-checkbox class="login-form--item__checkbox" v-decorator="[ 'remember', rules.remeber ]">
        Remember me
      </a-checkbox>
      <a class="login-form--item__forgot" href="">Quên mật khẩu?</a>
    </a-form-item>
    <a-row type="flex" justify="center">
      <a-col :xs="24">
        <a-button html-type="submit" class="login-form--item__button">
          Đăng nhập
        </a-button>
      </a-col>
    </a-row>
    <div class="login-form--third-party">
        <div class="login-form--third-party--item">
            Hoặc đăng nhập với:
        </div>
        <div class="login-form--third-party--item">
            <span style="background: #3B5998"><i class="fab fa-facebook-f"></i></span>
            <span style="background: #d62d20"><i class="fab fa-google"></i></span>
        </div>
    </div>
  </a-form>
</div>
</template>

<script>

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  data () {
      return {
          rules: {
              username: { required: true, message: 'Please input your username!' },
              password: [
                { required: true, message: 'Please input your password !' },
                { min: 8, message: 'Password is not strong !' },
              ],
              remeber: { valuePropName: 'checked', initialValue: false },
              status: {
                password: '',
              }
          }
      }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    showStatusPassword() {
      return !!this.form.getFieldError('password') ? 'error' : 'success';
    },
  },
  updated() {
    this.rules.status.password = this.showStatusPassword();
  }
};
</script>
<style lang="scss" scoped>
.login-form {

  &--welcome {
    // text-align: center;

    & h1 {
      font-size: 36px;
      font-weight: 700;
    }
  }

  &--item {
    &__checkbox {
      color: #000;
    }

    &__forgot {
      color: #FD3D76;
      float: right;

      &:hover {
        text-decoration: none;
        color: #FD3D76;
      }
    }

    &__button,
    &__button:focus {
      font-size: 18px;
      color: #fff;
      border-radius: 10px;
      width: 100%;
      height: 50px;
      background: #FD3D76;
      border: none;

      &:hover {
        border: none;
        color: #fff;
        background: #FD3D76;
      }
    }
  }

  &--third-party {
    margin: 50px 0 10px 0;
    display: flex;
    align-items: center;

    &--item {
        margin-right: 10px;
    
        & > span {
            display: inline-block;
            width: 35px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            margin: 0 5px;
            border-radius: 5px;
            cursor: pointer;

            transition: transform 0.3s ease-out;

            &:hover {
                transform: scale(1.2);
            }

            & > i {
                color: #fff;
            }
        }
    }
  }

}
</style>