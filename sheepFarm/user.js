class User {
    constructor(name, email, password, role, farm) {
        this.name = name
        this.email = email
        this.password = password
        this.role = role
        this.farm = farm
    }
}
//addedBy ?? for employees
module.exports = User