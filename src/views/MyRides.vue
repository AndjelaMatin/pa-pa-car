<template>
  <div v-for="card in cards" v-bind:key="card">
    <div class="card1">
      <div class="card">
        <div class="card-body">
          <h5 class="card-text">Leaving from: {{card.fromWhere }}</h5>
          <h5 class="card-text">Going to: {{card.toWhere }}</h5>
          <p class="card-date">Number of seats: {{card.numberpass }}</p>
          <p class="card-text">Date: {{card.dateleaving }}</p>
          <p class="card-text">Time of leaving: {{card.timeofleaving }}</p>
          <p class="card-text">Price: {{card.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { db, doc, getDocs, collection, deleteDoc } from "@/firebase";
export default {
  name: "myrides",
  data: function () {
    return {
      store,
      cards: [],
    };
  },
  methods: {
    getMyRides() {
      console.log("dohvat-------", store.currentUser);
      getDocs(collection(db, "rides"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const dat = doc.data();
            if (dat.email == store.currentUser) {
              this.cards.push({
                toWhere: dat.arriving,
                fromWhere: dat.leaving,
                numberpass: dat.pass,
                dateleaving: dat.time,
                timeofleaving:dat.hour,
                price: dat.price,
              });

            }
          });
        })
        .catch((err) => {
          console.log(err.massage);
        });
    },
  },
  created: function () {
    this.getMyRides();
  },
};
</script>
<style>
#button1 {
  color: #5f5c69;
  background-color: #d7bcfd;
  outline-color: #d7bcfd;
}
.card1 {
  padding: 15px;
  padding-top: 25px;
  
}
</style>
