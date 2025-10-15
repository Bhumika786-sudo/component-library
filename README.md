# Getting Started with Component Library (React + Storybook)

This project was built using **Create React App** and **Storybook** to create a reusable **UI Component Library**.  
The library demonstrates responsive and tested components such as Buttons, Labels, Text, Tables, and more.

---

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

The page will reload if you make edits, and you will also see any lint errors in the console.

---

### `npm run storybook`

Runs **Storybook**, where you can preview and interact with components.  
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

Storybook provides:
- Visual display of each component
- Controls to modify props (text, color, disabled, etc.)
- Live preview of component changes



### `npm test`

Launches the test runner in the interactive watch mode.  
Each component includes **two Jest tests**:
1. Verifies the component renders correctly  
2. Verifies the component shows a disabled style (greyed out + not clickable)

Example test:
```tsx
test('renders the Button component', () => {
  render(<Button content="Click Me" />);
  expect(screen.getByRole('button', { name: /click me/i })).toBeVisible();
});
