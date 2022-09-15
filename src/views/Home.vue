<template>
  <div>
    <img src="@/assets/pocetna.gif" class="img-fluid" />
  </div>
  <div id="forma1">
    <p class="div5">FIND RIDE JUST FOR YOU!</p>
    <router-link to="/search" class="btn btn-block" type="button" id="button2"
      >SEARCH</router-link
    >
  </div>
  <div class="container text">
    <div class="row">
      <div class="col-md">
        <img
          src="@/assets/car1.svg"
          class="float-start"
          height="35"
          width="50"
        />
        <p class="text-start fw-semibold" style="color: #2e2c2f">
          Best choice of rides
        </p>
        <p class="text-start">
          Travel to wanted destination with amazing number of rides. Do not
          forget about our wide range of rutes at lowest prices You can find.
        </p>
      </div>
      <div class="col-md">
        <img
          src="@/assets/driver1.svg"
          class="float-start"
          height="30"
          width="50"
        />
        <p style="color: #2e2c2f" class="text-start fw-semibold">
          Trustworthy drivers
        </p>
        <p class="text-start">
          Each of new members is being checked using ID and created profiles, so
          You do not have to worry. Just reserve and enjoy Your ride.
        </p>
      </div>
      <div class="col-md">
        <img
          src="@/assets/book1.svg"
          class="float-start"
          height="30"
          width="50"
        />
        <p style="color: #2e2c2f" class="text-start fw-semibold">
          Booking a ride
        </p>
        <p class="text-start">
          You can book a ride whenever You want and no matter where You are.
          Find ride You like the most and contact driver!
        </p>
      </div>
      <div class="col-md">
        <img
          src="@/assets/team1.svg"
          class="float-start"
          height="30"
          width="50"
        />
        <p style="color: #2e2c2f" class="text-start fw-semibold">
          Joining our team
        </p>
        <p class="text-start">
          You can join our team and drive others by Yourself. All You need to do
          is create a profile! P.S. Always drive safe.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
#forma1 {
  margin-bottom: 50px;
  padding: 30px;
  background-color: #d7bcfd;
}
#button2 {
  margin-top: 15px;
  margin-bottom: 15px;
  color: #5f5c69;
  background-color: #fff;
  outline-color: #fff;
}
.div5 {
  text-shadow: 2px 2px #fff;
  font-size: 30px;
}
</style>
