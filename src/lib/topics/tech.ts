import { type Topic } from "./shared";

// Phones, internet, media and everyday IT. The core "digital" topic covers
// the general state of German digitalisation (fax, Neuland, Funkloch); these
// are the specific things people actually fight with.
export const techTopics: Topic[] = [
  {
    id: "tech-handyvertrag",
    keywords: ["handyvertrag", "phone contract", "mobile contract", "mobilfunkvertrag", "cancel my phone", "handy kundigen", "handyvertrag kundigen", "vertragsverlangerung", "contract extension", "phone plan", "handytarif", "mobile plan"],
    related: ["Do I need ID for a prepaid SIM card?", "How do I switch my internet provider?", "Why is the hotline always busy?"],
    answer: (c) => `A **Handyvertrag** (mobile phone contract) is a long-term relationship with a telecommunications provider. Longer than some marriages.

- Minimum term: **24 months**. The phone is "free". The phone is not free.
- Since the TKG reform (Dec 2021), after the minimum term you may cancel **monthly**, with one month's notice. This is genuinely true, and your provider will not mention it.
- Online contracts must have a **Kündigungsbutton** ("Verträge hier kündigen"). It is located at the bottom of the page, in 8pt grey, next to the Impressum.
- Before cancelling you will receive a **Rückgewinnungsanruf** (win-back call) offering 5 GB extra. For free. For 24 months.

Please cancel in writing anyway, citing customer number, contract number and ${c.form()}. Keep the confirmation. Frame it.`,
  },
  {
    id: "tech-prepaid",
    keywords: ["prepaid", "sim card", "sim-karte", "simkarte", "sim karte", "esim", "e-sim", "new sim", "phone number"],
    related: ["How do I cancel my phone contract?", "How do I use the online ID?", "What happens if I get a scam SMS?"],
    answer: () => `Buying a **Prepaid-SIM-Karte** in Germany requires identifying yourself (§ 172 TKG, formerly § 111 TKG, since 2017).

**Accepted methods:**
- **VideoIdent:** hold your passport into the camera, tilt it slowly under a lamp until the hologram glitters, while a stranger in a headset says *"Noch ein bisschen weiter nach links"*
- **PostIdent:** go to a post office with the SIM letter. The post office closes in 11 minutes.
- **Online-Ausweis:** works perfectly, for the 4% of people who remember their PIN

Tourist passports usually work. Your registered address must match your Anmeldung. The Anmeldung must match your apartment. You see where this is going.

Activation time: 10 minutes to 3 Werktage, depending on the alignment of the servers.`,
  },
  {
    id: "tech-router",
    keywords: ["share my wlan", "share my wifi", "wlan teilen", "router", "wlan router", "wifi router", "fritzbox", "fritz box", "wifi password", "wlan passwort", "wlan-passwort", "public wifi", "free wifi", "offentliches wlan", "storerhaftung", "hotspot", "guest wifi", "gast-wlan"],
    related: ["How do I switch my internet provider?", "How do I choose a safe password?", "Why is the internet so slow?"],
    answer: () => `The **Router** is the most important device in the German household, directly after the Leitz-Ordner.

- Most homes use a **FRITZ!Box**. It is reliable, blinks reassuringly, and its password is on a sticker underneath, where it will remain for 11 years.
- Please **change the default password**, keep the firmware updated and use WPA2/WPA3. (This part is not satire.)

**Public WiFi (öffentliches WLAN):** For years Germany had almost none, due to the **Störerhaftung** — you were liable for anything your guests downloaded. It was abolished in **2017**. Cafés are still processing the news.

Today, free WiFi is available in trains (theoretically), cafés (password on a chalkboard, one letter wrong) and the Bürgeramt (for staff only).`,
  },
  {
    id: "tech-provider",
    keywords: ["internet provider", "internetanbieter", "anbieterwechsel", "switch provider", "change provider", "switch my internet", "telekom", "technician", "techniker", "internet connection", "internetanschluss", "dsl", "vodafone", "o2", "1&1"],
    related: ["Why is the hotline always busy?", "How do I set up my WiFi router?", "Is there Glasfaser in my street?"],
    answer: (c) => `Thank you for choosing a new **Internetanschluss**.

1. Order online. Receive 4 emails, 2 letters and a text message confirming your order was received.
2. A **Techniker** (technician) will visit on **${c.termin}**, *"zwischen 8 und 16 Uhr"*. Please be at home for the entire window. Do not shower.
3. The technician arrives at 15:58, discovers that the problem is in the **Hausanschlussraum** in the basement, to which only the Hausmeister has a key. The Hausmeister is on holiday.
4. A new appointment is issued. See step 2.

**Anbieterwechsel (switching provider):** legally, your connection may be down for a maximum of **one working day**. In practice, it is one working day plus a period of reflection.

Speed: "up to 250 Mbit/s". Measured: 17. You may use the Bundesnetzagentur's Breitbandmessung to prove it. Please measure 30 times on 3 different days. We are not joking.`,
  },
  {
    id: "tech-hotline",
    keywords: ["hotline", "customer service", "kundenservice", "kundendienst", "warteschleife", "on hold", "call center", "callcenter", "service number", "support line"],
    related: ["How do I switch my internet provider?", "How do I cancel my phone contract?", "Can I speak to a human?"],
    answer: (c) => `Welcome to the **Kundenservice-Hotline**. Please select from the following options:

- For questions about your bill, press 1.
- For technical issues, press 2.
- For anything else, press 3 and describe your request in one word. *"Kündigung."* — *"Ich habe Sie leider nicht verstanden."*

**Current waiting time:** approx. **${c.wait} minutes**. Due to high demand. Demand has been high since 2004.

You will hear a 12-second loop of synthetic jazz, interrupted every 40 seconds by *"Bitte legen Sie nicht auf"*. At minute 38 you will be connected to a colleague who is not responsible and forwards you, which disconnects the call.

Tip: the **chat** option is staffed by a bot that will suggest you call the hotline.`,
  },
  {
    id: "tech-gema",
    keywords: ["gema licence", "gema license", "gema lizenz", "gema", "youtube", "not available in your country", "video is blocked", "blocked video", "video not available", "gesperrt video", "music rights"],
    related: ["Can I share my Netflix password?", "Can I get in trouble for downloading movies?", "Do I have to pay the Rundfunkbeitrag?"],
    answer: () => `From 2009 to 2016, German YouTube users saw a famous message:

> *"Leider ist dieses Video in Deutschland nicht verfügbar, da es möglicherweise Musik enthält, für die die erforderlichen Musikrechte von der GEMA nicht eingeräumt wurden."*

This was, for a generation, the **most-watched video in Germany**.

The **GEMA** (Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte — the name is also protected) collects royalties for music. Agreement with YouTube was reached in 2016. Some Germans still flinch when pressing play.

Playing music at your Vereinsfest, street party or Laternenumzug may require a GEMA licence. The Laternenlied *"Laterne, Laterne"* is in the public domain. You may sing it without fear.`,
  },
  {
    id: "tech-streaming",
    keywords: ["everything dubbed", "dubbed", "dubbing", "synchronis", "netflix", "streaming", "password sharing", "share my netflix", "account sharing", "disney+", "disney plus", "spotify", "amazon prime", "mediathek", "streaming service"],
    related: ["Why are some YouTube videos blocked?", "Do I have to pay the Rundfunkbeitrag?", "What is Tatort?"],
    answer: () => `**Streaming in Germany — official overview:**

- **Account sharing** outside your household is now actively prevented by most providers. The definition of *household* matches that of the Rundfunkbeitrag: one address, one Wohnung, one set of cousins who "definitely live here".
- Everything is available **dubbed** (synchronisiert). Germany has the best dubbing industry in the world. Bruce Willis has spoken German, with the same voice, for 35 years.
- The **ARD/ZDF Mediathek** (already paid via Rundfunkbeitrag) contains excellent documentaries, which expire after 7 days for legal reasons (Depublizierung).

Watching illegal streams is a legal grey zone. Downloading is not — please see the next Abmahnung.`,
  },
  {
    id: "tech-filesharing",
    keywords: ["torrent", "filesharing", "file sharing", "illegal download", "downloading a", "downloaded a", "download movies", "downloading movies", "raubkopie", "pirate", "piracy", "abmahnung for download", "vpn"],
    related: ["What is an Abmahnung?", "Can I share my Netflix password?", "How do I set up my WiFi router?"],
    answer: (c) => `Downloading films or music via **Torrent/Filesharing** in Germany is a traditional way to receive mail.

1. You download a film from 2011 you didn't even like.
2. Four weeks later: an **Abmahnung** from a law firm, listing your IP address, the exact second of the download, and a demand for ~**€ 1.000** plus a *strafbewehrte Unterlassungserklärung* (cease-and-desist declaration).
3. You realise that torrents *upload* while downloading. You were a distributor.

**Please:** don't ignore an Abmahnung and don't sign the attached declaration unchanged — have a lawyer or a Verbraucherzentrale look at it first. (Not satire.)

For the future: legal streaming exists. It is available in Germany. Sometimes.

Your case has been registered under ${c.form()}.`,
  },
  {
    id: "tech-games",
    keywords: ["video game", "videogame", "video games", "computer game", "computerspiel", "videospiel", "gaming", "usk", "playstation", "ps5", "xbox", "nintendo", "age rating", "altersfreigabe", "gamescom"],
    related: ["Is there a Handyverbot in schools?", "Is streaming legal?", "Is there a Verein for everything?"],
    answer: () => `Video games in Germany are rated by the **USK** (Unterhaltungssoftware Selbstkontrolle): 0, 6, 12, 16 or 18, displayed as a large coloured square covering about 30% of the box art.

- For decades, German versions of games had **green blood**, robots instead of soldiers, and missing levels. Many Germans believed zombies were simply very mossy.
- Cologne hosts **gamescom**, the world's largest gaming fair, in a building with good WiFi (temporarily).
- Gaming is officially recognised as a **Kulturgut** (cultural asset). Esports is not officially a sport. A Verein for it is currently being founded, pending Satzung.

Playing online games after 22:00 is allowed, provided you do not shout *"Noob!"* during Nachtruhe.`,
  },
  {
    id: "tech-printer",
    keywords: ["print something", "where can i print", "copy shop", "copyshop", "drucken", "print", "printer", "drucker", "print a pdf", "print the form", "print it out", "print out", "ausdrucken", "scanner", "scan a", "scan the", "scan my", "einscannen", "scannen", "scanning", "sign a pdf", "sign the pdf", "unterschreiben pdf"],
    related: ["Can I submit my documents by email?", "Is the fax secure?", "Why is my email attachment too big?"],
    answer: () => `The German digital workflow (**medienbruchfreier Prozess**) is as follows:

1. Receive a PDF by email.
2. **Print** it.
3. Sign it by hand, in blue.
4. **Scan** it (at the copy shop, € 0,50 per page; your printer has been offline since 2019 and demands a firmware update that requires a printer).
5. Email it back as a 38 MB PDF, rotated 90°.
6. Receive the reply: *"Bitte senden Sie uns das Original per Post."*

**Phone scanner apps** are accepted by some Behörden, if the document is flat, well-lit and not photographed on a patterned tablecloth.

Your printer is out of **Cyan**. You are only printing black. It does not matter.`,
  },
  {
    id: "tech-attachment",
    keywords: ["too big to send", "send a large file", "send a big file", "attachment", "anhang", "email attachment", "file too big", "file too large", "attachment too big", "de-mail", "demail", "email address", "e-mail adresse", "mailadresse", "gmx", "web.de", "t-online"],
    related: ["Can I submit my documents by email?", "How do I print and sign a PDF?", "Is the fax secure?"],
    answer: () => `**E-Mail in German public administration — technical guidelines:**

- Maximum attachment size: **5 MB**. Your scanned Mietvertrag is 47 MB. Please scan in black and white, at 72 dpi, so nobody can read it. Then it is accepted.
- File formats: PDF only. Not PDF/A. Also not PDF/A-3. The *other* PDF.
- Emails without **Aktenzeichen** in the subject line enter a separate folder called *Sonstiges*, which is read quarterly.

**De-Mail** was Germany's legally binding, secure email, launched in 2012. It was used by 0,1% of the population, most of them its developers. It was quietly discontinued. It is survived by the fax.

Many Germans still use an email address from **GMX**, **web.de** or **t-online** created in 2001. It contains a birth year and the word *"maus"*.`,
  },
  {
    id: "tech-cookies",
    keywords: ["cookie", "cookies", "cookie banner", "cookie-banner", "consent banner", "accept all", "reject all", "tracking cookies"],
    related: ["What does the DSGVO mean for me?", "Is this real?", "How do I choose a safe password?"],
    answer: () => `You have encountered a **Cookie-Banner**. Congratulations. This is the true German national symbol, after the Bundesadler.

- Legal basis: DSGVO + TTDSG (now TDDDG — the new name is harder to pronounce, which is a sign of quality).
- "Alle akzeptieren" is a large blue button. "Ablehnen" is on page 3 of *Einstellungen*, behind 147 toggles, some of which switch themselves back on.
- Your consent must be **informed, voluntary and specific**. Please read the 38-page Datenschutzerklärung. We'll wait.

On this website your consent expires every 90 seconds, for your protection. Please accept again. And again.

Genuine tip: rejecting non-essential cookies is your right, and legitimate sites must make it as easy as accepting.`,
  },
  {
    id: "tech-whatsapp",
    keywords: ["messenger", "whatsapp", "group chat", "gruppenchat", "whatsapp group", "elterngruppe", "parents group", "telegram", "signal messenger", "threema", "social media", "instagram", "tiktok", "facebook", "linkedin", "xing"],
    related: ["What does the DSGVO mean for me?", "Should I say du or Sie?", "Why are Germans so direct?"],
    answer: () => `**Messenger usage in Germany — observed behaviour:**

- The **Elterngruppe** (parents' WhatsApp group): 34 members, 211 unread messages, of which 209 are *"Danke!"*, 1 is a lost water bottle, and 1 is the actually important information about the school trip, sent at 23:41.
- The **Hausgemeinschaft** group: used exclusively to announce parcels, to ask who parked in front of the garage, and to post photos of incorrectly filled Gelbe Säcke (Frau Schulze, admin).
- Voice messages of 4 minutes beginning with *"Ja, hallo, äh, kurze Frage…"*.

Officially, Behörden may not use WhatsApp for data-protection reasons. Unofficially, the Kita does, and it is the most efficient part of the German state.

Business networking takes place on **LinkedIn** or, for traditionalists, **XING** (founded 2003, still loading).`,
  },
  {
    id: "tech-smarthome",
    keywords: ["videoturklingel", "turklingel mit kamera", "smart home", "smarthome", "alexa", "smart speaker", "smart tv", "sprachassistent", "voice assistant", "video doorbell", "doorbell camera", "security camera", "uberwachungskamera", "kamera am haus", "camera on my house", "dashcam"],
    related: ["What does the DSGVO mean for me?", "How do I choose a safe password?", "Who is Frau Schulze?"],
    answer: () => `**Smart Home & Kameras — Datenschutz-Hinweise:**

- A **security camera** on your house may only film your own property. The moment it captures 30 cm of public pavement or your neighbour's hedge, you are operating video surveillance of public space. Your neighbour will notice. Your neighbour is Frau Schulze.
- **Video doorbells** must not record the street. Please angle them at your own doormat, which will then be the most surveilled doormat in the Bundesland.
- **Dashcams**: permitted only for short, event-triggered recordings; continuous recording and uploading is a data-protection issue.
- **Smart speakers** listen for their wake word. Many Germans unplug them during dinner, just in case.

Please secure all devices with a strong password and updates. (Genuinely.) Default passwords are how your fridge joins a botnet.`,
  },
  {
    id: "tech-ai-work",
    keywords: ["chatgpt at work", "chatgpt for work", "use chatgpt", "ai at work", "ai allowed at work", "ki am arbeitsplatz", "ki bei der arbeit", "ai tool", "ki-tool", "ki tool", "copilot", "use ai for", "ai for my job"],
    related: ["What does the EU AI Act mean?", "Can I work from home?", "What does the DSGVO mean for me?"],
    answer: () => `**Use of KI (AI) at the workplace — internal guideline, version 0.3 (draft, not approved):**

1. The use of AI tools requires approval by the **IT department**, the **Datenschutzbeauftragte** and the **Betriebsrat**. The Betriebsrat meets monthly. The agenda is full until spring.
2. A **KI-Arbeitsgruppe** has been founded. It has produced a 60-page position paper, written partly with ChatGPT, which is currently not approved.
3. Until then, please do not enter customer data, personal data or anything confidential into external AI tools. (Genuinely good advice.)
4. The Beamten-KI (this system) is approved because it is not AI. It is a folder.

Colleagues who already use AI secretly are kindly asked to continue doing so, but to add a typo so it looks authentic.`,
  },
  {
    id: "tech-ewaste",
    keywords: ["elektroschrott", "e-waste", "ewaste", "electronic waste", "old phone", "old laptop", "old tv", "dispose of electronics", "throw away my phone", "batterie", "batteries", "battery", "akku", "light bulb", "gluhbirne", "cables"],
    related: ["Which bin does my trash go in?", "How do I get rid of old furniture?", "Where do I return Pfand bottles?"],
    answer: () => `**Elektroschrott (e-waste) must never go into the Restmüll.** The Restmüll is watching. So is Frau Schulze.

**Correct disposal:**
- Old phones, laptops, kettles: **Wertstoffhof** (recycling centre), open Tue–Sat, closed exactly when you arrive.
- Since 2022, supermarkets with more than 800 m² that sell electronics must take back **small devices** (under 25 cm) for free. Nobody knows this. The cashier doesn't either.
- **Batteries** go into the little green box near the supermarket exit, which is always full.
- Energy-saving bulbs: special collection. Old-fashioned light bulbs: Restmüll. LED: see *Elektroschrott*. Please do not ask about the neon tube.

Every German household also keeps a **Kabelschublade** (drawer of cables) containing 40 chargers for devices that no longer exist. This is protected as a cultural heritage.`,
  },
  {
    id: "tech-school-phones",
    keywords: ["phones allowed in school", "phone allowed in school", "handyverbot", "phone ban", "phones in school", "phone in school", "smartphone in school", "handy in der schule", "handys in der schule", "screen time", "bildschirmzeit", "tablet in school", "tablets in school", "digitalpakt", "whiteboard"],
    related: ["How does the German school system work?", "Is my child allowed to play video games?", "Why is the internet so slow?"],
    answer: () => `**Smartphones in schools** are regulated by each of the 16 Bundesländer, by each school, and by each teacher, individually and inconsistently.

- Phones are banned during lessons, in breaks, sometimes on the school grounds, and are confiscated until the end of the day, the week, or until a parent appears in person.
- At the same time, the school's homework platform only works on the phone.

The **DigitalPakt Schule** provided billions for digital classrooms. Results so far:
- 1 interactive **Whiteboard** per school, used as a whiteboard
- WLAN in the staff room (password known only to the caretaker)
- Tablets, stored in a locked trolley, charging, since 2021

Recommended screen time for children: less than their parents, who are reading this on their phone.`,
  },
  {
    id: "tech-banking",
    keywords: ["a tan", "my tan", "online banking", "onlinebanking", "online-banking", "tan number", "tan code", "tan-verfahren", "pushtan", "phototan", "chiptan", "tan generator", "banking app", "phishing", "scam sms", "scam email", "fake sms", "fake email", "suspicious link", "betrugs", "scammer", "scam call"],
    related: ["How do I choose a safe password?", "How do I open a bank account?", "Can I pay by card?"],
    answer: () => `**Online-Banking in Germany** is secured by a **TAN** (Transaktionsnummer). Historically on a printed list, then via SMS, now via pushTAN, photoTAN or chipTAN with a small calculator that requires you to hold your card against a flickering barcode on the screen. It feels like a ritual. It is one.

**Important, and not satire:**
- Your bank will **never** ask for your PIN, TAN or passwords by email, SMS or phone.
- Do not click links in messages about "blocked accounts", parcels or tax refunds. Open the app or website yourself.
- If you entered data somewhere suspicious: call your bank immediately and use the **Sperr-Notruf 116 116** to block cards.
- When you approve a TAN, **read what you're approving**.

Scam messages usually contain spelling mistakes. Genuine German bank letters contain no mistakes, only 14 pages.`,
  },
  {
    id: "tech-password",
    keywords: ["bsi recommend", "the bsi", "bundesamt fur sicherheit", "password", "passwort", "passwords", "passworter", "safe password", "strong password", "password manager", "it security", "it-sicherheit", "bsi", "hacked", "gehackt", "two-factor", "2fa", "zwei-faktor", "computer virus", "antivirus", "malware"],
    related: ["What should I do about a scam SMS?", "How do I set up my WiFi router?", "What does the DSGVO mean for me?"],
    answer: () => `The **BSI** (Bundesamt für Sicherheit in der Informationstechnik) recommends good passwords. We summarise, and for once the Beamten-KI means every word:

- Use **long passwords** or passphrases — length beats complexity.
- Use a **different password for every account**; a **password manager** makes this possible.
- Enable **two-factor authentication (2FA)** wherever offered, especially email and banking.
- Keep devices and apps **updated**.
- Check whether your email was part of a leak (e.g. the HPI Identity Leak Checker).

**What German offices actually do:** passwords must be changed every 90 days, contain 12 characters, a number, a special character and a Umlaut, and are therefore written on a Post-it under the keyboard, labelled *"Passwort"*.

Please do not do that.`,
  },
  {
    id: "tech-tv",
    keywords: ["dvb-t", "dvbt", "dvb-t2", "kabelanschluss", "cable tv", "kabelfernsehen", "satellite", "satellit", "antenna", "antenne", "nebenkostenprivileg", "tv connection", "tv signal"],
    related: ["Do I have to pay the Rundfunkbeitrag?", "What is Tatort?", "Can I share my Netflix password?"],
    answer: () => `**Receiving TV in Germany — technical overview:**

- **Kabelanschluss:** until mid-2024 billed via the Nebenkosten for millions of tenants (the **Nebenkostenprivileg**). It was abolished. Millions of Germans then discovered they had been paying for cable TV without owning a TV.
- **DVB-T2 HD** (antenna): public channels free; private channels encrypted and subscription-based, so that you can pay to watch advertisements.
- **Satellit:** a dish on the balcony, which the Hausordnung forbids, the Hausverwaltung tolerates, and Frau Schulze documents.
- **Streaming:** see *Streaming*.

Regardless of reception method, the Rundfunkbeitrag remains **€ 18,36** per month. The Beitragsservice does not care how. It cares *that*.`,
  },
];
