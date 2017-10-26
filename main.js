// klasa bez parametrów która zwraca jakąś wartosc
console.log("Klasa001:" + Klasa001.go());
// klasa z 2 parametrami która zwraca sume parametrów
var klasa0022 = new Klasa002(2, 3);
console.log("klasa0022 dodawanie: " + klasa0022.dodajParametry());
console.log("klasa0022 mnozenie: " + klasa0022.pomnozParametry());
// klasa z 2 parametrami która sama cos robi
var klasa33 = new Klasa003(4, 5);
klasa33.go();
// klasa bez parametrów która sama cos robi
Klasa004.go();
