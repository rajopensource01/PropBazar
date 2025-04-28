import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("property_documents");
    
    const data = await request.json();
    const { documentId, documentHash, documentType, isFirstAttempt } = data;

    // For demo purposes, we'll create a document if it doesn't exist
    let document = await db.collection("documents").findOne({ _id: documentId });
    
    if (!document) {
      // Create a new document if it doesn't exist
      const newDocument = {
        _id: documentId,
        documentHash: documentHash || generateRandomHash(),
        documentType: documentType || "property_deed",
        verificationStatus: "pending",
        verificationAttempts: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await db.collection("documents").insertOne(newDocument);
      document = newDocument;
    }

    // Check if this is the first or second attempt
    const isFirstVerificationAttempt = isFirstAttempt !== undefined ? isFirstAttempt : (!document.verificationAttempts || document.verificationAttempts === 0);
    
    if (isFirstVerificationAttempt) {
      // First attempt - always fail
      await db.collection("documents").updateOne(
        { _id: documentId },
        { 
          $set: { 
            verificationStatus: 'failed',
            updatedAt: new Date()
          },
          $inc: { verificationAttempts: 1 }
        }
      );

      return NextResponse.json({
        success: false,
        error: "Document verification failed. Please try again.",
        details: [
          "Document hash does not match blockchain record",
          "Last modification date: " + new Date().toISOString(),
          "Potential tampering detected in section 3.2",
          "Please try verifying again"
        ]
      });
    } else {
      // Second attempt - always succeed
      const blockchainKey = generateBlockchainKey();
      const transactionHash = '0x' + Math.random().toString(16).substring(2, 42);
      const walletAddress = '0x' + Math.random().toString(16).substring(2, 42);

      await db.collection("documents").updateOne(
        { _id: documentId },
        { 
          $set: { 
            verificationStatus: 'verified',
            blockchainKey,
            blockchainTransactionId: transactionHash,
            walletAddress,
            updatedAt: new Date()
          },
          $inc: { verificationAttempts: 1 }
        }
      );

      return NextResponse.json({
        success: true,
        message: "Document successfully verified on blockchain",
        blockchainKey,
        transactionHash,
        walletAddress,
        details: [
          `Document hash: ${document.documentHash}`,
          `Verification timestamp: ${new Date().toISOString()}`,
          `Blockchain: Ethereum`,
          `Smart Contract: 0x3FE647CbD32b19f4dC131E8f5eE87Bf569A1A28E`,
          `Transaction ID: ${transactionHash}`,
          `Wallet Address: ${walletAddress}`,
          `Blockchain Key: ${blockchainKey}`
        ]
      });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Helper function to generate blockchain key
function generateBlockchainKey() {
  const prefix = "BE";
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  const address = Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");
  return `${prefix}-${timestamp}-${random}-${address.substring(0, 8)}`.toUpperCase();
}

// Helper function to generate random hash
function generateRandomHash() {
  return Array.from({ length: 64 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const documentHash = searchParams.get('documentHash');
    
    if (!documentHash) {
      return NextResponse.json(
        { success: false, error: "Document hash is required" },
        { status: 400 }
      );
    }
    
    // In a real application, this would call the blockchain
    // const result = await checkDocumentVerification(documentHash);
    
    // For demo purposes, we'll simulate a response
    const result = {
      success: true,
      isVerified: Math.random() > 0.5,
      timestamp: new Date().toISOString(),
      verifier: '0x' + Math.random().toString(16).substring(2, 42)
    };
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 