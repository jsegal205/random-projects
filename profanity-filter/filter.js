const badWordList = ["bad", "word", "list"];
const letterVarients = {
  // can be expanded for full varient to sub out
  a: ["4"],
  o: ["ô", "ö", "ò", "ó", "œ", "ø", "ō", "õ", "0", `\\(\\)`],
  i: ["l"],
};

// logic
const filter = (input) => {
  // build full list of words with varient letters subbed in
  const fullList = [...badWordList];
  Object.keys(letterVarients).map((letter) => {
    badWordList.map((badWord) => {
      // push all the potential varients for words into a list to be checked later
      if (badWord.includes(letter)) {
        letterVarients[letter].map((letterVarient) => {
          fullList.push(badWord.replace(letter, letterVarient));
        });
      }
    });
  });
  const re = new RegExp(fullList.join("|"), "gi");
  return input.replace(re, "*");
};

// tests

const testCases = () => {
  const tests = {
    bad: true,
    word: true,
    list: true,
    this: false,
    is: false,
    a: false,
    good: false,
    string: false,
    wôrd: true,
    wörd: true,
    wòrd: true,
    wórd: true,
    wœrd: true,
    wørd: true,
    wōrd: true,
    wõrd: true,
    b4d: true,
    llst: true,
    w0rd: true,
    "w()rd": true,
  };
  // explicit matches
  Object.keys(tests).forEach((testWord) => {
    const actual = filter(testWord).includes("*");
    const expected = tests[testWord];

    console.log(`${testWord} - TEST PASSED? ${expected === actual}`);
  });

  // uppercase varients
  Object.keys(tests).forEach((testWord) => {
    const actual = filter(testWord.toUpperCase()).includes("*");
    const expected = tests[testWord];

    console.log(
      `${testWord.toUpperCase()} - TEST PASSED? ${expected === actual}`
    );
  });
};

// run tests
testCases();
