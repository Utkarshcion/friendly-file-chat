import FileDropbox from "@/components/FileDropbox";
import { Card } from "@/components/ui/card";
import { FileCheck, FileText, Shield, Database, ChartBar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] via-[#D946EF] to-[#0EA5E9] opacity-10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),rgba(217,70,239,0.1),rgba(14,165,233,0.1))] animate-pulse"></div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D946EF] flex items-center justify-center gap-2">
          <Shield className="w-8 h-8" />
          Covenant Tracking Agent
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Column - File Drop Area */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7E69AB] flex items-center gap-2">
              <FileText className="text-[#9b87f5]" />
              File Upload
            </h2>
            <FileDropbox />
            
            {/* Loan Agreement Summary */}
            <Card className="p-4 bg-background/70 backdrop-blur-sm mt-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileCheck className="text-[#9b87f5]" />
                Loan Agreement Summary
              </h3>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <div className="space-y-3">
                  <div className="p-2 bg-background/50 rounded">
                    <h4 className="font-medium mb-1">Key Terms</h4>
                    <p className="text-sm text-muted-foreground">Upload a loan agreement to view its summary</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <h4 className="font-medium mb-1">Important Dates</h4>
                    <p className="text-sm text-muted-foreground">No dates found</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <h4 className="font-medium mb-1">Financial Terms</h4>
                    <p className="text-sm text-muted-foreground">No financial terms found</p>
                  </div>
                </div>
              </ScrollArea>
            </Card>
          </div>

          {/* Middle Column - Chat Area */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7E69AB] flex items-center gap-2">
              <Database className="text-[#9b87f5]" />
              Chat with Agent
            </h2>
            <div className="bg-background/70 backdrop-blur-sm rounded-lg border border-input p-4 min-h-[500px] flex flex-col">
              <div className="flex-1">
                {/* Chat messages will go here */}
              </div>
              <div className="relative mt-4">
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

          {/* Right Column - Widgets */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7E69AB] flex items-center gap-2">
              <ChartBar className="text-[#9b87f5]" />
              Loan Agreements
            </h2>
            
            {/* Loan Queue Widget */}
            <Card className="p-4 bg-background/70 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileCheck className="text-[#9b87f5]" />
                Loan Agreements
              </h3>
              <div className="space-y-2">
                {[
                  { id: 1, name: "Loan #1234", status: "Pending Review" },
                  { id: 2, name: "Loan #5678", status: "In Progress" },
                  { id: 3, name: "Loan #9012", status: "Completed" },
                ].map((loan) => (
                  <Dialog key={loan.id}>
                    <DialogTrigger asChild>
                      <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg hover:bg-background/80 cursor-pointer group transition-colors">
                        <span className="font-medium">{loan.name}</span>
                        <Badge 
                          variant="secondary"
                          className="group-hover:bg-primary/20"
                        >
                          {loan.status}
                        </Badge>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">{loan.name}</h2>
                        {/* Document Viewer */}
                        <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
                          <div className="text-sm space-y-4">
                            <h3 className="text-lg font-semibold">Loan Agreement Document</h3>
                            <p className="text-muted-foreground">
                              This is where the loan agreement document content will be displayed.
                              The content can include terms, conditions, payment schedules, and other
                              relevant information.
                            </p>
                          </div>
                        </ScrollArea>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </Card>

            {/* Document Viewer */}
            <Card className="p-4 bg-background/70 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="text-[#9b87f5]" />
                Document Viewer
              </h3>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <div className="text-sm">
                  {/* Document content will be displayed here */}
                  <p className="text-muted-foreground">Upload a document to view its contents</p>
                </div>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;