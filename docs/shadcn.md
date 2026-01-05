# Shadcn UI Standards

This project strictly uses Shadcn UI for all user interface components.

## 1. No Custom Components

- DO NOT create any custom UI components from scratch.
- ALWAYS use Shadcn UI components for all UI elements.

## 2. Component Installation

- If a required Shadcn UI component is not already in the project, use the Shadcn CLI to add it.
- Components should be located in the `components/ui` directory.

## 3. Customization

- If you need to customize a component, do so by modifying the Shadcn UI component itself or by using Tailwind CSS utility classes via the `className` prop.
- Ensure that any customizations still follow the overall design system.
