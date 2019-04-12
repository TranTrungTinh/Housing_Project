<template>
  <div class="container user-info">
    <h2 class="user-info--title">Thông tin tài khoản</h2>
    <hr/>
    <a-form
      :form="form"
      @submit="handleSubmit"
      class="user-info--form"
    >
      <a-form-item
        label="Last Name"
        class="user-info--form--item"
      >
        <a-input
          v-decorator="[
            'lastName',
            {
              rules: [{ required: true, message: 'Please input your last name' },],
              initialValue: user.lastName ||''
            }
          ]"
          placeholder="Họ"
        />
      </a-form-item>
      <a-form-item
        label="First Name"
      >
        <a-input
          v-decorator="[
            'firstname',
            {
              rules: [{ required: true, message: 'Please input your name' },],
              initialValue: user.firstName || ''
            }
          ]"
          placeholder="Tên"
        />
      </a-form-item>
      <a-form-item
      >
        <span slot="label">
          Phone
        </span>
        <a-input
          v-decorator="[
            'phone',
            {
              rules: [{ required: true, message: 'Please input your phone' },],
              initialValue: user.phone ||''
            }
          ]"
          placeholder="Số điện thoại"
        />
      </a-form-item>
      <a-form-item
        label="E-mail"
      >
        <a-input
          v-decorator="[
            'email',
            {
              rules: [{ required: true, message: 'Please input your email' },],
              initialValue: user.email ||''
            }
          ]"
          placeholder="Email"
        />
      </a-form-item>
      <a-form-item
        label="Mật khẩu"
        class="user-info--form--item"
      >
        <a-button
        @click="changePassword"
        class="user-info--form--item__button"
        >
        Đổi mật khẩu
      </a-button>
      </a-form-item>
      <hr/>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          Cập nhật
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
    }
  },
  props: {
    user: {type: Object}
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault();

      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    changePassword () {
      
    }
  },
}
</script>
<style lang="scss" scoped>
  .user-info {
    margin: 20px;

    &--title {
      font-weight: bold;
    }
    & hr {
      border: solid 0.3px #EFEFF4;
    }
    &--form {
      width: 60%;

      &--item {
        &__button {
          border: none;
          padding: 0;
          color: #FD3D76;
          font-weight: bold;

          &:hover {
            color: #FD3D76;
          }
          &:active {
            color: #FD3D76;
          }
          &:focus {
            color: #FD3D76;
            border: none;
          }
        }
      }
    }
  }
</style>


