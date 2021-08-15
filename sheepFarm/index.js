const Farm = require('./farm')
const User = require('./user')
const Sheep = require('./sheep')
const Task = require('./task')

function printSheep(sheep) {
    console.log(`farm id: ${sheep.farmId}, official id: ${sheep.officialId}`)
}

function printSheepList(farm) {
    farm.sheeps.forEach(printSheep)
}

const dayininCiftligi = new Farm("Dayinin Ciftligi", "Sile, ISTANBUL", "+90 123 456 7890")
const samet = new User("Samet", "samet@mail.com", "1232", "MANAGER", dayininCiftligi)

const sheep1 = new Sheep("1", "tr 34 00001", "19.01.2019", 1, "KIVIRCIK", null, null)
const sheep2 = new Sheep("2", "tr 34 00002", "04.02.2020", 0, "KIVIRCIK", null, null)
const sheep3 = new Sheep("3", "tr 34 00003", "22.04.2021", 0, "KIVIRCIK", sheep2, sheep1)
const sheep4 = new Sheep("4", "tr 34 00004", "20.03.2021", 1, "MERINOS", null, null)

dayininCiftligi.addUserToFarm(samet)

dayininCiftligi.addSheepToFarm(sheep1)
dayininCiftligi.addSheepToFarm(sheep2)
dayininCiftligi.addSheepToFarm(sheep3)
dayininCiftligi.addSheepToFarm(sheep4)



console.log(dayininCiftligi.users[0])
 
printSheepList(dayininCiftligi)