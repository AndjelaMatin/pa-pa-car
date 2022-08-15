<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="Home">
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
          <ul class="navbar-nav ms-auto mb-2 ">
            <li class="nav-item" >
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
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
.dropdown-menu {
  --bs-dropdown-link-active-bg: #d7bcfd !important;
}
</style>
<script>
import store from '@/store';
import { getAuth, onAuthStateChanged, signOut } from '@/firebase';
import router from '@/router';
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const currentRoute=router.currentRoute;
  console.log("PROVJERA*********");
        if (user) {
          //const uid = user.uid;
          console.log("***",user.email);
          store.currentUser = user.email;
        } else {
          console.log("***No user");
          store.currentUser = null;
        }
      });
export default {
  name: "app",
  data(){
    return{
      store,
    };
  },
  methods: {
    logout(){
      signOut(auth).then(()=>{
        //Sign-out successful.
        this.$router.push({name:'login'});
      }).catch((error)=>{
        //An error happened.
      });
    },
  },
};
</script>
