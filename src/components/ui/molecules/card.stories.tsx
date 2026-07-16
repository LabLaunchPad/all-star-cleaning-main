import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

/**
 * Card Component Stories
 * 
 * The Card component is a reusable container with multiple variants, padding options,
 * and interactive states (hoverable, clickable).
 */

const meta = {
  title: 'Design System/Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'featured', 'subtle', 'bordered'],
      description: 'The visual style of the card',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The internal padding of the card',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card has hover effects',
      table: {
        defaultValue: { summary: false },
      },
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the card has clickable styles',
      table: {
        defaultValue: { summary: false },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child component',
      table: {
        defaultValue: { summary: false },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/your-file-id?node-id=your-node-id',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Card
 * The most common card style
 */
export const Default: Story = {
  args: {
    children: <div>Card Content</div>,
    variant: 'default',
    padding: 'md',
  },
};

/**
 * Card Variants
 * Shows all available card variants
 */
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card variant="default" padding="md">
        <h3 className="font-bold text-lg">Default</h3>
        <p className="text-sm text-muted-foreground">
          Standard card with border and background
        </p>
      </Card>
      
      <Card variant="featured" padding="md">
        <h3 className="font-bold text-lg">Featured</h3>
        <p className="text-sm text-muted-foreground">
          Featured card with indigo background
        </p>
      </Card>
      
      <Card variant="subtle" padding="md">
        <h3 className="font-bold text-lg">Subtle</h3>
        <p className="text-sm text-muted-foreground">
          Subtle card with light background
        </p>
      </Card>
      
      <Card variant="bordered" padding="md">
        <h3 className="font-bold text-lg">Bordered</h3>
        <p className="text-sm text-muted-foreground">
          Card with thicker border
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available card variants for visual comparison.',
      },
    },
  },
};

/**
 * Card Padding Options
 * Shows all available padding options
 */
export const PaddingOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card variant="default" padding="none">
        <div className="p-4">No Padding (content has padding)</div>
      </Card>
      
      <Card variant="default" padding="sm">
        <div>Small Padding</div>
      </Card>
      
      <Card variant="default" padding="md">
        <div>Medium Padding (default)</div>
      </Card>
      
      <Card variant="default" padding="lg">
        <div>Large Padding</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available padding options for visual comparison.',
      },
    },
  },
};

/**
 * Hoverable Card
 * Card with hover effects
 */
export const Hoverable: Story = {
  args: {
    children: <div>Hover me!</div>,
    variant: 'default',
    padding: 'md',
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hoverable cards have shadow and lift effects on hover.',
      },
    },
  },
};

/**
 * Clickable Card
 * Card with clickable styles
 */
export const Clickable: Story = {
  args: {
    children: <div>Click me!</div>,
    variant: 'default',
    padding: 'md',
    clickable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable cards have cursor-pointer and active scale effects.',
      },
    },
  },
};

/**
 * Interactive Card
 * Card with both hoverable and clickable styles
 */
export const Interactive: Story = {
  args: {
    children: <div>Interactive Card</div>,
    variant: 'featured',
    padding: 'lg',
    hoverable: true,
    clickable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards combine hoverable and clickable styles.',
      },
    },
  },
};

/**
 * Card as Link
 * Shows how to use the card as a child component for links
 */
export const AsLink: Story = {
  args: {
    asChild: true,
    variant: 'default',
    padding: 'md',
    hoverable: true,
    clickable: true,
    children: (
      <a href="/services" className="block no-underline">
        <h3 className="font-bold text-lg">Service Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Click to view details
        </p>
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `asChild` prop to render the card as a link or other element.',
      },
    },
  },
};

/**
 * Card with Custom Content
 * Shows a card with rich content
 */
export const WithRichContent: Story = {
  args: {
    variant: 'default',
    padding: 'lg',
    children: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-midnight-indigo/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-midnight-indigo"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">Service Name</h3>
            <p className="text-sm text-muted-foreground">Service Description</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">Feature 1</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">Feature 2</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">Feature 3</span>
          </div>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A card with rich content including icons, headings, and feature lists.',
      },
    },
  },
};

/**
 * Featured Service Card
 * A card designed for featured services
 */
export const FeaturedServiceCard: Story = {
  args: {
    variant: 'featured',
    padding: 'none',
    hoverable: true,
    clickable: true,
    asChild: true,
    children: (
      <a href="/services/window-cleaning" className="block no-underline">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop"
            alt="Window Cleaning"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-indigo-dark/90 via-midnight-indigo-dark/70 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-midnight-indigo">
            Window Cleaning
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            Professional window cleaning services for residential and commercial properties.
          </p>
        </div>
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A featured service card with image, gradient overlay, and content.',
      },
    },
  },
};
