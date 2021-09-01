const quizForm = document.querySelector(".quiz-form");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

const answers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === answers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  msg.innerText = "The score is " + score;
}

btn.addEventListener("click", calculateScore);