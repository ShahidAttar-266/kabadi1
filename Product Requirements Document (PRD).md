# Product Requirements Document (PRD)
## Kabadiwala Connect
### Digital Bridge Between Informal E-Waste Collectors and Authorized Recyclers

**Version:** 1.0  
**Date:** September 2026  
**Organization:** Ministry of Mines (MoM) Challenge  
**Product Type:** Web Platform / Responsive Web App  
**Primary Users:** Kabadiwala / Informal E-Waste Collector, Authorized Recycler

---

# 1. Product Overview

**Kabadiwala Connect** is a simple, multilingual, low-literacy-friendly digital platform that connects informal scrap collectors with authorized e-waste recyclers.

The platform helps kabadiwalas:

- Identify and categorize e-waste
- Estimate the value of collected materials
- Discover current and historical prices
- Find nearby authorized recyclers
- Compare recycler offers
- Create digital material lots
- Complete traceable handovers
- Track payments and earnings
- Follow safe e-waste handling practices

The recycler interface allows authorized recyclers to:

- Maintain their facility profile
- Display authorization information
- Specify accepted materials
- Publish buying rates
- Receive and manage collection lots
- Confirm handovers
- Record payments
- Maintain traceability records

The platform is **not a consumer marketplace** in the MVP.

---

# 2. Problem Statement

Informal collectors already provide extensive last-mile collection of e-waste in India, but many operate outside the formal recycling ecosystem.

They often lack:

- Reliable information about fair market prices
- Easy access to authorized recyclers
- Information about which recyclers accept specific materials
- Transparent price comparisons
- Digital transaction records
- Payment/earnings history
- Knowledge of safe handling practices

This can encourage unsafe processing and reduce the amount of valuable material entering formal recycling channels.

Kabadiwala Connect addresses this gap by making the formal recycling route **more convenient and economically attractive**.

---

# 3. Product Goals

## Primary Goals

1. Connect informal collectors with authorized recyclers.
2. Improve price transparency.
3. Make authorized recyclers easy to discover.
4. Create traceable digital material handovers.
5. Maintain a simple earnings ledger.
6. Encourage safer e-waste handling.
7. Support Marathi and Hindi.
8. Work effectively in low-connectivity environments.
9. Build structured datasets from real transactions.
10. Demonstrate practical economic value for collectors.

## Success Criteria

The MVP should allow a collector to complete this journey:

**Add Scrap → Estimate Value → Find Recycler → Compare Offers → Handover → Receive Payment → View Transaction Record**

---

# 4. Users

## 4.1 Kabadiwala / Informal Collector

### Characteristics

- May have limited digital literacy
- May use an entry-level Android phone
- May have unreliable internet
- Often prefers local language
- May prefer cash payments
- Needs fast transactions
- Primarily interested in price, convenience and payment

### Primary Needs

- "How much is this worth?"
- "Where can I sell it?"
- "Who will give me the best price?"
- "Is this recycler authorized?"
- "Have I been paid?"
- "Can I prove that I handed over the material?"

---

# 5.2 Authorized Recycler

### Characteristics

- Operates an authorized recycling facility
- Buys specific categories of e-waste
- Has geographic service areas
- Needs a way to receive collection leads
- Needs transaction and material records

### Primary Needs

- Find available material
- Receive collection lots
- Set buying rates
- Specify accepted materials
- Manage pickup requests
- Confirm handovers
- Record payments
- Maintain traceability

---

# 6. MVP Scope

## Included

### Kabadiwala

- Login
- Profile
- Dashboard
- Add material lot
- Photo upload
- Material category selection
- Approximate weight
- Estimated valuation
- Price board
- Historical price trend
- Recycler search
- Recycler comparison
- Recycler verification status
- Pickup/handover request
- Digital handover receipt
- Payment status
- Earnings ledger
- Safety guidance
- Marathi/Hindi language switching
- Offline data capture and synchronization

### Recycler

- Login
- Facility profile
- Authorization information
- Verification status
- Material categories
- Buying rates
- Service area
- Pickup availability
- Incoming lots
- Lot details
- Accept/reject request
- Handover confirmation
- Payment confirmation
- Transaction history

### Platform

- Material database
- Price database
- Recycler database
- Transaction database
- Traceability database
- Collector database
- Basic AI/ML integration
- Data validation
- Analytics

---

# 7. Out of Scope for MVP

The following should NOT be part of the initial version:

- Consumer marketplace
- Consumer-to-kabadiwala marketplace
- Direct consumer buying/selling
- Full banking/wallet system
- Lending
- Insurance
- Complex accounting
- Social networking
- Nationwide logistics management
- Advanced AI requiring large proprietary datasets

These can be considered later.

---

# 8. Information Architecture

## Public Website

- Home
- About
- How It Works
- For Collectors
- For Recyclers
- Safety
- FAQ
- Contact
- Login

## Kabadiwala Dashboard

- Home
- Add Scrap
- My Lots
- Price Board
- Find Recycler
- Requests
- Earnings
- Transactions
- Safety
- Profile
- Language

## Recycler Dashboard

- Dashboard
- Incoming Lots
- My Offers
- Materials & Rates
- Pickup Requests
- Transactions
- Facility Profile
- Authorization
- Settings

---

# 9. Kabadiwala User Flow

## Flow 1 — Add Scrap

**Dashboard**

↓

Click **"Add Scrap"**

↓

Select material:

- CRT
- LCD
- PCB
- Cable
- Battery
- Motor
- Magnet-bearing assembly
- Mixed plastic
- Other

↓

Take/upload photograph

↓

Enter approximate weight

↓

Select condition

↓

System calculates estimated value

↓

Create Lot ID

Example:

**KC-LOT-000124**

---

# 10. Price Estimation

The platform should calculate an approximate value using:

- Material category
- Sub-category
- Weight
- Location
- Current buying prices
- Historical price data
- Recycler offers

Example:

**PCB**

Weight: **10 kg**

Estimated market range:

**₹X – ₹Y**

Potential recycler offers:

- Recycler A: ₹X/kg
- Recycler B: ₹Y/kg
- Recycler C: ₹Z/kg

The system should clearly state:

> **Estimated value — actual price may vary after physical inspection.**

---

# 11. Price Board

The collector should have a very simple price board.

### Example

| Material | Current Range | Trend |
|---|---:|---|
| PCB | ₹X–₹Y/kg | ↑ |
| Copper Cable | ₹X–₹Y/kg | → |
| LCD | ₹X–₹Y/kg | ↓ |
| Battery | ₹X–₹Y/kg | ↑ |

The interface should support:

- Marathi
- Hindi
- Audio/spoken prices
- Location filtering
- Date/time
- Historical trends

---

# 12. Recycler Discovery

After creating a lot, the collector clicks:

**"Find Recycler"**

The system ranks recyclers based on:

1. Authorization status
2. Material compatibility
3. Distance
4. Offered rate
5. Pickup availability
6. Service area

### Recycler Card

**ABC E-Waste Recycler**

✅ Authorization Verified

📍 15 km away

♻️ Accepts: PCB, LCD, Cable

💰 PCB: ₹X/kg

🚚 Pickup Available

**View Details**

**Request Handover**

---

# 13. Recycler Verification

A recycler must NOT be able to simply claim that it is authorized.

Recycler records should contain:

- Facility name
- Facility address
- Authorization/registration number
- Issuing authority
- Authorization status
- Validity information where available
- Materials accepted
- Contact details
- Service area
- Last verification date

The system should distinguish between:

### 🟢 Verified

Authorization information has been verified.

### 🟡 Verification Pending

Information submitted but not yet verified.

### 🔴 Not Verified / Expired

The recycler should not be presented as an authorized recycler.

For the production system, authorization data should be sourced from appropriate government/State Pollution Control Board/CPCB records or verified through the applicable official process.

---

# 14. Handover Flow

Collector selects recycler.

↓

Request submitted.

↓

Recycler accepts.

↓

Collector and recycler agree on:

- Material
- Weight
- Price
- Pickup/handover location
- Date/time

↓

Material is handed over.

↓

Recycler confirms:

- Actual weight
- Material
- Final price
- Handover

↓

System generates:

**Digital Handover Record**

Containing:

- Lot ID
- Photograph
- Approximate/or actual weight
- Timestamp
- GPS/location
- Recycler ID
- Handover reference number
- Final price
- Payment status
- Recycler confirmation

---

# 15. Earnings Ledger

The collector dashboard should show:

### Total Earnings

**₹XX,XXX**

### Pending

**₹X,XXX**

### Completed Transactions

**XX**

Example:

| Date | Material | Weight | Recycler | Amount | Status |
|---|---|---:|---|---:|---|
| 04 Sep | PCB | 10 kg | Recycler A | ₹X | Paid |
| 03 Sep | Cable | 25 kg | Recycler B | ₹X | Pending |

Payment methods:

- Cash
- UPI
- Bank/digital payment

Digital payment should be optional.

---

# 16. Recycler Dashboard

## Dashboard KPIs

- New Lots
- Pending Requests
- Accepted Lots
- Completed Transactions
- Total Material Received
- Total Purchase Value

---

# 17. Recycler Lot Management

Recycler sees:

**New Lot**

PCB  
10 kg  
Estimated Value: ₹X  
Distance: 12 km  
Collector location: Local area

Actions:

**Accept**

**Reject**

**Request Details**

---

# 18. Recycler Rate Management

Recycler can define:

### Material

PCB

### Sub-category

Computer PCB

### Buying Rate

₹X/kg

### Pickup

Available

### Service Area

50 km

### Minimum Quantity

10 kg

Rates should include:

- Effective date
- Last updated date
- Material category
- Unit

---

# 19. Safety Module

Safety information should use:

- Large illustrations
- Icons
- Very short text
- Audio
- Marathi/Hindi

Examples:

### 🔥 Cable Burning

**Do not burn cables.**

### 🧪 Acid Processing

**Do not use acid to recover metals.**

### 🔋 Batteries

**Do not break, puncture or burn batteries.**

### 📺 CRT

**Handle CRTs carefully and avoid breaking them.**

---

# 20. AI/ML Features

AI should be treated as an enhancement, not a requirement for the basic workflow.

## Material Classification

Input:

**Photograph**

Output:

> Likely material: PCB  
> Confidence: 87%

The user must be able to correct the result.

---

## Price Estimation

Possible inputs:

- Material
- Weight
- Location
- Current prices
- Historical prices
- Recycler offers
- Condition

Output:

> Estimated value: ₹X–₹Y

---

## Recycler Recommendation

Recommendation score can combine:

**Authorization + Material Match + Price + Distance + Pickup**

Example:

> **Best Match — Recycler A**
>
> 94% match
>
> ✅ Verified  
> 💰 High rate  
> 📍 Nearby  
> 🚚 Pickup available

---

## Abnormal Transaction Detection

The system can flag unusually high/low transactions.

Example:

> ⚠️ Price appears significantly outside the historical range.

This should be a warning, not an automatic rejection.

---

# 21. Dataset Design

## Material Dataset

Fields:

- Material ID
- Category
- Sub-category
- Description
- Image reference
- Approximate weight
- Condition
- Source type
- Estimated value
- Created date
- Updated date

---

## Price Dataset

Fields:

- Price ID
- Material category
- Sub-category
- Location
- Date/time
- Buying price
- Selling/quoted price
- Unit
- Recycler ID
- Historical price

---

## Recycler Dataset

Fields:

- Recycler ID
- Facility name
- Location
- Materials accepted
- Authorization number
- Authorization status
- Verification date
- Contact information
- Offered rate
- Pickup availability
- Service area

---

## Transaction Dataset

Fields:

- Transaction ID
- Lot ID
- Collector ID
- Material
- Weight
- Quoted price
- Final price
- Recycler ID
- Collection location
- Handover location
- Date/time
- Payment status
- Transaction status

---

## Traceability Dataset

Fields:

- Lot ID
- Photograph references
- Weight
- Timestamp
- GPS/location
- Handover reference
- Recycler confirmation
- Subsequent transaction status

---

## Collector Dataset

Only collect necessary information:

- Collector ID
- Preferred language
- General operating area
- Transaction history
- Earnings history

Avoid unnecessary personal information.

---

# 22. Offline-First Requirement

The collector application should continue to support core operations when offline.

### Offline

Collector can:

- Create lot
- Take photograph
- Enter weight
- Save material information
- View previously synchronized prices
- View previously synchronized recycler information

### Online

The application:

- Synchronizes saved lots
- Uploads photographs
- Updates prices
- Updates recycler information
- Sends requests
- Synchronizes transactions

The UI should clearly show:

**🟢 Online**

or

**🟠 Offline — Data will sync automatically**

---

# 23. Low-Literacy UX

The UI should prioritize:

- Icons
- Images
- Large buttons
- Voice instructions
- Minimal text
- Local language
- Simple navigation

Example home screen:

**📷 ADD SCRAP**

**💰 CHECK PRICE**

**🏭 FIND RECYCLER**

**💵 MY EARNINGS**

**🧾 MY TRANSACTIONS**

**🔊 SAFETY**

The collector should be able to perform the main task with minimal reading.

---

# 24. Language

MVP languages:

**Marathi + Hindi**

Architecture should allow future addition of:

- English
- Gujarati
- Kannada
- Telugu
- Tamil
- Bengali

---

# 25. Notifications

Notifications should include:

- Recycler accepted lot
- Recycler rejected lot
- Pickup confirmed
- Handover reminder
- Payment received
- Payment pending
- Price update
- Verification status

For low-literacy users, important notifications should support audio/local-language presentation where practical.

---

# 26. Trust & Transparency

Every important transaction should have a unique reference.

Example:

**KC-2026-09-000124**

A handover record can be opened using this reference.

The record shows:

- Material
- Weight
- Collector
- Recycler
- Date/time
- Location
- Final price
- Payment status
- Confirmation

---

# 27. Admin / Backend

Although the user-facing product has only two primary users, the system should have an internal administrative layer for the project team.

Admin capabilities:

- Manage recycler records
- Verify authorization
- Manage materials
- Manage prices
- Review transactions
- Review flagged transactions
- Manage languages/content
- Manage safety content
- View platform analytics
- Manage dataset quality

---

# 28. Technical Requirements

## Frontend

Responsive web application / PWA optimized for Android.

Recommended:

- React / Next.js
- Progressive Web App
- Responsive UI
- Local storage / IndexedDB for offline data

## Backend

Recommended:

- Node.js / Python
- REST API
- PostgreSQL
- Object storage for photographs

## Authentication

Use simple:

- Mobile number + OTP

Avoid complicated passwords for collectors.

---

# 29. Performance Requirements

The platform should:

- Work on entry-level Android devices
- Minimize image sizes
- Compress photographs before upload
- Load core screens quickly
- Minimize data usage
- Function with unstable connections
- Avoid heavy animations

---

# 30. Privacy & Security

The platform should follow data-minimization principles.

Collect only information necessary for:

- Identification
- Transactions
- Traceability
- Payments
- Service delivery

Security requirements:

- Secure authentication
- Encrypted network communication
- Role-based access
- Protected recycler authorization records
- Transaction audit trail
- Controlled access to collector data
- Anonymization for datasets used for analytics/ML where appropriate

---

# 31. Key Metrics

## Collector Metrics

- Registered collectors
- Active collectors
- Lots created
- Average lot value
- Transactions completed
- Average collector earnings
- Repeat usage

## Recycler Metrics

- Registered recyclers
- Verified recyclers
- Active recyclers
- Lots accepted
- Pickup requests
- Completed handovers

## Platform Metrics

- Total e-waste recorded
- Total transaction value
- Percentage of lots handed to verified recyclers
- Average price improvement
- Average recycler distance
- Payment completion rate
- Offline synchronization success rate

---

# 32. Unit Economics

The platform should demonstrate whether formal recycling can be economically attractive.

Example comparison:

### Existing route

Collector:

**Collection → Local scrap buyer → Lower/uncertain price**

### Kabadiwala Connect

Collector:

**Collection → Price discovery → Verified recycler → Better offer → Traceable handover**

The project should compare:

- Existing selling price
- Platform selling price
- Transportation cost
- Pickup cost
- Collector net earnings
- Recycler acquisition cost
- Platform operating cost

The goal is to demonstrate that the formal route can provide a **financial incentive** to collectors.

---

# 33. MVP Demo Scenario

For the live demonstration:

### Step 1

Kabadiwala logs in.

### Step 2

Clicks **Add Scrap**.

### Step 3

Uploads/takes PCB photograph.

### Step 4

Enters:

**Weight: 10 kg**

### Step 5

System identifies:

**PCB**

### Step 6

Price board displays:

**₹X–₹Y/kg**

### Step 7

System shows nearby verified recyclers.

### Step 8

Kabadiwala selects Recycler A.

### Step 9

Recycler receives the request.

### Step 10

Recycler accepts.

### Step 11

Handover is completed.

### Step 12

Recycler confirms actual weight and price.

### Step 13

Payment is marked:

**PAID — CASH**

### Step 14

System generates:

**KC-2026-09-000124**

### Step 15

Kabadiwala opens **Earnings** and sees the completed transaction.

This demonstrates the entire value proposition in a few minutes.

---

# 34. Future Features

After MVP validation:

- Consumer pickup requests
- WhatsApp integration
- Voice-first interaction
- More Indian languages
- Advanced material recognition
- Dynamic price prediction
- Route optimization
- Digital payment integration
- Recycler bidding
- EPR ecosystem integration
- Government data/API integration where available
- Collector reputation/trust score
- Material demand forecasting

---

# 35. Product Principle

The most important product principle is:

> **Do not make the kabadiwala adapt to a complicated compliance system. Make the formal recycling process easier, faster and more profitable than the informal alternative.**

The application should feel like a **simple price-and-selling tool**, while the backend quietly creates the compliance, transaction and traceability records required by the formal recycling ecosystem.

---

# 36. Final MVP Definition

The MVP is successful if a real or simulated kabadiwala can:

**1. Add e-waste**  
→ **2. Get an estimated price**  
→ **3. See transparent market rates**  
→ **4. Find a verified authorized recycler**  
→ **5. Compare offers**  
→ **6. Request/complete handover**  
→ **7. Receive payment**  
→ **8. Get a digital traceability record**  
→ **9. See the transaction in their earnings history**

And a recycler can:

**Register → Verify authorization → Set rates → Receive lots → Accept → Confirm handover → Confirm payment → Maintain transaction history.**

This is the core **Kabadiwala Connect** product.