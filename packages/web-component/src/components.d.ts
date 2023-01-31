/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InterfaceLanguage, ReadAlongMode } from "./index.ds";
export namespace Components {
    interface ReadAlong {
        /**
          * The audio file
         */
        "audio": string;
        /**
          * Change theme
         */
        "changeTheme": () => Promise<void>;
        /**
          * Optional custom Stylesheet to override defaults
         */
        "cssUrl"?: string;
        /**
          * Language  of the interface. In 639-3 code Options are - "eng" for English - "fra" for French
         */
        "language": InterfaceLanguage;
        /**
          * Choose mode of ReadAlong - either view (default) or edit
         */
        "mode": ReadAlongMode;
        /**
          * Toggles the page scrolling from horizontal to vertical. Defaults to horizontal
         */
        "pageScrolling": "horizontal" | "vertical";
        /**
          * The aligned text as readalong XML
         */
        "readalong": string;
        /**
          * Overlay This is an SVG overlay to place over the progress bar
         */
        "svgOverlay": string;
        /**
          * Theme to use: ['light', 'dark'] defaults to 'dark'
         */
        "theme": string;
        /**
          * Toggle the use of assets folder for resolving urls. Defaults to on to maintain backwards compatibility
         */
        "useAssetsFolder": boolean;
    }
}
declare global {
    interface HTMLReadAlongElement extends Components.ReadAlong, HTMLStencilElement {
    }
    var HTMLReadAlongElement: {
        prototype: HTMLReadAlongElement;
        new (): HTMLReadAlongElement;
    };
    interface HTMLElementTagNameMap {
        "read-along": HTMLReadAlongElement;
    }
}
declare namespace LocalJSX {
    interface ReadAlong {
        /**
          * The audio file
         */
        "audio"?: string;
        /**
          * Optional custom Stylesheet to override defaults
         */
        "cssUrl"?: string;
        /**
          * Language  of the interface. In 639-3 code Options are - "eng" for English - "fra" for French
         */
        "language"?: InterfaceLanguage;
        /**
          * Choose mode of ReadAlong - either view (default) or edit
         */
        "mode"?: ReadAlongMode;
        /**
          * Toggles the page scrolling from horizontal to vertical. Defaults to horizontal
         */
        "pageScrolling"?: "horizontal" | "vertical";
        /**
          * Overlay This is an SVG overlay to place over the progress bar
         */
        "svgOverlay"?: string;
        /**
          * The aligned text as readalong XML
         */
        "readalong"?: string;
        /**
          * Theme to use: ['light', 'dark'] defaults to 'dark'
         */
        "theme"?: string;
        /**
          * Toggle the use of assets folder for resolving urls. Defaults to on to maintain backwards compatibility
         */
        "useAssetsFolder"?: boolean;
    }
    interface IntrinsicElements {
        "read-along": ReadAlong;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "read-along": LocalJSX.ReadAlong & JSXBase.HTMLAttributes<HTMLReadAlongElement>;
        }
    }
}
