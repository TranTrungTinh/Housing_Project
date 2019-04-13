<template>
    <a-select :style="[styles]" class="selected"
        :size="size ? size : 'default'"
        :placeholder="placeholder"
        @select="handleSelect"
    >
        <!-- <a-select-option value="any">Any</a-select-option> -->
        <a-select-option class="selected-item" v-for="item in selects" :key="item.key" :value="item.value" >
            <i v-if="icon" :class="icon"></i>
            <span v-if="text">{{ text }}</span>
            <span>{{ item.value }}</span>
        </a-select-option>
    </a-select>
</template>
<script>
export default {
    name: 'Selected',
    props: {
        selects: { type: Array, default: () => [] },
        icon: { type: String },
        text: { type: String },
        size: { type: String },
        placeholder: { type: String },
        firstSelected: { type: Boolean, default: false },
        styles: { type: Object, default: () => {} },
        onSelected: { type: Function }
    },
    methods: {
        handleSelect(value, { key }) {
            this.onSelected({ code: key, data: value })
        }
    },
    computed: {
        onDefaultSelected() {
            return this.firstSelected ? this.selects[0].key : false;
        }
    }
}
</script>
<style src="./Selected.scss" lang="scss" scoped></style>



