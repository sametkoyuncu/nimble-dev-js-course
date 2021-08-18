const fs = require('fs')
const flatted = require('flatted')
const { rejects } = require('assert')

class BaseDatabase {
    constructor(model) {
        this.model = model 
        this.filename = model.name.toLowerCase()+'s'
    }

    save(objects) {
        return new Promise((resolve, reject) => {
            fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
                if (err) return reject(err)
                resolve()
            })
        })
        
    }

    load() {
        return new Promise((resolve, reject) => {
            fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
                if (err) return reject(err)
                
                const objects = flatted.parse(file)
                resolve(objects.map(this.model.create))
            })
        })
        
    }

    insert(object) {
        return this.load().then(objects => this.save(objects.concat(object)))
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