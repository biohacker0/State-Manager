function selectElements(query) {
  const elements = document.querySelectorAll(query);
  if (elements.length > 1) return elements;
  else if (elements.length == 1) return elements[0];
  else return null;
}

let state = {
  name: "initial state",
};

function renderDom() {
  selectElements("#app").innerHTML = "";
  selectElements(
    "#app"
  ).innerHTML = ` <button id="btn">${state.name} </button>`;
}

renderDom();

function setState(cb) {
  cb();
  renderDom();
}

selectElements("#changeStateBtn").addEventListener("click", (e) => {
  setState(() => {
    state.name = "changed state by setState";
  });
});
