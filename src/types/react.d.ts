import { AriaAttributes as ReactAriaAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

declare module 'react' {
  interface HTMLAttributes<T> extends ReactAriaAttributes {
    className?: string;
  }
}

declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps extends HTMLMotionProps<'div'> {
    className?: string;
  }

  interface Motion {
    div: React.ForwardRefExoticComponent<
      HTMLMotionProps<'div'> & React.RefAttributes<HTMLDivElement>
    >;
  }

  export const motion: Motion;
}

declare module 'react-modal-image' {
  interface ModalImageProps {
    small?: string;
    large: string;
    alt: string;
    hideDownload?: boolean;
    hideZoom?: boolean;
    onClose?: () => void;
  }
  
  export default class ModalImage extends React.Component<ModalImageProps> {}
}
