const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");
const timeSection = document.querySelector(".time-section");

async function getData() {
    const response = await fetch("./data.json");
    const datas = await response.json();

    weeklyBtn.classList.add("selected");
    datas.forEach((data) => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
                    <div class="icon-container">
                            <img src="./images/icon-${data.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.svg" alt="">
                        </div>
                        <div class="time-container">
                            <div class="title">
                                <p>${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
                            <div class="hour-value">
                                <p>${data.timeframes.weekly.current}hrs</p>
                                <p>Last Week - ${
                                    data.timeframes.weekly.previous
                                }hrs</p>
                            </div>
                        </div>
                    `;
                    div.classList.add(
                        `${data.title.toLowerCase().replace(/\s+/g, "-")}`
                    );
        timeSection.appendChild(div);
    });

    dailyBtn.addEventListener("click", () => {
        reset();
        dailyBtn.classList.add("selected");
        datas.forEach((data) => {
            let div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                    <div class="icon-container">
                            <img src="./images/icon-${data.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.svg" alt="">
                        </div>
                        <div class="time-container">
                            <div class="title">
                                <p>${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
                            <div class="hour-value">
                                <p>${data.timeframes.daily.current}hrs</p>
                                <p>Last Day - ${
                                    data.timeframes.daily.previous
                                }hrs</p>
                            </div>
                        </div>
                    `;
                    div.classList.add(
                        `${data.title.toLowerCase().replace(/\s+/g, "-")}`
                    );
            timeSection.appendChild(div);
        });
    });

    weeklyBtn.addEventListener("click", () => {
        reset()
        weeklyBtn.classList.add("selected");
        datas.forEach((data) => {
            let div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                    <div class="icon-container">
                            <img src="./images/icon-${data.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.svg" alt="">
                        </div>
                        <div class="time-container">
                            <div class="title">
                                <p>${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
                            <div class="hour-value">
                                <p>${data.timeframes.weekly.current}hrs</p>
                                <p>Last Week - ${
                                    data.timeframes.weekly.previous
                                }hrs</p>
                            </div>
                        </div>
                    `;
                    div.classList.add(
                        `${data.title.toLowerCase().replace(/\s+/g, "-")}`
                    );
            timeSection.appendChild(div);
        });
    });

    monthlyBtn.addEventListener("click", () => {
        reset();
        monthlyBtn.classList.add("selected");
        datas.forEach((data) => {
            let div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                    <div class="icon-container">
                            <img src="./images/icon-${data.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.svg" alt="">
                        </div>
                        <div class="time-container">
                            <div class="title">
                                <p>${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
                            <div class="hour-value">
                                <p>${data.timeframes.monthly.current}hrs</p>
                                <p>Last Month - ${
                                    data.timeframes.monthly.previous
                                }hrs</p>
                            </div>
                        </div>
                    `;
                    div.classList.add(`${data.title.toLowerCase().replace(/\s+/g, '-')}`);
            timeSection.appendChild(div);
        });
    });
}

function reset() {
    while (timeSection.firstChild) {
        timeSection.removeChild(timeSection.firstChild);
    }
    dailyBtn.classList.remove("selected");
    monthlyBtn.classList.remove("selected");
    weeklyBtn.classList.remove("selected");
}

getData();