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
      margin-bottom: 20px;
      
      input[type="file"] {
        margin-right: 10px;
      }
    
      button {
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    
        &:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      }
    }
  </style>