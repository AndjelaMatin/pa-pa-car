<template>
  <div class="card1">
    <div class="card">
      <div class="card-header">Information about new ride</div>
      <div class="card-body">
        <label class="card-text">Leaving from</label>
        <input
          type="text"
          class="form-control"
          placeholder="From..."
          v-model="fromWhere"
        />
        <br/>
        <label class="card-text">Going to</label>
        <input
          type="text"
          class="form-control"
          placeholder="To..."
          v-model="toWhere"
        />
        <br/>
        <label class="card-text">Number of passengers</label>
        <select class="form-select" v-model="numberpass">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select><br/>
        <label class="card-text">Price</label>
        <input
          type="text"
          class="form-control"
          placeholder="Price..."
          v-model="price"
        /><br/>
        <label class="card-text">Date of leaving</label>
        <input type="date" class="form-control" v-model="dateleaving" />
        <br/>
        <label class="card-text">Time of leaving</label>
        <input type="time" class="form-control" v-model="timeofleaving" />
        <br/>
        <button
          class="btn btn-block"
          id="button1"
          type="button"
          @click="addNewRide"
        >
          Add
        </button>
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
.card1 {
  padding: 15px;
  padding-top: 25px;
}
</style>
<script>
import { db, doc, setDoc, collection } from "@/firebase";
import store from "@/store";
export default {
  name: "NewRide",
  data: function () {
    return {
      fromWhere: "",
      toWhere: "",
      numberpass: "",
      dateleaving: "",
      timeofleaving: "",
      numberpass: "",
      price: "",
    };
  },
  methods: {
    addNewRide() {
      if (
        this.fromWhere != "" &&
        this.toWhere != "" &&
        this.numberpass != "" &&
        this.dateleaving != "" &&
        this.timeofleaving != "" &&
        this.price != ""
      ) {
        const newRide = doc(collection(db, "rides"));
        setDoc(newRide, {
          leaving: this.fromWhere,
          arriving: this.toWhere,
          pass: this.numberpass,
          time: this.dateleaving,
          hour: this.timeofleaving,
          price: this.price,
          email: store.currentUser,
        })
          .then((doc) => {
            console.log("Sporemljeno ", doc);
            this.fromWhere = "";
            this.toWhere = "";
            this.numberpass = "";
            this.dateleaving = "";
            this.timeofleaving = "";
            this.price = "";
          })
          .catch((er) => {
            console.error(er);
          });
      } else {
        alert("Some fileds are empty!");
      }
    },
  },
};
</script>
