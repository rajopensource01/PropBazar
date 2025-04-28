"use client"

import { useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileCheck,
  Shield,
  AlertTriangle,
  Upload,
  Search,
  Database,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import Image from "next/image"
import { toast } from "@/components/ui/use-toast"

export default function VerificationPage() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [documentType, setDocumentType] = useState("sale-deed")
  const [documentId, setDocumentId] = useState("")
  const [blockchainKey, setBlockchainKey] = useState("")
  const [verificationAttempts, setVerificationAttempts] = useState(0)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const connectMetaMask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
      } else {
        toast({
          title: "MetaMask not found",
          description: "Please install MetaMask to continue",
          variant: "destructive",
        });
        return null;
      }
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Failed to connect to MetaMask",
        variant: "destructive",
      });
      return null;
    }
  };

  const handleVerify = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please upload a document to verify",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    // Connect to MetaMask first
    const account = await connectMetaMask();
    if (!account) {
      setIsVerifying(false);
      return;
    }

    // Simulate blockchain verification process
    setTimeout(() => {
      setIsVerifying(false);
      
      // First attempt always fails, second attempt succeeds
      const isVerified = verificationAttempts > 0;

      if (isVerified) {
        setVerificationResult({
          status: "verified",
          message: "Document successfully verified on blockchain",
          details: [
            "Document hash: 0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
            "Verification timestamp: " + new Date().toISOString(),
            "Blockchain: Ethereum",
            "Smart Contract: 0x3FE647CbD32b19f4dC131E8f5eE87Bf569A1A28E",
          ],
        });
      } else {
        setVerificationResult({
          status: "forged",
          message: "Document verification failed. Please try again.",
          details: [
            "Document hash does not match blockchain record",
            "Last modification date: " + new Date().toISOString(),
            "Potential tampering detected in section 3.2",
            "Please try verifying again",
          ],
        });
        setVerificationAttempts(prev => prev + 1);
      }
    }, 2000);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setSelectedFile(null);
    setVerificationAttempts(0);
  };

  const recentVerifications = [
    { id: "SD78392", type: "Sale Deed", status: "verified", date: "2023-04-15", property: "Villa in Gurgaon" },
    { id: "PT45671", type: "Property Tax", status: "verified", date: "2023-04-12", property: "Apartment in Mumbai" },
    { id: "NOC23456", type: "NOC", status: "forged", date: "2023-04-10", property: "Commercial Space in Delhi" },
    { id: "LR98765", type: "Land Registry", status: "verified", date: "2023-04-08", property: "Plot in Bangalore" },
    { id: "EC34567", type: "Encumbrance", status: "pending", date: "2023-04-05", property: "Farmhouse in Lonavala" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blockchain Document Verification</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Verify the authenticity of property documents using our advanced blockchain verification system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload & Verify</h3>
            <p className="text-zinc-400">
              Upload your property documents to verify authenticity against our blockchain records
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Blockchain Verification</h3>
            <p className="text-zinc-400">
              Our system checks document hashes against immutable blockchain records for tamper-proof verification
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verification Report</h3>
            <p className="text-zinc-400">
              Receive a detailed verification report with blockchain transaction details and document status
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mb-16">
          <Tabs defaultValue="verify" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="verify">Verify Document</TabsTrigger>
              <TabsTrigger value="search">Search Verification</TabsTrigger>
            </TabsList>

            <TabsContent value="verify">
              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle>Upload Document for Verification</CardTitle>
                  <CardDescription>
                    Upload property documents to verify authenticity using our blockchain verification system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!verificationResult ? (
                    <div className="space-y-6">
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
                          className={`flex flex-col items-center justify-center border-2 border-dashed ${isDragging ? "border-blue-500" : "border-zinc-700"} rounded-md p-8 hover:border-blue-500 transition-colors`}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
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
                              <p className="text-xs text-zinc-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          ) : (
                            <>
                              <p className="text-sm text-zinc-400 mb-2">PDF, JPG, or PNG (max. 10MB)</p>
                              <Button variant="outline" className="border-zinc-700">
                                Select File
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center p-6 text-center">
                      {verificationResult.status === "verified" ? (
                        <div className="flex flex-col items-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 mb-4">
                            <Shield className="h-10 w-10 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-blue-500 mb-2">{verificationResult.message}</h3>
                          <div className="mt-4 w-full text-left bg-zinc-950 rounded-md p-4 border border-zinc-800">
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
                          <h3 className="text-xl font-semibold text-red-500 mb-2">{verificationResult.message}</h3>
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
                      <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleVerify} disabled={isVerifying}>
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
                          <>Verify Document</>
                        )}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="border-zinc-700" onClick={resetVerification}>
                        Verify Another Document
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">Download Verification Report</Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="search">
              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle>Search Document Verification</CardTitle>
                  <CardDescription>
                    Check if a document has been verified on our blockchain by entering its ID or hash
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="search-type">Search By</Label>
                      <select
                        id="search-type"
                        className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white"
                      >
                        <option value="document-id">Document ID</option>
                        <option value="hash">Document Hash</option>
                        <option value="property-id">Property ID</option>
                        <option value="transaction-id">Blockchain Transaction ID</option>
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="search-value">Search Value</Label>
                      <div className="relative">
                        <Input
                          id="search-value"
                          placeholder="Enter search value"
                          className="border-zinc-800 bg-zinc-950 pr-10"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-zinc-500" />
                      </div>
                    </div>

                    <div className="rounded-md bg-zinc-950 p-4 border border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck className="h-5 w-5 text-blue-500" />
                        <h4 className="font-medium">Recent Verifications</h4>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="text-xs text-zinc-500 border-b border-zinc-800">
                              <th className="pb-2 text-left">ID</th>
                              <th className="pb-2 text-left">Type</th>
                              <th className="pb-2 text-left">Property</th>
                              <th className="pb-2 text-left">Date</th>
                              <th className="pb-2 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recentVerifications.map((verification) => (
                              <tr key={verification.id} className="border-b border-zinc-800 text-sm">
                                <td className="py-2 font-mono text-xs">{verification.id}</td>
                                <td className="py-2">{verification.type}</td>
                                <td className="py-2">{verification.property}</td>
                                <td className="py-2">{verification.date}</td>
                                <td className="py-2">
                                  {verification.status === "verified" ? (
                                    <span className="flex items-center text-blue-500">
                                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                                    </span>
                                  ) : verification.status === "forged" ? (
                                    <span className="flex items-center text-red-500">
                                      <XCircle className="h-3 w-3 mr-1" /> Forged
                                    </span>
                                  ) : (
                                    <span className="flex items-center text-yellow-500">
                                      <Clock className="h-3 w-3 mr-1" /> Pending
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Search Blockchain Records</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">How Our Blockchain Verification Works</h2>
              <p className="text-zinc-400 mb-6">
                Our blockchain verification system creates a tamper-proof record of all property documents, ensuring
                authenticity and preventing fraud in real estate transactions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Document Hashing</h3>
                    <p className="text-sm text-zinc-400">Each document is converted to a unique cryptographic hash</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Blockchain Storage</h3>
                    <p className="text-sm text-zinc-400">The hash is stored on our immutable blockchain ledger</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Verification Process</h3>
                    <p className="text-sm text-zinc-400">
                      When a document is uploaded for verification, its hash is compared with the blockchain record
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Verification Report</h3>
                    <p className="text-sm text-zinc-400">
                      A detailed report is generated showing the verification status and blockchain details
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqFNbuzpFBWRAHhcW5AixLTgHkgaPA.png"
                alt="Blockchain verification process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-zinc-300">
                  Our blockchain technology ensures complete transparency and security in property transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
