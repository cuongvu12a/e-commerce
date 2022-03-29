import 'styled-components';

declare module 'styled-components' {
  export type Palette = 'primary' | 'border';

  export type TextColors = 'primary' | 'secondary' | 'placeholder';
  
  export type BgColors = 'body' | 'section';

  interface Colors extends Record<Palette | 'divider', string> {
    text: Record<TextColors, string>;
    bg: Record<BgColors, string>;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}
