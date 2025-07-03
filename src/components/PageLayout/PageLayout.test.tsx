import { render } from '@/tests';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageLayout } from './PageLayout';

jest.mock('@/components/Header');
jest.mock('@/components/Footer');

type PageLayoutProps = React.ComponentProps<typeof PageLayout>;

const setup = (props: Partial<PageLayoutProps> = {}) =>
  render(<PageLayout {...props} />);

describe('PageLayout component', () => {
  describe('when the "noFooter" is true', () => {
    it('should pass the value to header "noLoginAction" prop', () => {
      setup({ noFooter: true });

      expect(Header).toHaveBeenCalledWith(
        expect.objectContaining({
          noLoginAction: true,
        }),
        undefined,
      );
    });

    it('should not render the Footer component', () => {
      setup({ noFooter: true });

      expect(Footer).not.toHaveBeenCalled();
    });
  });

  describe('when the "noFooter" is falsy', () => {
    it('should pass the value to header "noLoginAction" prop', () => {
      setup({ noFooter: undefined });

      expect(Header).toHaveBeenCalledWith(
        expect.objectContaining({
          noLoginAction: false,
        }),
        undefined,
      );
    });

    it('should not render the Footer component', () => {
      setup({ noFooter: false });

      expect(Footer).toHaveBeenCalled();
    });
  });

  it('should render the Header', () => {
    setup();

    expect(Header).toHaveBeenCalled();
  });

  it('should render the Footer', () => {
    setup();

    expect(Footer).toHaveBeenCalled();
  });

  it('should render the entire layout', () => {
    const { container } = setup({ children: 'Children' });

    expect(container).toMatchSnapshot();
  });
});
