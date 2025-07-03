import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
});

export const pingPong = localFont({
  display: 'swap',
  variable: '--font-ping-pong',
  src: [
    {
      path: '../assets/fonts/ping-pong/PingPong-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-XBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-XBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ping-pong/PingPong-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});
