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
      state.scene_number = choice.next;
      showScene(scenes[state.scene_number]);
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
    choices: [{ text: "Begin journey", next: 6 }]
  },
  { // 2 - Receive endowment
    text: "You receive your endowment and feel the blessings of the Lord.",
    choices: [{ text: "Begin journey", next: 6 }]
  },
  { // 3 - work on temple
    text: "You work on the temple",
    choices: [{ text: "Begin journey", next: 6 }]
  },
  { // 4 - study church documents
	  text: "You study some old church records. A page Joseph's journal reads:\n\n 'I instructed the 12 to send out a delegation -& investigate the Locations of Californnia & oregon & find a good Location where we can remove after the Temple is completed. -& build a city in a day- and have a government of our own -  in a healthy climate -' \n -  Joseph Smith Papers Journal 20 February 1844",
    choices: [
	    { text: "Read More", next: 5 },
	    { text: "Begin journey", next: 6 }
    ]
  },
  {
	  text: "You find remarks from Wilford Woodruff regarding a prophesy Joseph Smith shared when they first met:\n \n [Joseph] said 'it is only a little handfull of Priesthood you see here tonight, but this Church will fill North and South America - it will fill the world... it will fill the Rocky Mountains. There will be tens of thousands of Latter-dayy Saints who will be gathered in the Rocky Mountains, and there they will open the door for the establishing of the Gospel among the Lamanites, who will receive the Gospel and their endowments and the blessings of God. This people will go into the Rockey Mountains; they will there build temples to the Most High. They will raise up a posterity there, and the Latter-day Saints who dwell in these mountains will stand in the flesh until the coming of the Son of Man. The Son of Man will come to them while in the Rocky Mountains.' \n - Conference Report 1898 pg 57",
	  choices: [{text: "Continue Journey", next: 6}]
  }
  { // 6 - begin journey
    text: "You get dysentery. Skill issue."
  }
];

showScene(scenes[state.scene_number]);
