<template>
  <div id="forma1">
    <form>
      <div class="row g-1">
        <div class="col-md-3">
          <label class="form-label">Leaving from</label>
          <input
            type="text"
            class="form-control"
            placeholder="From..."
            v-model="leav"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Going to</label>
          <input type="text" class="form-control" placeholder="To..." v-model="arri"/>
        </div>
        <div class="col-md-2">
          <label class="form-label">Number of passengers</label>
          <select class="form-select" v-model="pas">
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
          <input type="date" class="form-control" v-model="tim">
        </div>
        <div class="col-md-2">
          <button class="btn btn-block" id="button1" type="button" @click="getRides">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
  <div v-for="card in cards" v-bind:key="card" >
      <div  class="card1">
      <div class="card">
      <div class="card-body">
      <p class="card-text" >{{card.fromWhere}}</p>
      <p class="card-text" >{{card.toWhere}}</p>
      <p class="card-date">{{card.numberpass}}</p>
      <p class="card-text" >{{card.dateleaving}}</p>
      <p class="card-text">{{card.price}}</p>
      <a href="#" class="btn btn-block" type="button" id="button1">Contact driver</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import store from "@/store";
import {db, doc, getDocs, collection } from "@/firebase";
export default {
  name: "rides",
  data: function () {
    return {
      cards:[],
      store,
      pas:"",
      arri:"",
      tim:"",
      leav:"",
    };
  },
  methods:{
    getRides(){
      console.log('dohvat-------');
      getDocs(collection(db,'rides')).then(querySnapshot=>{
        querySnapshot.forEach((doc)=>{
          const dat=doc.data();
          if(dat.arriving==this.arri && dat.leaving==this.leav && dat.time==this.tim && dat.pass>=this.pas){
            this.cards.push({
            toWhere:dat.arriving,
            fromWhere:dat.leaving,
            numberpass:dat.pass,
            dateleaving:dat.time,
            price:dat.price,
            email:dat.email,
          });
          }
        });
      }).catch((err)=>{
        console.log(err.massage);
      });
    },
  },
};
</script>
<style>
#button1 {
  color: #5f5c69;
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
}
#forma1 {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
}
.card1{
  padding: 15px;
  padding-top:25px ;
}
</style>
