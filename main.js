const togglerBtn = document.querySelector(".toggler--wrapper");
const period = document.querySelector(".period");
let yearly = false;
let pricesMonthly = [8, 12, 16, 24, 36];
let pricesYearly = [6, 9, 12, 18, 27];
let reviews = ["10K", "50K", "100K", "500K", "1M"];
const sliderInput = document.querySelector("#slider");
const price = document.querySelector(".price");
const review = document.querySelector(".review");

togglerBtn.addEventListener("click", () => {
  if (togglerBtn.classList.contains("active")) {
    togglerBtn.classList.remove("active");
    yearly = false;
    period.textContent = "/monthly";
    price.textContent = "$" + pricesMonthly[2] + ".00";
  } else {
    togglerBtn.classList.add("active");
    yearly = true;
    period.textContent = "/yearly";
    price.textContent = "$" + pricesYearly[2] + ".00";
  }
});

sliderInput.addEventListener("change", () => {
  const index = sliderInput.value;
  if (!togglerBtn.classList.contains("active") && !yearly) {
    price.textContent = "$" + pricesMonthly[index - 1] + ".00";
  } else {
    price.textContent = "$" + pricesYearly[index - 1] + ".00";
  }
  review.textContent = reviews[index - 1];
});
