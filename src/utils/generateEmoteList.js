const emotesList = Array.from({ length: 86 }, (_, i) => {
  const fileName = `/img/emotes/${i + 1}`;
  return fileName;
});

const generateEmoteList = () => {
  let used = [];
  const toShow = Array.from({ length: emotesList.length / 4 }, () => {
    let currEmote = emotesList.at(
      Math.floor(Math.random() * emotesList.length),
    );
    used.includes(currEmote)
      ? (currEmote = emotesList.at(
          Math.floor(Math.random() * emotesList.length),
        ))
      : "";
    used.push(currEmote);
    return currEmote;
  });
  return toShow;
};

export default generateEmoteList;
