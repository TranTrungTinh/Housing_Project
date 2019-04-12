<template>
    <div class="card-hire">
        <a-row :gutter="16">
            <a-col :span="4">
                <div class="card-hire--icon"></div>
            </a-col>
            <a-col :span="20">
                <div class="card-hire-main">
                    <div class="card-hire-main--title">{{ title }}</div>
                    <div class="card-hire-main--des">{{ des }}</div>
                    <div class="card-hire-main--button">{{ button }}</div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    props: {
        title: { type: String, required: true },
        des: { type: String, required: true },
        button: { type: String, required: true }
    }
}
</script>
<style src="./CardHire.scss" lang="scss" scoped></style>


