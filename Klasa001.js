var Klasa001 = (function () {
    function Klasa001() {
    }
    // klasa bez parametrów która zwraca jakąś wartosc
    Klasa001.go = function () {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        console.log("podaj date.js");
        var da = new Date();
        var y = addZero(da.getFullYear());
        var m = addZero(da.getMonth());
        var d = addZero(da.getDate());
        var data = y + "-" + m + "-" + d;
        // console.log("data --> " + data);
        return data;
    };
    return Klasa001;
}());
