declare module 'react-quill' {
  import { ComponentType } from 'react';

  export interface ReactQuillProps {
    id?: string;
    value?: string;
    onChange?: (value: string) => void;
    modules?: any;
    formats?: string[];
    placeholder?: string;
    theme?: string;
    className?: string;
  }

  const ReactQuill: ComponentType<ReactQuillProps>;
  export default ReactQuill;
}
