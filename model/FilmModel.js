class FilmModel {
    #filmekTomb = [];

    constructor() {
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#filmekTomb = data.filmek;
                myCallBack(this.#filmekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatCsokken(index) {
        this.#filmekTomb[index].mennyiseg -= 1;
    }
    adatNovel(index) {
        this.#filmekTomb[index].mennyiseg += 1;
    }
    getTomb() {
        return this.#filmekTomb;
    }
}

export default FilmModel;