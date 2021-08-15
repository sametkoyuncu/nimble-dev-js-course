class Farm {
    constructor(name, addrress, phone) {
        this.name = name
        this.addrress = addrress
        this.phone = phone
        this.users = []
        this.tasks = []
        this.sheeps = []
    }

    addUserToFarm(user) {
        this.users.push(user)
    }

    addSheepToFarm(sheep) {
        this.sheeps.push(sheep)
    }

    addTaskToFarm(task) {
        this.tasks.push(sheep)
    }
}

module.exports = Farm