<template>
 <div class="card">
  <div class="card-header">
    <p class="card-text" >{{info.from}}-{{info.to}}</p>
  </div>
  <div class="card-body">
    <p class="card-date">{{info.date}}</p>
    <p class="card-text" >{{info.leaving}}</p>
    <p class="card-text">{{info.arriving}}</p>
    <p class="card-text"> {{info.seats}}</p>
    <p class="card-text">{{info.price}}</p>
    <p class="card-text">{{info.driver}}</p>
    <a href="#" class="btn btn-block" type="button" id="button1">Reserve</a>
  </div>
</div>
</template>

<script>
export default{
  props:['info'],
  name: 'path',
};
</script>
<style>
#button1 {
  color: #5f5c69;
  background-color: #D7BCFD;
  outline-color: #D7BCFD;
}
</style>