import { userAgent } from 'next/server';

export type Device = 'mobile' | 'desktop';

export type DeviceContextProps = {
  device: Device;
};

export type DeviceProviderProps = React.PropsWithChildren<{
  userAgent: ReturnType<typeof userAgent>;
}>;
