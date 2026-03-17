const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");

let state = {
  food: 100,
  health: 100,
  company: 5,
  days: 0,
  possessions: 100,
  scene_number: 0,
  blessings: 0
};

function showScene(scene) {
  textEl.textContent = scene.text;
  choicesEl.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      Object.assign(state, choice.effect || {});
      showScene(scenes[choice.next]);
    };
    choicesEl.appendChild(btn);
  });
}

const scenes = [
  { // 0 - opening scene
    text: "Following the martyrdom of Joseph Smith in 1844,"
    + "anti-Mormon sentiments in Illinois continued to rise."
    + "In the spring of 1845, the council of the 12 began to"
    + "discuss moving west and sending an expedition to explore possible places to live."
    + "As you patiently patiently wait, you can finish working on the temple in order to"
    + "receive your endowment and receive the blessings of the Lord for your journey.",
    choices: [
      { text: "Listen to Brigham Young", next: 1, effect: { blessings: 10 } },
      { text: "Receive your endowment", next: 2, effect: { blessings: 30 } },
      { text: "Work on the temple", next: 3 },
      { text: "Study church documents", next: 4}
    ]
  },
  { // 1 - Brigham Young's speech
    text: "Brigham Young speech about",
    choices: [{ text: "Begin journey", next: 5 }]
  },
  { // 2 - Receive endowment
    text: "You receive your endowment and feel the blessings of the Lord.",
    choices: [{ text: "Begin journey", next: 5 }]
  },
  { // 3 - work on temple
    text: "You work on the temple",
    choices: [{ text: "Begin journey", next: 5 }]
  },
  { // 4 - study church documents
    text: "Study the docs",
    choices: [{ text: "Begin journey", next: 5 }]
  },
  { // 5 - begin journey
    text: "You get dysentery. Skill issue."
  }
];

showScene(scenes[state.scene_number]);
