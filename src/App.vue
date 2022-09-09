<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/logo.png"
            alt=""
            width="170"
            height="60"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2">
            <li class="nav-item">
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
            <li v-if="!user1" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!user1" class="nav-item">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li v-if="user1" class="nav-item">
              <router-link to="/newride" class="nav-link">New ride</router-link>
            </li>
            <li v-if="user1" class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li v-if="user1" class="nav-item">
              <router-link to="/myrides" class="nav-link">My rides</router-link>
            </li>
            <li v-if="user1" class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <br />
    <br />
   <footer >
      <div class="container">
        <div class="row text-light text-center py-4 justify-content-center">
          <div class="col-sm-10 col-md-8-col-lg-6">
            <img
              src="@/assets/logo.png"
              width="250"
              height="80"
              alt=""
              class="picture"
            />
            <h6>BEST CHOICE OF RIDES</h6>
            <section class="py-3">
    <div class="container">
      <a href="https://www.facebook.com/"><img src="@/assets/facebook.png" width="30"
              height="30"/></a>
      <a href="https://www.twitter.com/"><img src="@/assets/twitter.png" width="30"
              height="30"/></a>
              <a href="https://www.instagram.com/"><img src="@/assets/instagram.png" width="30"
              height="30"/></a>
              <a href="https://www.youtube.com/"><img src="@/assets/youtube.png" width="30"
              height="30"/></a>
      <h6>Copyright 2022 &copy;</h6>
    </div>
  </section>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5f5c69;
}
#nav {
  padding: 10px;
  background-color: #d7bcfd;
  a {
    color: #fff;
    &.router-link-exact-active {
      color: #5f5c69;
    }
  }
}
#button3 {
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
}
.picture {
  padding: 4px;
}
footer {
  text-align: center;
  color: white;
  background-color: #d7bcfd;
  width: 100%;
  position:absolute;
}
</style>
<script>
import store from "@/store";
import { getAuth, onAuthStateChanged, signOut } from "@/firebase";
import router from "@/router";
const auth = getAuth();
export default {
  name: "app",
  data() {
    return {
      store,
      user1: null,
      router,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      const currentRoute = this.router.currentRoute;
      console.log("PROVJERA*********");
      if (user) {
        const uid = user.uid;
        console.log("***", user.email);
        this.user1 = user.email;
        store.currentUser = user.email;
        if (!currentRoute.meta.requiresAuth) {
          router.push({ name: "Home" });
        }
      } else {
        console.log("***No user");
        this.user1 = null;
        store.currentUser = null;
        if (currentRoute.meta.requiresAuth) {
          router.push({ name: "login" });
        }
      }
    });
  },
  methods: {
    logout() {
      signOut(auth)
        .then(() => {
          //Sign-out successful.
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          //An error happened.
        });
    },
  },
};
</script>
