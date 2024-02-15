// Mengambila argument dari command line

// console.log(process);

// const command = process.argv[2];
// if (command === 'add') {
    
// } else if (command === 'remove') {

// }  else if (command === 'list'){

// }
const yargs = require('yargs');
const contacts = require('./contacts');
// console.log(yargs.argv);

// yargs.command(
//     'add', 
//     'Menambahkan contact baru', 
//     () => {}, 
//     (argv) => {
//         console.log(argv.nama);
//     }
// );
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
});

yargs.parse();

// const contacts = require('./contacts');

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama kamu: ');
//     const email = await contacts.tulisPertanyaan('Masukkan email kamu: ');
//     const noHP= await contacts.tulisPertanyaan('Masukkan no hp kamu: ');

//     contacts.simpanContact(nama, email, noHP);
// };

// main();