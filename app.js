const notes = require('./notes')
const yargs = require('yargs')

const chalk = require('chalk')

//Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})


// create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('removing note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('listing notes')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('reading note')
    }
})



yargs.parse()