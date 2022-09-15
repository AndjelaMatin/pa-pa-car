<template>
  <div id="div1">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <h4 class="text-center font-weight-bold">SIGN UP</h4>
              <label for="InputEmail1">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                aria-describeby="emailHelp"
                placeholder="Email"
                v-model="email"
              />
            </div>
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
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div id="div2" class="form-group">
              <label>Repeat Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="repeatpassword"
              />
            </div>
            <button
              class="btn btn-block"
              id="button1"
              @click="sign"
              type="button"
            >
              Submit
            </button>
            <div class="form-footer">
              <p>
                Already have an account?
                <router-link to="/login" id="link">Log in</router-link>
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
import store from "@/store";
import {
  getAuth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "@/firebase";
const auth = getAuth();
export default {
  name: "sign",
  data() {
    return {
      email: "",
      username: "",
      phonenumber: "",
      password: "",
      repeatpassword: "",
      store,
    };
  },
  methods: {
    sign() {
      if (this.email.includes("@")) {
        if (this.password.length > 5) {
          if (this.password == this.repeatpassword) {
            createUserWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                // Signd in
                const user = userCredential.user;
                const newProfile = doc(db, "profile", this.email);
                setDoc(newProfile, {
                  email: this.email,
                  username: this.username,
                  phone: this.phonenumber,
                })
                  .then((doc) => {
                    console.log("Spremljeno", doc);
                  })
                  .catch((er) => {
                    console.error(er);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
          } else {
            this.password = "";
            this.repeatpassword = "";
            alert("Different password in fields!");
          }
        } else {
          alert("Password is too short (less than 6 characters)!");
        }
      } else {
        alert("Email address is incorect!");
      }
    },
  },
};
</script>
