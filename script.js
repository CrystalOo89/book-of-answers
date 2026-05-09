const answers = [
  "先迈出最小的一步。",
  "答案会在你开始后出现。",
  "今天适合说清楚。",
  "不要急着否定自己。",
  "换一条路，会更顺。",
  "等一等，风向正在变。",
  "你已经知道该怎么选。",
  "把复杂的事拆小。",
  "这次可以相信直觉。",
  "先休息，再决定。",
  "机会藏在试试看里。",
  "别替未来过早担心。",
  "请把标准调回现实。",
  "答案不是唯一的。",
  "大胆一点，但别逞强。",
  "向前走，会有人回应。",
  "现在适合收尾。",
  "这件事值得再问一次。",
  "选让你变轻松的那边。",
  "慢一点，反而更准。",
  "把注意力放回自己。",
  "可以开始，也可以重来。",
  "今天的好运需要主动领取。",
  "先做能做的那部分。",
  "你不必马上有答案。"
];

const book = document.querySelector("#book");
const answer = document.querySelector("#answer");
const revealButton = document.querySelector("#reveal");
const resetButton = document.querySelector("#reset");

let lastIndex = -1;

function pickAnswer() {
  let nextIndex = Math.floor(Math.random() * answers.length);

  if (answers.length > 1) {
    while (nextIndex === lastIndex) {
      nextIndex = Math.floor(Math.random() * answers.length);
    }
  }

  lastIndex = nextIndex;
  return answers[nextIndex];
}

function revealAnswer() {
  book.classList.add("is-open", "is-turning");
  answer.textContent = pickAnswer();

  window.setTimeout(() => {
    book.classList.remove("is-turning");
  }, 580);
}

function resetBook() {
  book.classList.remove("is-open", "is-turning");
  answer.textContent = "答案正在页缝里等你。";
}

revealButton.addEventListener("click", revealAnswer);
resetButton.addEventListener("click", resetBook);
