const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase {
    constructor(model) {
        this.model = model 
        this.filename = model.name.toLowerCase()+'s'
    }

    save(objects, callback = () => { console.log('internal write', this.filename)}) {
        fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), callback)
    }

    load(callback = () => {}) {
        fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
            if (err) return callback(err)
            
            const objects = flatted.parse(file)
            callback(err, objects.map(this.model.create))
        })
    }

    insert(object, callback) {
        const objects = this.load((err, objects) => {
            this.save(objects.concat(object), callback)
        })
    }

    remove(index) {
        const objects = this.load()
        objects.splice(index, 1)
        this.save(objects)
    }

    update(object) {
        const objects = this.load()

        const index = objects.findIndex(o => o.id == object.id)

        objects.splice(index, 1, object)
        this.save(objects)
    }

    findBy(prop, value) {
        return this.load().find(o => o[prop] == value)
    }
}

module.exports = BaseDatabase