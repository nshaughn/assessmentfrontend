import { faker } from '@faker-js/faker';

const FakePrice = (e) => {
    console.log("1")
    let price = 0
    console.log("2")
    e.prevent.default()
    console.log("3")
    return price = Math.ceil(faker.datatype.number() / 40000)
}

export default FakePrice