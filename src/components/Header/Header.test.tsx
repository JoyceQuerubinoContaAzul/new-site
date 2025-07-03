import { render } from '@/tests';
import { Header } from './Header';

type HeaderProps = React.ComponentProps<typeof Header>;

const setup = (props: Partial<HeaderProps> = {}) =>
  render(<Header {...props} />);

describe('Header component', () => {
  describe('when the "noLoginAction" is true', () => {
    it('should not render login link', () => {
      const { queryByRole } = setup({ noLoginAction: true });

      expect(queryByRole('link', { name: 'Entrar' })).not.toBeInTheDocument();
    });
  });

  describe('when the "noLoginAction" is falsy', () => {
    it('should render login link', () => {
      const { getByRole } = setup({ noLoginAction: false });

      expect(getByRole('link', { name: 'Entrar' })).toBeInTheDocument();
    });
  });

  it('should render the entire header', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
