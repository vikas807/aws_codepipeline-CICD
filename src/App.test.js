import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock('maplibre-gl/dist/maplibre-gl', () => ({
  Map: () => ({}),
}));
test('renders learn react link', () => {
  const { container, rerender } = render(<App />);
 expect(container).toMatchSnapshot();
});