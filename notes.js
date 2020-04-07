const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes!'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)


    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('New note added.'))
    } else {
        console.log(chalk.bgRed('Note title already in use!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue('YOUR NOTES'))
    notes.map(note => console.log(note.title))
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed('No note found.'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note removed!'))
    }
}

const readNote = (noteTitle) => {
    const notes = loadNotes()

    const noteToRead = notes.find((note) => note.title === noteTitle)

    if (noteToRead) {
        console.log(chalk.bgBlue(noteToRead.title), '\n' + noteToRead.body)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}