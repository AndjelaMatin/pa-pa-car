<template>
  <div class="card" id="div1">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <br/>
              <label for="text">Name and Surname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name and Surname"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <br/>
              <label for="number">Phone number</label>
              <input
                type="phonenumber"
                class="form-control"
                placeholder="Phone number"
                v-model="phonenumber"
              />
            </div>
            <br/>
            <button
              class="btn btn-block"
              id="button1"
              @click="changeProfile"
              type="button"
            >
              Save changes
            </button>
            <br/>
            <br/>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import store from "@/store";
import { db, doc, updateDoc } from "@/firebase";
import router from "@/router";
export default {
  name: "profile",
  data: function () {
    return {
      useremail: "",
      store,
      name: "",
      phonenumber: "",
      username: "",
    };
  },
  methods: {
    changeProfile() {
      console.log("Izmjena", store.currentUser);
      const change = doc(db, "profile", store.currentUser);
      if (this.username != "" && this.phonenumber != "") {
        updateDoc(change, { username: this.username, phone: this.phonenumber })
          .then((doc) => {
            console.log("Spremljeno", store.currentUser);
            this.$router.replace({ name: "profile" });
          })
          .catch((er) => {
            console.error(er);
          });
      } else if (this.username == "" && this.phonenumber != "") {
        updateDoc(change, { phone: this.phonenumber })
          .then((doc) => {
            console.log("Spremljeno", store.currentUser);
            this.$router.replace({ name: "profile" });
          })
          .catch((er) => {
            console.error(er);
          });
      } else {
        updateDoc(change, { username: this.username })
          .then((doc) => {
            console.log("Spremljeno", store.currentUser);
            this.$router.replace({ name: "profile" });
          })
          .catch((er) => {
            console.error(er);
          });
      }
    },
  },
};
</script>
<style>
#div1 {
  margin-top: 75px;
}
</style>
>
