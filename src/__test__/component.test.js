import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/quote';
import Calculator from '../components/Calculator';

describe('Snapshot Test for Math Magicians project', () => {
  it('Snapshot Home rendering test', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
  it('Snapshot Quote rendering test', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
  it('Snapshot Calculator rendering test', () => {
    const calc = render(<Calculator />);
    expect(calc).toMatchSnapshot();
  });
});
