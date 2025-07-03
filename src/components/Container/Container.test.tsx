import { render } from '@/tests';
import { Container } from './Container';

type ContainerProps = React.ComponentProps<typeof Container>;

const setup = (props: Partial<ContainerProps> = {}) => {
  return render(<Container {...props} />);
};

describe('Container component', () => {
  it('should render the children', () => {
    const children = <div>Link</div>;

    const { getByText } = setup({ children });

    expect(getByText('Link')).toBeInTheDocument();
  });

  it('should render the expected structure', () => {
    const children = <div>Link</div>;

    const { container } = setup({ children });

    expect(container).toMatchSnapshot();
  });
});
