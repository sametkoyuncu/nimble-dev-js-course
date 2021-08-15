const User = require('./user')
const Sheep = require('./sheep')
const Task = require('./task')

class User {
    constructor(name, email, password, role, farm) {
        this.name = name
        this.email = email
        this.password = password
        this.role = role
        this.farm = farm
    }

    addUser(name, email, password, role, farm) {
        const user = new User(name, email, password, role, farm)
        this.farm.users.push(user)

        return user
    }

    addSheep(farmId, officialId, bornDate, gender, race, mother, father) {
        const sheep = new Sheep(farmId, officialId, bornDate, gender, race, mother, father)
        this.farm.sheeps.push(sheep)

        return sheep
    }

    addTask(header, text, forWhom, whoDidIt, timeTodo, timeDone, Status) {
        const task = new Task(header, text, forWhom, whoDidIt, timeTodo, timeDone, Status)
        this.farm.tasks.push(task)

        return task
    }
}
//addedBy ?? for employees
module.exports = User