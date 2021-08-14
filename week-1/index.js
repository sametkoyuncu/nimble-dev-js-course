class User {
    constructor(name, email, phone) {
        this.name = name
        this.email = email
        this.phone = phone
    }

    findPT() {

    }

    bookPT() {
        this.booking.push(pt)
    }
}

class Athlete extends User {
    constructor(name, email, phone) {
        super(name, email, phone)

        this.measurements = []
    }
}

const user = new Athlete("Samet", "samet@mail.com", "+90323454")

const pts = findPT()

user.bookPT(pts[0])