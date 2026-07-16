import type { Preview } from '@storybook/react';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Run accessibility checks on every story
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'image-alt', enabled: true },
          { id: 'label', enabled: true },
          { id: 'input-button-name', enabled: true },
        ],
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop (1024px)',
          styles: { width: '1024px', height: '768px' },
        },
        wide: {
          name: 'Wide (1440px)',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
  globals: {
    locale: {
      description: 'Locale for i18n',
      defaultValue: 'en',
      toolbar: {
        title: 'Locale',
        items: [
          { value: 'en', title: 'English' },
          { value: 'fr', title: 'Français' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
