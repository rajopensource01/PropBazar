import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

interface DocumentUploadProps {
  propertyId: string;
  userId: string;
  onUploadComplete?: () => void;
}

export function DocumentUpload({ propertyId, userId, onUploadComplete }: DocumentUploadProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file');
      return;
    }

    setLoading(true);
    try {
      // For now, we'll just store the file name as the URL
      // In a real application, you would upload the file to a storage service
      const documentUrl = file.name;

      const response = await fetch('/api/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          documentUrl,
          propertyId,
          userId,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Document uploaded successfully');
        setTitle('');
        setDescription('');
        setFile(null);
        onUploadComplete?.();
      } else {
        throw new Error(data.error || 'Failed to upload document');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to upload document');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Document Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              placeholder="Document Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Uploading...' : 'Upload Document'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 