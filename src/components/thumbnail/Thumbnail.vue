<template>
    <div class="thumbnail">
        <div class="thumbnail-img">
            <img v-lazy="`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`" alt="Image cover">
            <div class="thumbnail-img--tag">
                Quận 2
            </div>
        </div>
        <div class="thumbnail-info">
            <div class="thumbnail-info--price">8tr/thang</div>
            <div class="thumbnail-info--title">Phong cho thue quan 2</div>
            <div class="thumbnail-info--address">123 Vo Van Kiet, Phuong 4, Quan 2, TpHCM</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped src="./Thumbnail.scss" ></style>


