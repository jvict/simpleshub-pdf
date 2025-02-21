<template>
  <div class="upload-form">
    <h2>Upload PDF</h2>
    <input type="file" @change="handleFileUpload" accept=".pdf" />
    <button @click="uploadFile" :disabled="!file">Upload</button>
  </div>
</template>

<script>
export default {
  name: 'UploadForm',
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file) return;

      const formData = new FormData();
      formData.append('pdf', this.file);

      try {
        const response = await fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          this.$emit('upload-success');
          alert('Upload realizado com sucesso!');
        } else {
          throw new Error('Falha no upload');
        }
      } catch (error) {
        console.error('Erro no upload:', error);
        alert('Erro no upload do arquivo');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-form {
  text-align: center;

  h2 {
    color: #70e000;
    margin-bottom: 20px;
  }

  input[type='file'] {
    display: block;
    margin: 0 auto 20px;
    padding: 5px;
    border: 1px solid #70e000;
    border-radius: 4px;
    background-color: #000;
    color: #fff;
    width: 80%;
  }

  button {
    background-color: #70e000;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  }
}
</style>