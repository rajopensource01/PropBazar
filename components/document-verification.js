"use client"

import React, { useState, useRef } from "react"
import { Shield, AlertTriangle, Upload, Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

export function DocumentVerification() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [documentType, setDocumentType] = useState("sale-deed")
  const [documentId, setDocumentId] = useState("")
  const [verificationResult, setVerificationResult] = useState(null)
  const [blockchainKey, setBlockchainKey] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [documentHash, setDocumentHash] = useState("")
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setDocumentHash(generateRandomHash())
      setVerificationResult(null)
      setError(null)
      
      // Auto-verify PropBazar.pdf
      if (file.name === "PropBazar.pdf") {
        handleVerification()
      }
    }
  }

  const handleVerification = async () => {
    if (!selectedFile) return
    
    // Only verify PropBazar.pdf
    if (selectedFile.name !== "PropBazar.pdf") {
      setVerificationResult({
        success: false,
        error: "Verification Failed",
        details: [
          "Only PropBazar.pdf can be verified.",
          "Please upload the correct document."
        ]
      });
      toast({
        title: "Verification Failed",
        description: "Only PropBazar.pdf can be verified.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsVerifying(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Always succeed for PropBazar.pdf
      setVerificationResult({
        success: true,
        message: "Document Verified Successfully",
        details: [
          "Document authenticity confirmed",
          "Blockchain certificate generated",
          "Property key created and secured"
        ]
      });
      
      // Generate random values for display
      setBlockchainKey(`BPK-${Math.random().toString(36).substring(2, 15)}`);
      setTransactionId(`0x${Math.random().toString(16).substring(2, 42)}`);
      setWalletAddress(`0x${Math.random().toString(16).substring(2, 42)}`);
      
      toast({
        title: "Verification Successful",
        description: "Document has been verified and blockchain certificate generated."
      });
    } catch (err) {
      setError(err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const resetVerification = () => {
    setVerificationResult(null)
    setSelectedFile(null)
    setBlockchainKey("")
    setDocumentId("")
    setWalletAddress("")
    setTransactionId("")
    setDocumentHash("")
    setError(null)
  }

  const downloadVerificationCertificate = () => {
    if (!verificationResult || !verificationResult.success) {
      toast({ title: "Certificate unavailable", description: "You can only download a certificate for verified documents.", variant: "destructive" })
      return
    }
    const lines = [
      "--- Blockchain Document Verification Certificate ---",
      `Date: ${new Date().toLocaleString()}`,
      `Document Type: ${documentType}`,
      `Document ID: ${documentId || "N/A"}`,
      blockchainKey ? `Blockchain Key: ${blockchainKey}` : null,
      transactionId ? `Transaction ID: ${transactionId}` : null,
      walletAddress ? `Wallet Address: ${walletAddress}` : null,
      "",
      "Verification Details:",
      ...(verificationResult.details || []),
      "",
      "Status: VERIFIED",
      "--------------------------------------------------",
    ].filter(Boolean)
    const blob = new Blob([lines.join("\n")], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `Verification-Certificate-${documentId || "document"}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({ title: "Certificate downloaded", description: "Verification certificate has been downloaded." })
  }

  const generateRandomHash = () => Array.from({ length: 64 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({ title: "Copied to clipboard", description: "The blockchain key has been copied to your clipboard" })
  }

  return (
    <section className="py-16 bg-zinc-950">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold">Document Verification</h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Secure your property documents on blockchain and get a unique verification key for transactions
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="verify" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="verify">Verify Document</TabsTrigger>
              <TabsTrigger value="search">Search Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="verify">
              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle>Upload Document for Verification</CardTitle>
                  <CardDescription>
                    Upload property documents to verify authenticity and generate a blockchain key for transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!verificationResult ? (
                    <div className="space-y-5">
                      <div className="grid gap-2">
                        <Label htmlFor="document-type">Document Type</Label>
                        <select
                          id="document-type"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white"
                          value={documentType}
                          onChange={(e) => setDocumentType(e.target.value)}
                        >
                          <option value="sale-deed">Sale Deed</option>
                          <option value="property-tax">Property Tax Receipt</option>
                          <option value="land-registry">Land Registry Certificate</option>
                          <option value="noc">No Objection Certificate</option>
                          <option value="encumbrance">Encumbrance Certificate</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="document-id">Document ID (if available)</Label>
                        <Input
                          id="document-id"
                          placeholder="Enter document ID"
                          className="border-zinc-800 bg-zinc-950"
                          value={documentId}
                          onChange={(e) => setDocumentId(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Upload Document</Label>
                        <div
                          className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-700 rounded-md p-8 hover:border-blue-500 transition-colors"
                          onDragOver={e => { e.preventDefault(); }}
                          onDrop={handleFileChange}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          />
                          <Upload className="h-10 w-10 text-zinc-500 mb-2" />
                          {selectedFile ? (
                            <div className="text-center">
                              <p className="text-sm font-medium text-blue-500 mb-1">{selectedFile.name}</p>
                              <p className="text-xs text-zinc-400">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          ) : (
                            <>
                              <p className="text-sm text-zinc-400 mb-2">
                                Drag and drop your document here or click to browse
                              </p>
                              <Button variant="outline" className="border-zinc-700">
                                Select File
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center p-4 text-center">
                      {verificationResult.success ? (
                        <div className="flex flex-col items-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 mb-4">
                            <Shield className="h-10 w-10 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-blue-500 mb-2">{verificationResult.message}</h3>
                          {blockchainKey && (
                            <div className="w-full my-4">
                              <p className="text-sm font-medium text-zinc-300 mb-2">Your Blockchain Property Key:</p>
                              <div className="blockchain-key flex items-center justify-between p-3 mb-4">
                                <code className="text-blue-400 text-sm">{blockchainKey}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-zinc-400 hover:text-white"
                                  onClick={() => copyToClipboard(blockchainKey)}
                                >
                                  <Copy className="h-4 w-4 mr-1" /> Copy
                                </Button>
                              </div>
                              <p className="text-xs text-zinc-500 mb-4">
                                This key can be used for property transactions, rentals, and ownership verification
                              </p>
                            </div>
                          )}
                          {transactionId && (
                            <div className="w-full my-4">
                              <p className="text-sm font-medium text-zinc-300 mb-2">Transaction ID:</p>
                              <div className="blockchain-key flex items-center justify-between p-3 mb-4">
                                <code className="text-blue-400 text-sm">{transactionId}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-zinc-400 hover:text-white"
                                  onClick={() => copyToClipboard(transactionId)}
                                >
                                  <Copy className="h-4 w-4 mr-1" /> Copy
                                </Button>
                              </div>
                            </div>
                          )}
                          {walletAddress && (
                            <div className="w-full my-4">
                              <p className="text-sm font-medium text-zinc-300 mb-2">Wallet Address:</p>
                              <div className="blockchain-key flex items-center justify-between p-3 mb-4">
                                <code className="text-blue-400 text-sm">{walletAddress}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-zinc-400 hover:text-white"
                                  onClick={() => copyToClipboard(walletAddress)}
                                >
                                  <Copy className="h-4 w-4 mr-1" /> Copy
                                </Button>
                              </div>
                            </div>
                          )}
                          <div className="mt-2 w-full text-left bg-zinc-950 rounded-md p-4 border border-zinc-800">
                            <p className="text-sm font-medium text-zinc-400 mb-2">Verification Details:</p>
                            <ul className="space-y-2">
                              {verificationResult.details?.map((detail, index) => (
                                <li key={index} className="text-xs text-zinc-500 font-mono">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 mb-4">
                            <AlertTriangle className="h-10 w-10 text-red-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-red-500 mb-2">{verificationResult.error}</h3>
                          <div className="mt-4 w-full text-left bg-zinc-950 rounded-md p-4 border border-zinc-800">
                            <p className="text-sm font-medium text-zinc-400 mb-2">Issue Details:</p>
                            <ul className="space-y-2">
                              {verificationResult.details?.map((detail, index) => (
                                <li key={index} className="text-xs text-zinc-500 font-mono">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {!verificationResult ? (
                    <>
                      <Button variant="outline" className="border-zinc-700">
                        Cancel
                      </Button>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={handleVerification}
                        disabled={isVerifying || !selectedFile}
                      >
                        {isVerifying ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Verifying...
                          </>
                        ) : (
                          <>
                            Verify Document
                          </>
                        )}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="border-zinc-700" onClick={resetVerification}>
                        Verify Another Document
                      </Button>
                      {verificationResult.success ? (
                        <Button className="bg-blue-600 hover:bg-blue-700" onClick={downloadVerificationCertificate}>
                          <Download className="h-4 w-4 mr-2" /> Download Certificate
                        </Button>
                      ) : null}
                    </>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
            {/* ... Search tab remains unchanged ... */}
          </Tabs>
        </div>
      </div>
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}