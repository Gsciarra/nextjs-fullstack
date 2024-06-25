This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Storybook Tree

To organize your components effectively into "Basic Elements" and "Complex Components" with further sub-grouping based on their usage, here's a structured list of components you can include in each group. This organization will help maintain clarity and usability in your Storybook documentation.

### Basic Elements

#### Navigation

- **Button:** Different types of buttons (primary, secondary, icon buttons, etc.)
- **Link:** Styled link components
- **Menu:** Simple menus and dropdowns

#### Form

- **Input:** Text inputs, password inputs, etc.
- **Textarea:** Multiline text inputs
- **Select:** Dropdowns and select inputs
- **Checkbox:** Checkbox inputs
- **Radio:** Radio button inputs
- **Switch:** Toggle switches
- **Button:** Submit and reset buttons specific to forms

#### Typography

- **Heading:** Headings (h1, h2, h3, etc.)
- **Text:** Paragraphs and span text
- **Label:** Labels for form elements
- **Link:** Hyperlink styles
- **List:** Ordered and unordered lists

#### Media

- **Image:** Image components
- **Icon:** SVG or icon components

#### Feedback

- **Alert:** Alert messages
- **Badge:** Status indicators
- **Progress:** Progress bars and spinners

### Complex Components

#### Auth

- **Login Form:** Complete login form component
- **Register Form:** Complete registration form component
- **Forgot Password:** Password recovery form
- **Auth Button:** OAuth buttons (Google, Facebook, etc.)

#### Dashboard

- **Sidebar:** Dashboard sidebar navigation
- **Header:** Dashboard header with user info and navigation
- **Card:** Cards for displaying various types of information
- **Chart:** Data visualization components (charts, graphs)

#### Cart

- **Product List:** List of products in the cart
- **Cart Summary:** Summary of the cart items and total price
- **Checkout Form:** Form for checkout details
- **Cart Button:** Add to cart and remove from cart buttons

#### User Profile

- **Profile Card:** User profile display component
- **Edit Profile Form:** Form for editing user profile
- **Avatar:** User avatar display and upload

#### Modals

- **Modal:** Base modal component
- **Confirmation Modal:** Modal for confirming actions
- **Form Modal:** Modal containing a form

#### Notifications

- **Toast:** Toast notifications
- **Snackbar:** Snackbars for brief messages
- **Notification List:** List of notifications

### Example Structure in Storybook

1. **Basic Elements**

   - Navigation
     - Button
     - Link
     - Menu
   - Form
     - Input
     - Textarea
     - Select
     - Checkbox
     - Radio
     - Switch
     - Button (Form-specific)
   - Typography
     - Heading
     - Text
     - Label
     - Link
     - List
   - Media
     - Image
     - Icon
   - Feedback
     - Alert
     - Badge
     - Progress

2. **Complex Components**
   - Auth
     - Login Form
     - Register Form
     - Forgot Password
     - Auth Button
   - Dashboard
     - Sidebar
     - Header
     - Card
     - Chart
   - Cart
     - Product List
     - Cart Summary
     - Checkout Form
     - Cart Button
   - User Profile
     - Profile Card
     - Edit Profile Form
     - Avatar
   - Modals
     - Modal
     - Confirmation Modal
     - Form Modal
   - Notifications
     - Toast
     - Snackbar
     - Notification List
