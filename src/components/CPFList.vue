<template>
    <div class="cpf-list">
      <h2>CPFs Encontrados</h2>
      <ul>
        <li v-for="cpf in cpfs" :key="cpf">{{ cpf }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CPFList',
    props: {
      cpfs: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .cpf-list {
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      background-color: #f1f1f1;
      margin-bottom: 5px;
      padding: 10px;
      border-radius: 4px;
    }
  }
  </style>