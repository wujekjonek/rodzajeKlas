var Klasa003 = (function () {
    function Klasa003(pierwsza_liczba, druga_liczba) {
        this.a = pierwsza_liczba;
        this.b = druga_liczba;
    }
    // METODY
    Klasa003.prototype.go = function () {
        var suma = this.a + this.b;
        var iloczyn = this.a * this.b;
        console.log("klasa003 dodawanie: " + suma);
        console.log("klasa003 mnozenie: " + iloczyn);
        return;
    };
    return Klasa003;
}());
