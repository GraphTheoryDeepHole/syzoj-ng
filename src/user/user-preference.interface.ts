import { Locale } from "@/common/locale.type";

export interface UserPreference {
  locale?: {
    system?: Locale;
    content?: Locale;
    hideUnavailableMessage?: boolean;
  };
  font?: {
    contentFontFace?: string;
    codeFontFace?: string;
    codeFontSize?: number;
    codeLineHeight?: number;
    codeFontLigatures?: boolean;
  };
  codeFormatter?: {
    disableByDefault?: boolean;
    options?: string;
  };
  code?: {
    defaultLanguage?: string;
    defaultCompileAndRunOptions?: Record<string, string>;
  };
}
