import type { Preview } from "@storybook/preact";
import "../src/assets/main.css";
// tiny  slider styles
import "tiny-slider/dist/tiny-slider.css";
// alpine
import Alpine from "alpinejs";
Alpine.start();

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
