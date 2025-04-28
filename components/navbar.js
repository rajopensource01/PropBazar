"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [searchPrice, setSearchPrice] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [showMetaMaskPopup, setShowMetaMaskPopup] = useState(false)
  const [showPropertiesPopup, setShowPropertiesPopup] = useState(false)
  const [metaMaskStatus, setMetaMaskStatus] = useState("")
  const [walletAddress, setWalletAddress] = useState("")

  // Property types for dropdown
  const propertyTypes = ["All Properties", "Apartment", "Villa", "House", "Plot", "Commercial", "Penthouse"]

  // Locations for dropdown
  const locations = ["All Locations", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "USAR"]

  // Price ranges for dropdown
  const priceRanges = [
    "Any Price",
    "Under ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Cr",
    "₹1 Cr - ₹2 Cr",
    "₹2 Cr - ₹5 Cr",
    "Above ₹5 Cr",
  ]

  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loginStatus)

    if (loginStatus) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}")
      setUser(userData)
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would redirect to search results
    console.log("Searching for:", { searchQuery, searchLocation, searchPrice })
    // For demo purposes, alert the search parameters
    alert(
      `Searching for: ${searchQuery || "Any Property"} in ${searchLocation || "Any Location"} at price range ${searchPrice || "Any Price"}`,
    )
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUser(null)
    setUserMenuOpen(false)
    router.push("/")
  }

  const handleKnowPropertiesClick = () => {
    setShowMetaMaskPopup(true)
  }

  const handleMetaMaskAllow = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setWalletAddress(accounts[0])
        setMetaMaskStatus(`MetaMask connected: ${accounts[0]}`)
        setShowMetaMaskPopup(false)
        setShowPropertiesPopup(true)
      } catch (error) {
        setMetaMaskStatus("MetaMask connection denied")
        setShowMetaMaskPopup(false)
      }
    } else {
      setMetaMaskStatus("MetaMask is not installed")
      setShowMetaMaskPopup(false)
    }
  }

  const handleMetaMaskDeny = () => {
    setMetaMaskStatus("MetaMask access denied by user")
    setShowMetaMaskPopup(false)
  }

  const handleClosePropertiesPopup = () => {
    setShowPropertiesPopup(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur-md transition-all duration-300 ${
          isSticky ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/propbazar-logo.png" alt="PropBazar" width={40} height={40} />
            <span className="text-xl font-bold text-blue-500">PROPBAZAR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/properties" className="text-sm font-medium text-zinc-400 hover:text-white">
              Properties
            </Link>
            <Link href="/verification" className="text-sm font-medium text-zinc-400 hover:text-white">
              Verification
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white">
              About
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-zinc-400 hover:text-white">
              Privacy
            </Link>
            <button
              type="button"
              className="text-zinc-400 hover:text-white bg-transparent border border-transparent px-3 py-1 rounded-md flex items-center gap-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
              Search
            </button>

            <button
              type="button"
              className="text-zinc-400 hover:text-white bg-transparent border border-transparent px-3 py-1 rounded-md"
              onClick={handleKnowPropertiesClick}
            >
              Know Your Properties
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white bg-transparent border border-transparent px-3 py-1 rounded-md"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <User className="h-4 w-4" />
                  {user?.username || "User"}
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    >
                      <div className="flex items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="border border-zinc-800 text-white hover:bg-zinc-800 px-3 py-1 rounded-md">
                  Login
                </Link>
                <Link href="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="text-zinc-400 bg-transparent border border-transparent p-2 rounded-md"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Expanded when isSearchOpen is true */}
        <div
          className={`bg-zinc-900 border-b border-zinc-800 transition-all duration-300 overflow-hidden ${
            isSearchOpen ? "max-h-24 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="container mx-auto">
            <form onSubmit={handleSearch} className="flex flex-wrap gap-2">
              <div className="flex-1 min-w-[200px]">
                <select
                  className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <select
                  className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <select
                  className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                  value={searchPrice}
                  onChange={(e) => setSearchPrice(e.target.value)}
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-16 z-50 border-b border-zinc-800 bg-black transition-all duration-300 md:hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="container mx-auto p-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/properties"
                className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Properties
              </Link>
              <Link
                href="/verification"
                className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Verification
              </Link>
              <Link
                href="/about"
                className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Privacy
              </Link>

              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    type="button"
                    className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <Link
                    href="/login"
                    className="w-full border border-zinc-800 hover:bg-zinc-800 rounded-md px-3 py-1 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1 text-center text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* MetaMask Access Popup */}
      {showMetaMaskPopup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-zinc-900 rounded-md p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">MetaMask Access Request</h2>
            <p className="mb-6 text-zinc-300">
              This app wants to access your MetaMask wallet. Do you allow this?
            </p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handleMetaMaskAllow}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Allow
              </button>
              <button
                type="button"
                onClick={handleMetaMaskDeny}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Properties Info Popup */}
      {showPropertiesPopup && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-zinc-900 rounded-md p-6 max-w-md w-full text-center text-white">
            <h2 className="text-lg font-semibold mb-4">Wallet Properties</h2>
            <p className="mb-4">
              The owner of wallet address  0x2aa1dfe4818258 has following 2 properties on his name which are mentioned below :-
            </p>
            <ol className="text-left list-decimal list-inside space-y-2">
              <li>
                Property in New Delhi, pincode 110097, H pocket, Flat number: 126, 3rd Floor
              </li>
              <li>
                Plot on evergreen farms, Avantika road, Ghazipur, Uttar Pradesh - 76
              </li>
            </ol>
            <button
              type="button"
              onClick={handleClosePropertiesPopup}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MetaMask Status Message */}
      {metaMaskStatus && (
        <div className="fixed bottom-4 right-4 z-60 bg-zinc-800 text-white px-4 py-2 rounded-md shadow-md">
          {metaMaskStatus}
        </div>
      )}
    </>
  )
}
