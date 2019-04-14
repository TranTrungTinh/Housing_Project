<template>
    <div class="fourth-step">
        <div class="fourth-step--item__title">Thông tin</div>
        <div class="fourth-step--item">
            <span class="fourth-step--info__sub">- Bạn vui lòng đăng ít nhất 2 ảnh</span>
            <span class="fourth-step--info__sub">- Bạn có thể đăng tối đa 10 ảnh</span>
            <div class="fourth-step--item__upload">
              <a-upload-dragger
                name="files"
                accept=".png, .jpg, .jpeg"
                listType="picture-card"
                :multiple="true"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
                :customRequest="upload"
                :beforeUpload="beforeUpload"
              >
                <div v-if="fileList.length <= 10">
                  <p class="ant-upload-drag-icon">
                    <a-icon type="plus" />
                  </p>
                  <p class="ant-upload-text">Bấm để thêm ảnh</p>
                </div>
              </a-upload-dragger>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>        
            </div>
        </div>
        <div class="fourth-step--item">
            <span class="fourth-step--info__title">Tiêu đề bài đăng</span>
            <a-input size="large" type="text" placeholder="Cho thuê phòng..." />
        </div>
        <div class="fourth-step--item">
            <span class="fourth-step--info__title">Nội dung mô tả</span>
            <a-textarea size="large" placeholder="VD: Chị hàng xóm, nhiều quán ngon" :autosize="{ minRows: 2, maxRows: 6 }" />
        </div>
        
    </div>
</template>
<script>

export default {
    data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
    beforeUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isLt2M
    },
    upload({ data, file, onError, onProgress, onSuccess }) {
      console.log({ data, file, onError, onProgress, onSuccess });
      console.log(this.fileList)
    }
  },
}
</script>
<style lang="scss" scoped>
.fourth-step {

    &--item {
        margin-bottom: 20px;

        &__title {
            font-size: 24px;
            font-weight: 600;
            color: #3E74FF;
            margin: 0px 0 20px 0;
        }

        &__addition {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #3E74FF;
          border-radius: 8px;
          padding: 15px 0;
          color: #3E74FF;
          cursor: pointer;

          &:hover {
            font-weight: 600;
          }

          & > i {
            font-size: 28px;
            padding-right: 20px;
          }

          & > span {
            font-size: 18px;
          }
        }

        &__upload {
          margin: 10px 0;
        }

    }

    &--info {

        &__title {
            display: inline-block;
            padding-bottom: 5px;
            font-weight: 600;
            font-size: 20px;
        }

        &__sub {
          display: inline-block;
          padding-bottom: 5px;
          font-weight: 400;
          font-size: 18px;
        }
    }
}

</style>

