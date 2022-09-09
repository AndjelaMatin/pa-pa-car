<template>
<div class="card" id="div1">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <label for="text">Name and Surname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name and Surname"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <label for="number">Phone number</label>
              <input
                type="number"
                class="form-control"
                placeholder="Phone number"
                v-model="phonenumber"
              />
            </div>
            <button
              class="btn btn-block"
              id="button1"
              @click="changeProfile"
              type="button"
            >
              Save changes
            </button>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import store from "@/store";
import { db, doc, updateDoc} from "@/firebase";
export default {
  name: "profile",
  data: function () {
    return {
        useremail:"",
        store,
        name:"",
        phonenumber:"",
        username:"",
    };
  },
  methods: {
    changeProfile() {
      console.log("izmena",store.currentUser);
      const change = doc(db, "profile",store.currentUser);
      updateDoc(change,{
        "username":this.username,
        "phone":this.phonenumber,
      }).then((doc)=>{
          console.log("Spremnljeno",store.currentUser);

        }).catch((er)=>{
          console.error(er);
    });
    },
  },
};
</script>
<style>
#div1 {
  margin-top: 75px;
}
</style>>