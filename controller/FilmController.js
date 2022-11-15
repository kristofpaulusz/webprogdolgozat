import FilmModel from "../model/FilmModel.js";
import FilmekView from "../view/FilmekView.js";

class FilmController {
    constructor() {
        const filmModel = new FilmModel();
        filmModel.adatBe("../data.json", this.filmAdatok);

    $(window).on("csokkent", (event) => {
        // console.log("-1 "+event.detail)
        filmModel.adatCsokken(event.detail);
        this.filmAdatok(filmModel.getTomb());
    });
    $(window).on("novel", (event) => {
        // console.log("+1 "+event.detail)
        
        filmModel.adatNovel(event.detail);
        this.filmAdatok(filmModel.getTomb());
    });
}
    filmAdatok(tomb) {
        const filmekView = new FilmekView(tomb, $("main"));
    }
    
}
export default FilmController;