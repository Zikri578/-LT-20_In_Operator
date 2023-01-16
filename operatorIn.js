// membuat variabel student dengan tipe data objek
const student = {
    firstname: "Muhammad",
    middlename: undefined,
    lastname: "Al-Muhdi"
};

if ("middlename" in student) {
    console.info(`Datanya adalah ${student.middlename}`);
} else {
    console.info("Hello Student");
}

// membuat variabel nama dengan tipe data array
const nama = [
    null,
    "Pinkan",
    null,
];

if (0 in nama) {
    console.info(true);
} else {
    console.info(false);
}