const casualAdvise = axios
  .get("https://api.adviceslip.com/advice")
  .then((res) => advice(res.data.slip));

const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

function advice(adv) {
  //   console.log(adv);
  adviceID.innerHTML = `ADVISE # ${adv.id}`;
  adviceText.innerHTML = `"${adv.advice}"`;
}

dice.addEventListener("click", () => {
  location.reload();
});
