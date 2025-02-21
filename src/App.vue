<template>
  <div id="app">
    <h1>CPF Finder</h1>
    <UploadForm @upload-success="fetchCPFs" />
    <CPFList :cpfs="cpfs" />
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
}
</style>