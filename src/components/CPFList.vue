<template>
  <div class="cpf-list">
    <h2>CPFs Found</h2>
    <ul>
      <li v-for="cpf in paginatedCPFs" :key="cpf">{{ cpf }}</li>
    </ul>
    
    <div class="pagination">
      <button 
        @click="previousPage" 
        :disabled="currentPage === 1">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
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
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10 
    };
  },
  computed: {
    paginatedCPFs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.cpfs.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.cpfs.length / this.itemsPerPage);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cpf-list {
  text-align: center;

  h2 {
    color: #70e000;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: #70e000;
    color: #000;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    button {
      background-color: #70e000;
      color: #000;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin: 0 5px;

      &:disabled {
        background-color: #ccc;
        color: #666;
        cursor: not-allowed;
      }
    }

    span {
      margin: 0 10px;
      color: #fff;
    }
  }
}
</style>