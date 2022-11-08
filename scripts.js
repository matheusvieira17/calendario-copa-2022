const createGame = (country, time) => {
  return `
    <li>
        <img src="images/brazil-flag.svg" alt="Bandeira-Brasil" />
        <strong>${time}</strong>
        <img src="images/${country}-flag.svg" alt="Bandeira-${country}" />
    </li>
    `;
};

const createCard = (date, day, games) => {
  return `
    <div class="card">
        <h2>
            ${date}
            <span>${day}</span>
        </h2>
          <ul>
            ${games}
          </ul>
    </div>
 `;
};

document.querySelector(".cards").innerHTML =
  createCard("24/11", "quinta", createGame("serbia", "16:00")) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00")) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00"));
