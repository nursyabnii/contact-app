const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama kamu: ');
    const email = await contacts.tulisPertanyaan('Masukkan email kamu: ');
    const noHP= await contacts.tulisPertanyaan('Masukkan no hp kamu: ');

    contacts.simpanContact(nama, email, noHP);
};

main();