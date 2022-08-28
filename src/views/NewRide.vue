<template>
<div class="card1">
  <div class="card" >
    <div class="card-header">Information about new ride</div>
    <div class="card-body">
      <p class="card-text">Leaving from</p>
      <input type="text" class="form-control" placeholder="From..." />
      <p class="card-text">Going to</p>
      <input type="text" class="form-control" placeholder="To..." />
      <p class="card-text">Number of passengers</p>
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
      <p class="card-text">Date of leaving</p>
      <input type="date" class="form-control" />
      <button class="btn btn-block" id="button1" type="button">Add</button>
    </div>
  </div>
</div>
</template>
<style>
#button1 {
  color: #5f5c69;
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
  margin-top: 10px;
}
.card1{
  padding: 15px;
  padding-top:25px ;
}
</style>
<script></script>
