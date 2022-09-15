<template>
  <div id="div1">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <h4 class="text-center font-weight-bold">LOG IN</h4>
              <label for="InputEmail1">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                aria-describeby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
            </div>
            <div id="div2" class="form-group">
              <label for="InputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword1"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <button
              class="btn btn-block"
              id="button1"
              @click="login"
              type="button"
            >
              Submit
            </button>
            <div class="form-footer">
              <p>
                Don't have an account? <a href="signup" id="link">Sign Up</a>
              </p>
            </div>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>

<style>
#div1 {
  margin-top: 75px;
}
#div2 {
  margin-bottom: 45px;
}
#button1 {
  color: #5f5c69;
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
}
#link {
  color: #5f5c69;
}
</style>
<script>
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
import store from "@/store";
const auth = getAuth();
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      store,
    };
  },
  methods: {
    login() {
      if (this.email.includes("@")) {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in.
            const user = userCredential.user;
            console.log("Upisan: ", store.currentUser);
            // this.$router.replace({name:'Home'});
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        alert("Email address is incorect!");
      }
    },
  },
};
</script>
