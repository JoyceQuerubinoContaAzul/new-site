'use client';

import { createContext, useContext, useMemo } from 'react';
import type {
  Device,
  DeviceContextProps,
  DeviceProviderProps,
} from './DeviceProvider.types';

export const DeviceContext = createContext<DeviceContextProps>({
  device: 'desktop',
});

export const DeviceProvider = (props: DeviceProviderProps) => {
  const { children, userAgent } = props;

  const device: Device =
    userAgent.device.type === 'mobile' ? 'mobile' : 'desktop';

  const value = useMemo(() => ({ device }), [device]);

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const context = useContext(DeviceContext);

  if (!context)
    throw new Error('useDevice must be used within a DeviceProvider');

  return context;
};
