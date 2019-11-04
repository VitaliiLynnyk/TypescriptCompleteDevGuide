import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

// const company = new Company();
// console.log(company);

const map = new CustomMap('map');
map.addUserMarker(user);
