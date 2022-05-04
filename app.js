const notes= require('./notes.js')
const yargs = require('yargs')
const { argv } = require('yargs')


// const command = process.argv[2]

// if(command === 'add'){
//     console.log(yargs.argv)
// } else if(command === 'remove'){
//     console.log(yargs.argv)
// }
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.addNote(argv.title,argv.body)
    }


})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }


})

yargs.command({
    command: 'List',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }


})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Opening note!')
    }


})



yargs.parse()
// console.log(yargs.argv)
