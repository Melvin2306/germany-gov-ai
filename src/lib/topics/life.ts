import { randInt, type Topic } from "./shared";

// Life admin, insurance and big life events.
export const lifeTopics: Topic[] = [
  {
    id: "life-haftpflicht",
    keywords: ["haftpflicht", "privathaftpflicht", "liability insurance", "personal liability", "i broke", "broke my friend", "broke my neighbour", "damaged my", "beschadigt", "kaputt gemacht", "who pays if i break"],
    related: ["Do I need household contents insurance?", "How many insurances do Germans have?", "Who is Frau Schulze?"],
    answer: (c) => `The **Private Haftpflichtversicherung** (personal liability insurance) is the most German object in existence. 85% of households have one. The other 15% are considered a risk to public order.

**Covered:**
- You knock over your friend's IKEA shelf
- Your child scratches a Porsche with a Laugenbrezel
- You flood the apartment below (Frau Schulze's — she will mention it until 2041)

**Not covered:** intent, pets that are "Listenhunde", and anything you did not report within 7 days using ${c.form()}.

Premium: approx. ${c.fee} per year. At German dinner parties, *"Hast du eine Haftpflicht?"* is considered small talk.`,
  },
  {
    id: "life-hausrat",
    keywords: ["hausrat", "hausratversicherung", "contents insurance", "household insurance", "home contents", "burglary insurance", "home insurance", "stuff insured"],
    related: ["Do I need liability insurance?", "How do I report a burglary to the police?", "How many insurances do Germans have?"],
    answer: () => `The **Hausratversicherung** (household contents insurance) protects everything in your home that would fall out if you turned the apartment upside down.

**To make a claim you need:**
1. A police report (*Anzeige*), if stolen
2. Receipts for every item, ideally laminated
3. Photos of the items *before* they were stolen, taken for no reason, as all Germans do
4. Proof that the window was **closed** — a tilted window (*gekippt*) counts as an open invitation and voids coverage

**Unterversicherung** warning: if your insured sum is too low, the insurer pays proportionally less. The insured sum is too low. It is always too low.`,
  },
  {
    id: "life-versicherungen",
    keywords: ["how many insurance", "which insurance", "insurances", "insurance agent", "insurance broker", "versicherungsvertreter", "versicherungsmakler", "versicherungen", "need insurance", "insurance do i need", "zahnzusatz", "berufsunfahigkeit", "disability insurance", "insurance salesman"],
    related: ["Do I need liability insurance?", "Should I get private or public insurance?", "What is a Riester-Rente?"],
    answer: () => `The average German household holds **${randInt(7, 17)} insurance policies** (Versicherungen), filed in a dedicated Leitz-Ordner labelled *"Versicherungen"*.

**The Standard-Paket:**
- Haftpflicht (non-negotiable)
- Hausrat
- Berufsunfähigkeit (occupational disability)
- Zahnzusatz (dental top-up, because the Krankenkasse covers only teeth it approves of)
- Rechtsschutz (legal costs — for disputes with the other insurances)
- Reiserücktritt (in case the Deutsche Bahn makes you miss your holiday)
- Handyversicherung, Brillenversicherung, Fahrradversicherung

A **Versicherungsvertreter** will visit you with a laptop and a sense of urgency. The meeting lasts 3 hours. You will leave with 2 new policies and no memory of signing.`,
  },
  {
    id: "life-erbe",
    keywords: ["testament", "erbschein", "erbschaft", "inheritance", "inherit", "erben", "nachlass", "make a will", "write a will", "last will", "my will", "heir", "inherit my", "will inherit", "erbschaftssteuer", "estate"],
    related: ["What happens with the paperwork when someone dies?", "What is a Vorsorgevollmacht?", "Where do I get a certified copy?"],
    answer: (c) => `**Inheritance (Erbrecht) — the essentials:**

- A handwritten **Testament** is valid if written *entirely by hand* and signed. A typed and printed will is merely a document with ambitions.
- Alternatively: a **notarial will** (from ${c.fee}, plus a Termin on **${c.termin}**).
- To prove you are the heir, you need an **Erbschein** from the Nachlassgericht (probate court). Processing time: ${c.wait} weeks, or longer if there is a cousin.
- The **Pflichtteil** ensures close relatives get something, even if you left everything to your Kleingartenverein.

Tip: Keep your Testament somewhere findable. "Somewhere in the Ordner" is not findable.`,
  },
  {
    id: "life-funeral",
    keywords: ["funeral", "beerdigung", "bestattung", "friedhof", "cemetery", "graveyard", "grave", "grabpflege", "grabstelle", "urne", "urn", "ashes", "someone died", "someone dies", "when someone die", "passed away", "death certificate", "sterbeurkunde", "sterbefall", "died"],
    related: ["How does inheritance work?", "Can I be an organ donor?", "What is a Patientenverfügung?"],
    answer: () => `Our sincere condolences. The paperwork, regrettably, does not pause.

**After a death (Sterbefall):**
1. A doctor issues the *Totenschein*
2. The death is registered at the **Standesamt** within 3 working days, which issues the **Sterbeurkunde** — order several copies, every institution wants an original
3. Banks, Krankenkasse, Rentenversicherung, Rundfunkbeitrag and the gym contract must all be informed (the gym contract will still try to renew)

**Bestattungspflicht:** Germany has mandatory burial rules and, in most Bundesländer, **Friedhofszwang** — ashes may not simply be kept on the mantelpiece. Graves are rented, typically for 20–25 years, with a *Grabpflege* standard that the neighbouring grave will quietly judge.

A Bestatter (funeral director) handles most of the forms. Let them.`,
  },
  {
    id: "life-kirchenaustritt",
    keywords: ["kirchenaustritt", "leave the church", "leaving the church", "aus der kirche", "austreten", "quit the church", "church exit", "stop paying church"],
    related: ["What is the Kirchensteuer?", "How do I get an appointment at the Bürgeramt?", "How do I change my Steuerklasse?"],
    answer: (c) => `Leaving the church (**Kirchenaustritt**) is a purely administrative act. Faith is not affected; only the Lohnsteuerabrechnung.

**Procedure:**
1. Book a Termin at the **Standesamt** or **Amtsgericht** (depending on Bundesland). Next available: **${c.termin}**.
2. Bring your Personalausweis and, ideally, proof of baptism, which your parents keep in a shoebox.
3. Pay the fee: ${c.fee}. Yes, leaving costs money. The irony has been noted and filed.
4. Receive the **Austrittsbescheinigung**. Keep it forever. The Finanzamt may ask about it in 2047.

The Kirchensteuer (8–9% of your income tax) stops from the following month. Weddings in the church, however, may become more complicated. Please plan accordingly.`,
  },
  {
    id: "life-namechange",
    keywords: ["namensanderung", "change my name", "change my surname", "change my last name", "name change", "nachnamen andern", "namen andern", "doppelname", "double-barrelled", "double barrelled", "hyphenated name", "take his name", "take her name"],
    related: ["How do I get married in Germany?", "How do I get a new passport?", "What is a certified copy?"],
    answer: (c) => `Your name is a legal fact, not a personal preference. Changing it (**Namensänderung**) is possible in two ways:

**1. By marriage:** choose a shared *Ehename*, keep your own, or form a **Doppelname** (e.g. *Müller-Lüdenscheidt*). Triple names are not permitted. We've seen what happens.

**2. Öffentlich-rechtliche Namensänderung:** only for a *wichtiger Grund* (important reason). "I don't like it" is not important. "The Standesamt spelled it *Müllerr* in 1994" might be.
- Application via ${c.form()}
- Gebühr: up to € 1.022
- Processing time: ${c.wait} weeks

Afterwards, update: Personalausweis, Reisepass, Führerschein, bank, Krankenkasse, employer, Klingelschild, and Frau Schulze.`,
  },
  {
    id: "life-vollmacht",
    keywords: ["vollmacht", "vorsorgevollmacht", "power of attorney", "patientenverfugung", "living will", "advance directive", "betreuungsverfugung", "betreuung", "legal guardian"],
    related: ["How does inheritance work?", "How do I apply for a Pflegegrad?", "Can I be an organ donor?"],
    answer: () => `A **Vorsorgevollmacht** (lasting power of attorney) lets someone act for you if you can't. Without one, a court may appoint a *Betreuer* — even for married couples. Being married, surprisingly, is not a Vollmacht.

**The German Vorsorge-Trio:**
- **Vorsorgevollmacht** — who decides
- **Betreuungsverfügung** — who the court should pick if it has to
- **Patientenverfügung** — what doctors may and may not do

The Patientenverfügung must be *specific*. "No machines" is too vague. "No machines, except the coffee machine in the ward" is closer.

Register everything with the **Zentrales Vorsorgeregister** of the Bundesnotarkammer (small fee). Then put a copy in the Ordner. Then tell someone where the Ordner is.`,
  },
  {
    id: "life-ordner",
    keywords: ["how long do i keep", "how long should i keep", "keep documents", "keep my documents", "keep old documents", "aufbewahr", "aufheben", "throw away old", "shred", "paperwork", "leitz", "ordner", "filing system", "paperwork at home", "organise my paperwork", "organize my paperwork"],
    related: ["How long do I have to keep my tax documents?", "Do I need a Steuerberater?", "Is the fax secure?"],
    answer: () => `Every German household runs a private archive. **Standard shelving:**

- 🔵 **Ordner 1:** Versicherungen
- 🔴 **Ordner 2:** Steuer (by year, since 1994)
- 🟢 **Ordner 3:** Verträge (including the 2006 mobile contract, cancelled, but you never know)
- 🟡 **Ordner 4:** Zeugnisse (school, work, swimming)
- ⚫ **Ordner 5:** "Sonstiges" (the real archive)

**Aufbewahrungsfristen (retention guidance):**
- Tax-relevant documents: 10 years for businesses; private individuals — keep them "sufficiently long", which Germans interpret as "forever"
- Rentenversicherung, Zeugnisse, Geburtsurkunde: **forever**
- Kontoauszüge: at least until the Finanzamt stops being curious

Shredding documents is permitted, but it will feel like a Straftat.`,
  },
  {
    id: "life-organspende",
    keywords: ["organspende", "organ donor", "organ donation", "donate my organs", "organspendeausweis", "donor card", "blutspende", "donate blood", "blood donation"],
    related: ["What is a Patientenverfügung?", "How do I see a doctor?", "How do I find a Hausarzt?"],
    answer: () => `Germany uses the **Entscheidungslösung**: you are *not* an organ donor unless you actively say so. Silence is, as always, interpreted as "Nein".

**How to register your decision:**
- The **Organspendeausweis** — a small orange card for your wallet, filled in by hand, between the Bahncard and the Payback card
- The **Organspende-Register** (online since 2024 — yes, a digital register, we are also surprised; you need your Online-Ausweis)

You can say yes, no, "only certain organs", or name a person to decide. All valid. Changing your mind is allowed at any time and requires no Formular. This is the only area of German administration where that is true.

**Blood donation (Blutspende):** DRK, local Blutspendetermin, free sandwiches. Highly recommended.`,
  },
  {
    id: "life-geburtsurkunde",
    keywords: ["geburtsurkunde", "birth certificate", "abstammungsurkunde", "geburtsregister", "proof of birth"],
    related: ["What is a certified copy?", "How do I get married in Germany?", "How do I get a new passport?"],
    answer: (c) => `Your **Geburtsurkunde** (birth certificate) is issued by the **Standesamt of the place where you were born** — not where you live. If you were born in Wanne-Eickel, Wanne-Eickel is your Standesamt forever.

**To request a copy:**
- Apply in writing or (in some cities) online, stating your full name, date and place of birth, and the reason
- Gebühr: ${c.fee} per copy — order three, everyone wants an original
- International version (*mehrsprachig*): available, useful, and still rejected by some offices as "not the right one"

Many authorities require a certificate **not older than 6 months**. Your birth has not changed in 6 months. The paper, however, has aged, and that is what counts.`,
  },
  {
    id: "life-birth-registration",
    keywords: ["register a birth", "register my baby", "register the birth", "register our baby", "newborn", "neugeboren", "baby was born", "baby is born", "just had a baby", "geburtsanzeige", "geburt anmelden", "birth registration"],
    related: ["What should I name my baby?", "How do I apply for Kindergeld?", "What is Elterngeld?"],
    answer: (c) => `Congratulations! Your child now exists biologically. Administratively, it does not yet.

**Registering a birth (Geburtsanzeige):**
1. The hospital notifies the Standesamt within **one week**. Home births: you do it.
2. Bring: your Geburtsurkunden, Heiratsurkunde (if married), IDs, and a **Vaterschaftsanerkennung** if unmarried
3. Choose a first name the Standesamt approves of (see *Vornamen*)
4. Receive the Geburtsurkunde for your baby — plus special copies "for Kindergeld", "for Elterngeld" and "for the Krankenkasse"

Then the **Steuer-ID** arrives by post, unprompted, within a few weeks. It is the first letter your child receives from the state. It will not be the last.

Next free Standesamt Termin: **${c.termin}**. The baby may be able to attend on foot.`,
  },
  {
    id: "life-unmarried",
    keywords: ["unmarried", "not married", "unverheiratet", "without being married", "live together", "zusammenleben", "wilde ehe", "cohabit", "vaterschaftsanerkennung", "paternity", "sorgerecht", "custody", "lebenspartner", "partnership without"],
    related: ["How do I register a birth?", "How do I get married in Germany?", "What is a Vorsorgevollmacht?"],
    answer: (c) => `Living together without marriage (formerly, charmingly, *"wilde Ehe"*) is fully legal. Legally, however, you are two strangers who happen to share a Kühlschrank.

**What you should know:**
- **No automatic inheritance.** Write a Testament, or your partner inherits nothing and your aunt inherits your air fryer.
- **No automatic authority** in hospitals — get a Vorsorgevollmacht.
- **Children:** the father must do a **Vaterschaftsanerkennung** (Jugendamt or Standesamt, free), and a separate **Sorgeerklärung** for joint custody. Two appointments, next available: **${c.termin}**.
- **Taxes:** no Ehegattensplitting. The Finanzamt considers your love tax-neutral.

Tip: a Partnerschaftsvertrag (cohabitation agreement) exists. Nobody has ever read one aloud without an argument.`,
  },
  {
    id: "life-schufa-entry",
    keywords: ["schufa entry", "schufa eintrag", "schufa-eintrag", "negative schufa", "remove schufa", "delete my schufa", "schufa loschen", "schufa auskunft", "schufa score", "bad schufa", "improve my schufa"],
    related: ["How do I open a bank account?", "How do I rent an apartment?", "I'm in debt, where can I get help?"],
    answer: () => `A **negative Schufa-Eintrag** is the German equivalent of a scarlet letter, except it is kept in Wiesbaden and nobody may see it except everyone.

**Your options:**
1. Request your free **Datenkopie** (Art. 15 DSGVO) — once a year, free, by post, arriving in a very serious envelope
2. Check for errors. Errors can be corrected. *Your* errors cannot.
3. Settled debts are generally deleted **3 years** after being paid (they are now faster in some cases — check your Datenkopie)
4. Improve your score by: having an account, paying on time, not moving too often, and generally being boring

**Do not** pay companies promising to "delete your Schufa". Nobody deletes the Schufa. The Schufa is eternal.`,
  },
  {
    id: "life-debt",
    keywords: ["schuldnerberatung", "debt", "schulden", "in debt", "can't pay", "cannot pay", "privatinsolvenz", "insolvency", "insolvenz", "bankrupt", "pay my bills", "owe money"],
    related: ["I got a letter from an Inkasso company", "How do I get a Schufa entry removed?", "How do I cancel a contract?"],
    answer: () => `This one we say plainly: **free, confidential help exists.** Recognised **Schuldnerberatungsstellen** (debt counselling — run by Caritas, Diakonie, AWO, Verbraucherzentralen and municipalities) help with budgets, creditors and letters, at no cost.

**The German process, briefly:**
1. Open every letter. Yes, all of them. Sort them into an Ordner (of course).
2. Contact a Schuldnerberatung — waiting lists exist, but urgent cases (e.g. account seizure) are often prioritised
3. A **P-Konto** (Pfändungsschutzkonto) protects a basic amount on your account — every bank must offer one
4. As a last resort: **Privatinsolvenz**, after which you may be debt-free in about 3 years

Beware of paid "debt relief" offers online. The real help is free. The fake help has great graphic design.`,
  },
  {
    id: "life-inkasso",
    keywords: ["inkasso", "inkasso company", "inkasso firm", "debt collector", "collection agency", "debt collection", "mahnung", "mahnbescheid", "payment reminder", "zahlungserinnerung", "reminder letter", "overdue invoice", "letter demanding money"],
    related: ["I'm in debt, where can I get help?", "How do I file a Widerspruch?", "How do I get a Schufa entry removed?"],
    answer: () => `**The German payment escalation ladder:**

1. **Rechnung** (invoice) — polite
2. **Zahlungserinnerung** — "Sicherlich haben Sie übersehen…"
3. **1. Mahnung** — the tone cools by 4 degrees
4. **2. Mahnung, letzte Mahnung, allerletzte Mahnung** — increasingly bold fonts
5. **Inkasso** — a company with a name like "Deutsche Forderungsmanagement Service AG" adds fees
6. **Gerichtlicher Mahnbescheid** — a yellow envelope from the court

**If you get a gerichtlicher Mahnbescheid:** you have **2 weeks** to file a *Widerspruch* if the claim is wrong. Do not ignore yellow envelopes.

Check Inkasso letters carefully: some are fake, and the fees are often inflated. The Verbraucherzentrale can help. If the debt is real, see *Schuldnerberatung*.`,
  },
  {
    id: "life-18",
    keywords: ["turn 18", "turning 18", "volljahrig", "volljahrigkeit", "18th birthday", "18 geburtstag", "coming of age", "become an adult", "when i'm 18", "at 18", "mit 18", "ab 18"],
    related: ["How do I open a bank account?", "How do I vote in Germany?", "What is Fahrschule like?"],
    answer: () => `Congratulations on your **Volljährigkeit** (legal adulthood)! At 18 you may, legally:

- Sign contracts (including a 24-month gym contract, see *Kündigung*)
- Vote in Bundestag elections
- Drive a car without an accompanying adult (*begleitetes Fahren ab 17* ends)
- Buy spirits (beer and wine since 16, in accordance with national priorities)
- Be liable for your own **Haftpflicht** — your parents' policy may still cover you during Ausbildung/studies. Check. Germans always check.

Things that do **not** change at 18: you still need a Termin, you still separate your trash, and Frau Schulze still calls you by your first name.`,
  },
  {
    id: "life-lotto",
    keywords: ["lotto", "lottery", "lotterie", "jackpot", "6 aus 49", "sechs richtige", "rubbellos", "scratch card", "win the lottery", "gewinnspiel", "eurojackpot"],
    related: ["Do I have to pay tax on my savings?", "Is saving money a German thing?", "Tell me a joke"],
    answer: () => `**Lotto 6 aus 49** — every Wednesday and Saturday, drawn live, watched by millions who then say *"Nächstes Mal"*.

- Chance of the jackpot (6 correct + Superzahl): approx. **1 in 140 million**. You are statistically more likely to get a Bürgeramt Termin next week.
- Lottery winnings are **tax-free** in Germany. The interest on them, of course, is not.
- The ticket is filled in with a pen, at a Kiosk, crossing boxes — the last fully analogue mass procedure in the country, and it works perfectly.

If you win: tell no one, keep the Spielquittung in the Ordner, and continue separating your trash so the neighbours don't notice.`,
  },
];
