<template>
  <div v-for="card in cards" v-bind:key="card">
    <div class="card1">
      <div class="card">
        <div class="card-body">
          <p class="card-text">{{ card.fromWhere }}</p>
          <p class="card-text">{{ card.toWhere }}</p>
          <p class="card-date">{{ card.numberpass }}</p>
          <p class="card-text">{{ card.dateleaving }}</p>
          <p class="card-text">{{ card.price }}</p>
          <button
            class="btn btn-block"
            type="button"
            id="button1"
          >
            Delete ride
          </button>
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
                price: dat.price,
              });
            }
          });
        })
        .catch((err) => {
          console.log(err.massage);
        });
    },
    // deleteRide() {
    //  deleteDoc(doc(db, "rides"));
    //},
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
