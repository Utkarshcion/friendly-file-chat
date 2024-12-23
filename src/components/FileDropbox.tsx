import React, { useState, useRef } from 'react';
import { Upload, File, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const FileDropbox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleFileUpload(files);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      await handleFileUpload(files);
    }
  };

  const handleFileUpload = async (files: File[]) => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Complete",
            description: `Successfully uploaded ${files.length} file(s)`,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-8 transition-all duration-200 ease-in-out cursor-pointer",
          "bg-gradient-to-br from-[#E5DEFF]/30 to-[#FFDEE2]/30 backdrop-blur-sm",
          "hover:from-[#E5DEFF]/50 hover:to-[#FFDEE2]/50",
          isDragging ? "border-[#9b87f5] shadow-lg shadow-[#9b87f5]/20" : "border-[#9b87f5]/50",
          "flex flex-col items-center justify-center gap-4",
          "animate-pulse-slow"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {isUploading ? (
          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Uploading...</span>
              <span className="text-sm font-medium">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-[#E5DEFF] rounded-full h-2.5">
              <div
                className="bg-[#9b87f5] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <div className="rounded-full p-3 bg-[#9b87f5]/10">
              <Upload className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-[#7E69AB]">Drop your files here</p>
              <p className="text-sm text-[#6E59A5]">or click to browse</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileDropbox;