const createCard = (date,time) => {
  return `
    <div class="card">
        <h2>
            ${date}
            <span>${time}</span>
        </h2>
          <ul>
            <li>
              <img src="images/brazil-flag.svg" alt="Bandeira-Brasil" />
              <strong>16:00</strong>
              <img src="images/serbia-flag.svg" alt="Bandeira-Sérvia" />
            </li>
          </ul>
    </div>
 `;
};

document.querySelector(".container").innerHTML = `
    <header>
      <img src="images/logo.svg" alt="Logo da NLW-Rocketseat" />
    </header>

    <section class="cards">
      ${createCard('24/11', 'quinta')}
      ${createCard('28/11', 'segunda')}
      ${createCard('02/12', 'sexta')}
    </section>
`;
