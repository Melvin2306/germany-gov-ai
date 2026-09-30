import { randInt, type Topic } from "./shared";

// Housing and daily life at home: the Treppenhaus, the Keller, the Hausordnung.
export const housingTopics: Topic[] = [
  {
    id: "housing-kehrwoche",
    keywords: ["kehrwoche", "treppenhaus", "stairwell", "staircase", "clean the stairs", "cleaning the stairs", "cleaning schedule", "putzplan", "putzdienst", "hallway cleaning"],
    related: ["What is in the Hausordnung?", "Who is Frau Schulze?", "Do I have to pay for the Hausmeister?"],
    answer: () => `The **Kehrwoche** (sweeping week) is a sacred rotation, originally from Swabia, now enforced nationwide by a laminated sign.

**Your duties during the Kehrwoche:**
1. Sweep **and** mop the Treppenhaus from your floor down to the next floor
2. Clean the handrail, the windowsill and the spirit of the building
3. On *Große Kehrwoche*: also the pavement, the Hof and the area around the Mülltonnen
4. Hang the **Kehrwoche-Schild** on the door of the next tenant, exactly on Saturday, never Sunday (see *Sonntagsruhe*)

Inspection is carried out informally by Frau Schulze, with a white glove, from Erdgeschoss links.

A professional cleaning company may be hired instead. This is legally allowed and socially unforgivable.`,
  },
  {
    id: "housing-nebenkosten",
    keywords: ["nebenkost", "betriebskost", "utility bill", "utilities", "service charge", "additional costs", "nachzahlung", "abrechnung", "back payment"],
    related: ["How do I reduce my heating costs?", "Can my landlord raise the rent?", "Do I have to pay for the Hausmeister?"],
    answer: (c) => `Your **Nebenkostenabrechnung** (annual utility statement) has arrived. It is 11 pages long and ends with the word **Nachzahlung**.

**Costs allocated to you include:**
- Heating, water, Müllabfuhr, Grundsteuer, Hausmeister
- Garden maintenance (there is no garden)
- Elevator maintenance (you live in Erdgeschoss)
- *Allgemeinstrom* for a lightbulb in the Keller that has been on since 1994

**Your Nachzahlung:** ${c.fee}, plus your monthly Vorauszahlung will increase by € ${randInt(15, 80)}.

You have **12 months** to object and the right to inspect all receipts (*Belegeinsicht*) at the Hausverwaltung, Tuesdays 10:00–11:00, by appointment only, in a room without chairs.`,
  },
  {
    id: "housing-hausordnung",
    keywords: ["hausordnung", "house rules", "building rules", "rules of the building", "rules in my building"],
    related: ["What is the Kehrwoche?", "What are the Ruhezeiten?", "Can I grill on my balcony?"],
    answer: () => `The **Hausordnung** is the constitution of your building. It outranks the Grundgesetz in the Treppenhaus.

**Typical provisions:**
- Ruhezeiten 13:00–15:00 and 22:00–07:00 (see *Ruhezeiten*)
- No bicycles, strollers or shoes in the Treppenhaus
- The Haustür must be locked from 22:00. It must also never be locked (fire regulations). Both apply.
- Laundry may not be hung on the balcony if visible from the street
- Washing machines may not run after 22:00, or during spin cycle on Sundays
- Grilling: see Anhang C, § 4, Abs. 2, and your conscience

The Hausordnung is displayed in a glass frame in the Eingangsbereich. It was last updated in 1987 and signed by a man named Horst, who no longer lives here, but still enforces it.`,
  },
  {
    id: "housing-umzug",
    keywords: ["umzug", "umzieh", "moving boxes", "umzugskarton", "moving company", "movers", "moving day", "moving van", "nachsendeauftrag", "forward my mail", "mail forwarding", "sonderurlaub"],
    related: ["How do I do my Anmeldung after moving?", "Will I get my deposit back?", "Can I park a moving van in front of my house?"],
    answer: (c) => `Congratulations on your **Umzug** (move). Please allocate the following:

1. **Umzugskartons:** 60, from the Baumarkt, or 12 from your friend who "still has some"
2. **Friends with a Transporter:** paid in pizza and beer, per tradition
3. **Halteverbotszone** (temporary no-parking zone) in front of the house: apply ${c.wait} days in advance, ${c.fee}, signs must be put up 72 hours before. Someone will park there anyway.
4. **Nachsendeauftrag** at the Post: forwards your mail for 12 months, except the important letters
5. **Anmeldung** within 14 days (see *Anmeldung*)
6. **Übergabeprotokoll** with your old landlord, who will find a scratch from 2009

Your employer may grant you one day of **Sonderurlaub** for the move. You will need all of it to find the box with the kettle.`,
  },
  {
    id: "housing-keller",
    keywords: ["keller", "basement", "cellar", "waschkeller", "laundry room", "washing machine", "waschmaschine", "laundry", "wascheleine", "drying room", "trockenraum", "storage room"],
    related: ["What is in the Hausordnung?", "What are the Ruhezeiten?", "Who is Frau Schulze?"],
    answer: () => `**Keller & Waschkeller — official usage rules:**

- Your **Kellerabteil** is a wooden cage with a padlock. It contains a bike without tires, 3 boxes labelled "Diverses" and the previous tenant's ski equipment.
- The **Waschkeller** requires booking via the **Waschplan** (paper list on the door, pencil on a string). Slots: 2 hours. Your slot is Thursday 06:00–08:00.
- Leaving laundry in the machine for more than 5 minutes after the end of the cycle will result in your laundry being placed, folded and judged, on top of the machine.
- The **Trockenraum** (drying room) is for drying. Not for storing. Not for storing *while* drying.
- Doors must be closed at all times because of *Feuchtigkeit* (humidity), mice, and principle.

The light switch is on a timer that turns off after 40 seconds. The Keller is 60 seconds long.`,
  },
  {
    id: "housing-grill",
    keywords: ["balcony", "balkon", "grill", "bbq", "bbq allowed", "barbecue", "terrasse"],
    related: ["What is in the Hausordnung?", "What are the Ruhezeiten?", "Can I drink a beer in the park?"],
    answer: () => `**Grilling on the balcony (Balkongrillen) — legal assessment:**

- **Charcoal grill:** Generally not permitted if smoke reaches the neighbours. Smoke always reaches the neighbours.
- **Gas grill:** Depends on the Hausordnung, the Mietvertrag, and the direction of the wind.
- **Electric grill:** Usually permitted. Also considered by the neighbours to be "not real grilling", which is worse.

German courts have ruled on this repeatedly. The Landgericht Stuttgart allowed grilling **3 times per year, max. 2 hours**. Another court allowed **once a month**. A third court said "depends". All three are valid somewhere.

Please inform your neighbours **48 hours in advance** in writing, in the Treppenhaus. They will not come. They will observe.

Sausages must be turned exactly once. This is not a law, but it is enforced.`,
  },
  {
    id: "housing-schornsteinfeger",
    keywords: ["schornsteinfeger", "chimney", "chimney sweep", "kaminkehrer", "kaminfeger", "schornstein", "feuerstattenschau"],
    related: ["What is in my Nebenkostenabrechnung?", "How do I reduce my heating costs?", "How do I switch electricity provider?"],
    answer: (c) => `The **Schornsteinfeger** (chimney sweep) will visit you. This is not a question.

- He is a **bevollmächtigter Bezirksschornsteinfeger**, which means he has his own district, like a small medieval lord.
- He will announce his visit by a note in the Treppenhaus, with a date and a 5-hour window, during your working hours.
- He will inspect your heating, even if your heating has no chimney. Especially then.
- The **Feuerstättenschau** takes place twice every 7 years. You will receive a *Feuerstättenbescheid*. Keep it. Forever.

**Fee:** ${c.fee}, by invoice, payable within 14 days.

Touching the Schornsteinfeger's button brings good luck. Please ask for consent first (Formular SF-Glück-1).`,
  },
  {
    id: "housing-strom",
    keywords: ["strom", "electricity", "power bill", "energy provider", "energy contract", "energieversorger", "stromanbieter", "gas contract", "gasanbieter", "gas bill", "grundversorgung", "zahlerstand", "meter reading", "smart meter"],
    related: ["How do I cancel a contract?", "What is in my Nebenkostenabrechnung?", "How do I reduce my heating costs?"],
    answer: (c) => `**Electricity & gas contracts (Strom- und Gasvertrag):**

When you move in, you are automatically placed in the **Grundversorgung** (basic supply) of your local Stadtwerke, at the most expensive tariff available, as a welcome gift.

**To switch provider:**
1. Compare 400 tariffs on a comparison portal. They are all € 3 apart.
2. Choose the one with the € 250 *Neukundenbonus*, paid out after 12 months, if you haven't cancelled, died or moved
3. Enter your **Zählernummer** and **Zählerstand** (meter reading), located in the Keller, behind a locked door, behind a bike

**Smart meter rollout:** scheduled nationwide. Current coverage: your neighbour's cousin. The rest read their meter manually, once a year, with a torch, and send a photo by post.

Estimated switching time: ${c.wait} days. Kündigungsfrist: see *Kündigung*.`,
  },
  {
    id: "housing-heizkosten",
    keywords: ["heizkost", "heating cost", "heating bill", "thermostat", "radiator", "heizkorper", "heizperiode", "19 degrees", "19 grad", "too cold in my"],
    related: ["What is in my Nebenkostenabrechnung?", "Why do Germans open all the windows?", "How do I switch electricity provider?"],
    answer: () => `**Heating (Heizen) — official guidance:**

- The **Heizperiode** officially runs from 1 October to 30 April. Before 1 October it is not cold. It is *frisch*.
- Your landlord must guarantee **20–22°C** during the day and 18°C at night. Your partner's mother keeps it at 26°C. Both are legal.
- The **thermostat** has numbers from 1 to 5. Nobody knows what they mean. 3 is roughly "20°C". * is frost protection. 5 is "Ich zahle das nicht".
- Heating costs are measured by small **Heizkostenverteiler** on each radiator, read once a year by a man who arrives unannounced at 07:30.

**Energy-saving tips:** wear a sweater, then a second sweater, then a *Wolldecke*. Stoßlüften anyway (see *Lüften*).

Complaints about cold radiators: please contact the Hausverwaltung between 1 May and 30 September, when they are available.`,
  },
  {
    id: "housing-mietpreisbremse",
    keywords: ["mietpreisbremse", "rent cap", "rent increase", "raise the rent", "raise my rent", "rent went up", "mieterhohung", "mietspiegel", "rent control", "indexmiete", "staffelmiete", "rent too high"],
    related: ["What is in my Nebenkostenabrechnung?", "Will I get my deposit back?", "How do I rent an apartment?"],
    answer: () => `The **Mietpreisbremse** (rent brake) limits new rents to **10% above the local Mietspiegel** in designated areas.

**Exceptions to the Mietpreisbremse:**
- Newly built apartments (built after 2014)
- "Comprehensively modernised" apartments (new doorknob)
- Furnished apartments (one chair)
- Apartments where the previous rent was already too high
- Apartments whose tenants did not complain in writing (*qualifizierte Rüge*)

**Rent increases (Mieterhöhung)** are permitted up to 20% in 3 years (15% in some cities), with justification: the Mietspiegel, 3 comparable apartments, or an expert report.

With an **Indexmiete**, your rent follows inflation. With a **Staffelmiete**, it follows a schedule. With both, it follows you.

Legal advice: Mieterverein, € 8 per month. Join before the problem, not after.`,
  },
  {
    id: "housing-kaution",
    keywords: ["kaution", "much kaution", "deposit", "security deposit", "mietkaution", "deposit back", "ubergabeprotokoll", "handover protocol", "move-out inspection", "move out inspection"],
    related: ["How do I organize my Umzug?", "Can my landlord raise the rent?", "Do I have to renovate when I move out?"],
    answer: (c) => `The **Mietkaution** (rental deposit) may be up to **3 net cold rents**, paid in 3 instalments, and must be kept separately from the landlord's assets. It is kept separately in the landlord's heart.

**Getting your Kaution back:**
1. **Übergabeprotokoll** (handover protocol) on move-out: the landlord inspects the apartment with a torch, a notebook and a magnifying glass
2. Findings: 1 dowel hole (*Dübelloch*), 1 scratch in the parquet, and "the walls are not white enough" (they are *Altweiß*, not *Reinweiß*)
3. The landlord may withhold part of the deposit for up to **6 months** for the Nebenkostenabrechnung, which arrives after 11 months

Expected refund date: **${c.termin}**. Expected refund amount: less.

Tip: photograph everything when moving in, including the ceiling, the light switches and the landlord.`,
  },
  {
    id: "housing-renovieren",
    keywords: ["renovier", "renovate", "renovation", "move out", "moving out", "auszug", "schonheitsreparatur", "paint the walls", "painting the walls", "repaint", "streichen", "tapezier", "wallpaper", "white walls"],
    related: ["Will I get my deposit back?", "Can I drill holes in the wall?", "How do I organize my Umzug?"],
    answer: () => `**Schönheitsreparaturen** (cosmetic repairs) on moving out:

Many rental contracts oblige you to renovate. Many of those clauses are **invalid** (BGH, repeatedly). Your landlord has not read the BGH rulings. Your landlord has read your contract.

**If you do renovate:**
- Walls must be returned in "neutral, light colours". *Neutral* means white. *White* means the exact white the landlord imagines.
- Your dark green accent wall ("Salbei") must be painted over three times, until it is no longer visible, spiritually.
- Radiators must be painted *behind*. Nobody has ever seen behind a radiator.
- Holes must be filled with *Spachtelmasse*, sanded, and painted. The landlord will still find them.

Hiring a painter is possible. The landlord will then complain about the painter.`,
  },
  {
    id: "housing-wg",
    keywords: ["wg", "wg-casting", "flatshare", "flat share", "shared flat", "shared apartment", "roommate", "flatmate", "mitbewohner", "zweck-wg", "wohngemeinschaft"],
    related: ["How do I rent an apartment?", "What is the Kehrwoche?", "How do I do my Anmeldung after moving?"],
    answer: () => `**Finding a room in a WG (Wohngemeinschaft):**

1. Send 80 applications on WG-Gesucht. Each must be personal, witty and mention that you are *"ordentlich, aber nicht spießig"*.
2. Receive 2 invitations to a **WG-Casting**: 14 candidates, one kitchen, a bottle of Club-Mate, and questions like *"Wie stehst du zum Putzplan?"*
3. Answer correctly: *"Ich liebe Putzpläne."* (Do not overdo it.)
4. Wait. The WG will "let you know by Sunday". It will not.

**Life in the WG:**
- The **Putzplan** rotates weekly and is ignored in the same rhythm
- Fridge shelves are assigned. Labelled yoghurts are legally protected.
- There will be a **WG-Kasse** for toilet paper, washing-up liquid and grudges.

The main tenant (*Hauptmieter*) will ask you to sign a *Untermietvertrag*, which the landlord does not know about. Please do not mention it at the Anmeldung.`,
  },
  {
    id: "housing-reparatur",
    keywords: ["hausverwaltung", "property management", "hausmeister", "caretaker", "janitor", "repair", "reparatur", "leak", "leaking", "dripping", "tropf", "broken toilet", "broken heater", "won't fix", "not fixing", "mangelanzeige", "rent reduction", "mietminderung"],
    related: ["What is in my Nebenkostenabrechnung?", "Who is Frau Schulze?", "Can my landlord raise the rent?"],
    answer: (c) => `**Reporting a defect (Mängelanzeige) — official procedure:**

1. Call the **Hausverwaltung**. Office hours: Mon & Wed 09:00–11:00. The line is busy. It has been busy since 2016.
2. Send an email. You will receive an automatic reply: *"Ihre Anfrage wurde erfasst."* Nothing further will be erfasst.
3. Send a **written Mängelanzeige** by Einschreiben, describing the defect, the date, and your emotional state, with a deadline (*angemessene Frist*).
4. The **Hausmeister** will arrive after ${c.wait} days, look at the dripping tap, say *"Ja, das ist kaputt"*, and leave to order a part.

If the defect is significant, you may be entitled to a **Mietminderung** (rent reduction). Please do not reduce the rent yourself without legal advice. Please do not ask the Hausmeister for legal advice. He will give it anyway.

Next available Handwerker appointment: **${c.termin}**.`,
  },
  {
    id: "housing-klingelschild",
    keywords: ["klingelschild", "doorbell", "door bell", "klingel", "name on the door", "name on my mailbox", "mailbox", "letterbox", "briefkasten", "name tag"],
    related: ["Why was my parcel not delivered?", "Who is Frau Schulze?", "How do I do my Anmeldung after moving?"],
    answer: () => `The **Klingelschild** (doorbell name tag) is the most important document you will ever own.

- Without a name on the Klingel and the **Briefkasten**, nothing reaches you: not letters, not parcels, not the Finanzamt (which will find you anyway).
- The name must be *readable*, *printed*, and in the format specified by the Hausverwaltung: black letters, white background, Arial 14, no hearts.
- Handwritten tape is tolerated for 2 weeks, then noted by Frau Schulze.
- **Data protection:** Some Hausverwaltungen now use numbers instead of names (DSGVO). The postman has not been informed. Your parcel has been returned to sender.

To obtain an official Klingelschild, please send an email to the Hausverwaltung. It will be installed after your Kaution has been returned (see *Kaution*).`,
  },
  {
    id: "housing-sperrmuell",
    keywords: ["sperrmull", "bulky waste", "old furniture", "throw away furniture", "get rid of a sofa", "get rid of my sofa", "old sofa", "old mattress", "mattress", "wertstoffhof", "recycling center", "recycling centre"],
    related: ["Which bin does my trash go in?", "When is the trash collected?", "How do I organize my Umzug?"],
    answer: (c) => `**Sperrmüll** (bulky waste) must be registered with the municipal waste company.

1. Book a pickup online, by phone or via ${c.form()}. Next available date: in ${c.wait} days.
2. Place the items on the pavement **the evening before, not earlier than 18:00**.
3. Within 11 minutes, 4 people will appear and inspect your items. Your sofa will be gone by 19:30. The Sperrmüll truck will arrive the next day to collect nothing.

**Not Sperrmüll:** electrical appliances (separate), mattresses (sometimes), doors (depends), anything that fits into a bin, and your feelings.

**Alternative:** drive to the **Wertstoffhof** (recycling centre), open Tue–Sat 09:00–12:00. A man in an orange vest will tell you which container to use. He will then tell you that you used the wrong container.

Leaving furniture on the street with a sign *"Zu verschenken"* is a national tradition and technically illegal dumping.`,
  },
  {
    id: "housing-abholtag",
    keywords: ["collection day", "bin day", "trash collected", "garbage collected", "abholtag", "abfuhr", "mullabfuhr", "abfallkalender", "waste calendar", "tonne rausstellen", "put the bins out"],
    related: ["Which bin does my trash go in?", "How do I get rid of an old sofa?", "Who is Frau Schulze?"],
    answer: () => `**Müllabfuhr (waste collection) schedule:**

The official **Abfallkalender** is available as a PDF, a printed brochure, and an app that requires your street, house number and faith.

- **Restmüll:** every 2 weeks, Tuesday
- **Biotonne:** weekly in summer, bi-weekly in winter, except weeks with a public holiday, when it moves to Saturday, unless that's a Brückentag
- **Gelber Sack:** every 3 weeks, Wednesday, but the Wednesday *after* the one you think
- **Papier:** monthly, on a day chosen by lottery

Bins must be placed at the curb **by 06:00** on collection day and removed on the same day. Bins left out overnight will be discussed at the next Eigentümerversammlung.

The truck arrives at 06:02. You placed the bin at 06:03.`,
  },
  {
    id: "housing-duebel",
    keywords: ["dubel", "drill a hole", "drill holes", "drilling holes", "holes in the wall", "hole in the wall", "hang a picture", "hang a shelf", "hang up a", "bohren", "bohrloch", "wall plug", "nail in the wall"],
    related: ["What are the Ruhezeiten?", "Do I have to renovate when I move out?", "Will I get my deposit back?"],
    answer: () => `**Drilling holes (Bohren) in a rented apartment — legal position:**

Tenants may drill a *"reasonable number"* of holes for normal use (pictures, shelves, a lamp). The courts have not defined *reasonable*. Your landlord has: **zero**.

**Before drilling:**
1. Check the Ruhezeiten (no drilling 13:00–15:00, 20:00–07:00, Sundays, public holidays, or when Frau Schulze is napping)
2. Locate electrical cables with a *Leitungssucher* (a € 19 device that beeps everywhere)
3. Choose the correct **Dübel** (wall plug): the Baumarkt has 214 kinds. Your wall is made of a material none of them fits.
4. Drill. Hit the only steel beam in the building.

On moving out, all holes must be closed professionally (see *Renovieren*). A picture hung with *Tesa Powerstrips* is legally a picture that will fall down.`,
  },
  {
    id: "housing-hecke",
    keywords: ["hecke", "hedge", "neighbour's hedge", "neighbor's hedge", "hedge height", "fence", "gartenzaun", "zaun", "nachbarrecht", "property line", "grundstucksgrenze", "neighbour's tree", "neighbor's tree", "leaves from", "branches", "overhanging"],
    related: ["Can I mow my lawn on Sunday?", "Who is Frau Schulze?", "Can I grill on my balcony?"],
    answer: () => `**Hedges, fences and trees** are governed by the **Nachbarrechtsgesetz** of your Bundesland (16 different laws, each with its own measuring tape).

- **Hedge height:** up to 2 m if planted at least 0.5 m from the boundary; taller hedges need more distance. Measured from the ground on *which* side: a question that has ended friendships.
- **Hedge trimming:** major cuts are prohibited from **1 March to 30 September** (bird protection). Light shaping is allowed. The neighbours will decide what "light" means.
- **Overhanging branches** (*Überhang*): you may cut them after setting a reasonable deadline in writing. You may keep the apples that fall onto your side. You may not shake the tree.
- **Fences:** height, colour and material may be regulated by the *Bebauungsplan*. Pink is not in the Bebauungsplan.

Disputes are settled by the Schiedsamt, then the Amtsgericht, then by never speaking again.`,
  },
  {
    id: "housing-schluesseldienst",
    keywords: ["schlusseldienst", "locksmith", "locked out", "locked myself out", "lost my key", "lost my keys", "schlussel", "spare key", "key cut", "zweitschlussel"],
    related: ["How do I report a repair to the Hausverwaltung?", "Who is Frau Schulze?", "Can I pay by card?"],
    answer: (c) => `You are **locked out** (*ausgesperrt*). The door has fallen shut. This is called *Zufallen* and is the German door's only emotion.

**Options:**
1. **Frau Schulze** has a spare key. She has everyone's spare key. She will give it to you after a 20-minute conversation about your Mülltrennung.
2. The **Hausmeister** has a Generalschlüssel, is on Feierabend, and will call back tomorrow.
3. A **Schlüsseldienst**: found via an ad at the top of the search results, arrives in 45 minutes, opens the door in 8 seconds with a plastic card, and charges ${c.fee} plus a € 280 *Notfallzuschlag*, cash only.

**Having a new key cut:** for a *Sicherheitsschließanlage*, you need a **Sicherungskarte**, which is in a drawer at your landlord's, who is on holiday. Delivery: 3–6 weeks.`,
  },
];
