'use client';

import { useState } from 'react';
import { DocumentUpload } from "@/components/document-upload";
import { DocumentList } from "@/components/document-list";

export default function DocumentsPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUploadComplete = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Document Management</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload New Document</h2>
        <DocumentUpload 
          propertyId="property123" 
          userId="user123" 
          onUploadComplete={handleUploadComplete}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
        <DocumentList 
          key={refreshKey}
          propertyId="property123" 
          userId="user123" 
        />
      </div>
    </div>
  );
} 