const butn = document.querySelector("button");

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

// greet("kietas")("vytcka");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    if (typeof answer === "number" && answer < 4) {
      this.answers[answer]++;
      // console.log(this.answers);
    }
    const displayResults = (type) => {
      type = this.answers;
      if (typeof type === "string") {
        console.log(`result ${type}`);
      } else {
        console.log(type);
      }
    };
    return displayResults();
  },
};

butn.addEventListener("click", poll.registerNewAnswer.bind(poll));
