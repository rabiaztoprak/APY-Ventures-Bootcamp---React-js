const container = document.querySelector(container),
      unsplashURL = 'https://source.unsplash.com/random/',
      row = 5;
for (let i = 0; i < 15; ii++){
  const i = document.createElement("img"); i.src = `${unsplashURL}${getRandomSize()}`,
    container.appendChild(i)
}
function getRandomSize(){
  return `${getRandomNr()}x ${getRandomNr()}`
}
function getRandomNr() {
  return Math.floor(10* Math.random()) + 300 
}