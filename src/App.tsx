import { ToastUI } from "./components/ToastUI";

function App() {
  return (
    <div className="w-fit mx-auto text-center">
      <h1 className="text-blue-600">Toast Demo</h1>
      <button>Add Toast</button>
      <div className="flex flex-col gap-4">
        <ToastUI message="토스트는 맛있어 🍞" variant="default" />
        <ToastUI message="토스트는 맛없어 😵" variant="error" />
        <ToastUI message="토스트는 최고야 🥪" variant="success" />
      </div>
    </div>
  );
}

export default App;