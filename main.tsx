complete-cowdex-app.tsx

"use client"

import { useState, useEffect, useRef } from "react"

export default function CowDexApp() {
  const languages = ["English", "தமிழ்", "हिन्दी"]

  const translations = {
    English: {
      select_language: "Select Language",
      select_user_type: "Select User Type",
      farmer: "Farmer",
      government_official: "Government Official",
      veterinarian: "Veterinarian",
      insurance_agent: "Insurance Agent",
      email: "Email",
      password: "Password",
      login: "Login",
      government_portal: "Government Portal",
      cowdex: "CowDex",
      digital_cattle_management: "Digital Cattle Management System",
      enter: "Enter",
      scan_tag: "Scan Tag with Camera",
      tag_number: "Tag Number",
      verify_register: "Verify & Register",
      switch_account: "Switch Account",
      dashboard: "Dashboard",
      marketplace: "Marketplace",
      insurance: "Insurance",
      doctors: "Doctors",
      feeds: "Feeds",
      schemes: "Schemes",
      back: "Back",
      location: "Location",
      call: "Call",
      message: "Message",
      buy_now: "Buy Now",
      contact_supplier: "Contact Supplier",
      official_website: "Official Website",
      apply_now: "Apply Now",
      splash_title: "CowDex",
      splash_subtitle: "Buy, insure & care for your cow.",
      enter_btn: "Enter",
      cow_registered: "Cow Registered with Tag",
      location_info: "Location Information",
      your_location: "Your Location",

      // Login Screen
      govt_portal_login: "Government Portal Login",
      govt_id_placeholder: "Government ID / Aadhaar Number",
      password_placeholder: "Password",
      login_btn: "Login",
      new_registration: "New Registration",

      // Registration Screen
      register_cattle: "Register Your Cattle",
      enter_cow_tag: "Enter your cow's government-issued tag number",
      cow_tag_placeholder: "Enter Cow Tag Number",
      scan_tag: "Or scan the government tag",
      scan_camera: "Scan Tag with Camera",
      verify_register: "Verify & Register",
      skip_now: "Skip for now",
      registration_success: "Registration Successful!",
      registration_error: "Please enter a valid cow tag number",

      // Dashboard
      welcome_farmers: "Welcome, Farmers!",
      govt_certified: "Government certified livestock management portal",
      marketplace: "Marketplace",
      insurance: "Insurance",
      doctors: "Doctors",
      feeds: "Feeds",
      schemes: "Schemes",
      analytics: "Analytics",
      switch_account: "Switch Account",

      // Marketplace
      cattle_market: "Government Verified Cattle Market",
      in_stock: "In Stock",
      sold: "Sold",
      back_dashboard: "Back to Dashboard",

      // Insurance
      livestock_insurance: "Government Livestock Insurance",
      tag: "Tag",
      breed: "Breed",
      age: "Age",
      years: "years",
      insurance_status: "Insurance Status",
      active: "Active",
      coverage: "Coverage",
      expiry: "Expiry",
      enter_ear_tag: "Enter Ear Tag ID",
      check_insurance: "Check Insurance Status",

      // Doctors
      approved_vets: "Government Approved Veterinarians",
      emergency_care: "Emergency Care",
      routine_care: "Routine Care",
      pediatrics: "Pediatrics",
      surgery: "Surgery",
      exp: "Exp",
      rating: "Rating",
      fees: "Fees",
      call: "Call",

      // Schemes
      govt_schemes: "Government Schemes",
      pm_matsya: "PM Matsya Sampada Yojana",
      matsya_desc: "Scheme for development of fisheries and dairy sector",
      livestock_scheme: "Livestock Insurance Scheme",
      livestock_desc: "Insurance coverage for livestock against death due to accident or disease",
      dairy_plan: "National Dairy Plan",
      dairy_desc: "Increase productivity of milch animals and rural milk procurement",
      gokul_mission: "Rashtriya Gokul Mission",
      gokul_desc: "Conservation and development of indigenous breeds",
      how_apply: "How to apply:",
      apply_district: "Apply through district fishery office with ID proof and bank details",
      apply_vet: "Apply through registered veterinary clinics with animal details",
      apply_dairy: "Contact local dairy cooperative society with cattle details",
      apply_breed: "Register through animal husbandry department with breed certification",
      official_website: "Official Website",

      // Common
      back: "Back",
      close: "Close",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      govt_approved_vets: "Government Approved Veterinarians",
      reproduction: "Reproduction",
      nutrition: "Nutrition",
      experience: "Experience",
      message: "Message",
      "24_7_available": "24/7 Available",
      mon_sat_9_6: "Mon-Sat 9AM-6PM",
      mon_fri_10_5: "Mon-Fri 10AM-5PM",
      tue_sun_8_4: "Tue-Sun 8AM-4PM",
      mon_sat_9_5: "Mon-Sat 9AM-5PM",
      mon_fri_9_6: "Mon-Fri 9AM-6PM",
      cattle_emergency_surgery: "Cattle Emergency & Surgery",
      preventive_healthcare: "Preventive Healthcare",
      calf_care_vaccination: "Calf Care & Vaccination",
      advanced_surgical_procedures: "Advanced Surgical Procedures",
      artificial_insemination: "Artificial Insemination",
      feed_consultation: "Feed Consultation",
      cow_foods_nutrition: "Cow Foods & Nutrition",
      premium_cattle_feed: "Premium Cattle Feed",
      mineral_supplements: "Mineral Supplements",
      fresh_hay_bales: "Fresh Hay Bales",
      organic_green_fodder: "Organic Green Fodder",
      calcium_phosphorus_mix: "Calcium Phosphorus Mix",
      lactation_booster_feed: "Lactation Booster Feed",
      daily_nutrition: "Daily Nutrition",
      health_boost: "Health Boost",
      roughage: "Roughage",
      fresh_feed: "Fresh Feed",
      bone_health: "Bone Health",
      milk_production: "Milk Production",
      high_protein_daily_feed: "High protein daily feed for healthy cattle",
      essential_minerals_vitamins: "Essential minerals and vitamins for cattle health",
      natural_fiber_source: "Natural fiber source for digestive health",
      fresh_nutritious_greens: "Fresh nutritious greens for daily feeding",
      bone_development_supplement: "Bone development and strength supplement",
      increases_milk_yield: "Specially formulated to increase milk yield",
      seasonal: "Seasonal",
      daily_fresh: "Daily Fresh",
      protein: "Protein",
      fiber: "Fiber",
      supplier: "Supplier",
      order_now: "Order Now",
      add_to_cart: "Add to Cart",
      doctorsTitle: "Government Approved Veterinarians",
      doctor1Name: "Dr. Ramesh Kumar",
      doctor1Specialty: "Emergency Care",
      doctor1Experience: "15 years",
      doctor1Location: "Chennai",
      doctor2Name: "Dr. Nazer Ali",
      doctor2Specialty: "Routine Care",
      doctor2Experience: "12 years",
      doctor2Location: "Bangalore",
      doctor3Name: "Dr. Priya Sharma",
      doctor3Specialty: "Pediatrics",
      doctor3Experience: "10 years",
      doctor3Location: "Hyderabad",
      doctor4Name: "Dr. Anil Patel",
      doctor4Specialty: "Surgery",
      doctor4Experience: "18 years",
      doctor4Location: "Mumbai",
      backToDashboard: "Back to Dashboard",
      farmer: "Farmer",
      govt_official: "Government Official",
      veterinarian: "Veterinarian",
      insurance_agent: "Insurance Agent",
    },
    தமிழ்: {
      select_language: "மொழியைத் தேர்ந்தெடுக்கவும்",
      select_user_type: "பயனர் வகையைத் தேர்ந்தெடுக்கவும்",
      farmer: "விவசாயி",
      government_official: "அரசு அதிகாரி",
      veterinarian: "கால்நடை மருத்துவர்",
      insurance_agent: "காப்பீட்டு முகவர்",
      email: "மின்னஞ்சல்",
      password: "கடவுச்சொல்",
      login: "உள்நுழைய",
      government_portal: "அரசு போர்ட்டல்",
      cowdex: "கௌடெக்ஸ்",
      digital_cattle_management: "டிஜிட்டல் கால்நடை மேலாண்மை அமைப்பு",
      enter: "நுழைய",
      scan_tag: "கேமராவுடன் டேக் ஸ்கேன் செய்யவும்",
      tag_number: "டேக் எண்",
      verify_register: "சரிபார்த்து பதிவு செய்யவும்",
      switch_account: "கணக்கை மாற்றவும்",
      dashboard: "டாஷ்போர்டு",
      marketplace: "சந்தை",
      insurance: "காப்பீடு",
      doctors: "மருத்துவர்கள்",
      feeds: "தீவனங்கள்",
      schemes: "திட்டங்கள்",
      back: "பின்னால்",
      location: "இடம்",
      call: "அழைக்கவும்",
      message: "செய்தி",
      buy_now: "இப்போது வாங்கவும்",
      contact_supplier: "சப்ளையரைத் தொடர்பு கொள்ளவும்",
      official_website: "அதிகாரப்பூர்வ வலைத்தளம்",
      apply_now: "இப்போது விண்ணப்பிக்கவும்",
      // Additional Tamil translations...
      farmer: "விவசாயி",
      govt_official: "அரசு அதிகாரி",
      veterinarian: "கால்நடை மருத்துவர்",
      insurance_agent: "காப்பீட்டு முகவர்",
    },
    हिन्दी: {
      select_language: "भाषा चुनें",
      select_user_type: "उपयोगकर्ता प्रकार चुनें",
      farmer: "किसान",
      government_official: "सरकारी अधिकारी",
      veterinarian: "पशु चिकित्सक",
      insurance_agent: "बीमा एजेंट",
      email: "ईमेल",
      password: "पासवर्ड",
      login: "लॉगिन",
      government_portal: "सरकारी पोर्टल",
      cowdex: "काउडेक्स",
      digital_cattle_management: "डिजिटल पशु प्रबंधन प्रणाली",
      enter: "प्रवेश",
      scan_tag: "कैमरे से टैग स्कैन करें",
      tag_number: "टैग नंबर",
      verify_register: "सत्यापित करें और पंजीकरण करें",
      switch_account: "खाता बदलें",
      dashboard: "डैशबोर्ड",
      marketplace: "बाज़ार",
      insurance: "बीमा",
      doctors: "डॉक्टर",
      feeds: "चारा",
      schemes: "योजनाएं",
      back: "वापस",
      location: "स्थान",
      call: "कॉल करें",
      message: "संदेश",
      buy_now: "अभी खरीदें",
      contact_supplier: "आपूर्तिकर्ता से संपर्क करें",
      official_website: "आधिकारिक वेबसाइट",
      apply_now: "अभी आवेदन करें",
      // Additional Hindi translations...
      farmer: "किसान",
      govt_official: "सरकारी अधिकारी",
      veterinarian: "पशु चिकित्सक",
      insurance_agent: "बीमा एजेंट",
    },
  }

  const [currentScreen, setCurrentScreen] = useState("splash")
  const [appState, setAppState] = useState({
    selectedLanguage: "English",
    email: "",
    password: "",
    cowTag: "",
    earTag: "",
    userType: "farmer",
    showSuccessMessage: false,
    showErrorMessage: false,
    showLocationMap: false,
    currentLocation: {
      name: null,
      lat: null,
      lng: null,
    },
  })
  const [isScanning, setIsScanning] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const updateState = (updates: any) => {
    setAppState((prev) => ({ ...prev, ...updates }))
  }

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen)
  }

  const startQRScanner = async () => {
    try {
      setIsScanning(true)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()

        // Simple QR detection simulation (in real app, use a QR library like jsQR)
        setTimeout(() => {
          const mockQRData = COW-${Math.random().toString(36).substr(2, 9).toUpperCase()}
          updateState({ cowTag: mockQRData })
          stopQRScanner()
          alert(Scanned QR Code: ${mockQRData})
        }, 3000)
      }
    } catch (error) {
      alert("Camera access denied or not available")
      setIsScanning(false)
    }
  }

  const stopQRScanner = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track: any) => track.stop())
      videoRef.current.srcObject = null
    }
    setIsScanning(false)
  }

  const getText = (key: string) => {
    return translations[appState.selectedLanguage]?.[key] || translations["English"]?.[key] || key
  }

  const updateAnalytics = () => {
    const analyticsData = {
      totalUsers: 15420,
      activeFarmers: 12350,
      govtOfficials: 1890,
      veterinarians: 890,
      insuranceAgents: 290,
      totalCows: 45670,
      insuredCows: 32450,
      marketplaceTransactions: 2340,
      schemeApplications: 5670,
      doctorConsultations: 1890,
      qrScansToday: 450,
      languageUsage: {
        English: 8920,
        Tamil: 4200,
        Hindi: 2300,
      },
    }

    // Store analytics in localStorage for persistence
    localStorage.setItem("cowdex_analytics", JSON.stringify(analyticsData))
    return analyticsData
  }

  useEffect(() => {
    updateAnalytics()
  }, [])

  const formatUserType = (type: string) => {
    return getText(type.replace("-", "_"))
  }

  const handleVerifyRegister = () => {
    const validTags = ["COW001", "COW002", "COW003", "CATTLE123", "FARM456"]

    if (appState.cowTag.trim()) {
      if (validTags.includes(appState.cowTag.trim().toUpperCase())) {
        // Valid cow tag - proceed with registration
        updateState({
          cowTag: "",
          email: "",
          password: "",
          showSuccessMessage: true,
        })
        setTimeout(() => {
          updateState({ showSuccessMessage: false })
          navigateToScreen("dashboard")
        }, 2000)
      } else {
        // Invalid cow tag - do switch account process
        updateState({
          cowTag: "",
          email: "",
          password: "",
          showSuccessMessage: false,
        })
        navigateToScreen("login")
      }
    } else {
      updateState({ showErrorMessage: true })
      setTimeout(() => {
        updateState({ showErrorMessage: false })
      }, 3000)
    }
  }

  const handleLocationClick = (location: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          window.open(https://maps.google.com/?q=${lat},${lng}, "_blank")
        },
        () => {
          // Fallback to general location search
          window.open(https://maps.google.com/?q=${location}, "_blank")
        },
      )
    } else {
      window.open(https://maps.google.com/?q=${location}, "_blank")
    }
  }

  // Splash Screen Component
  const SplashScreen = () => (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white p-8"
      style={{
        background: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #65a30d 100%)",
        backgroundColor: "#15803d", // Fallback solid color
      }}
    >
      <div className="text-center">
        <h1
          className="text-5xl font-bold mb-2"
          style={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          {getText("splash_title")}
        </h1>
        <p
          className="text-xl mb-8 opacity-90"
          style={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          {getText("splash_subtitle")}
        </p>
        <div className="mb-8">
          <div
            className="w-40 h-40 mx-auto rounded-full flex items-center justify-center text-6xl animate-pulse border-4"
            style={{
              backgroundColor: "rgba(21, 128, 61, 0.4)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            🐄
          </div>
        </div>
        <button
          onClick={() => navigateToScreen("cattle-registration")}
          className="px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
          style={{
            backgroundColor: "#ffffff",
            color: "#15803d",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0fdf4")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          {getText("enter_btn")}
        </button>
      </div>
    </div>
  )

  // Login Screen Component
  const LoginScreen = () => {
    const userTypes = ["farmer", "govt_official", "veterinarian", "insurance_agent"]

    return (
      <div className="flex flex-col items-center justify-center p-6 min-h-screen space-y-4">
        <div className="mb-4 w-full max-w-sm">
          <label className="block text-sm font-medium mb-1">{getText("select_language")}</label>
          <select
            value={appState.selectedLanguage}
            onChange={(e) => {
              console.log("[v0] Language changed to:", e.target.value)
              updateState({ selectedLanguage: e.target.value })
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">{getText("govt_portal_login")}</h2>
        <div className="mb-4 w-full max-w-sm">
          <label className="block text-sm font-medium mb-1">{getText("select_user_type")}</label>
          <select
            value={appState.userType}
            onChange={(e) => updateState({ userType: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {userTypes.map((type) => (
              <option key={type} value={type}>
                {getText(type)}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder={getText("govt_id_placeholder")}
          value={appState.email}
          onChange={(e) => updateState({ email: e.target.value })}
          className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="password"
          placeholder={getText("password_placeholder")}
          value={appState.password}
          onChange={(e) => updateState({ password: e.target.value })}
          className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          onClick={() => navigateToScreen("dashboard")}
          className="w-full max-w-sm bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          {getText("login_btn")}
        </button>
        <button
          onClick={() => navigateToScreen("registration")}
          className="w-full max-w-sm bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {getText("new_registration")}
        </button>
      </div>
    )
  }

  // Registration Screen Component
  const RegistrationScreen = () => (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">{getText("new_registration")}</h2>
      <div className="mb-4 w-full max-w-sm">
        <label className="block text-sm font-medium mb-1">{getText("select_language")}</label>
        <select
          value={appState.selectedLanguage}
          onChange={(e) => {
            console.log("[v0] Language changed to:", e.target.value)
            updateState({ selectedLanguage: e.target.value })
          }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder={getText("govt_id_placeholder")}
        value={appState.regGovtId || ""}
        onChange={(e) => updateState({ regGovtId: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder={getText("password_placeholder")}
        value={appState.regPassword || ""}
        onChange={(e) => updateState({ regPassword: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Full Name"
        value={appState.regFullName || ""}
        onChange={(e) => updateState({ regFullName: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={appState.regMobile || ""}
        onChange={(e) => updateState({ regMobile: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Email"
        value={appState.regEmail || ""}
        onChange={(e) => updateState({ regEmail: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder="Create Password"
        value={appState.regCreatePassword || ""}
        onChange={(e) => updateState({ regCreatePassword: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={appState.regConfirmPassword || ""}
        onChange={(e) => updateState({ regConfirmPassword: e.target.value })}
        className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={() => navigateToScreen("dashboard")}
        className="w-full max-w-sm bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Register
      </button>
      <button
        onClick={() => navigateToScreen("login")}
        className="w-full max-w-sm bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
      >
        Back to Login
      </button>
    </div>
  )

  // Dashboard Component
  const Dashboard = () => (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🏛</span>
          </div>
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">📊</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">{getText("welcome_farmers")}</h2>
      <p className="text-gray-600 mb-8">{getText("govt_certified")}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => navigateToScreen("marketplace")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">🛒</span>
          </div>
          <span className="font-medium text-gray-700">{getText("marketplace")}</span>
        </button>
        <button
          onClick={() => navigateToScreen("insurance")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">📄</span>
          </div>
          <span className="font-medium text-gray-700">{getText("insurance")}</span>
        </button>
        <button
          onClick={() => navigateToScreen("doctors")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">👨‍⚕</span>
          </div>
          <span className="font-medium text-gray-700">{getText("doctors")}</span>
        </button>
        <button
          onClick={() => navigateToScreen("food")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">🌾</span>
          </div>
          <span className="font-medium text-gray-700">{getText("feeds")}</span>
        </button>
        <button
          onClick={() => navigateToScreen("schemes")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">🏛</span>
          </div>
          <span className="font-medium text-gray-700">{getText("schemes")}</span>
        </button>
        <button
          onClick={() => navigateToScreen("analytics")}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">📊</span>
          </div>
          <span className="font-medium text-gray-700">{getText("analytics")}</span>
        </button>
      </div>
      <button
        onClick={() => navigateToScreen("login")}
        className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
      >
        {getText("switch_account")}
      </button>
    </div>
  )

  // Cattle Registration Screen Component
  const CattleRegistrationScreen = () => (
    <div className="p-6 min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">{getText("register_cattle")}</h2>
        <p className="text-gray-600 mb-6 text-center">{getText("enter_cow_tag")}</p>
        {appState.showSuccessMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {${getText("cow_registered")} ${appState.cowTag || "successfully"}}
          </div>
        )}
        {appState.showErrorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {getText("registration_error")}
          </div>
        )}
        <input
          type="text"
          placeholder={getText("cow_tag_placeholder")}
          value={appState.cowTag}
          onChange={(e) => updateState({ cowTag: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          autoComplete="off"
        />
        <p className="text-center text-gray-600 mb-4">{getText("scan_tag")}</p>
        <button
          onClick={startQRScanner}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4 flex items-center justify-center"
        >
          <span className="mr-2">📷</span>
          {getText("scan_camera")}
        </button>
        <button
          onClick={handleVerifyRegister}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4"
        >
          {getText("verify_register")}
        </button>
        <button
          onClick={() => navigateToScreen("login")}
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
        >
          {getText("skip_now")}
        </button>
      </div>
    </div>
  )

  // Marketplace Screen Component
  const MarketplaceScreen = () => (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-600">{getText("cattle_market")}</h2>
        <button
          onClick={() => handleLocationClick("Current Location")}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
        >
          📍 Location
        </button>
      </div>
      {appState.showLocationMap && (
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">{getText("location_info")}</h3>
            <button
              onClick={() => updateState({ showLocationMap: false })}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center relative overflow-hidden">
            {appState.currentLocation?.lat && appState.currentLocation?.lng ? (
              <iframe
                src={https://www.openstreetmap.org/export/embed.html?bbox=${appState.currentLocation.lng - 0.01},${appState.currentLocation.lat - 0.01},${appState.currentLocation.lng + 0.01},${appState.currentLocation.lat + 0.01}&layer=mapnik&marker=${appState.currentLocation.lat},${appState.currentLocation.lng}}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-2">🗺</div>
                <p className="text-gray-600">{appState.currentLocation?.name}</p>
                <p className="text-sm text-gray-500">Location access not available</p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="space-y-4">
        {[
          { breed: "Premium Sahiwal Bull", age: "5 years", price: "₹65,000", location: "Punjab", status: "In Stock" },
          { breed: "Elite Gir Cow", age: "4 years", price: "₹58,000", location: "Gujarat", status: "In Stock" },
          { breed: "Champion Jersey", age: "3 years", price: "₹48,000", location: "Himachal Pradesh", status: "Sold" },
          { breed: "Superior Holstein", age: "6 years", price: "₹72,000", location: "Haryana", status: "In Stock" },
          { breed: "Royal Red Sindhi", age: "2.5 years", price: "₹42,000", location: "Rajasthan", status: "In Stock" },
          {
            breed: "Prime Tharparkar",
            age: "4.5 years",
            price: "₹55,000",
            location: "Uttar Pradesh",
            status: "In Stock",
          },
        ].map((cow, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{cow.breed}</h3>
                <p className="text-gray-600">{Age: ${cow.age}}</p>
                <p className="text-gray-600">{Price: ${cow.price}}</p>
                <div className="mt-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      cow.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {cow.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() => handleLocationClick(cow.location)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {📍 ${cow.location}}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigateToScreen("dashboard")}
        className="w-full mt-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
      >
        {← ${getText("back_dashboard")}}
      </button>
    </div>
  )

  // Insurance Screen Component
  const InsuranceScreen = () => (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">{getText("livestock_insurance")}</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">RK</span>
          </div>
          <div>
            <h3 className="font-bold">Rajesh Kumar</h3>
            <p className="text-gray-600 text-sm">Aadhaar: •••• 7890</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">🐄</span>
          </div>
          <div>
            <p className="font-medium">Tag: GLB-2023-4876</p>
            <p className="text-gray-600 text-sm">Breed: Sahiwal</p>
            <p className="text-gray-600 text-sm">Age: 3 years</p>
          </div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="font-bold text-green-800 mb-1">Insurance Status: Active</p>
          <p className="text-green-700 text-sm">Coverage: ₹50,000</p>
          <p className="text-green-700 text-sm">Expiry: 15 Dec 2024</p>
        </div>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          placeholder={getText("enter_ear_tag")}
          value={appState.earTag}
          onChange={(e) => updateState({ earTag: e.target.value })}
          className="w-full max-w-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => {
            if (appState.earTag) {
              alert(Insurance Status: Active for tag ${appState.earTag})
            }
          }}
          className="w-full max-w-sm bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {getText("check_insurance")}
        </button>
        <button
          onClick={() => navigateToScreen("dashboard")}
          className="w-full max-w-sm bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
        >
          {getText("back_dashboard")}
        </button>
      </div>
    </div>
  )

  // Doctor Screen Component
  const DoctorScreen = () => (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">{getText("doctorsTitle")}</h2>
      <div className="space-y-4">
        {[
          {
            name: getText("doctor1Name"),
            specialty: getText("doctor1Specialty"),
            experience: getText("doctor1Experience"),
            rating: "4.8",
            fees: "₹500",
            location: getText("doctor1Location"),
          },
          {
            name: getText("doctor2Name"),
            specialty: getText("doctor2Specialty"),
            experience: getText("doctor2Experience"),
            rating: "4.7",
            fees: "₹450",
            location: getText("doctor2Location"),
          },
          {
            name: getText("doctor3Name"),
            specialty: getText("doctor3Specialty"),
            experience: getText("doctor3Experience"),
            rating: "4.5",
            fees: "₹400",
            location: getText("doctor3Location"),
          },
          {
            name: getText("doctor4Name"),
            specialty: getText("doctor4Specialty"),
            experience: getText("doctor4Experience"),
            rating: "4.9",
            fees: "₹600",
            location: getText("doctor4Location"),
          },
        ].map((doctor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-gray-600">{${getText("experience")}: ${doctor.experience} • ${getText("rating")}: ${doctor.rating}}</p>
                <p className="text-gray-600">{${getText("fees")}: ${doctor.fees}}</p>
                <button
                  onClick={() => handleLocationClick(doctor.location)}
                  className="text-blue-600 hover:text-blue-800 transition-colors mt-1"
                >
                  {📍 ${doctor.location}}
                </button>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                {getText("call")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigateToScreen("dashboard")}
        className="w-full mt-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
      >
        {← ${getText("backToDashboard")}}
      </button>
    </div>
  )

  // Schemes Screen Component
  const SchemesScreen = () => (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">{getText("govt_schemes")}</h2>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">{getText("pm_matsya")}</h3>
          <p className="text-gray-600 mb-3">{getText("matsya_desc")}</p>
          <div className="mb-3">
            <p className="font-medium">{getText("how_apply")}</p>
            <p className="text-gray-600">{getText("apply_district")}</p>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => window.open("https://pmmsy.dof.gov.in/", "_blank")}
          >
            {${getText("official_website")} →}
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">{getText("livestock_scheme")}</h3>
          <p className="text-gray-600 mb-3">{getText("livestock_desc")}</p>
          <div className="mb-3">
            <p className="font-medium">{getText("how_apply")}</p>
            <p className="text-gray-600">{getText("apply_vet")}</p>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => window.open("https://dahd.nic.in/", "_blank")}
          >
            {${getText("official_website")} →}
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">{getText("dairy_plan")}</h3>
          <p className="text-gray-600 mb-3">{getText("dairy_desc")}</p>
          <div className="mb-3">
            <p className="font-medium">{getText("how_apply")}</p>
            <p className="text-gray-600">{getText("apply_dairy")}</p>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => window.open("https://www.nddb.coop/", "_blank")}
          >
            {${getText("official_website")} →}
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">{getText("gokul_mission")}</h3>
          <p className="text-gray-600 mb-3">{getText("gokul_desc")}</p>
          <div className="mb-3">
            <p className="font-medium">{getText("how_apply")}</p>
            <p className="text-gray-600">{getText("apply_breed")}</p>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => window.open("https://rashtriyagokulmission.com/", "_blank")}
          >
            {${getText("official_website")} →}
          </button>
        </div>
      </div>
      <button
        onClick={() => navigateToScreen("dashboard")}
        className="w-full mt-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
      >
        {← ${getText("back_dashboard")}}
      </button>
    </div>
  )

  // Food Screen Component
  const FoodScreen = () => (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">{getText("cow_foods_nutrition")}</h2>
      {[
        { name: "premium_cattle_feed", category: "daily_nutrition", price: "₹850/bag (50kg)" },
        { name: "mineral_supplements", category: "health_boost", price: "₹450/kg" },
        { name: "fresh_hay_bales", category: "roughage", price: "₹120/bale" },
        { name: "organic_green_fodder", category: "fresh_feed", price: "₹80/kg" },
        { name: "calcium_phosphorus_mix", category: "bone_health", price: "₹320/kg" },
        { name: "lactation_booster_feed", category: "milk_production", price: "₹950/bag (25kg)" },
      ].map((food, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="font-bold text-lg mb-1">{getText(food.name)}</h3>
          <p className="text-orange-600 font-semibold text-sm mb-2">{getText(food.category)}</p>
          <p className="text-orange-600 font-semibold text-lg mb-2">{food.price}</p>
          <p className="text-gray-600 text-sm">High quality nutrition for dairy cows</p>
          <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
            {getText("order_now")}
          </button>
        </div>
      ))}
      <button
        onClick={() => navigateToScreen("dashboard")}
        className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
      >
        {getText("back")}
      </button>
    </div>
  )

  // Analytics Screen Component
  const AnalyticsScreen = () => {
    const analyticsData = JSON.parse(localStorage.getItem("cowdex_analytics")) || {}

    return (
      <div className="p-6 min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">{getText("analytics")}</h2>
        {Object.entries({
          "Registered Platform Users": analyticsData.totalUsers,
          "Active Livestock Farmers": analyticsData.activeFarmers,
          "Certified Government Officials": analyticsData.govtOfficials,
          "Licensed Veterinary Doctors": analyticsData.veterinarians,
          "Authorized Insurance Representatives": analyticsData.insuranceAgents,
          "Total Registered Cattle": analyticsData.totalCows,
          "Insurance Protected Livestock": analyticsData.insuredCows,
          "Completed Market Transactions": analyticsData.marketplaceTransactions,
          "Government Scheme Enrollments": analyticsData.schemeApplications,
          "Veterinary Consultation Sessions": analyticsData.doctorConsultations,
          "Daily QR Code Verifications": analyticsData.qrScansToday,
        }).map(([key, value], index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-lg mb-2">{key}</h3>
            <p className="text-gray-600 text-sm mb-3">{value}</p>
          </div>
        ))}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="font-bold text-lg mb-2">Regional Language Preferences</h3>
          <div className="space-y-2">
            {Object.entries(analyticsData.languageUsage || {}).map(([lang, count]) => (
              <p key={lang} className="text-gray-600 text-sm">{${lang}: ${count}}</p>
            ))}
          </div>
        </div>
        <button
          onClick={() => navigateToScreen("dashboard")}
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
        >
          {getText("back_dashboard")}
        </button>
      </div>
    )
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen />
      case "cattle-registration":
        return <CattleRegistrationScreen />
      case "login":
        return <LoginScreen />
      case "registration":
        return <RegistrationScreen />
      case "dashboard":
        return <Dashboard />
      case "marketplace":
        return <MarketplaceScreen />
      case "insurance":
        return <InsuranceScreen />
      case "doctors":
        return <DoctorScreen />
      case "food":
        return <FoodScreen />
      case "schemes":
        return <SchemesScreen />
      case "analytics":
        return <AnalyticsScreen />
      default:
        return <SplashScreen />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {renderScreen()}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {isScanning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-center">Scanning QR Code...</h3>
            <video ref={videoRef} className="w-full h-64 bg-black rounded-lg mb-4" autoPlay playsInline />
            <button
              onClick={stopQRScanner}
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Stop Scanner
            </button>
          </div>
        </div>
      )}
    </div>
  )
}