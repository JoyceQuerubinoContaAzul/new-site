import { render } from '@/tests';
import { Providers } from './Root';
import { userAgent } from 'next/server';
import { Toaster } from '@/components/Toast';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { DeviceProvider } from '@/providers/DeviceProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { GoogleReCaptchaProvider } from '@/providers/GoogleReCaptchaProvider';
import { monitoring } from '@/services/Monitoring';

jest.mock('@/providers/ThemeProvider');
jest.mock('@/providers/DeviceProvider');
jest.mock('@/providers/ReactQueryProvider');
jest.mock('@/providers/GoogleReCaptchaProvider');
jest.mock('@/components/Toast');
jest.mock('@/services/Monitoring');

const envs = {
  NEXT_PUBLIC_API_URL: 'https://api.contaazul.com',
  NEXT_PUBLIC_SEGMENT_KEY: '1234567890',
  NEXT_PUBLIC_RECAPTCHA_ENABLED: 'true',
  NEXT_PUBLIC_RECAPTCHA_KEY: '1234567890',
  NEXT_PUBLIC_RECAPTCHA_SCORE: '0.5',
  NEXT_PUBLIC_CLARITY_ENABLED: 'true',
  NEXT_PUBLIC_DATADOG_ENABLED: 'true',
};

describe('Providers - ProvidersRoot provider', () => {
  const UA = {
    device: { type: 'mobile' },
  } as ReturnType<typeof userAgent>;

  beforeEach(() => {
    (ThemeProvider as jest.Mock).mockImplementation(({ children }) => children);
    (ReactQueryProvider as jest.Mock).mockImplementation(
      ({ children }) => children,
    );
    (GoogleReCaptchaProvider as jest.Mock).mockImplementation(
      ({ children }) => children,
    );
    (DeviceProvider as jest.Mock).mockImplementation(
      ({ children }) => children,
    );
  });

  it('should render the children', () => {
    const { getByText } = render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(getByText('children')).toBeInTheDocument();
  });

  it('should render the ReactQueryProvider', () => {
    render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(ReactQueryProvider).toHaveBeenCalled();
  });

  it('should render the GoogleReCaptchaProvider', () => {
    render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(GoogleReCaptchaProvider).toHaveBeenCalled();
  });

  it('should render the DeviceProvider', () => {
    render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(DeviceProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        userAgent: UA,
      }),
      undefined,
    );
  });

  it('should render the ThemeProvider', () => {
    render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(ThemeProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        attribute: 'class',
        defaultTheme: 'light',
        enableSystem: true,
      }),
      undefined,
    );
  });

  it('should render the Toaster', () => {
    render(
      <Providers userAgent={UA} env={envs}>
        <div>children</div>
      </Providers>,
    );

    expect(Toaster).toHaveBeenCalled();
  });

  describe('when datadog is enabled', () => {
    it('should initialize the monitoring', () => {
      render(
        <Providers userAgent={UA} env={envs}>
          <div>children</div>
        </Providers>,
      );

      expect(monitoring.init).toHaveBeenCalled();
    });
  });

  describe('when datadog is disabled', () => {
    it('should not initialize the monitoring', () => {
      render(
        <Providers
          userAgent={UA}
          env={{ ...envs, NEXT_PUBLIC_DATADOG_ENABLED: 'false' }}
        >
          <div>children</div>
        </Providers>,
      );

      expect(monitoring.init).not.toHaveBeenCalled();
    });
  });
});
