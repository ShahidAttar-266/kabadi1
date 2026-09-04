export const MATERIALS = [
  {
    id: 'pcb',
    name: 'Printed Circuit Board (PCB)',
    nameMr: 'प्रिंटेड सर्किट बोर्ड (PCB)',
    nameHi: 'प्रिंटेड सर्किट बोर्ड (PCB)',
    icon: '💻',
    image: '/assets/ewaste_pcb.jpg',
    basePriceMin: 380,
    basePriceMax: 550,
    unit: 'kg',
    description: 'Computer motherboards, server boards, high-grade circuit boards.',
    safetyWarning: 'Handle with gloves. Avoid breaking board edges.'
  },
  {
    id: 'cable',
    name: 'Copper Cables & Wires',
    nameMr: 'तांब्याची वायर / केबल',
    nameHi: 'तांबे की केबल / तार',
    icon: '🔌',
    image: '/assets/ewaste_cables.jpg',
    basePriceMin: 420,
    basePriceMax: 620,
    unit: 'kg',
    description: 'Insulated copper wiring, power cords, electronic interconnect cables.',
    safetyWarning: 'DO NOT BURN CABLES to strip insulation! Toxic PVC fumes.'
  },
  {
    id: 'battery',
    name: 'Lithium-Ion & Lead Batteries',
    nameMr: 'लिथियम आयन व बॅटरी',
    nameHi: 'लिथियम-आयन और बैटरी',
    icon: '🔋',
    basePriceMin: 120,
    basePriceMax: 180,
    unit: 'kg',
    description: 'Laptop batteries, phone batteries, ups lead-acid units.',
    safetyWarning: 'DO NOT PUNCTURE OR BREAK BATTERIES. Fire hazard.'
  },
  {
    id: 'lcd',
    name: 'LCD / LED Display Monitors',
    nameMr: 'LCD / LED स्क्रीन मॉनिटर',
    nameHi: 'LCD / LED स्क्रीन मॉनिटर',
    icon: '🖥️',
    basePriceMin: 150,
    basePriceMax: 280,
    unit: 'piece',
    description: 'Flat screen monitors, TV panels, intact display modules.',
    safetyWarning: 'Do not smash display glass. Mercury backlights require cautious handling.'
  },
  {
    id: 'crt',
    name: 'CRT Cathode Ray Monitors',
    nameMr: 'जुने CRT टीव्ही / मॉनिटर',
    nameHi: 'पुराने CRT टीवी / मॉनिटर',
    icon: '📺',
    basePriceMin: 80,
    basePriceMax: 140,
    unit: 'piece',
    description: 'Heavy old box televisions and glass tube computer monitors.',
    safetyWarning: 'High implosion risk and leaded glass. Handle intact only.'
  },
  {
    id: 'motor',
    name: 'Electric Motors & Transformers',
    nameMr: 'इलेक्ट्रिक मोटार व ट्रान्सफॉर्मर',
    nameHi: 'इलेक्ट्रिक मोटर और ट्रांसफार्मर',
    icon: '⚙️',
    basePriceMin: 190,
    basePriceMax: 260,
    unit: 'kg',
    description: 'Copper winding electric motors, washing machine motors, power transformers.',
    safetyWarning: 'Heavy items. Use proper lifting techniques.'
  },
  {
    id: 'magnet',
    name: 'Magnet-Bearing Assemblies',
    nameMr: 'मॅग्नेट व स्पीकर पार्ट्स',
    nameHi: 'चुंबक और स्पीकर पार्ट्स',
    icon: '🧲',
    basePriceMin: 60,
    basePriceMax: 110,
    unit: 'kg',
    description: 'Hard drive magnets, audio speakers, magnetic actuator assemblies.',
    safetyWarning: 'Keep strong magnets away from credit cards and pacemakers.'
  },
  {
    id: 'plastics',
    name: 'E-Waste Mixed Plastics',
    nameMr: 'ई-कचरा प्लास्टिक शील्ड',
    nameHi: 'ई-कचरा प्लास्टिक बॉडी',
    icon: '♻️',
    basePriceMin: 25,
    basePriceMax: 45,
    unit: 'kg',
    description: 'ABS / Polycarbonate computer casings, printer shells, keyboard frames.',
    safetyWarning: 'Store in dry place away from heat sources.'
  }
];

export const INITIAL_RECYCLERS = [
  {
    id: 'rec-001',
    name: 'EcoRecycle Solutions India Pvt Ltd',
    facilityType: 'Government Authorized E-Waste Dismantler & Recycler',
    cpcbLicense: 'CPCB/EW/MH/2024/09812',
    status: 'Verified', // Verified, Pending, Expired
    statusLabel: '🟢 CPCB Authorized',
    verifiedDate: '2026-01-15',
    address: 'Plot B-42, MIDC Industrial Area, Chinchwad, Pune, Maharashtra',
    distanceKm: 4.8,
    phone: '+91 98220 11234',
    rating: 4.9,
    acceptedMaterials: ['pcb', 'cable', 'battery', 'lcd', 'motor'],
    rates: {
      pcb: 420,
      cable: 580,
      battery: 160,
      lcd: 240,
      motor: 220
    },
    pickupAvailable: true,
    minPickupWeightKg: 10,
    serviceRadiusKm: 35
  },
  {
    id: 'rec-002',
    name: 'GreenIndia E-Waste Processors',
    facilityType: 'Authorized State PCB Dismantling Hub',
    cpcbLicense: 'MPCB/EW-REG/8849/2025',
    status: 'Verified',
    statusLabel: '🟢 MPCB Verified',
    verifiedDate: '2025-11-20',
    address: 'Warehouse 12, Logistics Park, Thane West, Maharashtra',
    distanceKm: 11.2,
    phone: '+91 98211 44556',
    rating: 4.7,
    acceptedMaterials: ['pcb', 'cable', 'crt', 'plastics', 'magnet'],
    rates: {
      pcb: 405,
      cable: 600,
      crt: 120,
      plastics: 35,
      magnet: 85
    },
    pickupAvailable: true,
    minPickupWeightKg: 25,
    serviceRadiusKm: 50
  },
  {
    id: 'rec-003',
    name: 'Apex Clean-Tech Recyclers',
    facilityType: 'Registered Hazardous & E-Waste Recycler',
    cpcbLicense: 'CPCB/E-WASTE/2026/0014',
    status: 'Verified',
    statusLabel: '🟢 CPCB Authorized',
    verifiedDate: '2026-02-01',
    address: 'Gala 7, Navi Mumbai Recycling Zone, Rabale',
    distanceKm: 18.5,
    phone: '+91 97690 99887',
    rating: 4.8,
    acceptedMaterials: ['pcb', 'battery', 'cable', 'motor'],
    rates: {
      pcb: 435,
      battery: 175,
      cable: 590,
      motor: 230
    },
    pickupAvailable: false,
    minPickupWeightKg: 0,
    serviceRadiusKm: 20
  },
  {
    id: 'rec-004',
    name: 'Metro Scrap Traders & Processors',
    facilityType: 'Scrap Trader (Verification Submitted)',
    cpcbLicense: 'PENDING_DOCS_2026',
    status: 'Pending',
    statusLabel: '🟡 Verification Pending',
    verifiedDate: 'Under Review',
    address: 'Shop 14, Dharavi Depot, Mumbai',
    distanceKm: 2.1,
    phone: '+91 91234 56789',
    rating: 4.1,
    acceptedMaterials: ['pcb', 'cable', 'crt'],
    rates: {
      pcb: 390,
      cable: 550,
      crt: 100
    },
    pickupAvailable: true,
    minPickupWeightKg: 5,
    serviceRadiusKm: 10
  }
];

export const INITIAL_PRICE_BOARD = [
  { materialId: 'pcb', materialName: 'PCB (Motherboards)', rateMin: 380, rateMax: 550, unit: 'kg', trend: 'up', changePercent: '+6.2%' },
  { materialId: 'cable', materialName: 'Copper Cables', rateMin: 420, rateMax: 620, unit: 'kg', trend: 'flat', changePercent: '0.0%' },
  { materialId: 'battery', materialName: 'Li-Ion Batteries', rateMin: 120, rateMax: 180, unit: 'kg', trend: 'up', changePercent: '+4.1%' },
  { materialId: 'lcd', materialName: 'LCD Screens', rateMin: 150, rateMax: 280, unit: 'piece', trend: 'down', changePercent: '-2.5%' },
  { materialId: 'motor', materialName: 'Electric Motors', rateMin: 190, rateMax: 260, unit: 'kg', trend: 'up', changePercent: '+1.8%' },
  { materialId: 'crt', materialName: 'CRT Monitors', rateMin: 80, rateMax: 140, unit: 'piece', trend: 'down', changePercent: '-5.0%' },
  { materialId: 'plastics', materialName: 'Mixed E-Plastics', rateMin: 25, rateMax: 45, unit: 'kg', trend: 'flat', changePercent: '0.0%' }
];

export const INITIAL_LOTS = [
  {
    id: 'KC-LOT-000123',
    materialId: 'cable',
    materialName: 'Copper Cables & Wires',
    weight: 25,
    unit: 'kg',
    condition: 'Intact Insulation',
    photoUrl: '/assets/ewaste_cables.jpg',
    estimatedValuationMin: 10500,
    estimatedValuationMax: 15500,
    status: 'Accepted',
    createdAt: '2026-09-03 11:30 AM',
    recyclerId: 'rec-001',
    recyclerName: 'EcoRecycle Solutions India Pvt Ltd'
  }
];

export const INITIAL_TRANSACTIONS = [
  {
    id: 'KC-2026-09-000120',
    lotId: 'KC-LOT-000120',
    materialName: 'Printed Circuit Board (PCB)',
    weightKg: 14,
    finalPricePerKg: 420,
    totalAmount: 5880,
    collectorName: 'Ramesh Kabadiwala',
    recyclerName: 'EcoRecycle Solutions India Pvt Ltd',
    paymentMethod: 'Cash',
    paymentStatus: 'Paid',
    date: '2026-09-02',
    handoverRef: 'KC-2026-09-000120',
    location: 'Pune MIDC Facility',
    gpsCoordinates: '18.6298° N, 73.7997° E'
  },
  {
    id: 'KC-2026-09-000123',
    lotId: 'KC-LOT-000123',
    materialName: 'Copper Cables & Wires',
    weightKg: 25,
    finalPricePerKg: 580,
    totalAmount: 14500,
    collectorName: 'Ramesh Kabadiwala',
    recyclerName: 'EcoRecycle Solutions India Pvt Ltd',
    paymentMethod: 'UPI',
    paymentStatus: 'Pending',
    date: '2026-09-03',
    handoverRef: 'KC-2026-09-000123',
    location: 'Collector Pickup - Chinchwad',
    gpsCoordinates: '18.6492° N, 73.8055° E'
  }
];

export const SAFETY_GUIDELINES = [
  {
    id: 'safe-01',
    icon: '🔥',
    title: 'Do NOT Burn Cables',
    titleMr: 'केबल कधीही जाळू नका!',
    titleHi: 'केबल कभी न जलाएं!',
    description: 'Burning cables releases carcinogenic dioxin gas. Authorized recyclers buy intact cables at full market price.',
    descriptionMr: 'केबल जाळल्याने विषारी धूर होतो. अधिकृत रिसायकलर्स न जाळलेल्या केबलचा चांगला भाव देतात.',
    descriptionHi: 'केबल जलाने से जहरीला धुआं निकलता है। अधिकृत रिसायकलर बिना जली केबल का पूरा दाम देते हैं।',
    audioTextMr: 'केबल जाळू नका! न जाळलेल्या केबलला अधिकृत रिसायकलर्सकडून जास्त किंमत मिळते.',
    audioTextHi: 'केबल न जलाएं! बिना जली केबल की अधिकृत रिसायकलर से ज्यादा कीमत मिलती है।'
  },
  {
    id: 'safe-02',
    icon: '🧪',
    title: 'No Acid Chemical Extraction',
    titleMr: 'अ‍ॅसिडने धातू वेगळे करू नका',
    titleHi: 'एसिड से धातु न निकालें',
    description: 'Using nitric or sulfuric acid causes irreversible lung damage and soil toxicity. Sell whole boards directly.',
    descriptionMr: 'अ‍ॅसिड वापरल्याने फुप्फुसाचे गंभीर आजार होतात. पूर्ण सर्किट बोर्ड थेट रिसायकलरला विका.',
    descriptionHi: 'एसिड के इस्तेमाल से फेफड़ों को भारी नुकसान होता है। पूरा सर्किट बोर्ड सीधे बेचें।',
    audioTextMr: 'अ‍ॅसिड वापरून सोने किंवा तांबे काढू नका! ते तुमच्या आरोग्यासाठी अत्यंत घातक आहे.',
    audioTextHi: 'एसिड से सोना या तांबा न निकालें! यह आपकी सेहत के लिए बहुत खतरनाक है।'
  },
  {
    id: 'safe-03',
    icon: '🔋',
    title: 'Do Not Break Batteries',
    titleMr: 'बॅटरी फोडू नका किंवा जाळू नका',
    titleHi: 'बैटरी को न तोड़ें और न जलाएं',
    description: 'Puncturing lithium-ion or lead batteries causes spontaneous thermal explosion and fires.',
    descriptionMr: 'लिथियम बॅटरी फोडल्यास लगेच आग लागते.',
    descriptionHi: 'लिथियम बैटरी पंचर होने पर तुरंत आग पकड़ सकती है।',
    audioTextMr: 'बॅटरी कधीही ठोकून फोडू नका. त्यात आग लागण्याचा मोठा धोका असतो.',
    audioTextHi: 'बैटरी को कभी न तोड़ें। इसमें आग लगने का गंभीर खतरा होता है।'
  },
  {
    id: 'safe-04',
    icon: '📺',
    title: 'CRT Glass Tube Protection',
    titleMr: 'CRT टीव्ही काच जपून हाताळा',
    titleHi: 'CRT टीवी कांच सावधानी से संभालें',
    description: 'Cathode Ray Tubes contain high pressure vacuum and lead. Smashing releases lead dust into your body.',
    descriptionMr: 'जुने टीव्ही फोडल्यास शिशाची विषारी धूळ पसरते.',
    descriptionHi: 'पुराने टीवी फोड़ने से सीसे की जहरीली धूल फैलती है।',
    audioTextMr: 'पुराने टीव्हीची काच फोडू नका. अखंड टीव्ही रिसायकलरला द्या.',
    audioTextHi: 'पुराने टीवी का कांच न तोड़ें। पूरा टीवी रिसायकलर को सौंपें।'
  }
];

export const TRANSLATIONS = {
  en: {
    appTitle: 'Kabadiwala Connect',
    tagline: 'Digital Bridge Between Informal Collectors & Authorized Recyclers',
    collectorView: 'Collector Mode',
    recyclerView: 'Recycler Mode',
    adminView: 'Admin Compliance',
    startDemo: '🚀 Guided Demo Walkthrough',
    exitDemo: 'Exit Demo',
    online: 'Online',
    offline: 'Offline (Local Sync Active)',
    audioMode: 'Audio Assistance',
    
    // Dashboard Buttons
    addScrap: 'ADD SCRAP',
    addScrapSub: 'Take photo & estimate price',
    checkPrice: 'CHECK PRICES',
    checkPriceSub: 'Live scrap market rates',
    findRecycler: 'FIND RECYCLER',
    findRecyclerSub: 'Authorized local recyclers',
    myEarnings: 'MY EARNINGS',
    myEarningsSub: 'Cash & UPI payout ledger',
    myTransactions: 'TRANSACTIONS',
    myTransactionsSub: 'Digital handover receipts',
    safetyGuide: 'SAFETY GUIDE',
    safetyGuideSub: 'Safe handling rules',
    
    // Add Scrap Modal
    addScrapTitle: 'Add E-Waste Scrap Lot',
    uploadPhoto: 'Upload Scrap Photo / Take Picture',
    aiClassified: 'AI Classification Result',
    confidence: 'Confidence',
    selectCategory: 'Select Material Category',
    approxWeight: 'Approximate Weight',
    condition: 'Material Condition',
    estimatedRange: 'Estimated Market Value',
    createLotBtn: 'Create Scrap Lot ID',
    
    // Price Board
    priceBoardTitle: 'Daily E-Waste Scrap Rates',
    listenRates: '🔊 Listen to Today\'s Prices',
    unit: 'Unit',
    trend: 'Trend',
    
    // Recyclers
    verifiedBadge: '🟢 CPCB Verified',
    pendingBadge: '🟡 Verification Pending',
    requestHandover: 'Request Handover',
    distance: 'away',
    ratesOffered: 'Rates Offered',
    
    // Earnings & Transactions
    totalEarnings: 'Total Net Earnings',
    pendingPayout: 'Pending Payout',
    completedJobs: 'Completed Handovers',
    receiptRef: 'Handover Reference',
    downloadReceipt: 'Download Receipt',
    
    // Recycler Dashboard
    incomingLots: 'Incoming Scrap Lots',
    acceptLot: 'Accept Scrap Lot',
    rejectLot: 'Reject Lot',
    confirmWeightPrice: 'Confirm Weight & Final Payment',
    rateManagement: 'Buying Rate Management'
  },
  mr: {
    appTitle: 'कबाडीवाला कनेक्ट',
    tagline: 'अनधिकृत संकलक आणि अधिकृत रिसायकलर्सचा डिजिटल सेतू',
    collectorView: 'कबाडीवाला मोड',
    recyclerView: 'रिसायकलर मोड',
    adminView: 'अ‍ॅडमिन तपासणी',
    startDemo: '🚀 प्रात्यक्षिक (Demo)',
    exitDemo: 'डेमो बंद करा',
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन (ऑफलाइन सेव्ह सुरु)',
    audioMode: 'आवाज मार्गदर्शन',
    
    addScrap: 'स्क्रॅप जोडा',
    addScrapSub: 'फोटो काढा व भाव मिळवा',
    checkPrice: 'आजचे दर तपासा',
    checkPriceSub: 'ई-कचऱ्याचे बाजारभाव',
    findRecycler: 'रिसायकलर शोधा',
    findRecyclerSub: 'अधिकृत रिसायकलर सेंटर',
    myEarnings: 'माझी कमाई',
    myEarningsSub: 'जमा झालेली रक्कम',
    myTransactions: 'व्यवहार पावत्या',
    myTransactionsSub: 'डिजिटल पावती रेकॉर्ड',
    safetyGuide: 'सुरक्षा नियम',
    safetyGuideSub: 'सुरक्षित काम करण्याच्या पद्धती',
    
    addScrapTitle: 'नवीन ई-कचरा स्क्रॅप नोंदवा',
    uploadPhoto: 'स्क्रॅपचा फोटो काढा / अपलोड करा',
    aiClassified: 'AI द्वारे ओळखलेला प्रकार',
    confidence: 'खात्री',
    selectCategory: 'कचऱ्याचा प्रकार निवडा',
    approxWeight: 'अंदाजे वजन',
    condition: 'कचऱ्याची स्थिती',
    estimatedRange: 'अंदाजे मिळणारी किंमत',
    createLotBtn: 'लॉट आयडी (Lot ID) तयार करा',
    
    priceBoardTitle: 'आजचे ई-कचरा बाजारभाव',
    listenRates: '🔊 आजचे दर ऐका',
    unit: 'एकक',
    trend: 'बदल',
    
    verifiedBadge: '🟢 CPCB अधिकृत प्रमाणिक',
    pendingBadge: '🟡 तपासणी बाकी',
    requestHandover: 'विक्रीची विनंती पाठवा',
    distance: 'अंतर',
    ratesOffered: 'देण्यात येणारा भाव',
    
    totalEarnings: 'एकूण झालेली कमाई',
    pendingPayout: 'येणे बाकी रक्कम',
    completedJobs: 'पूर्ण झालेले व्यवहार',
    receiptRef: 'पावती क्रमांक',
    downloadReceipt: 'पावती डाउनलोड करा',
    
    incomingLots: 'नवीन आलेले स्क्रॅप लॉट',
    acceptLot: 'स्वीकारा',
    rejectLot: 'नकार द्या',
    confirmWeightPrice: 'वजन व अंतिम किंमत निश्चित करा',
    rateManagement: 'खरेदीचे दर सेट करा'
  },
  hi: {
    appTitle: 'कबाड़ीवाला कनेक्ट',
    tagline: 'अनौपचारिक संग्राहक और अधिकृत रिसायकलर्स का डिजिटल पुल',
    collectorView: 'कबाड़ीवाला मोड',
    recyclerView: 'रिसायकलर मोड',
    adminView: 'एडमिन जांच',
    startDemo: '🚀 गाइडेड डेमो शुरू करें',
    exitDemo: 'डेमो बंद करें',
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन (लोकल सेव चालू)',
    audioMode: 'आवाज सहायता',
    
    addScrap: 'कचरा जोड़ें',
    addScrapSub: 'फोटो लें और कीमत जानें',
    checkPrice: 'आज के भाव',
    checkPriceSub: 'ई-कचरे के लाइव रेट',
    findRecycler: 'रिसायकलर खोजें',
    findRecyclerSub: 'सरकारी मान्यता प्राप्त रिसायकलर',
    myEarnings: 'मेरी कमाई',
    myEarningsSub: 'कुल भुगतान का हिसाब',
    myTransactions: 'लेन-देन रसीद',
    myTransactionsSub: 'डिजिटल रसीद रिकॉर्ड',
    safetyGuide: 'सुरक्षा नियम',
    safetyGuideSub: 'सुरक्षित काम करने के तरीके',
    
    addScrapTitle: 'नया ई-कचरा स्क्रैप दर्ज करें',
    uploadPhoto: 'स्क्रैप का फोटो लें / अपलोड करें',
    aiClassified: 'AI द्वारा पहचाना गया प्रकार',
    confidence: 'सटीकता',
    selectCategory: 'कचरे की श्रेणी चुनें',
    approxWeight: 'अनुमानित वजन',
    condition: 'सामग्री की स्थिति',
    estimatedRange: 'अनुमानित बाजार मूल्य',
    createLotBtn: 'लॉट आईडी (Lot ID) बनाएं',
    
    priceBoardTitle: 'आज के ई-कचरा बाजार भाव',
    listenRates: '🔊 आज के भाव सुनें',
    unit: 'इकाई',
    trend: 'बदलाव',
    
    verifiedBadge: '🟢 CPCB प्रमाणित',
    pendingBadge: '🟡 सत्यापन लंबित',
    requestHandover: 'बेचने का अनुरोध भेजें',
    distance: 'दूरी',
    ratesOffered: 'दी जाने वाली दर',
    
    totalEarnings: 'कुल कुल कमाई',
    pendingPayout: 'बकाया राशि',
    completedJobs: 'पूरे हुए लेन-देन',
    receiptRef: 'रसीद संख्या',
    downloadReceipt: 'रसीद डाउनलोड करें',
    
    incomingLots: 'नए आए स्क्रैप लॉट',
    acceptLot: 'स्वीकार करें',
    rejectLot: 'अस्वीकार करें',
    confirmWeightPrice: 'अंतिम वजन और भुगतान तय करें',
    rateManagement: 'खरीद दर प्रबंधन'
  }
};
