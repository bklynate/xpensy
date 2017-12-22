import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('dotenv').config({ path: '.env.test' }); //eslint-disable-line
Enzyme.configure({
  adapter: new Adapter(),
});
