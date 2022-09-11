<template>
  <div v-for="card in cards" v-bind:key="card">
    <div class="card3">
      <div class="card3-header">
        <img
          src="@/assets/profile.png"
          alt="Profile Image"
          class="profile-img"
        />
      </div>
      <div class="card3-body">
        <p class="name">{{ card.username }}</p>
        <a href="#" class="mail">{{ card.email }}</a>
        <p class="phone">{{ card.phone }}</p>
      </div>
      <div class="card3-footer">
        <router-link
          to="/changeprofile"
          class="btn btn-block"
          type="button"
          id="button3"
          >Change profile</router-link
        >
        <button
          class="btn btn-block"
          type="button"
          id="button3"
          @click="deleteAcc"
        >
          Delete account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import {
  getAuth,
  db,
  doc,
  getDocs,
  collection,
  deleteDoc,
  deleteUser,
} from "@/firebase";
const auth = getAuth();
export default {
  name: "profile",
  data: function () {
    return {
      store,
      cards: [],
    };
  },
  methods: {
    getProfile() {
      console.log("Dohvat ", store.currentUser);
      getDocs(collection(db, "profile"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const dat = doc.data();
            if (dat.email == store.currentUser) {
              this.cards.push({
                email: dat.email,
                username: dat.username,
                phone: dat.phone,
              });
            }
          });
        })
        .catch((err) => {
          console.log(err.massage);
        });
    },
    deleteAcc() {
      deleteDoc(doc(db, "profile", store.currentUser));
      const user = auth.currentUser;
      deleteUser(user)
        .then(() => {
          // User deleted.
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
    },
  },
  created: function () {
    this.getProfile();
  },
};
</script>
<style>
#button3 {
  color: #fff;
  background-color: #5f5c69;
  outline-color: #5f5c69;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 10px;
}
.card3 {
  max-width: 350px;
  margin: 150px auto 0;
  background-color: #5f5c69;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
}
.card3 .card3-header {
  position: relative;
  height: 48px;
}
.card3 .card3-header .profile-img {
  width: 130px;
  height: 130px;
  border-radius: 1000px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid #d7bcfd;
  box-shadow: 0 0 20px #00000033;
}
.card3 .card3-body {
  padding: 10px 40px;
}
.card3 .card3-body .name {
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color:#fff;
}
.card3 .card3-body .mail {
  font-size: 14px;
  color: #fff;
}

.card3 .card3-body .mail:hover {
  font-size: 16px;
  color: #fff;
}

.card3 .card3-body .phone {
  margin-top: 10px;
  font-size: 14px;
  color:#fff;
}
.card3 .card3-footer {
  background-color: #d7bcfd;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 20px 0 20px 0;
}
.card3 .card3-footer .count {
  font-size: 14px;
}
@media screen and (max-width: 575px) {
  .card3 {
    width: 96%;
  }
  .card3 .card3-body {
    padding: 10px 20px;
  }
}
</style>
