const User = require('./user')
const Sheep = require('./sheep')
const Task = require('./task')

class Farm {
    constructor(name, addrress, phone) {
        this.name = name
        this.addrress = addrress
        this.phone = phone
        this.users = []
        this.tasks = []
        this.sheeps = []
    }

    addUser(name, email, password, role, farm) {
        const user = new User(name, email, password, role, farm)
        this.users.push(user)

        return user
    }
    
    addSheep(farmId, officialId, bornDate, gender, race, mother, father) {
        const sheep = new Sheep(farmId, officialId, bornDate, gender, race, mother, father)
        this.sheeps.push(sheep)

        return sheep
    }

    addTask(header, text, forWhom, whoDidIt, timeTodo, timeDone, Status) {
        const task = new Task(header, text, forWhom, whoDidIt, timeTodo, timeDone, Status)
        this.tasks.push(task)

        return task
    }
}

module.exports = Farm