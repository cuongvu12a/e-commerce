import 'styled-components';

declare module 'styled-components' {
  export type Palette = 'primary' | 'success' | 'warning' | 'danger';

  export type TextColors = 'primary' | 'secondary' | 'placeholder';

  export type BgColors = 'body' | 'section' | 'table-header';

  interface Colors extends Record<Palette | 'divider' | 'border', string> {
    text: Record<TextColors, string>;
    bg: Record<BgColors, string>;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}
