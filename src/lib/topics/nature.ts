import { randInt, type Topic } from "./shared";

// Nature, animals, seasons and holidays.
export const natureTopics: Topic[] = [
  {
    id: "nature-zeitumstellung",
    keywords: ["zeitumstellung", "daylight saving", "daylight savings", "clocks change", "clock change", "change the clock", "change the clocks", "time change", "sommerzeit", "winterzeit", "summer time", "uhr umstellen", "uhren umstellen", "clocks go back", "clocks go forward"],
    related: ["What time is it?", "Why is my train late?", "What are your opening hours?"],
    answer: () => `**Zeitumstellung (clock change) — official procedure:**

- **Last Sunday in March:** clocks go *forward* one hour (Sommerzeit). You lose an hour of sleep. It will not be refunded.
- **Last Sunday in October:** clocks go *back* one hour (Winterzeit). You regain the hour, minus processing fees.

The EU decided to abolish the clock change in 2019. The abolition is currently in the **Abstimmungsphase** (coordination phase) between 27 member states, each of which would like the *other* time.

Every German household owns one device that nobody knows how to adjust: the oven clock. It will show the wrong time for 5 months. This is accepted.

*Merksatz:* In spring the garden furniture is put *vor* the house, in autumn back *zurück* into it.`,
  },
  {
    id: "nature-heat",
    keywords: ["hitzewelle", "heatwave", "heat wave", "air conditioning", "air conditioner", "aircon", "klimaanlage", "too hot", "so hot", "hitze", "hitzefrei", "ventilator", "electric fan", "heat stroke", "hitzschlag", "30 degrees", "35 degrees"],
    related: ["Why do Germans open all the windows?", "Can I go swimming?", "What is the weather like?"],
    answer: () => `**Hitzewelle (heatwave) — official guidance:**

Germany does not have air conditioning (**Klimaanlage**). It has *Rollläden* (shutters), a Ventilator from 2004 and the firm belief that it "only gets this hot for two weeks a year". It has been two weeks a year for several months.

**Recommended procedure:**
1. Close windows and shutters during the day. Yes, this contradicts *Lüften*. Both rules apply.
2. Drink water regularly, even without being thirsty. (Seriously: heat is dangerous, especially for older people and small children — check on them.)
3. Avoid the midday sun between 11:00 and 16:00.

**Hitzefrei** (heat-related time off) exists for schoolchildren, not for adults. Adults receive a Kuchen in the break room.

Warning signs of heat stroke (confusion, very high body temperature, no sweating) are an emergency: call **112**.`,
  },
  {
    id: "nature-pollen",
    keywords: ["pollen", "pollenflug", "hay fever", "hayfever", "heuschnupfen", "allergy", "allergie", "allergic", "sneez", "birch pollen", "birke"],
    related: ["Where is the nearest pharmacy?", "How do I see a doctor?", "Why do Germans open all the windows?"],
    answer: () => `**Pollenflug (pollen count) — current status:**

- 🌳 **Birke** (birch): *hoch*
- 🌾 **Gräser** (grasses): *hoch*
- 🌿 **Beifuß**: *mittel*
- 🤧 **You**: *bedenklich*

Germany publishes an official **Pollenflugvorhersage** via the Deutscher Wetterdienst, the only forecast that is reliably accurate: it is always bad.

**Measures:**
- *Lüften* in the city early in the morning, in the countryside in the evening. (This is real. You must now also lüften by pollen schedule.)
- Wash your hair before bed so the pollen doesn't join you.
- Antihistamines are available at the **Apotheke**, after a consultation about your entire medical history.

Sneezing more than three times in the office will be acknowledged with *"Gesundheit"* — each time. Colleagues will not stop. Neither will you.`,
  },
  {
    id: "nature-forest",
    keywords: ["forest", "wald", "woods", "campfire", "lagerfeuer", "fire in the", "waldbrand", "forest fire", "wildfire", "wild camping", "wildcamp", "camp in the forest", "förster", "forester", "leave the path", "off the path"],
    related: ["Can I pick mushrooms in the forest?", "Are there wolves in Germany?", "Where can I go hiking?"],
    answer: (c) => `The German **Wald** (forest) is a place of romance, poetry and **Betretungsrecht** (right of access).

**You may:** walk, breathe, contemplate, and pick small amounts of berries and mushrooms for personal use (*Handstraußregelung*).

**You may not:**
- light a **Lagerfeuer** (campfire) — forbidden in or near the forest, especially at **Waldbrandgefahrenstufe** 4–5, which is every summer now
- smoke in the forest between 1 March and 31 October
- **wild camp** (Wildcampen): not permitted in most Bundesländer. Sleeping in the forest requires a campsite, a permit and, ideally, ${c.form()}.
- drive a car on forest roads. The barrier is there for a reason. The reason is the Förster.

Please stay on the paths during *Brut- und Setzzeit* (1 April – 15 July), when animals raise their young and dogs must be leashed.`,
  },
  {
    id: "nature-mushrooms",
    keywords: ["mushroom", "pilz", "pilze", "pilzberatung", "fungi", "chanterelle", "pfifferling", "steinpilz", "porcini", "foraging", "forage", "pick mushrooms", "pilze sammeln"],
    related: ["What are the rules in the forest?", "Where is the nearest pharmacy?", "Where can I go hiking?"],
    answer: () => `**Pilze sammeln** (mushroom picking) is a beloved autumn tradition and a competitive sport among pensioners, who will not tell you their spots. Ever. Not even in their will.

**Official rules:**
- Small quantities for personal use only (approx. 1–2 kg per day, depending on Bundesland).
- Some species, such as Steinpilz and Pfifferling, are protected and may only be picked in small amounts.
- No picking in nature reserves (*Naturschutzgebiete*).

**Important — and this part is not satire:** Never eat a mushroom you cannot identify with complete certainty. Several deadly species look like edible ones. Bring your basket to a certified **Pilzsachverständige** (mushroom expert, via the DGfM) for a free check. In case of suspected poisoning, call the **Giftnotruf** or **112** immediately.

The mushroom expert is the only German official who will look at your basket without a Termin.`,
  },
  {
    id: "nature-fishing",
    keywords: ["angelschein", "fischereischein", "fishing", "go fishing", "fishing licence", "fishing license", "fishing permit", "angeln", "fishing rod", "angelrute", "catch fish", "fish in the"],
    related: ["Do I need a hunting licence?", "What are the rules in the forest?", "How do I get an appointment at the Bürgeramt?"],
    answer: (c) => `Fishing in Germany is not a hobby. It is a **qualification**.

**To go fishing, you need:**
1. A **Fischereischein** (fishing licence), obtained after a course (~30 hours) and a state examination with questions such as *"What is the minimum size of a pike?"* and *"Which fish is shown in Figure 34?"*
2. A **Fischereiabgabe** (fishing levy) stamp, paid to the Bundesland
3. A **Gewässerkarte** (water permit) for the specific lake, river, or 40-metre stretch of river, bought from the local Angelverein
4. ${c.form()}, and patience

You must know the **Schonzeiten** (closed seasons) and **Mindestmaße** (minimum sizes) of every species. Catch-and-release is legally complicated in Germany, because "fishing for fun" is frowned upon. You must *intend* to eat the fish.

**Gebühr:** ${c.fee}, plus the rod, plus the Verein, plus the lifelong friendship with Günther from the Verein.`,
  },
  {
    id: "nature-hunting",
    keywords: ["jagdschein", "hunting", "hunter", "jäger", "jagd", "hochsitz", "hunting licence", "hunting license", "wild boar", "wildschwein", "deer", "grünes abitur", "grunes abitur"],
    related: ["Are there wolves in Germany?", "Do I need a fishing licence?", "What are the rules in the forest?"],
    answer: () => `The **Jagdschein** (hunting licence) is known in Germany as the **"Grünes Abitur"** (green high-school diploma) — and it is about as hard.

**The exam covers:**
- Wildbiologie (animal biology)
- Waffenrecht (firearms law), Waffenhandhabung, shooting test
- Hunting law, animal welfare, nature conservation
- **Jagdliches Brauchtum** (hunting customs): signals on the horn, the correct way to say "Waidmannsheil", and what the Jäger calls each body part of a deer (every part has a secret word; the ears are *Lauscher*)

Courses take several months and cost as much as a small car.

After passing, you may apply for a Waffenbesitzkarte, a hunting ground lease and a green jacket. You will then sit on a **Hochsitz** at 04:30, waiting. Just like at the Bürgeramt, but colder.

**Wild boar in your garden?** Do not approach. Call the local Jäger via the Ordnungsamt.`,
  },
  {
    id: "nature-cat",
    keywords: ["katze", "kater", "my cat", "my cat keeps", "cat tax", "katzensteuer", "outdoor cat", "freigänger", "freiganger", "cat outside", "cat flap", "katzenklappe", "chip my cat", "microchip", "kastration", "neuter", "kitten"],
    related: ["Do I have to pay tax for my dog?", "How do I feed the birds?", "Can my cat go outside?"],
    answer: () => `Your **Katze** (cat) is a legally recognised household member with more rights than most tenants.

- **Katzensteuer** (cat tax): does not exist. Yet. Please do not mention it near the Finanzamt.
- **Freigänger** (outdoor cat): permitted, but some cities (e.g. Paderborn) require outdoor cats to be **neutered, chipped and registered** (*Katzenschutzverordnung*).
- **Cat flap** (Katzenklappe) in a rental door: requires the landlord's written consent. The cat did not ask.
- Your cat visits the neighbours' garden. The neighbours may not keep it. They will, however, feed it and give it a second name.

Please register your cat's microchip for free with TASSO or FINDEFIX, so it can be returned if it runs away. It will not run away. It will relocate to Frau Schulze, who has better treats.`,
  },
  {
    id: "nature-birds",
    keywords: ["ducks", "to the ducks", "enten", "feed the birds", "feed birds", "feeding birds", "vogelfutter", "bird feeder", "birdhouse", "vogelhaus", "vögel füttern", "vogel futtern", "pigeon", "tauben", "swans", "schwäne", "seagull"],
    related: ["What should I do with a hedgehog in my garden?", "Can I pick mushrooms in the forest?", "Which bin does my trash go in?"],
    answer: () => `**Feeding animals — official position:**

- 🦆 **Ducks:** please do **not** feed bread. It is bad for ducks and bad for lakes. A laminated sign says so. The pensioner next to the sign, feeding bread, has read it.
- 🕊️ **Pigeons (Tauben):** feeding is **prohibited** in many cities, with fines of up to several hundred euros. Pigeons are the only city residents without an Anmeldung who are still followed by the Ordnungsamt.
- 🐦 **Garden birds:** feeding in winter is permitted and popular. A **Vogelhaus** must be placed where cats cannot reach it (see: Katze).
- 🦢 **Swans:** do not approach. The swan does not respect you, the Grundgesetz or anyone else.

The Naturschutzbund (NABU) additionally organises the **"Stunde der Gartenvögel"**: once a year, the nation counts birds for one hour. Germans are very good at counting.`,
  },
  {
    id: "nature-igel",
    keywords: ["igel", "igel im garten", "hedgehog", "a hedgehog", "leaf blower", "laubbläser", "laubblaser", "laubsauger", "robot mower", "robot mow", "robotic mower", "mähroboter", "mahroboter", "rasenroboter", "lawn robot"],
    related: ["Do I have to rake the leaves?", "Can I mow my lawn on Sunday?", "What are the Ruhezeiten?"],
    answer: () => `The **Igel** (hedgehog) is Germany's most beloved garden resident, and it is having a hard time.

**Hedgehog-friendly garden — official recommendations:**
- Leave a pile of leaves and branches in a corner (*Igelhaus*). Yes, this contradicts your Hausordnung. The hedgehog outranks the Hausordnung.
- Make a 13×13 cm gap in the fence so hedgehogs can travel between gardens. Your neighbour may object. The neighbour is not endangered.
- **Mähroboter** (robot mowers): please do **not** run them at night — they injure hedgehogs. Several cities have banned night-time mowing for this reason.
- **Laubbläser** (leaf blowers): loud, prohibited during Ruhezeiten, and disliked by hedgehogs and everyone within 200 metres.

**Found a hedgehog in autumn?** Leave it alone if it looks healthy. Weak or injured hedgehogs (or ones out in daylight) should go to a local *Igelstation*. Do not give milk — hedgehogs are lactose intolerant.`,
  },
  {
    id: "nature-laub",
    keywords: ["rake", "raking", "rake the leaves", "fallen leaves", "autumn leaves", "laub", "laubfegen", "herbstlaub", "leaves on the", "leaf duty"],
    related: ["Do I have to shovel snow?", "What should I do with a hedgehog in my garden?", "What is the Kehrwoche?"],
    answer: () => `**Laub** (fallen leaves) is not a natural phenomenon. It is an **obligation**.

According to your municipality's *Straßenreinigungssatzung*, you may be responsible for clearing leaves from the pavement in front of your house. Leaves on the pavement are a slipping hazard, and slipping is a liability matter (*Verkehrssicherungspflicht*).

**Correct procedure:**
1. Rake the leaves (with a rake — see *Laubbläser* for why not with a leaf blower).
2. Place them in the **Biotonne** or the leaf sack provided by the city. Not in the Restmüll. Not onto the neighbour's side.
3. Leaves from the neighbour's tree are, legally, your problem too. Neighbourly disputes about leaves have reached the Bundesgerichtshof.

Please leave some leaves in a corner of the garden for hedgehogs. You now have two contradicting obligations. Welcome to autumn.`,
  },
  {
    id: "nature-bees",
    keywords: ["bees", "bee ", "biene", "beekeep", "imker", "honeybee", "honey bee", "honig", "wasp", "wespe", "hornet", "hornisse", "wasp nest", "wespennest"],
    related: ["What should I do with a hedgehog in my garden?", "How do I feed the birds?", "Can I grill on my balcony?"],
    answer: () => `**Bees, wasps & hornets — official status:**

- 🐝 **Honeybees:** kept by **Imker** (beekeepers), who must register their colonies with the veterinary office. Yes, bees have an Anmeldung. They got one faster than you.
- 🐝 **Wild bees:** many species are **protected** under the Bundesnaturschutzgesetz.
- 🪰 **Wasps (Wespen):** at every Kaffee und Kuchen from July to September. Nests may only be removed if they pose a real danger — ideally by a professional.
- 🟠 **Hornets (Hornissen):** **specially protected**. Destroying a hornet nest yourself can cost a fine of up to **€ 50.000**. Hornets are calmer than their reputation — calmer than most Beamte.

If you have a nest in a problematic place, contact your local *Untere Naturschutzbehörde* or a pest professional for relocation.

**Allergic to stings?** That part is not funny: carry your emergency kit and call **112** in case of a severe reaction.`,
  },
  {
    id: "nature-wolf",
    keywords: ["wolf", "wolves", "wölfe", "wolfe", "lynx", "luchs", "wild animals", "wildtier", "dangerous animals"],
    related: ["What are the rules in the forest?", "Do I need a hunting licence?", "Where can I go hiking?"],
    answer: () => `Yes — the **Wolf** has returned to Germany after roughly 150 years. It did not apply for a residence permit. It simply arrived from Poland and settled in Brandenburg, like many people who can no longer afford Berlin.

**Current status:** several hundred packs (*Rudel*), mostly in the north and east, monitored by the Bundesamt für Naturschutz with the thoroughness usually reserved for tax returns.

**If you meet a wolf:**
- Stay calm. Wolves are generally shy and avoid humans.
- Do not run. Do not feed it. Do not photograph it with the flash.
- Speak loudly and back away slowly. (The same technique works for Hausmeister.)
- Report sightings to the state's *Wolfsbeauftragte* (wolf commissioner). This is a real job title.

Sheep farmers may apply for subsidies for protective fences. The application is 23 pages. The wolf does not have to fill anything in.`,
  },
  {
    id: "nature-heiligabend",
    keywords: ["heiligabend", "christmas eve", "christkind", "bescherung", "christmas presents", "christmas gifts", "christmas day", "24 december", "december 24", "24th of december", "24. dezember", "weihnachtsgeschenk", "open presents"],
    related: ["What do I do with my Christmas tree after Christmas?", "When is the Christmas market?", "What is Nikolaustag?"],
    answer: () => `In Germany, presents are opened on **Heiligabend** (Christmas Eve, 24 December) — not on the 25th, as in certain other countries that we will not name but that have an official website that looks suspiciously like this one.

**Official schedule of Heiligabend:**
- 14:00 — shops close. Last-minute shoppers are released into the wild.
- 16:00 — church, for people who go to church once a year
- 18:00 — **Bescherung** (gift-giving). Presents are brought by the **Christkind** (in the south and west) or the **Weihnachtsmann** (north and east). Jurisdiction is determined by Bundesland.
- 19:00 — *Kartoffelsalat mit Würstchen*. This is the traditional dish. It is not a joke. It is the law of tradition.

The 25th and 26th are **1. und 2. Weihnachtsfeiertag** — two public holidays for visiting both sets of relatives in rotation, as agreed in the family's informal Staatsvertrag.`,
  },
  {
    id: "nature-christmas-tree",
    keywords: ["christmas tree", "weihnachtsbaum", "tannenbaum", "christbaum", "tree disposal", "dispose of my tree", "tree after christmas", "real tree", "plastic tree"],
    related: ["When do Germans open Christmas presents?", "Which bin does my trash go in?", "When is the Christmas market?"],
    answer: (c) => `**Weihnachtsbaum (Christmas tree) — lifecycle regulations:**

1. **Acquisition:** Real tree, purchased from a man in a field who accepts cash only. The tree must be a *Nordmanntanne*. Other trees exist but are not discussed.
2. **Installation:** Not before the 4th Advent Sunday, ideally on the 24th. Decorated with real straw stars and, in traditional households, **real candles**. (Please: keep a bucket of water nearby. The fire brigade is extremely busy at Christmas.)
3. **Disposal:** The tree must be completely **de-decorated** — no tinsel (*Lametta*), no hooks, no leftover chocolate. Then place it on the street on the city's official **Weihnachtsbaum-Abholtag** in January, usually around ${randInt(7, 18)}. Januar.

Trees placed outside on the wrong day will be considered Sperrmüll and reported. Trees dropped from a balcony will be considered a violation of Hausordnung § ${randInt(4, 19)} and Frau Schulze's patience.

Unable to meet the deadline? Please fill in ${c.form()}.`,
  },
  {
    id: "nature-nikolaus",
    keywords: ["nikolaustag", "nikolaus day", "st nicholas", "saint nicholas", "6 december", "december 6", "6th of december", "december 6th", "6. dezember", "boots outside", "put boots", "put their boots", "stiefel", "krampus", "knecht ruprecht"],
    related: ["When do Germans open Christmas presents?", "When is the Christmas market?", "What is Karneval?"],
    answer: () => `**Nikolaustag (6 December) — official procedure:**

1. On the evening of the 5th, children clean their **boots** (*Stiefel*) and place them outside the door.
2. During the night, **St. Nikolaus** fills them with chocolate, nuts, mandarins and a small gift — if the boots are clean. A dirty boot is a formal rejection of the application.
3. Nikolaus may be accompanied by **Knecht Ruprecht** (north) or **Krampus** (Bavaria/Austria), who handles the complaints department.

Please note: Nikolaus is **not** the Weihnachtsmann, and definitely not the Christkind. These are three separate authorities with different jurisdictions and opening hours. Children understand this system perfectly. Adults do not.

Boots placed outside in an apartment building's stairwell may violate the fire safety provisions of the Hausordnung. Nikolaus has been informed.`,
  },
  {
    id: "nature-vatertag",
    keywords: ["vatertag", "father's day", "fathers day", "herrentag", "himmelfahrt", "ascension day", "bollerwagen", "pfingsten", "pentecost", "whitsun", "fronleichnam", "corpus christi"],
    related: ["What is a Brückentag?", "Is beer food?", "Where can I go hiking?"],
    answer: () => `**Christi Himmelfahrt** (Ascension Day, a Thursday in May) is a public holiday. It is also, unofficially, **Vatertag** (Father's Day) or **Herrentag**.

**Traditional procedure:** Groups of men pull a **Bollerwagen** (hand cart) filled with beer through the countryside, stopping every 400 metres to check that the beer is still there. It is.

The Friday after Himmelfahrt is the most famous **Brückentag** of the year. The country effectively closes for four days.

**Further spring holidays:**
- **Pfingsten** (Pentecost): Sunday *and* Monday off. Pfingstmontag is used for traffic jams to the Baltic Sea.
- **Fronleichnam** (Corpus Christi): a holiday only in some (mostly Catholic) Bundesländer. Whether you have a day off depends on where your employer is based, where you live, and the Bundesland of your conscience.

Please check your Bundesland's Feiertagsgesetz before assuming you have a day off.`,
  },
  {
    id: "nature-ferien",
    keywords: ["sommerferien", "summer holidays", "summer vacation", "school holidays", "schulferien", "ferien", "herbstferien", "osterferien", "winterferien", "pfingstferien", "ferienkalender", "school break", "out of school early", "school early for", "before the holidays"],
    related: ["What is a Brückentag?", "Why is there so much traffic on the Autobahn?", "Is Mallorca part of Germany?"],
    answer: () => `**Schulferien (school holidays)** are decided by each of the 16 Bundesländer separately and **rotate** every year, so that not all of Germany sits in the same traffic jam at the same time. It sits in 16 slightly offset traffic jams instead.

**Sommerferien:** 6 weeks, somewhere between late June and mid-September, depending on Bundesland and year. Bavaria and Baden-Württemberg almost always go **last** — they negotiated this decades ago, citing harvest time, and have never given it back.

**Other holidays:** Herbstferien, Weihnachtsferien, Winterferien (some states), Osterferien, Pfingstferien (some states), plus *bewegliche Ferientage* decided by each school individually.

**Taking your child out of school a few days early to catch a cheaper flight** is not permitted. Schools may report it; fines are possible. Airport police do occasionally check. Yes, really.

Tip: the Kultusministerkonferenz publishes the official calendar years in advance. It is the only long-term plan the German state reliably keeps.`,
  },
  {
    id: "nature-klima",
    keywords: ["klimaschutz", "climate change", "climate", "klimawandel", "save energy", "energy saving", "energiesparen", "strom sparen", "co2", "carbon footprint", "environment", "umweltschutz", "sustainab", "nachhaltig"],
    related: ["Which bin does my trash go in?", "How do I switch my electricity provider?", "Can I ride my bike instead?"],
    answer: () => `Germany takes **Klimaschutz** (climate protection) very seriously, as evidenced by the number of working groups on the subject.

**Your personal contribution, as recommended:**
- Separate your waste into 7 bins (see: Mülltrennung).
- Stoßlüften instead of Kipplüften (see: Lüften).
- Heat your living room to no more than 20°C and wear the cardigan your grandmother gave you.
- Switch off standby devices. Keep the oven clock on — no one knows how to set it again.
- Use the train (see: Deutsche Bahn). Bring a book. Bring two.
- Buy loose vegetables and carry them home in a **Jutebeutel** (cotton bag). Every German owns 43 Jutebeutel.

Germany has one of the most ambitious climate laws in the world (*Klimaschutzgesetz*) and one of the most ambitious sets of exceptions to it. Both are updated regularly.`,
  },
  {
    id: "nature-raeumpflicht",
    keywords: ["räumpflicht", "raumpflicht", "winterdienst", "shovel snow", "shovel the snow", "snow shovel", "shovel", "schnee", "snow", "streusalz", "road salt", "gritting", "grit", "glatteis", "icy", "black ice", "schippen", "snow on the"],
    related: ["Do I have to rake the leaves?", "Do I need winter tyres?", "What is the Kehrwoche?"],
    answer: (c) => `**Räum- und Streupflicht (snow-clearing duty) — official regulations:**

Whoever owns the property — and, via the lease or the Hausordnung, often **you**, the tenant — must clear the pavement in front of the building.

- **When:** on weekdays from approx. 07:00 until 20:00, on Sundays and holidays from 08:00 or 09:00 (varies by municipality). Snow that falls at 20:01 is legally tomorrow's snow.
- **How:** a path wide enough for two pedestrians to pass each other (~1–1.5 m).
- **With what:** sand or grit. **Streusalz** (road salt) is **prohibited** for private use in many cities — it harms trees and dogs' paws.

If someone slips on your uncleared pavement, you are liable. The case will be discussed in court and, more painfully, in the stairwell.

The rotation is recorded in the **Winterdienstplan**, hung next to the Kehrwoche plan. Exemptions require ${c.form()} and a medical certificate.`,
  },
  {
    id: "nature-unwetter",
    keywords: ["unwetter", "storm", "sturm", "thunderstorm", "gewitter", "hail", "hagel", "severe weather", "weather warning", "unwetterwarnung", "warn app", "warning app", "nina app", "katwarn", "flood", "hochwasser", "tornado", "orkan", "warntag", "siren", "sirene"],
    related: ["What is the weather like?", "What should I do in an emergency?", "Is there a heatwave?"],
    answer: () => `**Unwetter (severe weather) — official information:**

The **Deutscher Wetterdienst (DWD)** issues warnings in four levels, colour-coded from yellow to dark purple. Germans will discuss the colour of the warning at length before going inside.

**This part is genuinely important:**
- Install a warning app (**NINA** from the Federal Office for Civil Protection, or KATWARN) and follow official warnings.
- During thunderstorms and storms, stay indoors, away from trees and water. Don't shelter under a single tree.
- In a flood, never drive or walk through flooded roads or underpasses, and don't go into flooded basements.
- In an emergency, call **112**.

Once a year, on the **Bundesweiter Warntag** (second Thursday in September), all sirens and phones in Germany are tested at 11:00. In some years, the test itself has not fully worked. The follow-up report was issued on time.`,
  },
];
