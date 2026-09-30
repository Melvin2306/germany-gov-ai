import { randInt, type Topic } from "./shared";

// Places, cities and tourism. Affectionate regional clichés only.
export const placesTopics: Topic[] = [
  {
    id: "place-berlin",
    keywords: ["is berlin", "about berlin", "berlin like", "see in berlin", "visit berlin", "berlin worth", "berghain", "kreuzberg", "neukolln", "prenzlauer", "friedrichshain", "arm aber sexy", "poor but sexy", "kiez"],
    related: ["How do I do my Anmeldung after moving?", "How do I rent an apartment?", "Is the new Berlin airport finally open?"],
    answer: (c) => `**Berlin** — *arm, aber sexy* (poor, but sexy), since 2003 officially only one of those.

- **Späti:** the late-night kiosk. The only institution in Berlin that is reliably open.
- **Berghain:** entry is decided by a bouncer based on criteria that are not published, not appealable and not in any Formular. It is the most German-bureaucratic thing in Berlin.
- **Construction:** every street is a Baustelle. The Baustelle has its own Baustelle.
- **Friendliness:** the *Berliner Schnauze* is not rudeness, it is efficiency. "Wat willste?" is a warm welcome.

Next available Bürgeramt Termin in Berlin: **${c.termin}**, in a district you have never heard of.`,
  },
  {
    id: "place-munich",
    keywords: ["is munich", "munich like", "about munich", "visit munich", "is munchen", "munchen like", "munchner", "isar", "eisbach", "surf in munich", "marienplatz", "englischer garten", "english garden"],
    related: ["Is beer food?", "How do I rent an apartment?", "Why does nobody take credit cards?"],
    answer: (c) => `**München** (Munich): the northernmost city of Italy, according to the Münchner.

- **Rents:** a 1-room flat costs ${c.fee}… per square metre, per week, plus Kaution, plus your firstborn.
- **Eisbach:** yes, people surf a river in the middle of the city. There is a queue. The queue is orderly.
- **Englischer Garten:** bigger than Central Park. Mentioned every 11 minutes by locals.
- **Weather:** *Föhn* explains everything — headaches, bad moods, decisions of the city council.

Please greet with *"Grüß Gott"*. "Hallo" will be tolerated, but noted.`,
  },
  {
    id: "place-hamburg",
    keywords: ["hamburg", "fischmarkt", "fish market", "reeperbahn", "elbphilharmonie", "elphi", "hanseat", "speicherstadt", "fischbrotchen", "alster"],
    related: ["What is the weather like?", "Can I go shopping on Sunday?", "Is there a quiet zone on the train?"],
    answer: () => `**Hamburg** — *das Tor zur Welt* (gateway to the world), with rain.

- **Weather:** it does not rain in Hamburg; the air is simply *very* moist. Umbrellas mark you as a tourist. Locals wear a *Friesennerz* and a stoic expression.
- **Fischmarkt:** Sunday, 05:00. The only legal Sunday shopping in Germany that begins before sunrise and involves shouting.
- **Elbphilharmonie:** planned for € 77 million and 2010, delivered for € 866 million in 2017. By German standards: a triumph.
- **Communication:** "Moin" is a greeting. "Moin moin" is already small talk. Anything longer is a monologue.`,
  },
  {
    id: "place-cologne",
    keywords: ["cologne", "koln", "kolsch", "kolsch glass", "kolsch beer", "stangen", "kobes", "kolner dom", "cologne cathedral", "dusseldorf", "altbier", "rheinland"],
    related: ["When is Karneval?", "Is beer food?", "Can I cross on red?"],
    answer: () => `**Köln** (Cologne) — the only city whose cathedral is a permanent construction site *by design*.

- **Kölsch** is served in 0,2-litre *Stangen*. When your glass is empty, a new one appears automatically. To stop, place your beer mat **on top** of the glass. This is the only legally binding Kündigung in Germany that requires no Einschreiben.
- **Düsseldorf** is 40 km away. It is not discussed. If you order an *Altbier* in Cologne, the Köbes (waiter) will serve you a glass of water and a look.
- **Kölner Dom:** construction began in 1248, completed 1880, renovation ongoing until the end of time (*"Wenn der Dom fertig ist, geht die Welt unter"*).

Motto: *"Et hätt noch immer jot jejange."* (It has always turned out fine.) The Bürgeramt disagrees.`,
  },
  {
    id: "place-frankfurt",
    keywords: ["frankfurt", "appelwoi", "ebbelwoi", "apfelwein", "mainhattan", "bembel", "grune sosse", "green sauce"],
    related: ["What are my rights if my flight is cancelled?", "How do I open a bank account?", "Can I pay by card?"],
    answer: () => `**Frankfurt am Main** — Germany's only skyline, locally known as *Mainhattan* (population of skyscrapers: 14; population of cranes: more).

- **Äppelwoi** (apple wine) is served in a grey-blue jug called a *Bembel*. It tastes like apple juice that has made some decisions.
- **Grüne Soße:** exactly **7 herbs**. Not 6. Not 8. There is a monument to it. This is not a joke.
- **Banks:** many. Please do not ask them for anything without a Termin.
- **Airport:** the biggest in Germany, operated with German precision, meaning your gate is always the one at the far end of Terminal 1, Concourse Z, 23 minutes on foot.`,
  },
  {
    id: "place-stuttgart",
    keywords: ["stuttgart", "stuttgart 21", "s21", "spatzle", "maultasch", "hauslebauer", "hausle", "bruddel"],
    related: ["What is the Kehrwoche?", "Why is my Deutsche Bahn train delayed?", "How do I register my car?"],
    answer: () => `**Stuttgart** — home of the car, the *Kehrwoche* and **Stuttgart 21**.

- **Stuttgart 21:** a train station put underground so that trains would arrive faster. Construction began in 2010. Completion is scheduled for "soon", a unit of time also used by the Deutsche Bahn.
- **Cars:** two major car manufacturers were founded here. Pedestrians are tolerated.
- **Spätzle:** handmade egg noodles, scraped off a board by hand. Store-bought Spätzle are legally a confession.
- **Maultaschen:** meat hidden inside pasta so God cannot see it during Lent. Swabian ingenuity: saving money *and* avoiding sin.

Motto: *"Schaffe, schaffe, Häusle baue."* (Work, work, build a little house.) Then sweep in front of it.`,
  },
  {
    id: "place-ruhr",
    keywords: ["ruhrgebiet", "ruhrpott", "ruhr area", "pott", "currywurst", "pommes schranke", "duisburg", "bochum", "gelsenkirchen", "oberhausen", "zeche", "kumpel", "trinkhalle", "bude"],
    related: ["Who will win the Bundesliga?", "What is the best German food?", "Why is my Deutsche Bahn train delayed?"],
    answer: () => `**Der Ruhrpott** — 5 million people, 53 cities, 1 continuous city sign.

- **Currywurst** is the regional constitution. Order *"Currywurst Pommes Schranke"* (with ketchup *and* mayo). Asking for it "without skin" (*ohne Darm*) is permitted, but will be discussed.
- **The Bude** (Trinkhalle): the kiosk on every corner, open when everything else is closed, staffed by someone who knows everything about the neighbourhood (see: Frau Schulze, Ruhr edition).
- **Directness:** *"Wat is?"* means "How are you?". *"Muss ja"* means "Fine, thanks." That is the entire conversation.
- **Zechen:** the coal mines are closed; now they are museums and UNESCO sites. Structural change completed. Only ${randInt(40, 70)} years behind schedule.`,
  },
  {
    id: "place-saxony",
    keywords: ["leipzig", "dresden", "saxony", "elbflorenz", "frauenkirche", "zwinger", "semperoper", "erzgebirge", "thuringia", "thuringen", "erfurt", "weimar", "rostock", "magdeburg"],
    related: ["Why can't I understand Bavarian?", "Where should I go as a tourist?", "When does the Weihnachtsmarkt open?"],
    answer: () => `**Leipzig, Dresden & the East** — officially the most underrated part of the country.

- **Dresden** (*Elbflorenz*): baroque, the rebuilt **Frauenkirche**, and the Semperoper. Also the Striezelmarkt, one of the oldest Christmas markets, where Stollen is a matter of regional honour.
- **Leipzig:** the "new Berlin", according to people who moved there from Berlin because of the rent.
- **Erzgebirge:** the global capital of wooden nutcrackers, Räuchermännchen and Schwibbögen. Any window without a Schwibbogen in December is formally noticed.
- **Weimar & Erfurt:** poets, Bratwurst, and more culture per square metre than any Ordnungsamt can process.

Please note: *"Gemütlichkeit"* is legally required in Sachsen from the 1st Advent.`,
  },
  {
    id: "place-bielefeld",
    keywords: ["bielefeld", "bielefeld conspiracy", "bielefeldverschworung", "does bielefeld exist", "bielefeld exist"],
    related: ["Is this real?", "Where should I go as a tourist?", "Who is Frau Schulze?"],
    answer: (c) => `**Die Bielefeld-Verschwörung** (the Bielefeld conspiracy) states that the city of Bielefeld does not exist.

Official position of the Beamten-KI:
- We can confirm that Bielefeld has a postcode, a university and a train station.
- We **cannot** confirm that anyone has ever been there.
- Everyone who claims to be from Bielefeld is "actually from near Bielefeld".

In 2019, the city offered € 1 million to anyone who could prove it doesn't exist. Nobody won. This proves nothing.

To register a residence in Bielefeld, please use ${c.form()}. It will be processed by a Sachbearbeiter who also may not exist.`,
  },
  {
    id: "place-coast",
    keywords: ["north sea", "nordsee", "baltic", "ostsee", "strandkorb", "beach chair", "kurtaxe", "kurbeitrag", "spa tax", "beach tax", "wattenmeer", "wattwander", "mudflat", "sylt", "rugen", "usedom", "helgoland", "beach"],
    related: ["What is the weather like?", "Can I go camping anywhere?", "Where should I go as a tourist?"],
    answer: (c) => `**Nord- und Ostsee** — Germany's coastline: 2,389 km of wind, sand and regulations.

- **Strandkorb** (beach chair): a wicker booth you rent by the day, week or season. It has a number. It is *yours*. Sitting in someone else's Strandkorb is a serious civil matter.
- **Kurtaxe** (spa tax): ${c.fee} per person per day, just for being near the sea. Checked by uniformed Kurtaxe inspectors on the beach. Yes, really.
- **Wattwandern:** walking on the seabed at low tide. Only with a certified guide. The tide does not care about your Termin.
- **Sandburgen:** on some beaches, building sandcastles is regulated. Please respect the *Burgenordnung*.

Water temperature: *"Erfrischend"* (18°C, on a good day).`,
  },
  {
    id: "place-alps",
    keywords: ["alps", "alpen", "zugspitze", "highest mountain", "skiing", "ski resort", "ski holiday", "go skiing", "skifahren", "skiurlaub", "garmisch", "berchtesgaden", "konigssee", "mountain hut", "berghutte", "almhutte", "gipfelkreuz", "summit"],
    related: ["What is Wandern?", "Why do Germans wear Jack Wolfskin?", "What are winter tyres?"],
    answer: (c) => `**Die Alpen** — Germany's share is small, but meticulously organised.

- **Zugspitze:** 2,962 m, Germany's highest mountain. There is a cable car, a restaurant and a queue at the top. Summiting "on foot" means you walked from the cable car to the Gipfelkreuz.
- **Skiing:** lift passes cost ${c.fee} per hour. The après-ski music is Schlager. The Schlager is mandatory.
- **Alm (mountain hut):** you must greet everyone you pass on the trail with *"Servus"* or *"Grüß Gott"*. Failure to greet is noted in the hut logbook.
- **Königssee:** the boat captain plays a trumpet to demonstrate the echo. It has been the same melody since 1909.

Please wear proper hiking boots. Sneakers are a *Wanderordnungswidrigkeit*.`,
  },
  {
    id: "place-castles",
    keywords: ["neuschwanstein", "castle", "castles", "schloss neuschwanstein", "ritterburg", "loreley", "lorelei", "rhine valley", "rhine", "rhein", "mittelrhein", "king ludwig", "fairytale castle", "heidelberg"],
    related: ["Where should I go as a tourist?", "What are the best souvenirs?", "Are museums open on Monday?"],
    answer: (c) => `**Burgen und Schlösser** — Germany has over 20,000 castles, and every one of them has an Eintrittskarte.

- **Neuschwanstein:** built by King Ludwig II, who wanted a fairytale castle and got one, plus debt. Tickets must be booked online, with a time slot, in advance. Next available slot: **${c.termin}**.
- **The Rhine:** 40 castles in 65 km. The **Loreley** is a rock where, according to legend, a woman lured sailors to their doom by singing. Today, the same effect is achieved by the tour-boat loudspeaker.
- **Heidelberg:** a castle ruin, preserved *as a ruin*. Repairs require Denkmalschutz approval, which is not granted, which is why it is a ruin.

Photography inside: *verboten*. Photography outside: permitted, but disapproved of.`,
  },
  {
    id: "place-tourist",
    keywords: ["tourist", "sightseeing", "what to see", "must see", "must-see", "visiting germany", "visit germany", "first time in germany", "trip to germany", "places to visit", "where should i go", "bucket list", "sehenswurdig", "sights"],
    related: ["Is Neuschwanstein worth it?", "What should I see in Berlin?", "Can I pay by card?"],
    answer: () => `Welcome to Germany! Please follow the **official tourist programme** (Formular TOUR-1):

1. **Day 1:** Arrive. Discover that your train is delayed. Discover that the card reader is broken.
2. **Day 2:** Visit a castle. Book the time slot 6 weeks in advance.
3. **Day 3:** Try to buy something on a Sunday. Fail. Learn about Sonntagsruhe.
4. **Day 4:** Eat a Brezel, a Wurst and a cake before 15:00. Go for a Spaziergang.
5. **Day 5:** Cross a red light at 03:00. Be stared at.

**Top sights:** Berlin's Brandenburger Tor, Cologne Cathedral, Neuschwanstein, the Rhine, the North Sea, and the unique spectacle of 40 people silently waiting at a pedestrian crossing.

Please carry cash, a raincoat and your passport at all times.`,
  },
  {
    id: "place-hotel",
    keywords: ["hotel", "jugendherberge", "youth hostel", "hostel", "airbnb", "ferienwohnung", "holiday apartment", "holiday flat", "check-out time", "check out time", "breakfast buffet", "fruhstucksbuffet", "pension zimmer", "gasthof", "bed and breakfast"],
    related: ["Why is there a towel on my pool lounger?", "Can I pay by card?", "Do I have to pay the Kurtaxe?"],
    answer: (c) => `**Übernachtung in Deutschland** — accommodation, regulated.

- **Hotel check-in:** 15:00. Not 14:59. **Check-out:** 10:00, enforced by a knock at 10:01.
- **Meldeschein:** in German hotels you must fill in a paper registration form. Yes, even in 2026. Yes, it's the law (§ 29 BMG).
- **Breakfast buffet:** 07:00–10:00. At 10:00 the Rührei is removed with ceremonial precision. Taking a Brötchen "for later" is noticed.
- **Jugendherberge** (youth hostel): a membership card is required. Duvet covers must be put on yourself. Breakfast includes Früchtetee from a large metal urn.
- **Ferienwohnung:** the final cleaning fee is ${c.fee}. You will be asked to clean anyway.

Please separate your trash in the room. There are 4 bins in the bathroom.`,
  },
  {
    id: "place-camping",
    keywords: ["camping", "campsite", "campingplatz", "wildcamp", "wild camping", "wild camp", "wohnmobil", "camper van", "campervan", "motorhome", "tent", "put up a tent", "pitch a tent", "zelt", "zelten", "stellplatz", "caravan", "dauercamper"],
    related: ["Can I have a barbecue on my balcony?", "What are the Ruhezeiten?", "Do I have to pay the Kurtaxe?"],
    answer: (c) => `**Camping** — freedom, in rectangular plots of 80 m².

- **Wildcampen** (wild camping) is **verboten** in almost all of Germany. Pitching a tent in the forest is an Ordnungswidrigkeit. Even sleeping in a car at a parking lot is a grey area, depending on the Bundesland and the mood of the Förster.
- **Campingplatz:** check-in until 18:00. Mittagsruhe 13:00–15:00. Nachtruhe from 22:00. The barrier closes at 22:00 — if you're late, you sleep outside, which is wild camping, which is verboten.
- **Dauercamper:** people who have lived on the same plot since 1987, with a garden gnome, a fence, a satellite dish and a Hausordnung stricter than any city.

Pitch fee: ${c.fee} per night, plus electricity by the kWh, plus hot showers by the token.`,
  },
  {
    id: "place-souvenir",
    keywords: ["souvenir", "souvenirs", "bring home", "gift from germany", "present from germany", "cuckoo clock", "kuckucksuhr", "garden gnome", "gartenzwerg", "nutcracker", "nussknacker", "bierkrug", "beer stein", "ampelmann"],
    related: ["Where should I go as a tourist?", "When does the Weihnachtsmarkt open?", "Can I pay by card?"],
    answer: () => `**Official list of approved German souvenirs:**

- 🕰️ **Kuckucksuhr** (cuckoo clock): from the Black Forest. Must be wound daily. Will outlive you.
- 🧙 **Gartenzwerg** (garden gnome): Germany has an estimated 25 million. Some gardens have more gnomes than the Bürgeramt has appointments.
- 🪖 **Nussknacker** from the Erzgebirge: cannot actually crack nuts. Can crack your budget.
- 🍺 **Bierkrug** with a lid: to keep flies out, officially. To keep cheerfulness in, unofficially.
- 🚦 **Ampelmännchen merch**: the pedestrian-light man, on T-shirts, mugs and gummy bears.
- 📁 **A Leitz-Ordner**: the most authentic souvenir of all.

Please declare everything at customs. The customs officer will ask about the gnome.`,
  },
  {
    id: "place-bundesland",
    keywords: ["best state", "which state", "best bundesland", "federal state to live", "best city", "where to live in germany", "where should i live", "most beautiful city", "best place to live", "nicest city", "schonste stadt"],
    related: ["What is Berlin like?", "What is Munich like?", "How do I do my Anmeldung after moving?"],
    answer: () => `Your question about the **best Bundesland** has been forwarded to all 16 Bundesländer. Each responded that it is the best. Official summary:

- **Bayern:** best (according to Bayern)
- **Baden-Württemberg:** "We can do everything except Hochdeutsch."
- **Nordrhein-Westfalen:** most people, most Currywurst, most traffic jams
- **Berlin:** poor, but sexy, and not taking questions
- **Hamburg:** gateway to the world, with rain
- **Mecklenburg-Vorpommern:** more lakes than traffic lights
- **Saarland:** used as a unit of measurement ("an area twice the size of Saarland")
- **Bremen:** smallest, but has a lot to say about it

The Beamten-KI remains neutral, as required by § 33 Beamtenstatusgesetz.`,
  },
  {
    id: "place-smalltown",
    keywords: ["smallest town", "biggest city", "largest city", "smallest city", "village", "dorf", "kleinstadt", "countryside", "provinz", "live in the country", "auf dem land", "rural", "middle of nowhere", "jwd"],
    related: ["Why is there no mobile signal?", "What is a Verein?", "Where should I live?"],
    answer: (c) => `**Das Leben auf dem Land** (village life) — officially recognised features:

- **Bus:** twice a day. Once to school, once back. On Sundays: none.
- **Mobile signal:** available on the church tower and in the upper-left corner of the Edeka car park.
- **Social life:** 1 Freiwillige Feuerwehr, 1 Schützenverein, 1 Sportverein, 1 Gasthof. You will be a member of all four within ${c.wait} weeks.
- **News:** travels faster than any fibre-optic connection. Everyone knows what you bought at the bakery before you've left the bakery.

Germany's biggest city is Berlin (3.9 million). Germany's smallest town has fewer inhabitants than a Berlin S-Bahn carriage at rush hour.`,
  },
  {
    id: "place-landmarks",
    keywords: ["brandenburger tor", "brandenburg gate", "reichstag", "bundestag dome", "museumsinsel", "museum island", "museum", "museen", "fernsehturm", "tv tower", "closed on monday", "montags geschlossen", "open on monday", "eintritt", "entrance fee", "ticket for the museum"],
    related: ["What should I see in Berlin?", "Is Neuschwanstein worth it?", "What are your opening hours?"],
    answer: (c) => `**Besichtigungen** (sightseeing) — official rules:

- **Museums are closed on Mondays.** This is a nationwide constant, like gravity. Some are also closed on Tuesdays, for reasons.
- **Reichstag dome:** free entry, but only with online registration in advance, plus ID, plus a security check. Next free slot: **${c.termin}**.
- **Brandenburger Tor:** open 24/7. The only German institution without Öffnungszeiten.
- **Fernsehturm:** 368 m. Time slot tickets. The restaurant rotates once every hour, slightly faster than a Bürgeramt queue.
- **Admission:** ${c.fee}, cash preferred. Student discount requires a student ID with a current semester sticker, *not* last semester's.

Please do not touch anything. Please especially do not touch the things with the sign "Bitte nicht berühren".`,
  },
];
