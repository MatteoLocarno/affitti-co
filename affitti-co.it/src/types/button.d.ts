import { MouseEventHandler } from 'react';

declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    onClick?: MouseEventHandler<T>;
  }
} 