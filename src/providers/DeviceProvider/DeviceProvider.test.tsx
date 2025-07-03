import { userAgent } from 'next/server';
import { render, renderHook } from '@/tests';
import { DeviceProvider, DeviceContext, useDevice } from './DeviceProvider';

type DeviceProviderProps = React.ComponentProps<typeof DeviceProvider>;

const defaultProps: DeviceProviderProps = {
  userAgent: {
    device: {
      type: 'desktop',
    },
  } as ReturnType<typeof userAgent>,
};

describe('Providers - DeviceProvider provider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <DeviceProvider {...defaultProps}>
        <div>children</div>
      </DeviceProvider>,
    );

    expect(getByText('children')).toBeInTheDocument();
  });

  it('should render mobile device type', () => {
    const { getByText } = render(
      <DeviceProvider
        userAgent={
          {
            device: { type: 'mobile' },
          } as ReturnType<typeof userAgent>
        }
      >
        <DeviceContext.Consumer>
          {(value) => <div>{value.device}</div>}
        </DeviceContext.Consumer>
      </DeviceProvider>,
    );

    expect(getByText('mobile')).toBeInTheDocument();
  });

  it('should render desktop device type', () => {
    const { getByText } = render(
      <DeviceProvider
        userAgent={
          {
            device: { type: undefined },
          } as ReturnType<typeof userAgent>
        }
      >
        <DeviceContext.Consumer>
          {(value) => <div>{value.device}</div>}
        </DeviceContext.Consumer>
      </DeviceProvider>,
    );

    expect(getByText('desktop')).toBeInTheDocument();
  });

  describe('useDevice hook', () => {
    it('should return device type', () => {
      const { result } = renderHook(useDevice, {
        wrapper: ({ children }) => (
          <DeviceProvider
            userAgent={
              {
                device: { type: 'mobile' },
              } as ReturnType<typeof userAgent>
            }
          >
            {children}
          </DeviceProvider>
        ),
      });

      expect(result.current.device).toBe('mobile');
    });
  });
});
