let getData = async (url) => {
  let response = await fetch(url);
  let res = await response.json();

  return res;
};

let append = (data, container) => {
  container.innerHTML = null;
  data.forEach((element) => {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerText = `${element.strMeal}`;

    const flex = document.createElement("div");
    const flex1 = document.createElement("div");
    const flex2 = document.createElement("div");

    const img = document.createElement("img");
    img.src = element.strMealThumb;
    flex1.append(img);

    const h31 = document.createElement("h3");
    h31.innerText = `INGREDIENTS :-`;

    const div1 = document.createElement("div");

    for (let i = 1; i <= 20; i++) {
      let str = "strIngredient" + i;
      let strMeasure = "strMeasure" + i;
      if (element[str] !== "") {
        const p = document.createElement("p");
        p.innerText = `${i}. ${element[str]} -  ${element[strMeasure]} ,`;
        div1.append(p);
      }
    }

    flex2.append(h31, div1);
    flex.append(flex1, flex2);

    const h32 = document.createElement("h3");
    h32.innerText = `DECRIPTION :-`;

    const p = document.createElement("p");
    p.innerText = element.strInstructions;

    div.append(h1, flex, h32, p);
    container.append(div);
  });
};

function appendData(data, container) {
  container.innerHTML = null;
  data.forEach(function (element) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.style.cursor = "pointer";

    const p = document.createElement("p");
    p.innerText = element.strMeal;

    div.append(p);

    div.addEventListener("click", function () {
      helloFunction(element);
    });

    container.append(div);
  });
}

let eleArr = [];
let helloFunction = (element) => {
  eleArr.push(element);
  localStorage.setItem("element", JSON.stringify(eleArr));
  window.location.href = `./search.html`;
};

export { getData, append, appendData };
