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
            <button onsubmit="return false" class="btn btn-block" id="button1">
              Submit
            </button>
            <div class="form-footer">
              <p>
                Already have an account? <a href="Login" id="link">Log In</a>
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
  color: #631fd9;
  background-color: #D7BCFD;
  outline-color: #D7BCFD;
}
#link {
  color: #631fd9;
}
</style>
