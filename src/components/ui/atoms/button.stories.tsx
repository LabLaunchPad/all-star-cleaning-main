import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

/**
 * Button Component Stories
 * 
 * The Button component is a reusable, accessible button with multiple variants and sizes.
 * It supports loading states, icons, and can render as a child component.
 */

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'subtle'],
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'xl', 'icon'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    leftIcon: {
      control: false,
      description: 'Icon to display on the left side of the button',
    },
    rightIcon: {
      control: false,
      description: 'Icon to display on the right side of the button',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child component (e.g., for links)',
      table: {
        defaultValue: { summary: false },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/your-file-id?node-id=your-node-id',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Button
 * The most common button style with primary branding
 */
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

/**
 * Primary Button with all variants
 * Shows all available button variants
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="subtle">Subtle</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants for visual comparison.',
      },
    },
  },
};

/**
 * Button Sizes
 * Shows all available button sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="icon" aria-label="Icon Button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes for visual comparison.',
      },
    },
  },
};

/**
 * Loading State
 * Shows the button in a loading state with spinner
 */
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with loading spinner. The button is disabled and shows a spinner animation.',
      },
    },
  },
};

/**
 * Button with Left Icon
 * Shows a button with an icon on the left
 */
export const WithLeftIcon: Story = {
  args: {
    children: 'Next',
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
  },
};

/**
 * Button with Right Icon
 * Shows a button with an icon on the right
 */
export const WithRightIcon: Story = {
  args: {
    children: 'Previous',
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    ),
  },
};

/**
 * Button with Both Icons
 * Shows a button with icons on both sides
 */
export const WithBothIcons: Story = {
  args: {
    children: 'Submit',
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
  },
};

/**
 * Disabled Button
 * Shows a disabled button
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons cannot be clicked and have reduced opacity.',
      },
    },
  },
};

/**
 * Button as Link
 * Shows how to use the button as a child component for links
 */
export const AsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="/contact" className="no-underline">
        Contact Us
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `asChild` prop to render the button as a different element, such as a link.',
      },
    },
  },
};

/**
 * CTA Button (Call to Action)
 * A large, prominent button for primary actions
 */
export const CTA: Story = {
  args: {
    children: 'Get a Free Quote',
    size: 'xl',
    className: 'uppercase tracking-wider',
  },
  parameters: {
    docs: {
      description: {
        story: 'A large, prominent button style for primary call-to-action elements.',
      },
    },
  },
};

/**
 * Button with Custom ClassName
 * Shows how to add custom classes
 */
export const WithCustomClassName: Story = {
  args: {
    children: 'Custom Styled',
    className: 'border-2 border-gold rounded-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom Tailwind classes to the button for additional styling.',
      },
    },
  },
};
