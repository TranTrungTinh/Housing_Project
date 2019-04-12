<template>
<header>
    <div class="header-desktop">
        <a-row :gutter="16">
            <a-col :xs="12">
                <div class="header-desktop--left">
                    <div class="header-desktop--left__logo">
                        <i class="fab fa-airbnb" style="font-size: 28px;"></i>
                    </div>
                    <div class="header-desktop--left__position">
                        <div class="header-desktop--left__position_city">
                            TPHCM
                        </div>
                        <div class="header-desktop--left__position_search">
                            <a-input-search
                                placeholder='Tìm nhà "quận 2"'
                                class="header-search"
                                size="large"
                                v-model="search"
                                @search="onSearch"
                            />
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="12">
                <div class="header-desktop--right">
                    <div class="header-nav-link">
                        <div class="header-nav-link--item blue">Đăng phòng</div>
                        <div class="header-nav-link--user" v-if="currentUser && currentUser.firstName">
                            <div class="header-nav-link--user__avatar">
                                <a-avatar :size="42" src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" />
                            </div>
                            <div class="header-nav-link--user__noti">
                                <a-badge count="14"  class="header-nav-link--user__noti-bag">
                                    <i class="fas fa-bell"></i>
                                </a-badge>
                            </div>
                        </div>
                        <div class="header-nav-link--item" v-else>
                            <UserModal />
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
    <div class="header-mobile"></div>
</header>
</template>
<script>
import { mapGetters } from 'vuex';
// import UserModal from '@/components/header/UserModal';
const UserModal = () => import('@/components/header/UserModal');

export default {
    components: { UserModal },
    data () {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters({
            currentUser: 'user/currentUser'
        })
    },
    methods: {
        onSearch(value) {
            this.search = '';
        }
    }
}
</script>
<style lang="scss" scoped src="./Header.scss"></style>



