<template>
<div class="login-form">
  <a-form :form="form" @submit="handleSubmit">
    <div class="login-form--welcome">
      <span></span>
      <h1>Đăng ký</h1>
    </div>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'email', { rules: [rules.email] }]"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="google" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'userName', { rules: [rules.username] }]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'password', { rules: rules.password }]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'confirmPassword', { rules: rules.confirmPassword }]"
        type="password"
        placeholder="Confirm Password"
      >
        <a-icon slot="prefix" type="exception" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    
    <a-row type="flex" justify="center">
      <a-col :xs="24">
        <a-button html-type="submit" class="login-form--item__button">
          Đăng ký
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
  data () {
      return {
          rules: {
              email: { required: true, message: 'Please input your email!' },
              username: { required: true, message: 'Please input your username!' },
              password: [
                { required: true, message: 'Please input your password!' },
                { min: 8, message: 'Password is not strong !' }
              ],
              confirmPassword: [
                { required: true, message: 'Please input your password!' },
                { validator: this.compareToFirstPassword }
              ],
          }
      }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if(err) return;

        console.log('Received values of form: ', values);
      });
    },

    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Confirm password doest not match !!!');
      } else {
        callback();
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.login-form {

  // max-width: 500px;
  
  &--welcome {

    & h1 {
      font-size: 36px;
      font-weight: 700;
    }
  }

  &--item {
    margin: 30px 0;

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
}
</style>