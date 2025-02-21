<template>
  <div id="app">
    <h1>Finder CPF in PDF</h1>
    <div class="content">

      <div class="left-panel">
        <UploadForm @upload-success="fetchCPFs" />
      </div>

      <div class="right-panel">
        <CPFList :cpfs="cpfs" :onButtonClick="fetchCPFs" />
      </div>
    </div>
  </div>
</template>

<script>
import UploadForm from './components/UploadForm.vue';
import CPFList from './components/CPFList.vue';

export default {
  name: 'App',
  components: {
    UploadForm,
    CPFList
  },
  data() {
    return {
      cpfs: []
    };
  },
  methods: {
    async fetchCPFs() {
      try {
        const response = await fetch('http://localhost:3000/api/cpfs');
        this.cpfs = await response.json();
      } catch (error) {
        console.error('Erro ao buscar CPFs:', error);
      }
    }
  },
  mounted() {
    this.fetchCPFs();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  background-color: #000;
  padding: 0;
  margin: 0;

  h1 {
    font-size: 24px;
    background-color: #70e000;
    padding: 10px 0;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    width: 90%;
    max-width: 1200px;
    justify-content: space-between;
    gap: 20px;

    .right-panel {
      flex: 1;
      padding: 20px;
      background-color: #1a1a1a;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .left-panel {
      border-right: 2px solid #70e000;
    }
  }
}
</style>