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
          <button class="btn btn-block" id="button1" type="button">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
  <div>
    <path v-for="card in filteredCards" :key="card.from" :info="card" />
  </div>
</template>
<script>
let cards = [
  {
    from: "Pula",
    to: "Zagreb",
    date: "14.08.2022.",
    leaving: "13:00",
    arriving: "18:00",
    seats: "2",
    price: "250",
    driver: "Ante",
  },
];
import path from "@/components/path";
import store from "@/store";
export default {
  name: "rides",
  data: function () {
    return {
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.from.includes(termin));
    },
  },
  components: {
    path,
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
</style>
