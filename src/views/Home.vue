<template>
<div>
  <img src="@/assets/pocetna.gif" class="img-fluid">
</div>
<div id="forma1">
<form>
  <div class="row g-1">
  <div id="forma1">
    <form>
      <div class="row g-1">
        <div class="col-md-3">
          <label class="form-label">Leaving from</label>
          <input
            type="text"
            class="form-control"
            placeholder="From..."
            v-model="from"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Going to</label>
          <input type="text" class="form-control" placeholder="To..." />
        </div>
        <div class="col-md-2">
          <label class="form-label">Number of passengers</label>
          <select class="form-select">
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div class="col-md-2">
          <label class="form-label">Date of leaving</label>
          <input type="date" class="form-control" />
        </div>
        <div class="col-md-2">
          <button class="btn btn-block" id="button2" type="button">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
  </div>
</form>
</div>

<div class="container text-center">
  <div class="row">
    <div class="col-md">
        <p class="text-start fw-semibold" style="color:#2e2c2f;">Best choice of rides</p>
        <p class="text-start" >Travel to wanted destination with amazing number of rides. Do not forget about our wide range of rutes at lowest prices You can find.</p> 
    </div>
    <div class="col-md">
      <p style="color:#2e2c2f;" class="text-start fw-semibold">Trustworthy drivers</p>
      <p class="text-start" >Each of new members is being checked using ID, created profiles to reviews, so You do not have to worry. Just reserve and enjoy Your ride.</p>
    </div>
    <div class="col-md">
      <p style="color:#2e2c2f;" class="text-start fw-semibold">Booking a ride</p>
      <p class="text-start">You can book a ride whenever You want and no matter where You are. Find ride You like the most and click RESERVE!</p>
    </div>
    <div class="col-md">
      <p style="color:#2e2c2f;" class="text-start fw-semibold">Joining our team</p>
      <p class="text-start">You can join our team and drive others by Yourself. All You need to do is create a profile! P.S. Always drive safe. </p>
    </div>
   </div>
</div>
</template>
<style>
#forma1{
  margin-bottom: 50px;
  padding: 30px;
  background-color:#D7BCFD ; 
}
#button2{
  margin-top: 15px;
  margin-bottom: 15px;
  color:#5f5c69 ;
  background-color: #fff;
  outline-color:#fff;
}
</style>
<script>
</script>
