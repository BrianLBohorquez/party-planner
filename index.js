// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2608-BRIAN";
const RESOURCE = "/events";
const API = BASE + COHORT + RESOURCE;

let parties = [];
let selectedParty;

async function getParties() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    parties = result.data;
    render();
  } catch (e) {
    console.error(e);
  }
}

async function getParty(id) {
  try {
    const response = await fetch(API + "/" + id);
    const result = await response.json();
    selectedParty = result.data;
    render();
  } catch (e) {
    console.error(e);
  }
}
