<template>
  <div>
    <div class="field">
      <label class="label">Nama</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Kontak Nama"
          v-model="KontakNama"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">No Handphone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="No Handphone"
          v-model="KontakNo"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-model="KontakEmail"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateKontak">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditKontak",
  data() {
    return {
      KontakNama: "",
      KontakNo: "",
      KontakEmail: "",
    };
  },
  created: function () {
    this.getKontakById();
  },
  methods: {
    // Get Kontak By Id
    async getKontakById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/daftar/${this.$route.params.id}`
        );
        this.KontakNama = response.data.Nama;
        this.KontakNo = response.data.No_Handphone;
        this.KontakEmail = response.data.Email;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update Kontak
    async updateKontak() {
      try {
        await axios.put(
          `http://localhost:5000/ubah/${this.$route.params.id}`,
          {
            Nama: this.KontakNama,
            No_Handphone: this.KontakNo,
            Email: this.KontakEmail,
          }
        );
        this.KontakName = "";
        this.KontakNo = "";
        this.KontakEmail = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>