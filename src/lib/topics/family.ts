import { randInt, type Topic } from "./shared";

// Family, health and education. More specific than the core "kita" and
// "health" topics; multi-word keywords let these win on specific questions.
export const familyTopics: Topic[] = [
  {
    id: "family-homeschool",
    keywords: ["homeschool", "home school", "home-school", "schulpflicht", "hausunterricht", "unschool", "compulsory school", "school attendance", "skip school", "out of school", "schwänz"],
    related: ["Which school should my child go to?", "How do I get a Kita place for my child?", "What is the Einschulung?"],
    answer: () => `**Homeschooling is not permitted in Germany.** Schulpflicht (compulsory schooling) applies from age 6 for 9–10 years, depending on the Bundesland.

- Teaching your child at home: **Ordnungswidrigkeit**
- Taking your child on holiday 2 days before the Sommerferien to save € 800 on flights: **Ordnungswidrigkeit**, with airport inspections by the Ordnungsamt (this is real)
- Your child being "not a morning person": not a recognised exemption

The state believes that children learn best in a building with a 1970s linoleum floor, a broken projector and a **Hausmeister** who has been there since the building opened.

Exemptions may be requested via Formular S-1 (Befreiung von der Schulpflicht). Approval rate since 1919: 0%.`,
  },
  {
    id: "family-schoolsystem",
    keywords: ["gymnasium", "realschule", "hauptschule", "gesamtschule", "grundschule", "primary school", "secondary school", "school system", "schulsystem", "which school", "school recommendation", "schulempfehlung", "grade 4", "fourth grade"],
    related: ["What is the Abitur?", "Can I homeschool my child?", "How does an Ausbildung work?"],
    answer: () => `**The German school system — simplified (it is not simple):**

1. **Grundschule** (primary school), grades 1–4
2. At age **10**, your child receives a **Schulempfehlung**, a recommendation that determines the rest of their life
3. **Gymnasium** (→ Abitur → university), **Realschule** (→ Mittlere Reife), **Hauptschule** (→ Ausbildung), or **Gesamtschule** (all of the above, depending on the Bundesland)

There are **16 Bundesländer** and therefore 16 school systems. Moving from Bavaria to Berlin is treated by your child's education as emigration.

Grades go from **1 (sehr gut)** to **6 (ungenügend)**. Yes, 1 is best. No, we will not discuss it.`,
  },
  {
    id: "family-abitur",
    keywords: ["abitur", "abi ", "a-levels", "a levels", "high school diploma", "matura", "abschlussprüfung", "final exams", "abiball", "numerus clausus"],
    related: ["How do I apply to university?", "What is BAföG?", "How does an Ausbildung work?"],
    answer: () => `The **Abitur** is the German university entrance qualification, awarded after 12 or 13 years of school (G8 or G9, depending on the Bundesland and the decade).

- Final grade (Abiturschnitt): **1,0 to 4,0**. It will be mentioned at every family gathering until you are 45.
- It decides your **Numerus Clausus**: to study medicine, you need a 1,0 and a waiting list position of approximately **${randInt(9, 16)} semesters**.
- Celebrations: the **Abiball** (formal ball), the **Abistreich** (organised prank, pre-approved by the Schulleitung in writing), and the **Abi-Zeitung**, a printed yearbook of lasting regret.

Your Abiturzeugnis should be kept forever. You will be asked for a beglaubigte Kopie at age 38 for no clear reason.`,
  },
  {
    id: "family-university",
    keywords: ["university", "universität", "universitaet", "hochschule", "studium", "study at", "studying in", "semesterbeitrag", "semester fee", "studiengebühr", "tuition", "enrol", "immatrikul", "student"],
    related: ["What is BAföG?", "What is the Abitur?", "How do I rent an apartment?"],
    answer: (c) => `Good news: **public universities in Germany charge no tuition fees** (mostly). Instead, you pay a **Semesterbeitrag** of about ${c.fee} per semester, which includes a public transport ticket and a sense of belonging.

**To enrol (Immatrikulation):**
1. Apply via **uni-assist** or **Hochschulstart**, portals designed to test whether you truly want to study
2. Submit beglaubigte Kopien of every certificate since kindergarten
3. Receive your **Zulassungsbescheid** (admission letter) 2 days before the semester starts
4. Find a room in a WG. There are none. Please see *housing*.

Lectures begin **c.t.** (cum tempore), i.e. 15 minutes after the stated time. This is the only institution in Germany where lateness is official policy.`,
  },
  {
    id: "family-bafoeg",
    keywords: ["bafög", "bafoeg", "bafog", "student loan", "student finance", "studienfinanzierung", "study grant", "funding for students"],
    related: ["How do I apply to university?", "Can I get a Minijob as a student?", "How do I rent an apartment?"],
    answer: (c) => `**BAföG** (Bundesausbildungsförderungsgesetz, the word itself counts as a qualification) is state financial aid for students.

- Half grant, half interest-free loan
- Calculated from **your parents' income**, including the parent you haven't spoken to since 2014 (they must still sign ${c.form()})
- Application: **Formblatt 1** plus Anlagen 1–9, proof of enrolment, rental contract, bank statements, and the income tax assessment of both parents from 2 years ago

**Processing time:** ${c.wait} weeks. Most students receive their first payment in the semester after they needed it.

Tip: apply online via "BAföG Digital". It generates a PDF, which you print, sign and post.`,
  },
  {
    id: "family-hebamme",
    keywords: ["hebamme", "midwife", "midwives", "geburtshaus", "birth center", "birth centre", "giving birth", "give birth", "pregnan", "schwanger", "geburtsvorbereitung"],
    related: ["What is Mutterschutz?", "What are the U-Untersuchungen?", "How do I apply for Elterngeld?"],
    answer: () => `Congratulations! Please book a **Hebamme** (midwife) immediately. Ideally before conception.

In Germany, statutory health insurance covers midwife care before and after birth. The coverage is excellent. The midwife is not available.

**Recommended procedure:**
1. Positive test → call **${randInt(25, 60)} midwives**
2. Receive ${randInt(20, 55)} voicemails ("Ich bin leider komplett ausgebucht bis Frühjahr ${new Date().getFullYear() + 1}")
3. Join a WhatsApp group of expectant parents sharing leaked midwife phone numbers
4. Receive your **Mutterpass**, a small blue booklet that will be stamped more often than your passport

The hospital will ask for your Mutterpass, insurance card and a packed bag. Please bring the bag. The paperwork will follow you home.`,
  },
  {
    id: "family-mutterschutz",
    keywords: ["mutterschutz", "maternity", "pregnant at work", "tell my employer", "beschäftigungsverbot", "mutterpass"],
    related: ["How do I find a midwife?", "How do I apply for Elterngeld?", "How many vacation days do I get?"],
    answer: () => `**Mutterschutz** (maternity protection) is one of the rare areas where German bureaucracy is on your side.

- **6 weeks before** and **8 weeks after** birth: no work, full pay (Mutterschaftsgeld from the Krankenkasse plus employer top-up)
- **Kündigungsschutz**: you cannot be dismissed during pregnancy and until 4 months after birth
- The employer must file a **Gefährdungsbeurteilung** (risk assessment) for your workplace, including your chair, your desk, and Klaus from Controlling

Please inform your employer and submit the **Bescheinigung über den mutmaßlichen Tag der Entbindung** (certificate of the presumed day of birth). The baby has not been informed of this date and does not consider it binding.`,
  },
  {
    id: "family-elterngeld",
    keywords: ["elterngeld beantragen", "elterngeld antrag", "elterngeld plus", "elterngeldplus", "partnerschaftsbonus", "apply for elterngeld", "elterngeldstelle", "parental allowance", "parental benefit"],
    related: ["What is Mutterschutz?", "How do I get a Kita place for my child?", "How long is Elternzeit?"],
    answer: (c) => `**Elterngeld** replaces 65–67% of your net income for up to 14 months (Basiselterngeld), or twice as long at half the amount (**ElterngeldPlus**), or a combination (**Partnerschaftsbonus**), or a combination of combinations.

**Application:** ${c.form()}, 26 pages, submitted to the **Elterngeldstelle** of your Bundesland, including:
- birth certificate (Geburtsurkunde "für Elterngeldzwecke", a special edition)
- payslips of the last 12 months
- a planning grid showing which parent takes which month, in colour

The Elterngeld calculator online has 11 steps and a result that is legally non-binding. The actual Bescheid arrives after about **${c.wait} weeks**, by which point your child can walk and has opinions about it.`,
  },
  {
    id: "family-kinderarzt",
    keywords: ["kinderarzt", "kinderärzt", "pediatrician", "paediatrician", "u-untersuchung", "untersuchungsheft", "gelbes heft", "yellow booklet", "children's doctor", "check-up for my baby", "u1", "u2", "u3"],
    related: ["What vaccinations does my child need?", "Where is the nearest pharmacy open at night?", "How do I find a midwife?"],
    answer: () => `The **Kinderarzt** (paediatrician) is the most sought-after person in Germany after the Hausmeister.

- Your child has a legal entitlement to **U-Untersuchungen** (check-ups U1 to U9, plus J1), documented in the **Gelbes Heft** (yellow booklet)
- The Gelbes Heft must be brought to every appointment, school enrolment, and possibly your child's wedding
- Missing a U-Untersuchung triggers a friendly letter from the Gesundheitsamt, and a less friendly one after that

**Finding a Kinderarzt:** practices display a sign *"Keine Neuaufnahmen"* (no new patients). Please register your child before birth. Even better: before you meet the other parent.

The waiting room contains a wooden bead maze from 1994. Every child in Germany has played with it. It has never been cleaned. This is considered good for the immune system.`,
  },
  {
    id: "family-impfung",
    keywords: ["impf", "impfpass", "vaccin", "jab", "masern", "measles", "booster", "stiko"],
    related: ["What are the U-Untersuchungen?", "How do I see a doctor?", "Where is the nearest pharmacy open at night?"],
    answer: () => `Vaccinations are recommended by the **STIKO** (Ständige Impfkommission) and documented in the **Impfpass**, a yellow paper booklet from the WHO.

- The Impfpass is the only medical record in Germany that is not digital. It is also the only one you have.
- Proof of **measles vaccination** is required for Kita and school (Masernschutzgesetz). Please bring the Impfpass. The original.
- Lost your Impfpass? Your doctor may issue a new one, provided you remember every vaccination since 1987 and which practice did it, and that practice still exists.

For which vaccinations you actually need, please ask your doctor. The Beamten-KI is qualified only in stamps.`,
  },
  {
    id: "family-apotheke",
    keywords: ["apotheke", "apothek", "pharmacy", "pharmacist", "chemist", "medication", "painkiller", "ibuprofen", "buy ibuprofen", "paracetamol", "aspirin", "prescription", "rezept", "globuli", "homöopath", "homeopath", "notdienst", "pharmacy open", "nearest pharmacy"],
    related: ["How do I see a doctor?", "What vaccinations does my child need?", "Can I go shopping on Sunday?"],
    answer: () => `**Medicine in Germany is sold only in the Apotheke** (pharmacy). Even ibuprofen. Even at 3 €. Supermarkets sell 38 types of sausage but no painkillers.

- Over-the-counter products are kept **behind the counter**, so you must describe your symptoms aloud to a pharmacist, in front of a queue of 6 people
- Prescriptions (**Rezept**) are now electronic (**E-Rezept**). You receive it on your insurance card. Or on a printed QR code. Or on the old pink paper, because the system is down.
- **Notdienst**: one pharmacy per district is open at night and on Sundays, typically located 23 km away, with a small hatch in the door

The pharmacy will also offer you *Globuli* (homeopathic sugar pellets), a calendar, and a Traubenzucker (dextrose) for the child who waited so bravely.`,
  },
  {
    id: "family-privat",
    keywords: ["privat versichert", "private insurance", "private health insurance", "privatpatient", "private or public", "public insurance", "public health insurance", "gesetzlich versichert", "statutory insurance", "pkv", "gkv", "beihilfe"],
    related: ["How do I see a doctor?", "How do I find a dentist?", "How do I do my tax return?"],
    answer: () => `Germany has two health insurance systems:

- **Gesetzlich (GKV):** ~90% of the population. Contribution based on income. Appointment in ${randInt(3, 9)} months.
- **Privat (PKV):** self-employed, high earners, Beamte. Contribution based on age and health. Appointment tomorrow. With coffee.

Private patients (**Privatpatienten**) receive a separate entrance, a separate waiting room and a separate invoice that they must pay first and then reclaim, together with Formular R-4.

**Warning:** Switching from private back to statutory insurance after age 55 is nearly impossible. The door to the PKV opens outwards only.

Beamte receive **Beihilfe**, a state subsidy for private insurance. This is a coincidence and unrelated to who writes the rules.`,
  },
  {
    id: "family-zahnarzt",
    keywords: ["zahnarzt", "zahnärzt", "find a dentist", "dental", "teeth", "tooth", "zahn", "zuzahlung", "zahnspange", "braces", "for braces", "bonusheft"],
    related: ["Should I get private or public insurance?", "How do I see a doctor?", "Where is the nearest pharmacy open at night?"],
    answer: () => `Dental care in Germany is covered by statutory insurance. **Partially.**

- Standard filling: covered. The standard is **amalgam-grey** and 1983-inspired.
- Anything white, modern or pleasant: **Zuzahlung** (co-payment) according to the **Heil- und Kostenplan**, which must be approved by your Krankenkasse before treatment. Your tooth has been asked to wait.
- **Bonusheft**: a paper booklet proving annual check-ups. With 10 years of stamps, your co-payment for dentures is reduced by 30%. Missing one year resets it. Please do not lose the Bonusheft.

Children with braces (**Zahnspange**) are covered if the misalignment reaches **KIG level 3** on a 5-level scale. Level 2 is considered "charakterbildend" (character-building).`,
  },
  {
    id: "family-therapie",
    keywords: ["therap", "psychotherap", "psycholog", "mental health", "counsel", "burnout", "psychiatr"],
    related: ["How do I see a doctor?", "How do I get a sick note?", "Can I speak to a human?"],
    answer: () => `Statutory insurance covers **psychotherapy**. The waiting list for a therapy place is currently **${randInt(4, 9)} months**, which is itself a test of resilience.

**Procedure:**
1. Book a **psychotherapeutische Sprechstunde** (initial consultation) via the Terminservicestelle **116117**
2. Receive a **PTV 11** form confirming that you need therapy
3. Call every therapist in a 40 km radius during their *telefonische Sprechzeit* (Tuesdays 12:10–12:35)
4. Join ${randInt(8, 20)} waiting lists

This is where the satire stops: **if you are in acute crisis, please call 112, or the Telefonseelsorge free of charge at 0800 111 0 111 or 0800 111 0 222**, 24/7. No Termin, no Formular, no Wartenummer. It is the one German service that is always open.`,
  },
  {
    id: "family-pflege",
    keywords: ["pflege", "nursing home", "care home", "elderly parent", "care level", "altenheim", "seniorenheim", "caregiver", "carer", "old people's home"],
    related: ["What pension will I get?", "Can I speak to a human?", "How do I get a certified copy?"],
    answer: (c) => `Caring for a relative is organised via the **Pflegekasse**, a sister institution of the Krankenkasse with its own forms, its own hotline and its own waiting music.

1. Apply for a **Pflegegrad** (care level 1–5) using ${c.form()}
2. The **Medizinischer Dienst** visits to assess care needs. Your relative, who has been unable to climb stairs for 2 years, will on that day climb stairs, bake a cake and say *"Mir geht's doch gut!"*
3. Receive a Bescheid with a Pflegegrad one level lower than necessary
4. File a Widerspruch (see *Widerspruch*)

A place in a **Pflegeheim** (care home) has a waiting list of about ${c.wait} weeks and a monthly personal contribution that will be explained to you at length by a brochure.`,
  },
  {
    id: "family-geburtstag",
    keywords: ["kindergeburtstag", "children's birthday", "childrens birthday", "kids birthday", "kid's birthday", "birthday party for my", "party for my kid", "party for my child"],
    related: ["What is the Einschulung?", "Can I mow my lawn on Sunday?", "What are the Ruhezeiten?"],
    answer: () => `**The Kindergeburtstag (children's birthday party) — official programme:**

1. **Invitations**: handwritten, distributed at Kita, to all children or none (equal treatment, Kita-Satzung § 7)
2. **Guest count**: age of the child + 1
3. **Games**: *Topfschlagen* (hitting a pot blindfolded with a wooden spoon), *Sackhüpfen* (sack race), *Schokoladenessen* with hat, scarf, gloves, knife and fork, and a treasure hunt with a hand-drawn map
4. **Food**: Würstchen, Nudelsalat, Marmorkuchen and apple slices nobody eats
5. **Mitgebsel**: a small goodbye bag for every guest, contents to be discussed in the parents' WhatsApp group (412 messages)

Parties in the garden must end before the **Nachtruhe** (22:00). Frau Schulze has already started a stopwatch.`,
  },
  {
    id: "family-einschulung",
    keywords: ["einschulung", "schultüte", "zuckertüte", "school cone", "first day of school", "first grade", "erstklässler", "school enrolment", "school enrollment", "schulranzen"],
    related: ["Which school should my child go to?", "Can I homeschool my child?", "How do I plan a children's birthday party?"],
    answer: () => `The **Einschulung** (first day of school) is a family event of the highest order, with its own ceremony, church service and dress code.

Mandatory equipment:
- **Schultüte**: a cardboard cone ~85 cm long filled with sweets and stationery, carried by the child, who is ~110 cm long
- **Schulranzen**: an ergonomic school backpack costing ${randInt(180, 320)} €, compliant with DIN 58124 (reflective surfaces required)
- a pencil case with 24 coloured pencils, all sharpened, all labelled with the child's name

The **Schuleingangsuntersuchung** (school entry medical exam) must be completed beforehand, including the question of whether the child can hop on one leg. This is the last time in the German school system that anyone will ask about your feelings.`,
  },
  {
    id: "family-laterne",
    keywords: ["laterne", "lantern", "sankt martin", "st. martin", "st martin", "martinstag", "martinsumzug"],
    related: ["What is the Einschulung?", "How do I get a Kita place for my child?", "What are the Ruhezeiten?"],
    answer: () => `On **11 November** (Sankt Martin), children walk through the dark streets with handmade paper **lanterns**, singing *"Ich geh mit meiner Laterne"*.

- The lantern is made at Kita. By the parents. The evening before.
- Real candles have been replaced by **LED sticks** following a Gefährdungsbeurteilung
- The procession is led by a person dressed as St. Martin on a horse. The horse has a permit.
- Afterwards: **Weckmänner** (sweet bread men with a clay pipe) and Kinderpunsch

The route must be registered with the Ordnungsamt, including start, end, number of lanterns and an estimated singing volume. It is the most orderly act of candlelit anarchy in Europe.`,
  },
  {
    id: "family-seepferdchen",
    keywords: ["seepferdchen", "swimming lesson", "swim course", "schwimmkurs", "swimming badge", "sportverein", "kinderturnen", "sports club for", "hobby for my"],
    related: ["How do I plan a children's birthday party?", "What is the Einschulung?", "Can I go swimming?"],
    answer: () => `Every German child must obtain the **Seepferdchen** (seahorse badge), the first certificate of their life. It will not be the last.

**Requirements:** jump into the pool, swim 25 m, retrieve an object from shoulder-deep water, and know the Baderegeln (pool rules). The badge is then sewn onto the swimsuit and never removed.

**Swimming courses** are booked out ${randInt(12, 30)} months in advance. Registration opens at 06:00 on a Monday, online, and closes at 06:01.

Next steps: **Freischwimmer** (bronze), **Fahrtenschwimmer** (silver), and a lifelong membership in a **Sportverein**, with a Satzung (statutes), an annual general meeting and a Vorstand elected until retirement.`,
  },
  {
    id: "family-ausbildung",
    keywords: ["ausbildung", "apprentice", "azubi", "vocational", "berufsschule", "lehrstelle", "trainee", "apprentice pay", "azubi gehalt"],
    related: ["Which school should my child go to?", "What is the Abitur?", "How many vacation days do I get?"],
    answer: () => `The **duale Ausbildung** (apprenticeship) is Germany's pride: 3 years of training, split between a company and the **Berufsschule** (vocational school).

- There are **~${randInt(320, 330)} officially recognised Ausbildungsberufe**, each with its own Ausbildungsordnung, e.g. *Fachkraft für Kreislauf- und Abfallwirtschaft* or *Kaufmann/-frau für Büromanagement*
- You receive an **Ausbildungsvergütung** (training allowance) and a **Berichtsheft**, a weekly written report of what you learned, signed by your trainer, even in the week you learned nothing
- The final exam is taken before the **IHK** or **Handwerkskammer**, and passed with a certificate you will frame

As an Azubi, you will spend your first 3 weeks making coffee. This is considered part of the curriculum ("Einführung in betriebliche Abläufe").`,
  },
  {
    id: "family-oma",
    keywords: ["oma", "grandma", "grandparent", "grandmother", "babysit", "nanny", "tagesmutter", "au pair", "childminder", "look after my"],
    related: ["How do I get a Kita place for my child?", "How do I apply for Elterngeld?", "Who is Frau Schulze?"],
    answer: () => `If no Kita place is available (see *Kita*), Germany offers the following official alternatives:

1. **Tagesmutter** (childminder): a state-certified person caring for up to 5 children at home. Waiting list: see Kita.
2. **Au pair**: requires a visa, a room of at least 8 m², and € 280 pocket money per month, all of which must be documented
3. **Oma** (grandma): the true backbone of German childcare. Unregulated, unpaid, unkündbar.

Oma's rules supersede all federal law:
- Jacket on below 20°C
- *"Iss was, du bist ja ganz dünn"*
- Grandchildren are returned with sugar levels outside all EU recommendations

Babysitters are paid in cash. The Finanzamt is aware of this. The Finanzamt also has an Oma.`,
  },
];
