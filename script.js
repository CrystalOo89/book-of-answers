const answers = [
  {
    text: "先踏出最小的一步。",
    theme: "move",
    marks: ["步", "路", "光", "行"],
    note: "路已经在纸上露出一点边，只差你轻轻往前。"
  },
  {
    text: "答案会在你开始后出现。",
    theme: "move",
    marks: ["始", "门", "光", "开"],
    note: "先把门推开，后面的字才会自己排成句子。"
  },
  {
    text: "今天适合说清楚。",
    theme: "clear",
    marks: ["言", "清", "月", "明"],
    note: "左页留下一轮明月，提醒你把话说得温柔而准确。"
  },
  {
    text: "不要急着否定自己。",
    theme: "quiet",
    marks: ["心", "稳", "灯", "护"],
    note: "心口还有一盏灯，不必先把它吹灭。"
  },
  {
    text: "换一条路，会更顺。",
    theme: "move",
    marks: ["路", "转", "风", "顺"],
    note: "纸上的路拐了个弯，风也跟着变轻。"
  },
  {
    text: "等一等，风向正在变。",
    theme: "wait",
    marks: ["风", "候", "云", "时"],
    note: "现在适合听风，不适合追风。"
  },
  {
    text: "你已经知道该怎么选。",
    theme: "clear",
    marks: ["选", "知", "星", "定"],
    note: "星标在左页停住，像你心里早就圈好的答案。"
  },
  {
    text: "把复杂的事拆小。",
    theme: "clear",
    marks: ["拆", "一", "二", "三"],
    note: "把大问题折成小纸片，每一片都能被认真处理。"
  },
  {
    text: "这次可以相信直觉。",
    theme: "quiet",
    marks: ["觉", "心", "光", "准"],
    note: "直觉不是喧哗，它只是比语言更早到达。"
  },
  {
    text: "先休息，再决定。",
    theme: "wait",
    marks: ["息", "茶", "月", "慢"],
    note: "停顿不是退后，是给答案留一张安静的桌子。"
  },
  {
    text: "机会藏在试试看里。",
    theme: "move",
    marks: ["试", "机", "芽", "开"],
    note: "一枚小芽从页边冒出来，提醒你先试一试。"
  },
  {
    text: "别替未来过早担心。",
    theme: "quiet",
    marks: ["今", "安", "云", "轻"],
    note: "云还没有落下，不必先替雨准备悲伤。"
  },
  {
    text: "请把标准调回现实。",
    theme: "clear",
    marks: ["尺", "实", "衡", "正"],
    note: "左页放了一把尺，只量今天够得着的地方。"
  },
  {
    text: "答案不是唯一的。",
    theme: "clear",
    marks: ["多", "门", "星", "路"],
    note: "书页上开了不止一扇门，每一扇都通向可能。"
  },
  {
    text: "大胆一点，但别逞强。",
    theme: "move",
    marks: ["勇", "稳", "火", "界"],
    note: "火光可以照路，也要记得给自己留边界。"
  },
  {
    text: "向前走，会有人回应。",
    theme: "move",
    marks: ["行", "回", "灯", "声"],
    note: "纸上的灯一盏盏亮起，远处会有回声。"
  },
  {
    text: "现在适合收尾。",
    theme: "wait",
    marks: ["结", "尾", "印", "合"],
    note: "把最后一枚印章盖好，这一章就能安稳合上。"
  },
  {
    text: "这件事值得再问一次。",
    theme: "clear",
    marks: ["问", "再", "镜", "明"],
    note: "镜子还亮着，再问一次会看见更完整的轮廓。"
  },
  {
    text: "选让你变轻松的那边。",
    theme: "quiet",
    marks: ["轻", "松", "羽", "心"],
    note: "左页落下一片羽毛，提醒你别把自己压得太重。"
  },
  {
    text: "慢一点，反而更准。",
    theme: "wait",
    marks: ["慢", "准", "钟", "稳"],
    note: "钟摆放慢以后，指针才更容易指向真正的位置。"
  },
  {
    text: "把注意力放回自己。",
    theme: "quiet",
    marks: ["我", "心", "圆", "守"],
    note: "书页画了一个圆，你先回到圆心。"
  },
  {
    text: "可以开始，也可以重来。",
    theme: "move",
    marks: ["始", "新", "门", "光"],
    note: "两扇门都开着，郑重选择其中一扇就好。"
  },
  {
    text: "今天的好运需要主动领取。",
    theme: "move",
    marks: ["运", "取", "星", "手"],
    note: "好运像一枚印记，等你伸手把它按亮。"
  },
  {
    text: "先做能做的那部分。",
    theme: "clear",
    marks: ["做", "能", "一", "成"],
    note: "先完成一小格，整页就会跟着松动。"
  },
  {
    text: "你不必马上有答案。",
    theme: "wait",
    marks: ["待", "空", "月", "安"],
    note: "空白也是书的一部分，它允许你慢慢想。"
  }
];

const bookWrap = document.querySelector("#bookWrap");
const book = document.querySelector("#book");
const answer = document.querySelector("#answer");
const revealButton = document.querySelector("#reveal");
const resetButton = document.querySelector("#reset");
const motif = document.querySelector("#motif");
const motifMarks = [...document.querySelectorAll(".motif-mark")];
const leftNote = document.querySelector("#leftNote");

let lastIndex = -1;
let isOpen = false;
let isAnimating = false;

function setControls() {
  revealButton.disabled = isOpen || isAnimating;
  resetButton.disabled = !isOpen || isAnimating;
}

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

function paintLeftPage(entry) {
  motif.dataset.theme = entry.theme;
  motifMarks.forEach((mark, index) => {
    mark.textContent = entry.marks[index];
  });
  leftNote.textContent = entry.note;
}

function setAnswerText(text) {
  answer.textContent = text;
  answer.classList.toggle("is-long", text.length > 11);
}

function revealAnswer() {
  if (isOpen || isAnimating) {
    return;
  }

  const entry = pickAnswer();
  isAnimating = true;
  setControls();

  bookWrap.classList.add("is-wide");
  book.classList.add("is-opening");

  window.setTimeout(() => {
    book.classList.add("is-fluttering");
  }, 360);

  window.setTimeout(() => {
    paintLeftPage(entry);
    setAnswerText(entry.text);
  }, 1680);

  window.setTimeout(() => {
    book.classList.remove("is-opening", "is-fluttering");
    book.classList.add("is-open");
    isAnimating = false;
    isOpen = true;
    setControls();
  }, 1720);
}

function resetBook() {
  if (!isOpen || isAnimating) {
    return;
  }

  isAnimating = true;
  setControls();
  book.classList.add("is-closing");
  bookWrap.style.transition = "none";
  book.classList.remove("is-open");
  bookWrap.classList.remove("is-wide");
  bookWrap.offsetHeight;
  bookWrap.style.transition = "";

  window.setTimeout(() => {
    setAnswerText("答案正在页缝里等你。");
    motif.dataset.theme = "quiet";
    ["心", "静", "光", "问"].forEach((text, index) => {
      motifMarks[index].textContent = text;
    });
    leftNote.textContent = "把问题放轻一点，答案会慢慢显影。";
    book.classList.remove("is-closing");
    isOpen = false;
    isAnimating = false;
    setControls();
  }, 720);
}

setControls();
revealButton.addEventListener("click", revealAnswer);
resetButton.addEventListener("click", resetBook);
