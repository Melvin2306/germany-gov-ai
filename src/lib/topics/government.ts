import { randInt, type Topic } from "./shared";

// Government, law, immigration and the (not very) digital state.
export const governmentTopics: Topic[] = [
  {
    id: "gov-residence-permit",
    keywords: [
      "aufenthaltstitel", "aufenthaltserlaubnis", "residence permit", "ausländerbehörde", "auslaenderbehoerde",
      "immigration office", "niederlassungserlaubnis", "permanent residence", "fiktionsbescheinigung", "settlement permit",
    ],
    related: ["How do I get a Blue Card?", "How do I become a German citizen?", "Which office is responsible for me?"],
    answer: (c) => `Welcome to the **Ausländerbehörde** (since 2023 sometimes renamed *Landesamt für Einwanderung*, which changed the sign but not the queue).

**To extend your Aufenthaltstitel (residence permit):**
1. Request a Termin by email. You will receive an automatic reply confirming that emails are not answered.
2. Your permit expires. You receive a **Fiktionsbescheinigung**, a piece of paper certifying that you are legally allowed to exist while we think about it.
3. Next available Termin: **${c.termin}**.
4. Bring: passport, biometric photo, Meldebescheinigung, employment contract, last 3 payslips, rental contract, health insurance proof, ${c.form()}, and patience (not certified, but expected).

**Gebühr:** ${c.fee}. The eAT card is produced by the Bundesdruckerei and collected in person, on a separate Termin, which is also by email.`,
  },
  {
    id: "gov-blue-card",
    keywords: [
      "blue card", "a blue card", "blaue karte", "work visa", "work permit", "arbeitserlaubnis", "skilled worker",
      "fachkräfte", "fachkraefte", "job seeker visa", "chancenkarte", "opportunity card",
    ],
    related: ["How do I extend my residence permit?", "How do I get my foreign degree recognised?", "How do I do my Anmeldung after moving?"],
    answer: (c) => `Germany urgently needs **Fachkräfte** (skilled workers). We have therefore designed a process to test how urgently you need Germany.

**Blaue Karte EU (Blue Card) — requirements:**
- A recognised university degree (see *Anerkennung*, allow 3–9 months, the office that recognises degrees does not recognise emails)
- A job offer above the salary threshold, which changes every 1 January
- Health insurance, a rental contract, and an Anmeldung (see the usual circle)

**Processing time:** officially 3 weeks under the *beschleunigtes Fachkräfteverfahren* (accelerated procedure, € 411). Actually ${c.wait} weeks. The acceleration refers to the speed at which the fee is collected.

Tip: your future employer is also a Fachkraft shortage. Nobody there will answer the phone either.`,
  },
  {
    id: "gov-anerkennung",
    keywords: ["anerkennung", "recognition", "recognised", "recognized", "recognise my", "recognize my", "foreign degree", "foreign qualification", "foreign diploma", "degree from abroad", "qualification", "zeugnisanerkennung", "zab"],
    related: ["How do I get a Blue Card?", "How do I get a certified translation?", "Which office is responsible for me?"],
    answer: (c) => `Your foreign qualification must be **anerkannt** (recognised) before it counts as a qualification. Until then, you are a very well-educated nobody.

**Anerkennungsverfahren:**
1. Determine the responsible body. For doctors: the Land. For teachers: a different part of the Land. For engineers: the Ingenieurkammer. For hairdressers: the Handwerkskammer. For everything else: the ZAB in Bonn.
2. Submit certified copies of your diplomas, transcripts and module descriptions, translated by a *vereidigter Übersetzer*.
3. Pay ${c.fee} per document, plus translation, plus certification.
4. Receive a **Bescheid** stating that your degree is "teilweise gleichwertig" (partially equivalent) and that you must complete an *Anpassungslehrgang* (adaptation course), which starts on ${c.termin}.`,
  },
  {
    id: "gov-eid",
    keywords: ["ausweisapp", "the eid", "online-ausweis", "online ausweis", "onlineausweis", "eid", "online id", "pin-brief", "pin letter", "nfc", "online-funktion", "bundid", "bund id"],
    related: ["How do I get a new passport?", "Is German administration digital?", "Can I submit my documents by email?"],
    answer: () => `Your Personalausweis has an **Online-Ausweisfunktion** (eID). It is a triumph of German engineering and has been used by almost 3 people.

**To use it:**
1. Find your **PIN-Brief** (PIN letter), sent in 2019. It is in the same drawer as your Steuer-ID. It is not.
2. Order a new PIN via the *PIN-Rücksetzbrief*. It arrives by post in 2–4 weeks.
3. Install the **AusweisApp** and hold your ID card against your phone's NFC chip. No, lower. No, to the left. Do not move. Do not breathe.
4. Log into the **BundID** portal, which offers 14 services, 13 of which end with a PDF to print.

**Error message you will see:** *"Der Ausweis konnte nicht gelesen werden."* This is not a bug. It is a feature of data protection.`,
  },
  {
    id: "gov-voting",
    keywords: ["vote", "vote online", "voting", "wahl", "wählen", "waehlen", "briefwahl", "election", "wahlbenachrichtigung", "ballot", "polling station", "wahllokal", "postal vote"],
    related: ["How does the German government work?", "Can I work at a polling station?", "How do I do my Anmeldung after moving?"],
    answer: () => `Voting in Germany is a carefully preserved analogue ritual.

**How it works:**
- About 5 weeks before an election you receive a **Wahlbenachrichtigung** (polling card) at your registered address. Not registered? See *Anmeldung*.
- On Sunday (the one day nothing else is allowed) you go to your **Wahllokal**, usually a primary school gym that smells of 1994.
- You receive a paper ballot the size of a small tablecloth, and mark it with a pencil on a string.
- **Briefwahl** (postal vote): apply online, receive paper, return paper. Digitalisation complete.

**Counting:** by hand, by volunteers, in public, the same evening. Honestly, this part works extremely well. Please do not tell anyone; it ruins the brand.`,
  },
  {
    id: "gov-federalism",
    keywords: [
      "bundestag", "bundesrat", "föderal", "foederal", "federalism", "federal state", "bundesland", "bundesländer",
      "parliament", "chancellor", "kanzler", "ministerium", "ministry", "how does the government", "government work", "16 states", "who is in charge",
    ],
    related: ["How do I vote in Germany?", "Which office is responsible for me?", "What is a Brückentag?"],
    answer: () => `Germany is a **federal republic** consisting of the Bund and **16 Bundesländer**, each with its own government, parliament, school system, police law, public holidays and opinion on whether the other 15 are doing it wrong.

**Who is responsible for what:**
- **Bund** (federal level): makes the law.
- **Land**: implements the law, differently.
- **Kommune** (municipality): executes the law, with the staff it doesn't have.
- **EU**: made the law in the first place, but everyone blames the Bund.

The **Bundestag** debates. The **Bundesrat** (the Länder) then objects. The **Vermittlungsausschuss** mediates. The **Bundesverfassungsgericht** in Karlsruhe finally decides, usually years later, usually that everyone must start again.

This is called *Föderalismus*, and it is why your school holidays and your neighbour's are different.`,
  },
  {
    id: "gov-dsgvo",
    keywords: ["dsgvo", "gdpr", "is gdpr", "because of gdpr", "datenschutz", "data protection", "privacy", "personal data", "my data", "auskunftsersuchen", "data request", "delete my data", "datenschutzbeauftragt"],
    related: ["Can I delete my data?", "Is German administration digital?", "Can I submit my documents by email?"],
    answer: () => `The **DSGVO** (Datenschutz-Grundverordnung, GDPR) protects your personal data with the determination of a medieval fortress.

**Consequences in daily life:**
- Doorbell nameplates were briefly considered a data breach. Some landlords removed them. The postman now guesses.
- Kindergarten photos: every parent must sign a consent form. The photo shows 22 blurred faces and one child whose parents signed.
- Your doctor cannot email you your results, but can fax them to a number you gave over the phone.
- Every website asks about cookies (see our own cookie banner, which we are very proud of).

**Your rights:** Auskunft (Art. 15), Löschung (Art. 17), Widerspruch (Art. 21). Submit in writing. The answer will contain your data, printed, sent by unencrypted post.`,
  },
  {
    id: "gov-police",
    keywords: ["police", "polizei", "anzeige", "report a crime", "stolen", "gestohlen", "theft", "diebstahl", "burglar", "broke into", "einbruch", "emergency number", "notruf", "110", "robbed"],
    related: ["I lost my wallet, what do I do?", "How do I get a Führungszeugnis?", "Can I ride my bike instead?"],
    answer: (c) => `**Emergency:** call **110** (police) or **112** (fire/ambulance). This is the one German public service that answers immediately. Please do not tell the other ones.

**To report a crime (Anzeige erstatten):**
- In person at any *Polizeidienststelle*, or via the *Onlinewache* of your Bundesland (16 different portals, one per Land)
- Your bike was stolen? Bring the frame number, purchase receipt, a photo, and emotional acceptance. Case number: **${randInt(100000, 999999)}/${new Date().getFullYear()}**. Chance of recovery: statistically similar to a free Termin.
- You will receive a **Vorgangsnummer** for your insurance, which is the true purpose of the exercise.

Note: the police will also, with great seriousness, come round if your neighbour reports your party at 22:01. See *Ruhezeiten*. Formality: ${c.form()}.`,
  },
  {
    id: "gov-lost-property",
    keywords: ["fundbüro", "fundbuero", "lost property", "lost my", "lost wallet", "lost a", "found a", "found something", "verloren", "gefunden", "finderlohn", "i found"],
    related: ["How do I report a crime?", "How do I get a new passport?", "How do I open a bank account?"],
    answer: () => `Lost something? The **Fundbüro** (lost property office) is here for you, Mon & Thu 08:00–12:00.

**If you found something:**
- Items over € 10 must be handed in (§ 965 BGB). You are entitled to **Finderlohn**: 5% of the value up to € 500, 3% above. Please calculate precisely.
- If nobody claims it within **6 months**, it is yours. Wallets are returned to the owner. Umbrellas are auctioned. Nobody knows what happens to the single gloves.

**If you lost something:**
1. Contact the Fundbüro of the city, the Fundbüro of the Deutsche Bahn (separate), the Fundbüro of the BVG/local transit (separate), and the airport (separate).
2. Describe the item precisely. *"A black phone"* will be matched against 400 black phones.

Lost your ID? Also report it to the Bürgeramt and, for travel documents, the police.`,
  },
  {
    id: "gov-fuehrungszeugnis",
    keywords: ["führungszeugnis", "fuehrungszeugnis", "criminal record", "background check", "certificate of good conduct", "police clearance", "clean record"],
    related: ["How do I get an appointment at the Bürgeramt?", "How do I become a Beamter?", "How do I report a crime?"],
    answer: (c) => `A **Führungszeugnis** (certificate of conduct) certifies that you have not done anything. Germany requires it for jobs, volunteering, coaching the U9 football team and, in some towns, reading aloud at the library.

**How to apply:**
- In person at the Bürgeramt (Termin: **${c.termin}**), or online via eID (see *Online-Ausweis*, see *PIN-Brief*, see drawer)
- For work with children: the *erweiterte Führungszeugnis*, which requires a written request from the employer confirming that they are requesting it

**Gebühr:** € 13. **Processing time:** 1–2 weeks, delivered by post from the Bundesamt für Justiz in Bonn.

It shows your entries in the Bundeszentralregister. If it is empty, congratulations: officially, nothing is known about you. Unofficially, Frau Schulze has a folder.`,
  },
  {
    id: "gov-ordnungsamt",
    keywords: ["ordnungsamt", "hundekot", "dog poop", "dog poo", "bußgeld", "bussgeld", "fine for", "littering", "cigarette butt", "knöllchen", "knoellchen", "verwarnung", "got a fine"],
    related: ["Where can I park?", "What are the Ruhezeiten?", "How do I file a Widerspruch?"],
    answer: () => `The **Ordnungsamt** keeps public order in order.

**Selected Bußgelder (fines), approximate and regional:**
- Not picking up **Hundekot** (dog poop): € 20–150 (Berlin: up to € 100, Munich: the look is worse than the fine)
- Dropping a cigarette butt: € 55–100
- Feeding pigeons: up to € 5.000 in some cities. Yes, pigeons.
- Barbecuing in an unauthorised park zone: € 50+
- Washing your car on the street: up to € 1.000 (water protection)

**Payment:** by bank transfer within 14 days, quoting the 18-digit Aktenzeichen exactly.

The Ordnungsamt works at astonishing speed. Your fine will arrive before your Termin, your passport, and your tax refund combined.`,
  },
  {
    id: "gov-demonstration",
    keywords: ["demonstration", "demo", "protest", "versammlung", "rally", "kundgebung", "register a protest", "strike sign"],
    related: ["How does the German government work?", "Do I need a building permit for a shed?", "How do I report a crime?"],
    answer: () => `Freedom of assembly is guaranteed by **Art. 8 Grundgesetz**. It must merely be *registered*.

**Versammlungsanmeldung (registering a protest):**
1. Notify the **Versammlungsbehörde** (usually the police) at least **48 hours** before announcing it.
2. State: topic, date, start and end time, route, expected number of participants, number of stewards (*Ordner*, 1 per 50 participants), and whether you intend to use a megaphone.
3. Attend a *Kooperationsgespräch* to agree on the route, the stewards and the megaphone.

Spontaneous demonstrations are allowed without registration, provided they are genuinely spontaneous, which the Behörde will examine afterwards.

German protests are exceptionally orderly. Participants arrive on time, stay on the agreed route, and separate their placards into paper and plastic afterwards.`,
  },
  {
    id: "gov-building",
    keywords: ["baugenehmigung", "building permit", "planning permission", "shed", "gartenhaus", "gartenhütte", "carport", "bauamt", "build a", "bauen", "extension to my house", "denkmalschutz", "listed building"],
    related: ["Do I need to register my solar panel?", "Which office is responsible for me?", "What are the Ruhezeiten?"],
    answer: (c) => `Before you build anything in Germany, please ask whether you are allowed to. Then ask again, in writing.

**Do I need a Baugenehmigung (building permit)?**
- Garden shed: depends on the Bundesland, the volume in m³ (e.g. up to 30 m³ in Bavaria, 10 m³ elsewhere), the distance to the boundary (3 m), and the mood of the Bauamt
- Fence: allowed up to a height defined in your *Bebauungsplan*, which is kept in a basement in the Rathaus
- Carport: yes. Also no. See Landesbauordnung (16 versions).

Is the building **denkmalgeschützt** (a listed building)? Then you may not change the windows, the door, the colour of the door, or your facial expression while looking at the door.

Submission: ${c.form()} with site plan (1:500), floor plans, sections, elevations and structural calculations, in **5 copies**. Processing time: ${c.wait} weeks.`,
  },
  {
    id: "gov-energy",
    keywords: [
      "balkonkraftwerk", "solar", "photovoltaik", "photovoltaic", "marktstammdaten", "wärmepumpe", "waermepumpe", "heat pump",
      "heizungsgesetz", "gebäudeenergie", "gebaudeenergie", "heating law", "oil heating", "gas heating", "energieausweis", "energy certificate",
    ],
    related: ["Do I need a building permit for a shed?", "Why do Germans open all the windows?", "Which office is responsible for me?"],
    answer: () => `Thank you for contributing to the **Energiewende**. It must be registered.

**Balkonkraftwerk (plug-in solar for your balcony):**
- Must be registered in the **Marktstammdatenregister** of the Bundesnetzagentur, a website of rare beauty, within one month
- Max. 800 W. Your landlord may no longer forbid it, but may still sigh.
- Your electricity meter might run backwards. This is a crime against the meter operator, who will replace it within ${randInt(6, 30)} months.

**Heating (Gebäudeenergiegesetz):**
- New heating systems should run on 65% renewable energy, with exceptions, transition periods, municipal heat plans (due by 2026/2028), and funding (apply *before* ordering, not after).
- A **Wärmepumpe** (heat pump) installer is available in autumn 2029.

Please also obtain an **Energieausweis** for your building, then frame it.`,
  },
  {
    id: "gov-steuer-id",
    keywords: ["steuer-id", "steuer id", "steueridentifikationsnummer", "identifikationsnummer", "tax id", "tax number", "steuernummer", "tax identification", "lost my tax"],
    related: ["How do I do my tax return?", "How do I do my Anmeldung after moving?", "How do I use the online ID?"],
    answer: () => `Your **Steuer-ID** (steuerliche Identifikationsnummer) is 11 digits long, lasts your entire life, and is sent to you exactly **once**, by letter, about 2–4 weeks after your first Anmeldung.

**Do not confuse with:**
- **Steuernummer** — issued by your Finanzamt, changes when you move
- **USt-IdNr.** — for businesses
- **Sozialversicherungsnummer** — different number, different letter, same drawer
- **Rentenversicherungsnummer** — the same as the Sozialversicherungsnummer, which surprises everyone

**Lost it?** Request it again via the Bundeszentralamt für Steuern (online form). It will be sent — by letter — to your registered address. For security, it cannot be told to you over the phone, by email, or in person, even though you are the only person on Earth it concerns.`,
  },
  {
    id: "gov-zustaendigkeit",
    keywords: ["zuständig", "zustandig", "zuständigkeit", "which office", "which authority", "responsible for me", "who is responsible", "ping pong", "ping-pong", "sent me to", "another office", "wrong office", "nicht zuständig", "sent me back"],
    related: ["Can I speak to a human?", "How do I file a Widerspruch?", "How does the German government work?"],
    answer: () => `You have encountered **Behörden-Ping-Pong**, Germany's most popular indoor sport.

**Rules of the game:**
1. Office A informs you that it is *nicht zuständig* (not responsible) and sends you to Office B.
2. Office B requires a confirmation from Office A that Office A is not responsible.
3. Office A does not issue confirmations of non-responsibility, as it is not responsible for that either.
4. Return to step 1.

**How to win:** request a written *Zuständigkeitsbescheid*. If no authority considers itself responsible, the responsible authority is the one that was asked first (in theory). In practice, the winner is whoever retires first.

Current record: 7 rounds, set in 2014 by a man trying to register a boat in Brandenburg. He is still registered as "in Bearbeitung".`,
  },
  {
    id: "gov-e-akte",
    keywords: [
      "e-akte", "ozg", "onlinezugangsgesetz", "digitalministerium", "digital ministry", "e-government", "digital government",
      "paperless", "papierlos", "digitalisierung der verwaltung", "administration digital", "why is everything on paper", "digitale verwaltung",
    ],
    related: ["How do I use the online ID?", "Is the fax secure?", "Can I submit my documents by email?"],
    answer: () => `The digitalisation of German administration is progressing at a steady, dignified pace.

**Milestones:**
- **2017:** Onlinezugangsgesetz (OZG): 575 services must be online by 2022.
- **2022:** 33 services are online in the whole country. The deadline is declared "ambitious".
- **2024:** OZG 2.0. The new deadline is to have a deadline.
- **Today:** the **E-Akte** (electronic file) has been introduced. Incoming paper is scanned, the scan is printed for the Sachbearbeiter, and the printout is filed in the Leitz-Ordner next to the E-Akte, for safety.

**Why still paper?** Paper cannot be hacked, does not need updates, and has a legally binding signature. Also, Herr Müller retires in 2031. We will revisit the topic then.`,
  },
  {
    id: "gov-ai-act",
    keywords: ["ai act", "ki-verordnung", "ki verordnung", "ai regulation", "regulate ai", "regulating ai", "ai regul", "ki-gesetz", "künstliche intelligenz", "kunstliche intelligenz", "artificial intelligence", "is ai legal", "ai allowed"],
    related: ["Who are you?", "What does the DSGVO mean for me?", "Is German administration digital?"],
    answer: () => `Artificial intelligence is regulated by the **EU AI Act**, which Germany implements with its signature enthusiasm for implementing things.

**Risk categories:**
- **Unacceptable risk:** banned. Includes social scoring (except SCHUFA, which is a different thing, for reasons).
- **High risk:** requires conformity assessment, documentation, human oversight, and a *Beauftragte*.
- **Limited risk:** must disclose that it is an AI. *Hallo. I am a folder of predefined answers.*
- **Minimal risk:** spam filters, video games, and me.

**Supervisory authority in Germany:** under discussion. Candidates include the Bundesnetzagentur, the data protection authorities of all 16 Länder, and a working group that is currently establishing a working group.

The Beamten-KI has been classified as *minimal risk, maximal Bürokratie*.`,
  },
  {
    id: "gov-beamter",
    keywords: ["beamter", "beamtin", "civil servant", "become a beamter", "verbeamt", "beamtenstatus", "public sector", "öffentlicher dienst", "offentlicher dienst", "unkündbar", "unkundbar", "work for the government"],
    related: ["How do I get a Führungszeugnis?", "When will I get my pension?", "Who are you?"],
    answer: () => `Becoming a **Beamter** (civil servant) is the German dream: a job for life, a *Pension* instead of a *Rente*, and the right to say "Das ist nicht meine Aufgabe" with legal backing.

**Requirements:**
- German or EU citizenship
- Suitable education and a *Laufbahn* (career track): einfacher, mittlerer, gehobener or höherer Dienst
- A clean Führungszeugnis
- An **amtsärztliche Untersuchung** (medical exam) confirming you will probably not be ill for the next 40 years
- An oath to the Grundgesetz

**Probation:** 3 years. **After that:** *Beamter auf Lebenszeit*, unkündbar (cannot be fired). You are paid according to a *Besoldungsgruppe*, e.g. A9, like me.

Beamte may not strike. We therefore protest by processing at exactly the legally required speed.`,
  },
  {
    id: "gov-court",
    keywords: [
      "lawsuit", "verklagen", "klage", "gericht", "court", "lawyer", "anwalt", "rechtsanwalt", "rechtsschutz", "legal insurance",
      "legal protection", "abmahnung", "my website", "cease and desist", "impressum", "schöffe", "schoeffe", "jury duty", "lay judge", "jury", "take legal action", "judge",
    ],
    related: ["How do I file a Widerspruch?", "What does the DSGVO mean for me?", "Which office is responsible for me?"],
    answer: (c) => `Germany is a *Rechtsstaat* (constitutional state). Everything is regulated, and everything can be contested.

**Useful facts:**
- **Rechtsschutzversicherung** (legal expenses insurance): about half of German households have one. Please take out yours *before* the dispute; there is a 3-month waiting period, and it does not cover the neighbour dispute you already have.
- **Abmahnung:** a formal letter from a lawyer demanding you stop something (e.g. a missing **Impressum** on your website, a photo you didn't license). It comes with an invoice. Every German website must have an Impressum. Yes, also your cat blog.
- **Verwaltungsgericht:** to sue an authority. Next free hearing: **${c.termin}**.
- **Schöffe** (lay judge): you may be selected to sit on a criminal court for 5 years. You cannot really decline. It is, finally, a Termin you get without asking.`,
  },
];
