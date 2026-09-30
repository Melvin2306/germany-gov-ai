import { pick, randInt, type Topic } from "./shared";

// Work, money & taxes — more specific than the core "work" and "tax" topics.
export const workTopics: Topic[] = [
  {
    id: "work-minijob",
    keywords: ["minijob", "mini-job", "mini job", "geringfügig", "side job", "nebenjob", "student job", "werkstudent", "part-time job", "teilzeit"],
    related: ["What is the minimum wage?", "Which Steuerklasse am I in?", "Why is my netto so much lower than my brutto?"],
    answer: () => `A **Minijob** (geringfügige Beschäftigung) lets you earn up to **€ 556 per month** without the state noticing. The state notices.

- Registered with the **Minijob-Zentrale** in Bochum-Essen-Cottbus (a real place, sort of)
- No taxes for you, but your employer pays flat-rate contributions to everyone
- Pension insurance is mandatory. You may opt out by **written application**, which is the only exciting thing about a Minijob
- Earn € 557 once and you are now in the **Übergangsbereich** (Midijob). Please do not ask what that means. Nobody knows. There is a calculator. It is a PDF.

A **Werkstudent** is a student who works up to 20 hours per week during the semester, and 40 in the Semesterferien, as long as studying remains the "main focus". The main focus is verified by nobody, ever.`,
  },
  {
    id: "work-steuerklasse",
    keywords: ["steuerklasse", "tax class", "tax bracket", "tax category", "lohnsteuerklasse", "splitting"],
    related: ["Why is my netto so much lower than my brutto?", "How do I get a tax refund?", "How do I get married in Germany?"],
    answer: () => `Germany has **six Steuerklassen** (tax classes), because five would have been too simple.

- **I:** single, divorced, or emotionally unavailable
- **II:** single parent (requires proof of child, and proof of the proof)
- **III:** married and earning significantly more than your spouse
- **IV:** married and earning roughly the same
- **V:** married to someone in III. Your netto will make you cry.
- **VI:** second job. Taxed as if you personally caused the Finanzkrise.

Married couples may choose **III/V** or **IV/IV**, or *IV mit Faktor*, which requires a Faktorberechnung, which requires a Steuerberater, which requires a Termin.

Changes are made via **ELSTER** (Antrag auf Steuerklassenwechsel bei Ehegatten). Allowed once per year. Choose wisely. Choose forever.`,
  },
  {
    id: "work-payslip",
    keywords: ["brutto", "netto", "gross salary", "net salary", "payslip", "pay slip", "lohnabrechnung", "gehaltsabrechnung", "sozialversicherung", "social security", "deductions", "take home", "take-home", "abzüge", "solidaritätszuschlag", "soli"],
    related: ["Which Steuerklasse am I in?", "What is the Kirchensteuer?", "Do I have to pay into a private pension?"],
    answer: (c) => `Welcome to your **Gehaltsabrechnung** (payslip). Please sit down.

**From your brutto, we deduct:**
1. Lohnsteuer
2. Solidaritätszuschlag (for most people abolished, for your payslip line kept for nostalgia)
3. Kirchensteuer, if you were baptised as a baby and never formally left
4. Rentenversicherung (pension), for a Rente you will receive in 2069
5. Arbeitslosenversicherung
6. Krankenversicherung, plus the Zusatzbeitrag, plus the Zusatzbeitrag's own Zusatzbeitrag
7. Pflegeversicherung, higher if you have no children (*Kinderlosenzuschlag* — yes, really)

What remains is called **netto**. It is roughly what you expected, minus hope.

For an explanation of line 14 ("Verr. Vorschuss SV-AG-Anteil"), please submit ${c.form()} to your Personalabteilung. They will forward it to the Lohnbüro, who will forward it to you.`,
  },
  {
    id: "work-unemployment",
    keywords: ["arbeitsamt", "arbeitslos", "unemploy", "jobcenter", "job center", "arbeitsagentur", "agentur für arbeit", "employment agency", "bürgergeld", "hartz", "lost my job", "jobless", "welfare", "sozialhilfe"],
    related: ["Can my employer fire me?", "How do I apply for a job in Germany?", "Can I get my foreign degree recognised?"],
    answer: (c) => `The **Agentur für Arbeit** regrets your situation and would like to meet you in person. Next available Termin: **${c.termin}**.

**Important deadlines:**
- Register as *arbeitssuchend* **3 months** before your job ends, or within 3 days of learning about it, whichever is sooner and more stressful
- Register as *arbeitslos* on the first day of unemployment, in person or online (the online version requires an eID PIN you have never used)

**Arbeitslosengeld I:** ~60% of your last netto (67% with children), for up to 12 months.
**Bürgergeld:** administered by the **Jobcenter**, which is a different building, with a different Termin, and a 14-page Antrag plus Anlagen KdU, EK, VM and a list of every bank account you have ever opened.

You will be offered a **Maßnahme** (training measure). It is an Excel course. You know Excel. You will attend the Excel course.`,
  },
  {
    id: "work-zeugnis",
    keywords: ["arbeitszeugnis", "zeugnis", "reference letter", "work reference", "employer reference", "job reference", "vollsten zufriedenheit", "letter of reference", "recommendation letter"],
    related: ["How do I apply for a job in Germany?", "Can my employer fire me?", "What happens during the Probezeit?"],
    answer: () => `Every employee in Germany is entitled to a written **Arbeitszeugnis** (job reference). By law it must be *wohlwollend* (benevolent). This is why it is written in **code**.

**Official decoder:**
- *"stets zu unserer vollsten Zufriedenheit"* → excellent (grammatically impossible, legally perfect)
- *"zu unserer vollsten Zufriedenheit"* → good
- *"zu unserer Zufriedenheit"* → mediocre
- *"hat sich bemüht"* → catastrophic
- *"war stets pünktlich"* → punctuality was their only strength
- *"trug durch Geselligkeit zur Verbesserung des Betriebsklimas bei"* → was often seen at the Weihnachtsfeier with a Sekt in each hand
- *"wir wünschen ihr für die Zukunft alles Gute"* without *"und bedauern ihr Ausscheiden"* → we are not sad

Missing the final sentence entirely is considered a declaration of war.`,
  },
  {
    id: "work-contract",
    keywords: ["probezeit", "probation", "trial period", "arbeitsvertrag", "employment contract", "work contract", "befrist", "fixed-term", "fixed term", "temporary contract", "notice period", "kündigungsfrist"],
    related: ["Can my employer fire me?", "Do I get a Christmas bonus?", "Can I work from home?"],
    answer: () => `**Your Arbeitsvertrag (employment contract) — key facts:**

- **Probezeit:** usually 6 months. Either side may terminate with 2 weeks' notice, for any reason, including "the vibes".
- **Befristung:** fixed-term contracts without a reason are allowed for up to 2 years, renewable 3 times. After that, you are either permanent or mysteriously not renewed one week before.
- **Kündigungsfrist:** for employees 4 weeks to the 15th or end of the month. For employers it grows with your years of service, like a tree ring.
- The contract must be signed **in ink**. The *Nachweisgesetz* has recently allowed some things in text form. HR has not been informed.

Clause 17 states that *"Nebenabreden bedürfen der Schriftform"*. Clause 18 states that clause 17 can only be changed in writing.`,
  },
  {
    id: "work-fired",
    keywords: ["kündigungsschutz", "fired", "fire me", "get fired", "dismiss", "laid off", "layoff", "lay off", "abmahnung", "rausgeworfen", "rausschmiss", "let go", "terminated", "wrongful termination"],
    related: ["How do I apply for Arbeitslosengeld?", "What is a Betriebsrat?", "How do I get a good Arbeitszeugnis?"],
    answer: () => `Being fired in Germany is **difficult**, which is why so few people are and so many are "freigestellt" instead.

**Kündigungsschutzgesetz** (applies after 6 months, in companies with more than 10 employees):
1. The dismissal must be *sozial gerechtfertigt*: for personal, behavioural or operational reasons.
2. Behavioural reasons usually require an **Abmahnung** (formal warning) first. For stealing a pen, maybe two.
3. The **Betriebsrat** must be consulted, or the dismissal is void.
4. The dismissal must be in **writing**, signed by hand. A WhatsApp with a sad emoji is not a Kündigung.

You have **3 weeks** to file a *Kündigungsschutzklage* at the Arbeitsgericht. Most cases end with an *Abfindung* (severance) and a very nice Arbeitszeugnis that nobody believes.`,
  },
  {
    id: "work-homeoffice",
    keywords: ["homeoffice", "work from home", "working from home", "remote work", "work remotely", "remote job", "mobiles arbeiten", "mobile work", "telearbeit"],
    related: ["Can I deduct my home office?", "What are the Ruhezeiten?", "Why is there no mobile signal?"],
    answer: () => `**Homeoffice** in Germany is a right in spirit but not in law. Your employer may allow it, and will then regulate it.

**Standard Homeoffice-Vereinbarung (27 pages):**
- A dedicated workstation with a proper desk chair (ergonomic, certified, not the sofa)
- The **Arbeitsstättenverordnung** applies: sufficient daylight, a screen at the correct distance, a "Sichtverbindung nach außen" (a window, see *Lüften*)
- Data protection: close the door. Frau Schulze can hear through walls.
- Working time must be recorded. Yes, also at home. Yes, also the 7 minutes you spent hanging laundry, which must be *subtracted*.

**Tax:** You may deduct the *Homeoffice-Pauschale* of € 6 per day, up to 210 days. That is € 1.260, or roughly what the ergonomic chair cost.

Your camera must be on during meetings. Your Hausschuhe need not be visible.`,
  },
  {
    id: "work-ksk",
    keywords: ["künstlersozialkasse", "ksk", "scheinselbst", "pseudo self-employ", "fake self-employ", "freelance artist", "artist insurance", "freelance musician", "freelance writer", "freiberufler"],
    related: ["Do I need to charge VAT as a freelancer?", "Do I need a Steuerberater?", "How do I register my new business?"],
    answer: () => `**For artists and publicists:** the **Künstlersozialkasse** (KSK) pays the "employer's half" of your social insurance, funded by a levy on companies that hire artists. It is one of the most generous things the German state does, and therefore one of the hardest to get into.

**Application requires:** portfolio, invoices, proof of "künstlerische Tätigkeit", a questionnaire, and a convincing answer to *"Is web design art?"* (It depends. On what, nobody knows.)

**Scheinselbstständigkeit** (fake self-employment): if you have one main client, fixed hours, and a company email address, the **Deutsche Rentenversicherung** may decide you were an employee all along. Retroactively. For four years. Your client then owes the contributions, and you both owe an explanation.

Tip: request a *Statusfeststellungsverfahren*. Processing time: long enough to finish the project.`,
  },
  {
    id: "work-altersvorsorge",
    keywords: ["riester", "rürup", "altersvorsorge", "private pension", "company pension", "betriebsrente", "retirement savings", "retirement plan", "old age provision"],
    related: ["How do I save money in Germany?", "When can I retire?", "Why is my netto so much lower than my brutto?"],
    answer: () => `Your statutory pension will not be enough. This is official. The state therefore recommends **private Altersvorsorge**, which it has made as complex as possible so you'll really appreciate it.

- **Riester-Rente:** state subsidies (*Zulagen*) for a contract with fees high enough to eat the subsidies. Requires a *Zulagenantrag*, annually, or a Dauerzulagenantrag, which you forgot.
- **Rürup-Rente (Basisrente):** tax-deductible. Cannot be inherited, sold, borrowed against, or understood.
- **Betriebsrente:** your employer pays in. Or you pay in via *Entgeltumwandlung*. On payout, you pay Krankenkasse contributions on it. Twice, emotionally.

**Expert advice:** consult an independent *Honorarberater*, not the friendly man at the bank whose independence ends where his commission begins.`,
  },
  {
    id: "work-savings",
    keywords: ["sparbuch", "bausparvertrag", "bauspar", "savings", "save money", "saving money", "sparen", "invest", "etf", "stocks", "aktien", "zinsen", "interest rate", "tagesgeld", "festgeld"],
    related: ["Do I have to pay into a private pension?", "Why is everything so expensive?", "How do I open a bank account?"],
    answer: () => `Germans save. It is not a hobby; it is a personality.

**Traditional instruments, in order of emotional attachment:**
1. The **Sparbuch** — a physical booklet in which the bank prints your 0,01% interest. Proudly kept since your Konfirmation.
2. The **Bausparvertrag** — you save for 7 years at low interest in order to later borrow at low interest, to build a house you will clean every Saturday.
3. **Cash under the mattress** — see *Bargeld*.
4. **Aktien/ETFs** — considered gambling by your grandmother, *"Spekulation"* by your uncle, and *"ganz normal"* by your colleague who won't stop talking about his Sparplan.

**Taxes:** capital gains above the *Sparerpauschbetrag* (€ 1.000) are taxed. Please submit a *Freistellungsauftrag* to every bank, and do not exceed the total, or the Finanzamt will be disappointed in you.`,
  },
  {
    id: "work-taxrefund",
    keywords: ["tax refund", "tax back", "tax return deadline", "steuererstattung", "steuerrückzahlung", "lohnsteuerjahresausgleich", "lohnsteuer", "werbungskosten", "pendlerpauschale", "commuter allowance"],
    related: ["Do I need a Steuerberater?", "Which Steuerklasse am I in?", "Can I deduct my home office?"],
    answer: () => {
      const amount = randInt(12, 1400);
      return `Good news: on average, employees who file a **Steuererklärung** receive a refund. Bad news: you have to file a Steuererklärung.

**Frequently deductible (Werbungskosten):**
- **Pendlerpauschale:** € 0,30 per km (one way!) for the first 20 km, € 0,38 after. The route must be the *shortest*, unless the longer one is *obviously more practical*, which you must prove.
- Work equipment, professional literature, Fortbildungen, the laptop bag
- The Arbeitnehmerpauschbetrag of € 1.230 is deducted automatically, which means your first € 1.230 of receipts were collected for nothing

**Your estimated refund:** € ${amount},${pick(["00", "17", "42"])}. Paid out in **${randInt(6, 14)} weeks**, after a *Rückfrage* asking you to explain the laptop bag.

You may file voluntarily for up to **4 years** backwards. That shoebox of receipts is legally a treasure chest.`;
    },
  },
  {
    id: "work-bonus",
    keywords: ["weihnachtsgeld", "christmas bonus", "13th salary", "13th month", "13. gehalt", "13. monatsgehalt", "urlaubsgeld", "holiday pay", "vacation pay", "bonus"],
    related: ["How do I ask for a raise?", "Why is my netto so much lower than my brutto?", "What is a Brückentag?"],
    answer: () => `**Weihnachtsgeld** (Christmas bonus) and **Urlaubsgeld** (holiday pay) are not required by law. They are required by *tradition*, which in Germany is stronger.

- If paid **three years in a row without a reservation**, it may become a *betriebliche Übung* — a right by habit. HR therefore adds *"freiwillig und ohne Anerkennung einer Rechtspflicht"* to every payslip, including the ones without a bonus.
- A **13. Monatsgehalt** is split across November and December, which is taxed at a rate that feels personal.
- In the public sector it is called *Jahressonderzahlung*, because even joy needs a proper name.

The Weihnachtsgeld will be spent on: Christmas presents, the Weihnachtsmarkt, and the Nebenkostennachzahlung arriving on 23 December.`,
  },
  {
    id: "work-salary",
    keywords: ["salary", "gehalt", "earn", "how much do you make", "how much do people make", "raise", "pay rise", "gehaltserhöhung", "negotiat", "verdien", "mindestlohn", "minimum wage", "wage"],
    related: ["Do I get a Christmas bonus?", "Why is my netto so much lower than my brutto?", "What is a Minijob?"],
    answer: () => `In Germany, one does not talk about money. One thinks about it constantly and very quietly.

**Etiquette:**
- Asking a colleague's salary is considered more intimate than asking about their medical history.
- Salary transparency laws exist (*Entgelttransparenzgesetz*). They allow you to request the median salary of a comparison group of at least six colleagues of the other gender. In writing. Nobody has ever done it.
- The **Mindestlohn** (minimum wage) is set by a commission, announced in a press conference, and discussed at every Stammtisch as either too high or too low.

**Asking for a raise:** book a *Jahresgespräch*. Bring a list of achievements, printed. Your boss will say *"Da muss ich mal schauen"* (I'll have to look into it). Schauen takes 12 months. Repeat.`,
  },
  {
    id: "work-strike",
    keywords: ["strike", "streik", "gewerkschaft", "trade union", "union", "join a union", "labour union", "labor union", "verdi", "tarifvertrag", "collective agreement", "betriebsrat", "works council", "warnstreik"],
    related: ["Why is my Deutsche Bahn train delayed?", "Can my employer fire me?", "How do I ask for a raise?"],
    answer: () => `Striking in Germany is a **constitutional right** (Art. 9 GG) and a precisely scheduled event.

**Typical sequence:**
1. The **Gewerkschaft** (union) and employers negotiate a *Tarifvertrag*.
2. Talks fail on the first day, as planned.
3. A **Warnstreik** (warning strike) is announced, usually 48 hours in advance, affecting trains, airports, Kitas or the garbage collection — preferably all of them on the same Monday.
4. An *Urabstimmung* (member vote) authorises an unlimited strike.
5. An agreement is reached at 3:00 a.m. in a hotel in Potsdam. Everybody is exhausted and says it was *"ein schmerzhafter Kompromiss"*.

At company level, the **Betriebsrat** (works council) must be consulted on overtime, working hours, and whether the new coffee machine collects data.`,
  },
  {
    id: "work-application",
    keywords: ["job application", "apply for a job", "applying for jobs", "apply for jobs", "bewerb", "lebenslauf", "cv", "resume", "résumé", "cover letter", "anschreiben", "job interview", "interview", "vorstellungsgespräch", "find a job", "job search", "jobsuche"],
    related: ["Can I get my foreign degree recognised?", "What happens during the Probezeit?", "How do I get a good Arbeitszeugnis?"],
    answer: () => `**The German Bewerbungsmappe (application folder) contains:**

1. **Anschreiben** (cover letter): one page, beginning with *"Sehr geehrte Damen und Herren, hiermit bewerbe ich mich…"*, ending with *"Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr."* Enthusiasm in between is optional and suspicious.
2. **Lebenslauf** (CV): tabular, chronological, with a professional **photo** (optional by law, expected by culture), dated and **signed**.
3. **Zeugnisse:** every school report since the 4th grade, Abitur, university, every Arbeitszeugnis, and the Seepferdchen swimming certificate (just in case).

Gaps in your CV must be explained. *"Sabbatical"* is acceptable. *"Found myself"* is not a recognised qualification.

The interview will include the question: *"Wo sehen Sie sich in fünf Jahren?"* The correct answer is *"Hier."*`,
  },
  {
    id: "work-vat",
    keywords: ["umsatzsteuer", "mehrwertsteuer", "vat", "charge vat", "vat as a freelancer", "sales tax", "kleinunternehmer", "small business rule", "invoice", "ust-id", "vat number", "tax number", "steuernummer", "reverse charge"],
    related: ["Do I need a Steuerberater?", "How do I register my new business?", "Do I need to join the Künstlersozialkasse?"],
    answer: () => `**Umsatzsteuer (VAT) for the self-employed:**

- Standard rate: **19%**. Reduced rate: **7%**, for food, books, and some things that follow no logic (a cappuccino to take away: 7%; the same cappuccino sitting down: 19%).
- **Kleinunternehmerregelung** (§ 19 UStG): below the turnover threshold you may skip VAT. Your invoice must then say so, verbatim, or it is not an invoice, it is a letter.
- A valid invoice contains: full name and address of both parties, **Steuernummer** or **USt-IdNr.**, date, consecutive invoice number, delivery date, net amount, tax rate, tax amount, gross amount, and a small prayer.
- **Umsatzsteuervoranmeldung**: monthly or quarterly, via ELSTER, by the 10th. Late? *Verspätungszuschlag*.

Invoice numbers must be consecutive. A missing number will be noticed, in 2031, during the Betriebsprüfung.`,
  },
  {
    id: "work-inflation",
    keywords: ["inflation", "prices", "expensive", "teuer", "cost of living", "preise", "price increase", "everything costs", "why is everything"],
    related: ["How do I save money in Germany?", "How do I ask for a raise?", "Is beer food?"],
    answer: () => `**Why is everything so expensive? — Official statement:**

The *Statistisches Bundesamt* measures inflation using a *Warenkorb* (basket of goods) of approximately 650 items, weighted by what the average household buys. The average household is fictional, but very consistent.

**Official observations:**
- The Döner was € 3,50. Then € 5. Then € 7,50. There is now a political discussion about a *Dönerpreisbremse*. We are not joking. Well, we are, but they were not.
- Butter prices are reported on the evening news with the gravity of a natural disaster.
- Your rent, heating and electricity are rising, but so is your *Nebenkostennachzahlung*, which balances out emotionally.

Recommended coping strategy: complain at the Bäckerei, loudly but politely, then buy the same Brötchen.`,
  },
  {
    id: "work-steuerberater",
    keywords: ["steuerberater", "tax advisor", "tax adviser", "tax consultant", "accountant", "lohnsteuerhilfe", "buchhalter", "bookkeeping", "buchhaltung", "tax software"],
    related: ["How do I get a tax refund?", "Do I need to charge VAT as a freelancer?", "Which Steuerklasse am I in?"],
    answer: () => `A **Steuerberater** (tax advisor) is the only person in Germany who understands the tax system, and they are not allowed to explain it to you for free.

- Fees follow the *Steuerberatervergütungsverordnung* (StBVV) — a fee schedule so detailed it is itself tax literature
- New clients: the good ones are not taking any. The available ones have a reason.
- Employees with simple cases may join a **Lohnsteuerhilfeverein**, a club with a membership fee whose only activity is filling in your forms. Very German. Very efficient.
- Alternative: **tax software**, which asks 400 friendly questions and then reveals that you forgot Anlage N.

Please bring your documents sorted, in a folder, with a list of contents. Your Steuerberater will sort them again anyway, but will think better of you.`,
  },
];
