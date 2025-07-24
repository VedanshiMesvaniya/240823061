const fs= require('fs');

//write/create file


// if(!fs.existsSync('fs_1.txt')) {
//     const data = 'This is a sample text for fs_1.txt file.';
//     fs.writeFile('fs_1.txt', data, (err) => {
//         if (err) throw err;
//     });
//     console.log('File created successfully!');
// }
// else {
//     console.log('File already exists.');
// }

//read file
// if (!fs.existsSync('fs_1.txt')) {
//     console.log('File does not exist.');
// } else {
//     const data = fs.readFileSync('fs_1.txt', 'utf8');
//     console.log('File contents:', data);
// }

//append file

if (fs.existsSync('fs_1.txt')) {
    const data = '\nThis is appended text to fs_1.txt file.';
    fs.appendFile('fs_1.txt', data, (err) => {
        if (err) throw err;
        console.log('File appended successfully!');
    });
} else {
    console.log('File does not exist to append.');
}


// read file

if (!fs.existsSync('fs_1.txt')) {
    console.log('File does not exist.');
} else {
    const data = fs.readFileSync('fs_1.txt', 'utf8');
    console.log('File contents:', data);
}
