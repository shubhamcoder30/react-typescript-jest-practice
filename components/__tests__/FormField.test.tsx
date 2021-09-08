import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormField from '../FormField';

let func = jest.fn();
const component = (
  <FormField
    setArr={func}
    arr={[{ holdProfile: 'profile', holdname: 'name' }]}
  />
);
describe('FormField test cases', () => {
  test('submit button working', () => {
    render(component);
    fireEvent.change(screen.getAllByRole('textbox')[0], {
      target: { value: 'value', name: 'name' }
    });
    fireEvent.change(screen.getAllByRole('textbox')[0], {
      target: { value: 'value', name: 'profile' }
    });
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });

  test('onChange check', () => {
    render(component);
    fireEvent.change(screen.getAllByRole('textbox')[0], {
      target: { value: 'value', name: 'name' }
    });
    expect(func).toBeCalled();
  });

  test('show input field name placeholder', () => {
    render(component);
    expect(screen.getByPlaceholderText('enter_name')).toBeInTheDocument();
  });
  test('show input field profile placeholder', () => {
    render(component);
    expect(screen.getByPlaceholderText('Profile')).toBeInTheDocument();
  });
});

describe('snapshot of form Component', () => {
  test('should match snapshot', () => {
    const snap = render(component);
    expect(snap).toMatchSnapshot();
  });
});
