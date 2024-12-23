import FileDropbox from "@/components/FileDropbox";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] via-[#D946EF] to-[#0EA5E9] opacity-10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),rgba(217,70,239,0.1),rgba(14,165,233,0.1))] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D946EF]">
          Hi there! How can I help you today?
        </h1>
        
        <FileDropbox />
        
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-4 pr-12 rounded-lg border border-input bg-background/70 backdrop-blur-sm"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
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