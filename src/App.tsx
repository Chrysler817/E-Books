import { BookOpen } from 'lucide-react';

function App() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8 tracking-wide">
        VAUGHN <span className="text-indigo-400">X</span> DIGITALS
      </h1>
      <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 rounded-xl shadow-2xl">
        <div className="bg-gray-950 p-12 rounded-xl flex flex-col items-center">
          <BookOpen size={64} className="text-indigo-400 mb-4" />
          <p className="text-xl font-semibold mb-2">Guidance E-Book</p>
          <p className="text-sm text-gray-400 max-w-sm">
            Discover psychological insights and money mindset strategies for self improvement.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
