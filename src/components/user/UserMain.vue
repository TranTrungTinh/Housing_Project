<template>
  <div class="container">
    <a-row type="flex" justify="center">
      <a-col :span="6" class="user-menu">
        <div class="user-menu--avatar">
            <a-avatar :size="128" icon="user" src="~@/assets/img/avt.png"/>
              <a-upload
                name="avatar"
              >
                <img src="~@/assets/img/icon_edit.svg" class="user-menu--avatar__img"/>
              </a-upload>
            <h2>{{currentUser.firstName + ' ' + currentUser.lastName}}</h2>
        </div>
        <hr/>
        <a-menu
          @click="switchMenu"
          :defaultSelectedKeys="['1']"
          class="user-menu--nav"
        >
          <a-menu-item key="1" class="user-menu--nav--item">
            <i class="fas fa-user"/>Thông tin tài khoản
          </a-menu-item>
          <a-menu-item key="2" class="user-menu--nav--item">
            <i class="fas fa-home-lg-alt"/>Phòng nhờ xem giúp         
          </a-menu-item>
          <a-menu-item key="3" class="user-menu--nav--item">
            <i class="fas fa-home-lg-alt"/>Tin cần thuê    
          </a-menu-item>
          <a-menu-item key="4" class="user-menu--nav--item">
            <i class="fas fa-home-lg-alt"/>Phòng cho thuê
          </a-menu-item>
        </a-menu>        
      </a-col>
      <a-col :span="14" class="user-menu-content">
        <div v-if="currentPage==1">
          <UserInfo :user="currentUser"/>
        </div>
        <div v-if="currentPage==2">
          <UserRequest/>
        </div>
        <div v-if="currentPage==3">
          <UserFindHouse/>
        </div>
        <div v-if="currentPage==4">
          <UserForRent/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import { modules } from '@/store/index';
import { mapGetters } from 'vuex';
import UserInfo from '@/components/user/UserInfo.vue';
import UserRequest from '@/components/user/UserRequest.vue';
import UserFindHouse from '@/components/user/UserFindHouse.vue';
import UserForRent from '@/components/user/UserForRent.vue';

export default {
  components: { 
    UserInfo, 
    UserRequest,
    UserFindHouse,
    UserForRent,
    },
  data () {
    return {
      // user: modules.user
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser'
    })
  },
  methods: {
    switchMenu(e) {
      this.currentPage = e.key;
    }
  },
};
</script>
<style lang="scss" scoped>
  .ant-menu-item-selected {
    color: #FD3D76;
    background-color: #FFFFFF !important;
  }
  .container {
    padding: 3%;
  }
  .user-menu {
    background: #FFFFFF;
    border-radius: 2% 2% 2%;

    & hr {
      width: 80%;
      border: solid 1px #EFEFF4;
    }

    &--avatar {
      text-align: center;
      margin-top: 48px;

      &__img {
        position: absolute;
        cursor: pointer;
      }
      & h2 {
        font-weight: bold;
        margin: 20px;
      }
    }

    &--nav {
      &--item {
        &:hover {
          color: #FD3D76;
        }
        &:active {
          color: #FD3D76;
        }

        & i {
          margin-right: 5px;
        }
      }
    }
  }
  .user-menu-content {
    background: #FFFFFF;
    border-radius: 2% 2% 2%;
    margin-left: 32px;
  }
</style>
