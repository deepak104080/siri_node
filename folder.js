const fs = require('fs');

fs.mkdir('new_folder2' , (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('successfully done.')
    }
})


// rmdir - remove folder
// unlink - delete folder

// mk - make
// rm - remove
// dir - directory/folder

