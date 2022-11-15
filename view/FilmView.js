class FilmView {
    #elem;
    constructor(film, parent) {
    this.#elem = film;
    parent.append(`<div>
    <img src="./placeholder.jpg" alt="ph" />
        <h2>ID: ${film.id}</h2>
        <p>cim: ${film.cim}</p>
        <p>hossz: ${film.hossz}</p>
        <p>mennyiseg: ${film.mennyiseg}</p>
        <button id="${film.id}plus">+</button>
        <button id="${film.id}minus">-</button>
      </div>`);
    
      this.minus = $(`#${film.id}minus`)
      this.plus = $(`#${film.id}plus`)

    //   console.log(this.minus)

    this.minus.on("click", () => {
        this.kattintasTrigger("csokkent");
    });

    this.plus.on("click", () => {
        this.kattintasTrigger("novel");
    });

    }
    kattintasTrigger(para) {
        const esemeny = new CustomEvent(para, { detail: this.#elem.id });
        window.dispatchEvent(esemeny);
    }

}
export default FilmView;