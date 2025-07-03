import { render } from '@/tests';
import { ThemeProvider } from './ThemeProvider';

describe('Providers - ThemeProvider provider', () => {
  it('should render the children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>children</div>
      </ThemeProvider>,
    );

    expect(getByText('children')).toBeInTheDocument();
  });
});
