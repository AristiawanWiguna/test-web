	
<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Nama</th>
          <th>No Handphone</th>
          <th>Email</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.Id">
          <td>{{ item.Nama }}</td>
          <td>{{ item.No_Handphone }}</td>
          <td>{{ item.Email }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.Id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteKontak(item.Id)"
              >Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "KontakList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getKontaks();
  },
 
  methods: {
    // Get All Kontaks
    async getKontaks() {
      try {
        const response = await axios.get("http://localhost:5000/daftar");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Kontak
    async deleteKontak(id) {
      try {
        await axios.delete(`http://localhost:5000/hapus/${id}`);
        this.getKontaks();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>