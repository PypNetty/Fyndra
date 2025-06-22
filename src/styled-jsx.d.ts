// This file provides TypeScript type declarations for styled-jsx

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      style: React.DetailedHTMLProps<
        React.StyleHTMLAttributes<HTMLStyleElement> & {
          jsx?: boolean;
          global?: boolean;
        },
        HTMLStyleElement
      >;
    }
  }
}
