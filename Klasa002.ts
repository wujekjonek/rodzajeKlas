class Klasa002 {

// klasa z 2 parametrami która zwraca sume parametrów

    // POLA KLASY
    a: number;
    b: number;



    KONSTRUKTOR
    constructor(pierwsza_liczba: number,
                druga_liczba: number) {
        this.a = pierwsza_liczba;
        this.b = druga_liczba;

    }


    // METODY
    dodajParametry() {
        let wynik = this.a+this.b;
        return wynik;
    }



    pomnozParametry() {
        let wynik = this.a*this.b;
        return wynik;
    }



}