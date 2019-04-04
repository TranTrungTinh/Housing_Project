<template>
<header>
    <div class="header-desktop">
        <a-row :gutter="16">
            <a-col :xs="12">
                <div class="header-desktop--left">
                    <div class="header-desktop--left__logo">
                        Logo
                    </div>
                    <div class="header-desktop--left__search">
                        <a-input-search
                            placeholder='Tìm nhà "quận 2"'
                            class="header-search"
                            v-model="search"
                            @search="onSearch"
                        />
                    </div>
                </div>
            </a-col>
            <a-col :xs="12">
                <div class="header-desktop--right">
                    <div class="header-nav-link">
                        <div class="header-nav-link--item">Đăng tin</div>
                        <div class="header-nav-link--item">
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

import UserModal from '@/components/header/UserModal';

export default {
    components: { UserModal },
    data () {
        return {
            search: ''
        }
    },
    methods: {
        onSearch(value) {
            this.search = '';
        }
    }
}
</script>
<style lang="scss" scoped src="./Header.scss"></style>



