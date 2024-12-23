import FileDropbox from "@/components/FileDropbox";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Hi there! How can I help you today?</h1>
        
        <FileDropbox />
        
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-4 pr-12 rounded-lg border border-input bg-background"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;