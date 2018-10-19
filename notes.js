console.log('Starting notes.js');

var addNote = (title, body) =>{
console.log('Adding Note', title,body);
};

var getAll = () =>exports
{
 console.log('Getting All notes');
};

var getNote =(title)=>{
    console.log('Getting Note', title);
}
var removeNote=(title)=>{
    console.log('Removing note',title);
}
 module.exports ={
 addNote,
 getAll,
 getNote,
 removeNote
};
