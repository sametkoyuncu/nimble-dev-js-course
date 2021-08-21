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
                // console.log(objects)
                resolve(objects.map(this.model.create))
            })
        })
        
    }

    async insert(object) {
        const objects = await this.load()
        return this.save(objects.concat(object))
    }

    async remove(index) {
        const objects = await this.load()
        objects.splice(index, 1)
        await this.save(objects)
    }

    async update(object) {
        const objects = await this.load()

        const index = objects.findIndex(o => o.id == object.id)

        objects.splice(index, 1, object)
        await this.save(objects)
    }
    
    async find(id) {
        //way 1
        return (await this.load()).find(o => o.id == id)
    }

    async findBy(prop, value) {
        //way 2
        const objects = await this.load()
        return objects.find(o => o[prop] == value)
    }
}

module.exports = BaseDatabase