import FilmView from "./FilmView.js";

class FilmekView {
    #filmek = [];
    constructor(filmTomb, parent) {
        parent.html("<article></article>");
        this.sajat = parent.children("article:last-child");
        filmTomb.forEach(film => {
            this.#filmek.push(new FilmView(film, this.sajat));
        });
    }
    
}
export default FilmekView;