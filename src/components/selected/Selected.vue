<template>
    <a-select :style="[styles]" :defaultValue="defaultSelected" class="selected"
        :size="options && options.size ? options.size : 'default'"
    >
        <!-- <a-select-option value="any">Any</a-select-option> -->
        <a-select-option class="selected-item" v-for="(item, i) in selects" :key="i" :value="item.key" >
            <i v-if="options && options.icon" :class="options.icon"></i>
            <span v-if="options && options.text">{{ options.text }}</span>
            <span>{{ item.value }}</span>
        </a-select-option>
    </a-select>
</template>
<script>
export default {
    name: 'Selected',
    props: {
        selects: { type: Array, default: () => [] },
        options: { 
            type: Object, default: () => {} 
            // options maybe text or icon render
            // icon is class fontawesome: ex -> fas fa-bed
            // size: 'large'
        },
        styles: { type: Object, default: () => {} }
    },
    computed: {
        defaultSelected() {
            return this.selects.length > 0 ? this.selects[0].key : '';
        }
    }
}
</script>
<style src="./Selected.scss" lang="scss" scoped></style>



