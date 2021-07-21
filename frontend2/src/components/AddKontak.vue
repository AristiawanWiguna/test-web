<template>
  <div>
    <div class="field">
      <label class="label">Kontak Nama</label>
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
      <button class="button is-success" @click="saveKontak">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddKontak",
  data() {
    return {
      KontakNama: "",
      KontakNo: "",
      KontakEmail: "",
    };
  },
  methods: {
    // Create New Kontak
    async saveKontak() {
      try {
        await axios.post("http://localhost:5000/buat", {
          Nama: this.KontakNama,
          No_Handphone: this.KontakNo,
          Email: this.KontakEmail,
        });
        this.KontakNama = "";
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