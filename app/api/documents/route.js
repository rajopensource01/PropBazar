import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { generateDocumentHash } from '@/lib/blockchain';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("property_documents");
    
    const data = await request.json();
    const { title, description, documentUrl, userId, propertyId, documentType, documentId } = data;

    // Generate document hash
    const documentHash = generateDocumentHash({
      title,
      description,
      documentUrl,
      documentType,
      documentId
    });

    const result = await db.collection("documents").insertOne({
      title,
      description,
      documentUrl,
      userId,
      propertyId,
      documentType,
      documentId,
      documentHash,
      verificationStatus: 'pending',
      verificationAttempts: 0,
      blockchainTransactionId: null,
      walletAddress: null,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json({ 
      success: true, 
      documentId: result.insertedId,
      documentHash
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("property_documents");
    
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get('propertyId');
    const userId = searchParams.get('userId');
    const documentHash = searchParams.get('documentHash');

    const query = {};
    if (propertyId) query.propertyId = propertyId;
    if (userId) query.userId = userId;
    if (documentHash) query.documentHash = documentHash;

    const documents = await db
      .collection("documents")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, documents });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Update document verification status
export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("property_documents");
    
    const data = await request.json();
    const { documentId, verificationStatus, blockchainTransactionId, walletAddress } = data;

    const result = await db.collection("documents").updateOne(
      { _id: documentId },
      { 
        $set: { 
          verificationStatus,
          blockchainTransactionId,
          walletAddress,
          updatedAt: new Date()
        },
        $inc: { verificationAttempts: 1 }
      }
    );

    return NextResponse.json({ 
      success: true, 
      updated: result.modifiedCount > 0
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 