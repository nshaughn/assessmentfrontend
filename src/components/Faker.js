import { faker } from '@faker-js/faker';

const FakePrice = (e) => {
    let price = 0
    e.prevent.default()
    return price = Math.ceil(faker.datatype.number() / 40000)
}

export default FakePrice