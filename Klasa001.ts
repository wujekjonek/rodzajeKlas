class Klasa001{

// klasa bez parametrów która zwraca jakąś wartosc


static go() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        console.log("podaj date.js");
        let da = new Date();
        let y = addZero(da.getFullYear());
        let m = addZero(da.getMonth());
        let d = addZero(da.getDate());
        let data = y + "-" + m + "-" + d;
        // console.log("data --> " + data);
        return data;
    }
}