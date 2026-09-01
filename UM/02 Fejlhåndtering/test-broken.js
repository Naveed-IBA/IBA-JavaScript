let output = document.getElementById('output');
let piger = ["Sofie", "Carina", "Nina", "Lena"], 
drenge = ["Stefan", "Rasmus", "Jørgen", "Michael"];

for (let i = 0; i <= Math.min(piger.length, drenge.length) - 1; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `${piger[i]}, ${drenge[i]}`;
    output.append(newLi);
}