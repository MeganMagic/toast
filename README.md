# Toast library


## Project Structure

- `packages/toast`: The React toast notification library
- `packages/demo`: A demo website showcasing the toast library

## Getting Started

1. Install:
```bash
pnpm install
```

2. Build library:
```bash
pnpm toast build
```

3. Start the demo:
```bash
pnpm demo dev
```

The demo website will be available at http://localhost:3000

## Using the Toast Library

```tsx
import { ToastProvider, useToast } from '@toast-monorepo/toast';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

function YourApp() {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast('Hello, world!', 'success');
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Available Toast Types

- `success`: Green toast for success messages
- `error`: Red toast for error messages
- `info`: Blue toast for information messages

## Development

- `pnpm build`: Build all packages
- `pnpm dev`: Start development servers
- `pnpm lint`: Run linting
- `pnpm test`: Run tests 