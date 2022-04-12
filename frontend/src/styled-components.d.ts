import 'styled-components';

declare module 'styled-components' {
  export type Palette = 'primary';

  export type TextColors = 'primary' | 'secondary' | 'placeholder';

  export type BgColors = 'body' | 'section';

  interface Colors extends Record<Palette | 'divider' | 'border', string> {
    text: Record<TextColors, string>;
    bg: Record<BgColors | Palette, string>;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}
