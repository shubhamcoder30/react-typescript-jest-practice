import { render, screen, fireEvent } from '@testing-library/react';
import Tabledata from '../Tabledata';

const component = (
  <Tabledata arr={[{ holdProfile: 'profile', holdname: 'name' }]} />
);
describe('table data check cases', () => {
  test('data check', () => {
    render(component);
  });
});
