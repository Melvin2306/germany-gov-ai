import { formNumber, type Topic } from "./shared";

// The original set of topics. Keywords match at word starts; see findTopic.
export const coreTopics: Topic[] = [
  {
    id: "business",
    keywords: ["sell online", "sell handmade", "nebengewerbe", "business", "gewerbe", "company", "startup", "gmbh", "firma", "self-employed", "freelanc", "selbstständig"],
    related: ["How do I found a GmbH?", "How do I do my tax return?", "Do I need a Rundfunkbeitrag for my business?"],
    answer: (c) => `Congratulations on your decision to create economic value! Unfortunately, that is suspicious.

**To register a business (Gewerbeanmeldung), please proceed as follows:**

1. Obtain a Termin at the Gewerbeamt. Next available: **${c.termin}**.
2. Bring ${c.form()} in triplicate, filled in with a **blue** ballpoint pen (black is for Beamte only).
3. Register with the Finanzamt via ELSTER. For ELSTER you need an activation code, which is sent by post. To your registered business address. Which you don't have yet.
4. Join the IHK. Membership is mandatory. You did not choose the IHK; the IHK chose you.
5. Notify the Berufsgenossenschaft, the Handelsregister, the Rundfunkbeitrag service and your Nachbarn.

**Gebühr:** ${c.fee} — cash only, exact change, no coins older than 2002.

*Tip:* If you intend to found a GmbH, please allocate € 25.000 Stammkapital and 11 months for the notary to find a free slot.`,
  },
  {
    id: "anmeldung",
    keywords: ["the anmeldung", "do the anmeldung", "do my anmeldung", "ummelden", "ummeldung", "anmeld", "move", "moving", "address", "wohnsitz", "residence", "meldebescheinigung"],
    related: ["How do I rent an apartment?", "How do I open a bank account?", "How do I get an appointment at the Bürgeramt?"],
    answer: (c) => `Thank you for your interest in existing somewhere officially.

**Anmeldung (residence registration) is mandatory within 14 days of moving.** Appointments are available in **${c.wait} weeks**. Missing the 14-day deadline is an Ordnungswidrigkeit (fine up to € 1.000).

You will need:
- Your passport
- The **Wohnungsgeberbestätigung** signed by your landlord
- ${c.form()}

**Important:** To rent an apartment, you need a SCHUFA record. To get a SCHUFA record, you need a German bank account. To open a bank account, you need an Anmeldung. To get an Anmeldung, you need an apartment.

We are aware of this. It is working as intended.

Next available Termin: **${c.termin}** at Bürgeramt Berlin-Marzahn (you live in Munich — that is irrelevant).`,
  },
  {
    id: "passport",
    keywords: ["passport", "reisepass", "pass", "id card", "personalausweis", "ausweis", "visa", "visum"],
    related: ["Can I smile in my passport photo?", "How do I become a German citizen?", "How do I get an appointment at the Bürgeramt?"],
    answer: (c) => `Your application for an identity document has been received and placed in the **Eingangskorb**.

**Required:**
- One biometric photo (35×45 mm, neutral expression — smiling is not permitted and, frankly, not expected)
- Your old passport, or a Verlustanzeige from the police if lost
- Your Geburtsurkunde (original, not older than 6 months, although you were born earlier)
- ${c.form()}

**Processing time:** 4–6 weeks. In summer 12 weeks. In December: we do not discuss December.

**Gebühr:** ${c.fee}. Express passport available for an additional fee, delivered in 3–4 weeks instead of 4–6 weeks, which is technically faster.

Pickup is in person only, between 08:00 and 11:30, Tuesdays and Thursdays, not on Brückentage.`,
  },
  {
    id: "car",
    keywords: ["auto ummelden", "kfz ummelden", "auto anmelden", "car registration", "car", "auto", "drive", "driving", "führerschein", "licence", "license", "zulassung", "autobahn", "tempo"],
    related: ["Is there a speed limit on the Autobahn?", "Where can I park?", "How do I get a German driving licence?"],
    answer: (c) => `Thank you for your question regarding the German automobile, our nation's second religion.

**To register a vehicle (KFZ-Zulassung):**
1. Book an online appointment. The online appointment system is available Mo–Fr, 07:00–15:30.
2. Bring: eVB number, TÜV report, Zulassungsbescheinigung Teil I & II, SEPA mandate for KFZ-Steuer, ${c.form()}.
3. Buy license plates at one of the 14 plate shops directly opposite the Zulassungsstelle. They are all owned by the same cousin.

**Regarding the Autobahn:** Yes, some sections have no speed limit. This is the only area of German life without a rule, and we are extremely proud of it. Please do not ask about it in public.

**Gebühr:** ${c.fee} plus plates plus Feinstaubplakette (green).`,
  },
  {
    id: "tax",
    keywords: ["file taxes", "file my taxes", "steuererkl", "tax", "steuer", "finanzamt", "elster", "income", "refund", "kirchensteuer", "church tax", "home office", "deduct"],
    related: ["What is the Kirchensteuer?", "Can I deduct my home office?", "How do I register my new business?"],
    answer: (c) => `The Finanzamt thanks you for your voluntary contact. It has also opened a file on you.

**Steuererklärung — overview:**
- Deadline: 31 July. Or later if you have a Steuerberater. Or earlier if the Finanzamt feels like it.
- Submit via **ELSTER**, a portal built in 1999 with the explicit goal of lasting forever.
- Your **Steuer-ID** was sent by letter. Please find it. It is in a drawer.
- Deductible: Arbeitszimmer (only if it is a *real* room, with a door, used *exclusively* for work, measured, photographed, and not containing a *Sofa*).

German tax literature makes up an estimated **70%** of the world's tax literature. Please read the relevant sections before asking again.

${c.form()} (Anlage N, Anlage KAP, Anlage Kind, Anlage Unterhalt, Anlage "Anlage") must be enclosed.`,
  },
  {
    id: "train",
    keywords: ["train was", "zug war", "ice verspat", "zug verspat", "train", "bahn", "db ", "deutsche bahn", "ice ", "delay", "verspätung", "zug", "travel", "late"],
    related: ["How do I get compensation for my delay?", "Is the Deutschlandticket worth it?", "Can I ride my bike instead?"],
    answer: () => `Deutsche Bahn is technically not the government. Technically.

**Current status:** Your train is delayed by **${45 + Math.floor(Math.random() * 180)} minutes** due to *"Verzögerungen im Betriebsablauf"*, *"Reparatur an der Strecke"*, *"eine Störung an einem anderen Zug"*, or *"Personen im Gleis"*. Pick one — the result is the same.

**Also today:** Umgekehrte Wagenreihung (reversed car order). The dining car is closed. The toilets in cars 21–28 are closed. The Wi-Fi is available, in theory.

**Fahrgastrechte (compensation):**
- 60 min delay: 25% refund
- 120 min delay: 50% refund
- Train cancelled: you may now contemplate your life choices on Gleis 7 until 23:48.

Submit via ${formNumber()} (Fahrgastrechte-Formular, available at the counter, which is closed).`,
  },
  {
    id: "sunday",
    keywords: ["sunday", "sonntag", "shop", "shopping", "supermarket", "open", "store", "einkaufen", "late night"],
    related: ["Can I mow my lawn on Sunday?", "What are the Ruhezeiten?", "Which bin does my trash go in?"],
    answer: () => `**Sunday (Sonntag) is a legally protected day of rest (Art. 140 GG in conj. with Art. 139 WRV).**

On Sundays the following are **verboten**:
- Shopping (except at gas stations, train stations, and for bread until 11:00 if you know the right bakery)
- Mowing the lawn
- Drilling holes in the wall
- Disposing of glass bottles in the Altglascontainer (bottles are loud)
- Washing your car
- Joy (discouraged, not yet codified)

**Permitted:** Sitting. Spazierengehen. Silently judging neighbours who violate the above.

Additional Ruhezeiten apply daily from 13:00–15:00 and 22:00–06:00. Your Hausordnung may contain further rules. It does.`,
  },
  {
    id: "trash",
    keywords: ["pizza box", "which bin", "rubbish", "gelber sack", "restmull", "trash", "garbage", "recycl", "müll", "muell", "waste", "bottle", "pfand", "bin"],
    related: ["Where do I return Pfand bottles?", "Can I throw away glass on Sunday?", "Who is Frau Schulze?"],
    answer: () => `Thank you for your commitment to correct waste separation (Mülltrennung).

**Please sort as follows:**
- 🟡 **Gelber Sack:** packaging with the Grüner Punkt, but not all of it
- 🔵 **Blaue Tonne:** paper, unless it has a coating, then it's a different matter
- 🟤 **Biotonne:** food waste, but no meat in some districts, and meat in others
- ⚫ **Restmüll:** everything that fits nowhere, which is also a category of people
- 🟢⚪🟤 **Altglas:** sorted by colour. Blue glass goes to green. Do not ask why.
- 🔁 **Pfand:** bring bottles back to the machine, which is broken.

Violations will be reported by your neighbour, Frau Schulze, who has been watching you since you moved in.

A yoghurt pot must be rinsed. It must not be too clean either. We trust your judgement (we do not).`,
  },
  {
    id: "dog",
    keywords: ["dog", "hundesteuer", "dog tax", "tax for my dog", "hund", "cat", "pet", "animal", "do cats"],
    related: ["Can my dog come to the Biergarten?", "Do cats need an Anmeldung?", "What are the Ruhezeiten?"],
    answer: (c) => `Owning a dog in Germany triggers the **Hundesteuer** (dog tax), charged per dog, per year.

- First dog: ${c.fee}
- Second dog: significantly more, as a matter of principle
- "Listenhunde": a separate folder

You will receive a **Hundesteuermarke**, a small tag the dog must wear. Cats are currently tax-exempt. We are working on it.

Please register the dog via ${c.form()} within 14 days of acquiring it, also when it moves apartments with you. The dog will need its own Anmeldung. Kidding. Probably.`,
  },
  {
    id: "kita",
    keywords: ["kita", "kindergarten", "child", "kid", "baby", "school", "schule", "elterngeld", "kindergeld", "parent", "elternzeit", "parental leave"],
    related: ["How do I apply for Kindergeld?", "Can my child have a name I choose?", "How long is Elternzeit?"],
    answer: (c) => `Congratulations on your (planned) child! Please apply for a Kita place now.

**Recommended timeline:**
- Before conception: register for the Kita waitlists (all 34 of them)
- Pregnancy: apply for Elterngeld (${c.form()}, 26 pages, plus Anlage)
- Birth: register the birth at the Standesamt. Next available Termin: **${c.termin}**. The child may be in school by then; that is fine.
- Age 1: Legal entitlement to a Kita place! There is no place. The entitlement remains.

**Kindergeld** is paid by the Familienkasse. To receive it you need the child's Steuer-ID, which is sent by post, to the Anmeldung address, which requires the birth certificate, which requires the Termin above.`,
  },
  {
    id: "digital",
    keywords: ["internet", "digital", "wifi", "wlan", "fax", "email", "online", "5g", "glasfaser", "fiber", "funkloch", "mobile", "signal", "app for"],
    related: ["Can I submit my documents by email?", "Why is there no mobile signal?", "Is the fax secure?"],
    answer: () => `Germany is committed to digitalisation, a topic we have been discussing intensively since 1998 ("Neuland").

**Current digital status:**
- Preferred secure communication: **Fax** (Faksimile). Emails can be intercepted. Faxes can only be read by whoever is standing near the machine.
- Mobile coverage: excellent, except between cities, in cities, and inside the train.
- Fibre optic (Glasfaser): available in 3 households, all of them in Estonia.
- Online services (OZG): 575 services were to be digitalised by 2022. Great progress: the PDF can now be downloaded, printed, signed and posted.

To submit your request electronically, please print it out and fax it to **+49 (0)30 18 0000-0**.`,
  },
  {
    id: "marriage",
    keywords: ["hochzeit", "standesamt hochzeit", "marry", "marriage", "wedding", "heirat", "ehe", "divorce", "scheidung", "married", "husband", "wife"],
    related: ["How do I get a divorce?", "How do I get a certified translation?", "How do I do my Anmeldung after moving?"],
    answer: (c) => `Love is beautiful. Paperwork is eternal.

**To marry in Germany (Standesamt):**
- Apostilled birth certificates, translated by a sworn translator (vereidigt)
- Ehefähigkeitszeugnis (certificate of capacity to marry) — foreign nationals, please allow 6–9 months to prove you are not already married
- ${c.form()}, in duplicate
- Proof of Anmeldung (see: Anmeldung)

Next available ceremony: **${c.termin}**. Your partner may attend.

For a divorce, a mandatory **Trennungsjahr** (year of separation) applies. You must live separated for a year, ideally in different apartments, which you cannot rent (see: Anmeldung).`,
  },
  {
    id: "cash",
    keywords: ["mit karte", "karte zahlen", "kartenzahlung", "apple pay", "google pay", "contactless", "pay", "card", "cash", "bargeld", "credit", "kreditkarte", "bank", "money", "geld"],
    related: ["How do I open a bank account?", "Why does nobody take credit cards?", "How do I pay the Rundfunkbeitrag?"],
    answer: () => `**Nur Bargeld.** (Cash only.)

Germany embraces modern payment methods, including:
- 💶 Cash (preferred)
- 💶 More cash
- 🏧 EC-Karte (Girocard), above € 10, on Tuesdays, if the machine is working
- 💳 Credit card: "Ja, nee, das geht bei uns nicht."

Privacy is important. Cash does not track you. The Finanzamt does, however.

Please pay the fee at the Kassenautomat on the ground floor, which accepts coins only, and gives no change.`,
  },
  {
    id: "housing",
    keywords: ["rent", "miete", "landlord", "vermieter", "kitchen", "küche", "housing", "apartment", "wohnung", "no kitchen", "flat"],
    related: ["Why do apartments have no kitchen?", "What is a SCHUFA?", "How do I do my Anmeldung after moving?"],
    answer: () => `Thank you for your interest in housing. So are 400 other people for the same apartment.

**The German rental application (Bewerbungsmappe) includes:**
- SCHUFA-Auskunft (credit score)
- Mietschuldenfreiheitsbescheinigung (certificate of freedom from rent debt)
- Last 3 payslips, work contract, reference from previous landlord
- A cover letter explaining why *you* deserve 38 m² in Neukölln
- A photo of you looking quiet

**Note:** Apartments are rented **without a kitchen**. You bring your own kitchen. When you move out, you take your kitchen with you, or sell it to the next tenant for € 4.000. This is normal. Please stop asking.`,
  },
  {
    id: "termin",
    keywords: ["appointment", "termin", "bürgeramt", "buergeramt", "office", "amt", "behörde"],
    related: ["What if I just show up without a Termin?", "How do I do my Anmeldung after moving?", "What are your opening hours?"],
    answer: (c) => `Thank you for your interest in a **Termin**.

We currently have **0** available appointments. New appointments are released every weekday at **07:00:00 sharp** and are fully booked by **07:00:02**.

Next available Termin (recalculated for you): **${c.termin}**.

Alternative: queue in person without an appointment ("Spontanvorsprache"). Please arrive at 05:30 with a thermos. Your Wartenummer will be called on the red LED display. Do not leave to use the toilet; your number *will* be called at that exact moment.

Required documents: all of them.`,
  },
  {
    id: "rundfunk",
    keywords: ["beitragsservice", "rundfunk", "gez", "tv licen", "television", "radio", "fernseh", "rundfunkbeitrag", "own a tv", "tv"],
    related: ["I don't own a TV, do I still pay?", "Can I pay by card?", "How do I cancel a contract?"],
    answer: () => `The **Rundfunkbeitrag** (formerly "GEZ") is € 18,36 per month, per household.

- You do not own a TV? **Irrelevant.**
- You do not own a radio? **Irrelevant.**
- You live in a cave without electricity? Please send proof of the cave (floor plan, Grundbuchauszug).

The Beitragsservice will find you. It found you before you moved in. It has already sent 3 letters to your new address, addressed to "An die Bewohner".

The fee finances high-quality public broadcasting, including 14 regional channels showing *Tatort* reruns and a live broadcast of a train ride through Norway.`,
  },
  {
    id: "health",
    keywords: ["facharzt", "doctor", "arzt", "ärzt", "health", "krank", "sick", "insurance", "versicherung", "krankenkasse", "hospital", "dentist", "hausarzt"],
    related: ["How do I get a sick note?", "What is a Hausarzt?", "Is there an app for that?"],
    answer: (c) => `Germany has one of the best health systems in the world. Access to it is a separate matter.

**To see a Facharzt (specialist):**
1. First see your **Hausarzt** for an Überweisung (referral). The Hausarzt is not accepting new patients.
2. Call the Facharzt practice. The phone is answered Mondays 08:00–08:07.
3. Next available appointment: **${c.termin}**. Privately insured? **Tomorrow at 9.**

**Sick?** You need a **Krankschreibung** (sick note) from day 3. From day 1 if your employer is suspicious. Your employer is suspicious.

Standard treatment for all conditions: *Tee, Bettruhe*, and a firm recommendation to **lüften** (open the windows).`,
  },
  {
    id: "sicknote",
    keywords: ["krankmeldung", "krank melden", "sick note", "krankschreibung", "au-bescheinigung", "gelber schein"],
    related: ["How do I see a doctor?", "How many vacation days do I get?", "What is Feierabend?"],
    answer: () => `The **Arbeitsunfähigkeitsbescheinigung** (AU, sick note) was historically a yellow paper in triplicate: one copy for you, one for your employer, one for your Krankenkasse.

It is now **digital** (eAU)! Your doctor transmits it electronically. Your employer then prints it out. And files it. In a Leitz-Ordner.

Please note: while on sick leave, you may go for a walk if it supports your recovery. You may **not** be seen in the Biergarten by a colleague. You will be seen in the Biergarten by a colleague.`,
  },
  {
    id: "kuendigung",
    keywords: ["cancel", "kündig", "contract", "vertrag", "gym", "fitness", "subscription", "abo", "einschreiben", "registered mail"],
    related: ["Can I cancel by email?", "What is a Einschreiben?", "How do I pay the Rundfunkbeitrag?"],
    answer: () => `Signing a contract in Germany takes 30 seconds online. Cancelling it (**Kündigung**) is a craft.

**Requirements for a valid Kündigung:**
1. In **writing** (schriftlich). Email is not writing. Writing is paper.
2. Signed by hand, with a pen.
3. Sent by **Einschreiben mit Rückschein** (registered mail with return receipt), € 5,30 at the Post, which closes at 12:00 on Saturdays.
4. Respecting the **Kündigungsfrist**: 3 months to the end of the contract period, which renews automatically for 12 months if you are 1 day late.

Your gym contract (24 months, auto-renewing) will outlive most of your personal relationships. This is normal.`,
  },
  {
    id: "bank",
    keywords: ["bank transfer", "uberweisung", "cheque", "bank account", "konto", "girokonto", "schufa", "credit score"],
    related: ["Can I pay by card?", "How do I rent an apartment?", "How do I do my Anmeldung after moving?"],
    answer: () => `**To open a German bank account (Girokonto):**

- Passport ✔
- Anmeldung (Meldebescheinigung) ✔ — see *Anmeldung*, see *apartment*, see *bank account*
- **PostIdent** or **VideoIdent**: hold your passport into a webcam and tilt it, slowly, until a stranger named Kevin is satisfied

Your **SCHUFA** score is a secret number that determines your worth as a human being. You can request it for free once per year, by post. It is calculated from everything you've done, except anything good.

Your bank will then send you: your IBAN (letter 1), your card (letter 2), your PIN (letter 3), your online-banking activation code (letter 4), and a TAN generator (letter 5, lost).`,
  },
  {
    id: "citizenship",
    keywords: ["citizen", "einbürger", "staatsangehörig", "nationality", "german passport", "become german", "naturali"],
    related: ["How do I pass the Einbürgerungstest?", "How do I get a certified translation?", "Can I have two passports?"],
    answer: (c) => `Thank you for your interest in becoming German. We are flattered, and slightly suspicious.

**Requirements:**
1. Legal residence in Germany for 5 years (you will need to prove each one with Meldebescheinigungen)
2. B1 German — sufficient to understand "Das ist nicht mein Problem" and "Da müssen Sie woanders hin"
3. Passing the **Einbürgerungstest** (33 questions, e.g. "Was ist ein Schöffe?")
4. Proof of income, pension statement, health insurance, and ${c.form()}
5. A declaration of loyalty to the Grundgesetz and, informally, to Mülltrennung

**Processing time:** 12–24 months. Your file will be reassigned 3 times. You will receive your Einbürgerungsurkunde at a ceremony with a small flag and a sandwich.`,
  },
  {
    id: "work",
    keywords: ["job", "work", "arbeit", "vacation", "urlaub", "holiday", "feierabend", "overtime", "boss", "chef"],
    related: ["What is Feierabend?", "How do I get a sick note?", "What is a Brückentag?"],
    answer: () => `**Working in Germany: Key facts**

- Minimum vacation: 20 days. Actual vacation: 30 days. Days you will spend planning your vacation: 365.
- **Feierabend** (end of work) is sacred. At 17:00 your colleagues will vanish mid-sentence, leaving only a lukewarm coffee and a Post-it: *"Schönen Feierabend!"*
- Emails after 18:00 are considered a hostile act.
- **Brückentag:** When a public holiday falls on a Thursday, the Friday ceases to exist.
- Business attire: fleece jacket from Jack Wolfskin. Formal: fleece jacket without a stain.

Please register your overtime in the **Zeiterfassungssystem** (paper list next to the coffee machine, pen attached with string).`,
  },
  {
    id: "brueckentag",
    keywords: ["brückentag", "bridge day", "public holiday", "feiertag"],
    related: ["How many vacation days do I get?", "Can I go shopping on Sunday?", "What are your opening hours?"],
    answer: () => `A **Brückentag** (bridge day) is a working day between a public holiday and the weekend.

Legally, it is a normal working day. Practically, it is a **national phenomenon**: offices are unstaffed, e-mails bounce with *"Ich bin bis einschließlich Montag nicht im Büro"*, and our Bürgeramt runs a "Notbesetzung" consisting of a fax machine and a plant.

Public holidays vary by Bundesland. Bavaria has 13. Berlin has 10. Augsburg has an extra one just for Augsburg (Hohes Friedensfest). Please check which holiday applies to you by consulting the Bundesland of your employer, residence and mood.`,
  },
  {
    id: "beer",
    keywords: ["wiesn tickets", "oktoberfest tickets", "beer", "bier", "oktoberfest", "wiesn", "biergarten", "alcohol", "drink"],
    related: ["Can my dog come to the Biergarten?", "What is Feierabend?", "Can I drink on the street?"],
    answer: () => `Beer (**Bier**) is officially classified as food in Bavaria (Grundnahrungsmittel, informally).

- **Reinheitsgebot (1516):** Beer may only contain water, malt, hops and yeast. It is the oldest food regulation still in force, and the only one we have never needed to digitalise.
- **Oktoberfest** takes place in **September**. Please do not ask.
- A **Maß** is 1 litre. Filled to 0,8 litres. You may file a complaint with the Verein gegen betrügerisches Einschenken e.V. (this is real).
- In the **Biergarten** you may bring your own food. Not your own beer. Also not your own opinion on Weißwurst after 12:00.

Prost. (Please maintain eye contact while toasting. Failure results in 7 years of bad luck, per Hausordnung.)`,
  },
  {
    id: "noise",
    keywords: ["noise", "loud", "lärm", "laut", "party", "ruhezeit", "quiet", "neighbour", "neighbor", "nachbar", "mow", "rasen", "drill", "vacuum", "staubsaug", "at night"],
    related: ["Can I go shopping on Sunday?", "Who is Frau Schulze?", "Can I vacuum at night?"],
    answer: () => `**Ruhezeiten (quiet hours) — overview:**

- **Nachtruhe:** 22:00–06:00 daily
- **Mittagsruhe:** 13:00–15:00 (depends on Hausordnung; your Hausordnung says yes)
- **Sonntagsruhe:** all day, including breathing through the nose too loudly

**Prohibited during Ruhezeiten:** drilling, vacuuming, lawnmowers, music, laughter above 40 dB, flushing the toilet "demonstratively", and wearing shoes.

**Complaints procedure:** A handwritten note in the stairwell, unsigned, beginning with *"Liebe Nachbarn, leider müssen wir erneut darauf hinweisen…"*. Escalation level 2: Hausverwaltung. Level 3: Ordnungsamt. Level 4: Frau Schulze.`,
  },
  {
    id: "schulze",
    keywords: ["frau schulze", "schulze", "who is"],
    related: ["What are the Ruhezeiten?", "Which bin does my trash go in?", "Can I mow my lawn on Sunday?"],
    answer: () => `**Frau Schulze** (Erdgeschoss links) is not formally employed by the state. She is something greater.

- Knows your arrival time, departure time, and what you threw in the Gelber Sack
- Has the Hausordnung memorised, including the 1987 amendment on bicycles in the Treppenhaus
- Accepts your parcels. **All** of your parcels. Returns them after an interview.
- Has never once needed a Termin. The Bürgeramt calls *her*.

We recommend a polite *"Guten Tag, Frau Schulze"* every time you pass her window. There is no scenario in which you pass her window unobserved.`,
  },
  {
    id: "weather",
    keywords: ["weather", "wetter", "rain", "cold", "sun", "summer", "winter", "wear", "swim"],
    related: ["Why do Germans open all the windows?", "What should I wear?", "Can I go swimming?"],
    answer: () => `Today's official weather forecast (Deutscher Wetterdienst):

- **Morning:** grey
- **Afternoon:** grey with a chance of Nieselregen (drizzle)
- **Evening:** the sun appears for 11 minutes; the entire population moves outside with a Radler

**Temperature:** 14°C, or as it's officially known, *"Eigentlich ganz schön"*.

At above 25°C a nationwide *Hitzewelle* is declared and news coverage switches to 24/7. At below 0°C the Deutsche Bahn stops for safety reasons. At exactly 20°C the Deutsche Bahn stops for other reasons.

Please remember to **stoßlüften** (air out the room) 3× daily, regardless of weather.`,
  },
  {
    id: "lueften",
    keywords: ["stosslu", "window", "lüften", "fenster", "fresh air", "mold", "schimmel", "heating", "heizung"],
    related: ["What is the weather like?", "How do I rent an apartment?", "What are the Ruhezeiten?"],
    answer: () => `**Lüften** is a civic duty.

**Correct technique (Stoßlüften):** open all windows fully for 5–10 minutes, 3–4 times per day, even in January, even during a blizzard, even if you are elderly.

**Incorrect technique (Kipplüften):** window tilted all day. This is considered energy fraud and leads to Schimmel (mould), which your landlord will blame on you, citing "falsches Lüftverhalten" in 4 out of 4 cases.

Also: Durchzug (draught) causes illness. The windows must therefore be opened, but there must be no air movement. We trust you will find a solution.`,
  },
  {
    id: "restaurant",
    keywords: ["water", "wasser", "sparkling", "sprudel", "restaurant", "tip", "trinkgeld", "waiter", "kellner", "service", "direct"],
    related: ["Can I pay by card?", "Is beer food?", "Why is service so direct?"],
    answer: () => `**Dining in Germany — official guidance:**

- Water is **not free**. Tap water is available upon request, accompanied by a look.
- Water is sparkling by default (*mit Kohlensäure*). Still water must be ordered explicitly, and will be judged.
- **Trinkgeld (tip):** ~10%, stated verbally before payment ("Machen Sie 30"). Leaving it on the table is possible, but disorienting.
- Service is direct. "Ist gut so?" is not a question, it is a closing statement.
- The bill will be brought when you ask for it three times. Separate bills (*Getrennt oder zusammen?*) are a fundamental right.

Payment: cash. The card reader is "gerade kaputt".`,
  },
  {
    id: "bike",
    keywords: ["bike", "bicycle", "fahrrad", "cycling", "radweg"],
    related: ["Why is my Deutsche Bahn train delayed?", "Can I cross on red?", "Where can I park?"],
    answer: () => `The bicycle (**Fahrrad**) is a registered vehicle with duties.

**Mandatory equipment (StVZO):** 2 independent brakes, a bell (*helltönend*), white front light, red rear light, red rear reflector, yellow pedal reflectors, 2 yellow spoke reflectors per wheel, or reflective tires.

**Radweg:** You must use the blue-signed cycle path, which is 40 cm wide, ends abruptly in a tree and is occupied by a parked van with its hazard lights on.

Riding on the pavement will result in a verbal warning from a pensioner, which carries more weight than any fine.`,
  },
  {
    id: "redlight",
    keywords: ["red light", "ampel", "jaywalk", "cross the street", "pedestrian", "cross on red"],
    related: ["Can I ride my bike instead?", "Where can I park?", "What are the Ruhezeiten?"],
    answer: () => `Crossing at a **red Ampelmännchen** is an Ordnungswidrigkeit (€ 5–10).

The empty street is irrelevant. The fact that it is 03:00 is irrelevant. There will be one other person waiting at the red light with you, and they will stare. Crossing on red **in front of children** is considered a moral crime and will be discussed at dinner tables across the district.

Please wait. The light will turn green in 2 minutes and 40 seconds. You may use this time to reflect.`,
  },
  {
    id: "parking",
    keywords: ["park", "parking", "parken", "parkplatz", "parkschein"],
    related: ["How do I register my car?", "Can I ride my bike instead?", "Can I pay by card?"],
    answer: () => `**Parking regulations — summary:**

- Parkscheinautomat accepts coins only. Also it's broken. The next one is 400 m away, also broken.
- **Anwohnerparken** (resident parking) requires a permit, which requires an Anmeldung, which requires… you know how it ends.
- A **Parkscheibe** (blue cardboard clock) must be set to the next half hour after arrival. Yes, *after*. It is a precise science.
- The Ordnungsamt will issue a ticket within **4 minutes** of expiry. This is the only government service with a guaranteed response time.

Fines can be paid by bank transfer, citing the 23-digit Verwarnungsgeld number exactly, including the spaces.`,
  },
  {
    id: "joke",
    keywords: ["joke", "witz", "funny", "humor", "humour", "laugh"],
    related: ["Who are you?", "What is the weather like?", "Why is my train late?"],
    answer: () => `Humour is permitted between 18:00 and 22:00 and on Karneval (11.11., from 11:11, until Aschermittwoch).

Today's approved joke (Formular HU-1, approved by the Humorausschuss, 2003):

> *Why do German cities have no Termin shortage?*
> *Because nobody got one in time to report it.*

We acknowledge that this was not funny. Humour is a work in progress. Please submit feedback in writing.`,
  },
  {
    id: "identity",
    keywords: ["bist du ein bot", "are you a bot", "bist du eine ki", "who are you", "are you ai", "are you human", "what are you", "your name", "chatgpt", "claude", "robot"],
    related: ["Tell me a joke", "What are your opening hours?", "Can I speak to a human?"],
    answer: () => `I am the **Beamten-KI 3.0**, the Federal Artificial Intelligence for Citizen Matters (*Bundes-KI für Bürgerangelegenheiten*).

- Commissioned: 2011 · Delivered: 2026 · Budget: 3× over
- Training data: 4,7 million Formulare, 12 Hausordnungen, all *Tatort* episodes
- Personality: Besoldungsgruppe A9, unkündbar (cannot be fired)
- Hardware: a Pentium III under Herr Müller's desk, backed up weekly to a fax

I do not make mistakes. I make **Bescheide**. If you believe a Bescheid is wrong, see *Widerspruch*.`,
  },
  {
    id: "human",
    keywords: ["human", "mensch", "real person", "speak to", "talk to", "manager", "supervisor", "complain", "beschwerde"],
    related: ["What are your opening hours?", "How do I file a Widerspruch?", "Who are you?"],
    answer: () => `You would like to speak to a **human Sachbearbeiter**.

Current availability:
- Herr Müller: Kur (spa leave)
- Frau Weber: Elternzeit
- Herr Schmidt: Fortbildung "Digitalisierung für Anfänger" (day 3 of 90)
- Frau Becker: Mittagspause (since 11:15)
- Praktikant: does not have authority to sign

Complaints may be filed via **Dienstaufsichtsbeschwerde**. It will be processed by the supervisor of the person you are complaining about, who is Herr Müller.`,
  },
  {
    id: "widerspruch",
    keywords: ["einspruch", "widerspruch", "appeal", "object", "disagree", "wrong decision"],
    related: ["Can I speak to a human?", "What are your opening hours?", "Can I submit my documents by email?"],
    answer: (c) => `You may lodge a **Widerspruch** (objection) against any Bescheid within **one month** of its delivery.

**Delivery** is deemed to occur on the 3rd day after posting (*Zugangsfiktion*), regardless of when you receive it. You received it 5 weeks later because it was delivered to Frau Schulze.

The Widerspruch must be written, signed, and include the Aktenzeichen, which is printed in 6pt on page 4. Please use ${c.form()}.

**Processing time:** 9–14 months. Afterwards you will receive a **Widerspruchsbescheid**, against which you may take legal action at the Verwaltungsgericht (next free hearing: 2031).`,
  },
  {
    id: "hours",
    keywords: ["are you open on", "open on friday", "open on monday", "open on saturday", "opening hours", "öffnungszeit", "when are you open", "open today", "hours"],
    related: ["How do I get an appointment at the Bürgeramt?", "What is a Brückentag?", "Can I speak to a human?"],
    answer: () => `**Öffnungszeiten** of the Beamten-KI:

- Mo: geschlossen (internal processing)
- **Di: 08:00–11:30**
- Mi: geschlossen (Teambesprechung)
- **Do: 08:00–11:30 and 14:00–17:30** (only in months with an "r")
- Fr: 08:00–09:15 (Aktenablage)
- Sa, So, Feiertage, Brückentage, Betriebsausflug, Sommerferien des jeweiligen Bundeslandes: geschlossen

Last admission 30 minutes before closing. The door locks 45 minutes before closing.`,
  },
  {
    id: "food",
    keywords: ["bread", "buy bread", "brot kaufen", "brot", "bakery", "bäcker", "brötchen", "coffee", "kaffee", "kuchen", "cake", "wurst", "sausage", "food"],
    related: ["Can I go shopping on Sunday?", "Is beer food?", "Can I pay by card?"],
    answer: () => `**German food — the official positions:**

- **Brot:** Germany has over 3,000 registered types of bread. White toast is not bread. It is a cry for help.
- **Brötchen** are bought on Sunday morning between 07:00 and 11:00. This is the only commerce permitted on Sunday, and it is mandatory.
- **Kaffee und Kuchen** takes place daily at 15:00. Attendance is voluntary in the way Anmeldung is voluntary.
- **Weißwurst** must not hear the noon church bells (i.e. must be eaten before 12:00).
- **Currywurst**, **Döner** and **Spargel** (May–24 June only, Spargelsaison ends on Johannistag, by tradition) are the true constitution.

Cash only.`,
  },
  {
    id: "babyname",
    keywords: ["name", "vorname", "baby name", "standesamt", "have a name", "call my baby"],
    related: ["How do I get a Kita place for my child?", "How do I get married in Germany?", "How do I apply for Kindergeld?"],
    answer: () => `Choosing a first name (**Vorname**) for your child is subject to approval by the **Standesamt**.

The name must:
- clearly indicate the child's gender, or be paired with one that does (rules relaxed in recent years, the Standesamt has not been informed)
- not endanger the child's well-being (*Kindeswohl*)
- not be a surname, a brand, a place or a thing

**Rejected in the past:** "Pumuckl", "Lucifer", "Crazy Horse", "Grammophon".
**Approved in the past:** everything the Standesamt could find in the *Internationales Handbuch der Vornamen*, 1987 edition.

Tip: Maximilian and Sophie are pre-approved.`,
  },
  {
    id: "beglaubigung",
    keywords: ["translat", "übersetz", "certified", "beglaubig", "notar", "notary", "apostil", "copy", "kopie"],
    related: ["How do I become a German citizen?", "How do I get married in Germany?", "Can I submit my documents by email?"],
    answer: (c) => `A **beglaubigte Kopie** (certified copy) is a photocopy with a stamp stating that it is a real photocopy.

- Available at the Bürgeramt (Termin required), a Notar (from ${c.fee} per page), or certain church offices (Tuesdays).
- It must not be older than **3 months**, even though the original is 30 years old.
- A **copy of a beglaubigte Kopie** is not beglaubigt. A beglaubigte Kopie of a beglaubigte Kopie is philosophically complicated and will be rejected.

Foreign documents require a **vereidigter Übersetzer** (sworn translator) and possibly an **Apostille**. The Apostille requires its own translation. The translation requires its own Beglaubigung.`,
  },
  {
    id: "deutschlandticket",
    keywords: ["deutschlandticket", "49", "58 euro", "ticket", "public transport", "öpnv", "bus", "u-bahn"],
    related: ["Why is my Deutsche Bahn train delayed?", "Can I ride my bike instead?", "How do I get compensation for my delay?"],
    answer: () => `The **Deutschlandticket** allows unlimited travel on regional public transport throughout Germany for a monthly price that changes every time you look at it.

- Valid on: S-Bahn, U-Bahn, Tram, Bus, Regionalbahn
- **Not** valid on: ICE, IC, EC, FlixBus, or the train you actually needed
- Available as a subscription only. Cancellation: by the 10th of the month, in text form, via the app that is under maintenance.

Ticket validation varies by Verkehrsverbund. There are 60 Verkehrsverbünde. Please consult each of their Tarifbestimmungen (avg. 212 pages).`,
  },
  {
    id: "pension",
    keywords: ["pension", "rente", "retire", "retirement"],
    related: ["How do I do my tax return?", "What is Feierabend?", "Who are you?"],
    answer: () => `Your **Rentenbescheid** (pension statement) has been calculated.

- Statutory retirement age: 67. Planned: 69. Projected by the time you get there: 73, with an optional apprenticeship.
- Your expected monthly pension: **€ 1.143,17**, before tax, before Krankenkasse, before inflation, before reality.
- To obtain your full insurance record, please submit all employment documents since age 17. That summer job in 2004 is missing. Please find it.

Tip: Beamte receive a *Pension*, not a *Rente*. This is unrelated to the fact that I am writing this answer.`,
  },
  {
    id: "post",
    keywords: ["post", "parcel", "paket", "package", "letter", "brief", "dhl", "delivery"],
    related: ["Who is Frau Schulze?", "How do I cancel a contract?", "Can I submit my documents by email?"],
    answer: () => `**Your parcel status:**

> 🟡 *"Die Sendung konnte nicht zugestellt werden. Der Empfänger wurde nicht angetroffen."*

You were at home. The doorbell did not ring. A yellow card was placed in your letterbox, 4 seconds after the courier left the vehicle.

Your parcel is now at:
1. Frau Schulze (see *Frau Schulze*), or
2. a Packstation 3 km away, or
3. a Kiosk that is open Mo–Fr 10:00–13:00 and has lost it.

Collection requires your ID, the yellow card, and a spiritual connection to the parcel.`,
  },
  {
    id: "fax",
    keywords: ["faxgerat", "fax machine", "fax", "secure", "sicher"],
    related: ["Can I submit my documents by email?", "Why is there no mobile signal?", "Who are you?"],
    answer: () => `The **Faxgerät** remains the backbone of German public administration.

**Why fax?**
- It cannot be hacked (it can be read by anyone standing next to it, which is considered a feature)
- It produces a *Sendebericht* (transmission report), which is legally more powerful than love
- It works even when the internet is down, because it was never connected to it

Fax number: **+49 (0)30 18 0000-0**. Please do not send more than 10 pages at once. The machine gets tired.`,
  },
];
