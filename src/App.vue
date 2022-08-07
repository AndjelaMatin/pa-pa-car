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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <div class="input-group mb-3">
                <button
                  class="btn dropdown-toggle"
                  id="button1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="color:#fff"
                >
                  Log In/Sign Up
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a href="Login" style="color:#D7BCFD">Log In</a></li>
                  <li><a href="Signup" style="color:#D7BCFD">Sign Up</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
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
  background-color: #D7BCFD;
  a {
    color: #fff;
    &.router-link-exact-active {
      color: #631fd9;
    }
  }
}

#button1 {
  background-color: #D7BCFD;
  outline-color: #D7BCFD;
}

</style>
