import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns';
import { Skeleton } from "@/components/ui/skeleton";

interface Document {
  _id: string;
  title: string;
  description: string;
  documentUrl: string;
  createdAt: string;
}

interface DocumentListProps {
  propertyId?: string;
  userId?: string;
}

export function DocumentList({ propertyId, userId }: DocumentListProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const params = new URLSearchParams();
        if (propertyId) params.append('propertyId', propertyId);
        if (userId) params.append('userId', userId);

        const response = await fetch(`/api/documents?${params.toString()}`);
        const data = await response.json();

        if (data.success) {
          setDocuments(data.documents);
        } else {
          throw new Error(data.error || 'Failed to fetch documents');
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [propertyId, userId]);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-gray-500">
          No documents found
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <Card key={doc._id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{doc.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{doc.description}</p>
            <p className="text-xs text-gray-400 mb-4">
              Uploaded on {format(new Date(doc.createdAt), 'PPP')}
            </p>
            <a
              href={doc.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm inline-block"
            >
              View Document
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 