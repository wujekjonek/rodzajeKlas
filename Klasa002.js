var Klasa002 = (function () {
    function Klasa002(pierwsza_liczba, druga_liczba) {
        this.a = pierwsza_liczba;
        this.b = druga_liczba;
    }
    // METODY
    Klasa002.prototype.dodajParametry = function () {
        var wynik = this.a + this.b;
        return wynik;
    };
    Klasa002.prototype.pomnozParametry = function () {
        var wynik = this.a * this.b;
        return wynik;
    };
    return Klasa002;
}());
