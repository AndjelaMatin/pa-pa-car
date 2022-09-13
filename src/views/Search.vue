<template>
  <div id="forma1">
    <div class="div3">
      <h2>FIND RIDE JUST FOR YOU!</h2>
    </div>
  </div>
  <div id="forma1">
    <form>
      <div class="row g-2">
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
          <input
            type="text"
            class="form-control"
            placeholder="To..."
            v-model="arri"
          />
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
          <input type="date" class="form-control" v-model="tim" />
        </div>
        <div class="col-md-2">
          <button
            class="btn btn-block"
            id="button2"
            type="button"
            @click="getRides"
          >
            Search
          </button>
          <br />
          <br />
        </div>
      </div>
    </form>
  </div>
  <div>
    <div v-for="card in cards" v-bind:key="card">
      <div class="card1">
        <div class="card text-right">
          <div class="card-body">
            <label class="card-text">LEAVING FROM:</label>
            <p class="card-text">{{ card.fromWhere }}</p>
            <label class="card-text">GOING TO:</label>
            <p class="card-text">{{ card.toWhere }}</p>
            <p class="card-text">NUMBER OF SEATS: {{ card.numberpass }}</p>
            <p class="card-date">DATE: {{ card.dateleaving }}</p>
            <p class="card-date">TIME OF LEAVING: {{ card.timeofleaving }}</p>
            <p class="card-text">PRICE: {{ card.price }}</p>
            <p class="card-text">CONTACT: {{ card.email }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.provjera" class="div4">
      <h5>RIDE WITH THIS DATA STILL DOES NOT EXIST</h5>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { db, doc, getDocs, collection } from "@/firebase";
export default {
  name: "rides",
  data: function () {
    return {
      cards: [],
      store,
      pas: "",
      arri: "",
      tim: "",
      leav: "",
      email: "",
      provjera: false,
    };
  },
  methods: {
    getRides() {
      this.provjera = false;
      this.cards = [];
      if (
        this.arri != "" &&
        this.leav != "" &&
        this.tim != "" &&
        this.pas != ""
      ) {
        console.log("Dohvat");
        getDocs(collection(db, "rides"))
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const dat = doc.data();
              if (
                dat.arriving == this.arri &&
                dat.leaving == this.leav &&
                dat.time == this.tim &&
                dat.pass >= this.pas
              ) {
                this.cards.push({
                  toWhere: dat.arriving,
                  fromWhere: dat.leaving,
                  numberpass: dat.pass,
                  dateleaving: dat.time,
                  timeofleaving: dat.hour,
                  price: dat.price,
                  email: dat.email,
                });
              } else if (
                dat.arriving != this.arri ||
                dat.leaving != this.leav ||
                dat.time != this.tim ||
                dat.pass < this.pas
              ) {
              }
            });
            console.log(this.cards);
            if (Array.isArray(this.cards) && !this.cards.length) {
              this.provjera = true;
            }
          })
          .catch((err) => {
            console.log(err.massage);
          });
      } else {
        alert("Some fields are empty!");
      }
    },
  },
};
</script>
<style>
#button2 {
  margin-top: 15px;
  margin-bottom: 15px;
  color: #5f5c69;
  background-color: #fff;
  outline-color: #fff;
}
#forma1 {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 10px;
}
.card1 {
  padding: 15px;
  padding-top: 25px;
}
.div3 {
  padding: 30px;
  margin: 15px;
  background-color: #fff;
  text-shadow: 2px 2px #d7bcfd;
  border-radius: 10px;
}
#button1 {
  color: #5f5c69;
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
}
.div4{
  padding: 10px;
  margin: 10px;
  background-color:#ebe8ec;
  border-radius: 10px;
  text-shadow: 2px 2px #d7bcfd;
}
</style>
