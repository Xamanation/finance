import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const financeReport = document.querySelector(".finance__report");


let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const typeOperation = e.submitter.dataset.typeOperation;

  const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

  if (typeOperation === 'income') {
    amount += changeAmount;
  }

  if (typeOperation === 'expenses') {
    amount -= changeAmount;
  }

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});


const report = document.querySelector(".report");
const reportClose = document.querySelector(".report__close");

// Открывание модального окна
financeReport.addEventListener("click", (e) => {
report.classList.toggle("report__open");
});

// Закрытие модального окна
reportClose.addEventListener("click", (e) => {
    report.classList.remove("report__open");
    });

// Закрытие модального окна при клике вне окна
document.addEventListener("click", (e) => {
    if (report.classList.contains("report__open") && !report.contains(e.target) && e.target !== financeReport) {
      report.classList.remove("report__open");
    }
  });