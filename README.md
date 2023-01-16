# -LT-20_In_Operator

`in` operator dalam JavaScript adalah operator yang digunakan untuk menentukan apakah sebuah properti atau indeks ada dalam sebuah objek atau array. Operator ini mengembalikan nilai boolean yang menunjukkan apakah properti atau indeks yang ditentukan ada dalam objek atau array tersebut. Contoh :

    let myObject = {name: "John", age: 42};
    console.log("name" in myObject); // true
    console.log("gender" in myObject); // false

    let myArray = [1, 2, 3];
    console.log(0 in myArray); // true
    console.log(3 in myArray); // false

Selain itu, operator in juga dapat digunakan untuk menentukan apakah sebuah properti atau indeks ada dalam sebuah objek yang ditentukan dalam prototype chain. Contohnya:

    let myObject = {name: "John"};
    console.log("toString" in myObject); // true

Ini karena objek myObject memiliki akses ke method toString dari Object.prototype.

Secara keseluruhan, operator in digunakan untuk menentukan apakah sebuah properti atau indeks ada dalam objek atau array dan bisa digunakan untuk menentukan apakah sebuah properti atau indeks ada dalam prototype chain.

Selain itu, operator in juga dapat digunakan untuk menentukan apakah sebuah properti ada dalam sebuah objek global. Contohnya:

    console.log("console" in window); // true
    console.log("myVar" in window); // false

Perhatikan bahwa operator in tidak akan mengecek apakah sebuah properti atau indeks ada dalam prototype chain jika objek yang ditentukan adalah objek global atau sebuah objek yang tidak memiliki prototype chain.

Selain digunakan dalam kondisi, operator in dapat digunakan dalam ekspresi yang mengembalikan nilai boolean.

Secara keseluruhan, operator in adalah alat yang berguna untuk menentukan apakah sebuah properti atau indeks ada dalam sebuah objek atau array, termasuk dalam prototype chain. Operator in juga bisa digunakan untuk menentukan apakah sebuah properti ada dalam objek global.
