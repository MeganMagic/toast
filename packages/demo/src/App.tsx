import { ToastProvider, useToast } from '@toast-monorepo/toast';

function DemoContent() {
  const { showToast } = useToast();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Toast Demo</h1>
      <div className="space-y-4">
        <button
          onClick={() => showToast('This is a success message!', 'success')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Show Success Toast
        </button>
        <button
          onClick={() => showToast('This is an error message!', 'error')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-4"
        >
          Show Error Toast
        </button>
        <button
          onClick={() => showToast('This is an info message!', 'info')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ml-4"
        >
          Show Info Toast
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <DemoContent />
    </ToastProvider>
  );
}

export default App; 