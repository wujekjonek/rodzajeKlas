class Klasa003 {

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
    go() {
        let suma = this.a+this.b;
        let iloczyn = this.a*this.b;


        console.log("klasa003 dodawanie: " + suma);
        console.log("klasa003 mnozenie: " + iloczyn);

return ;



    }




}