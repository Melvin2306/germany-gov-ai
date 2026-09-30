import { randInt, type Topic } from "./shared";

// Mobility & travel. More specific than the core "car", "train", "bike",
// "parking" and "deutschlandticket" topics; multi-word keywords win ties.
export const mobilityTopics: Topic[] = [
  {
    id: "mobility-licence-conversion",
    keywords: ["licence from", "license from", "spanish licence", "foreign licence", "foreign license", "swap it for a", "is it valid here", "convert it", 
      "umschreib", "convert my", "exchange my", "transfer my", "foreign driv", "foreign licen",
      "us driver", "us licen", "licence valid", "license valid", "fuhrerschein umschreib", "american driv", "non-eu licen", "international driving permit", "internationaler fuhrerschein",
    ],
    related: ["How much does a driving licence cost?", "Do I need an appointment at the Bürgeramt?", "How do I get a certified translation?"],
    answer: (c) => `Converting a foreign driving licence (**Führerscheinumschreibung**) is possible. Pleasant, no.

**Your licence is valid in Germany for 6 months after your Anmeldung.** On day 184 you become a pedestrian.

**Required:**
- Original licence, plus a translation by a *vereidigter Übersetzer*
- Biometric photo, Sehtest (eye test) from an approved optician, Erste-Hilfe-Kurs certificate (9 hours, Saturdays, includes a doll)
- ${c.form()}
- Depending on your country: a theory **and** a practical test, taken in German or 11 other languages, but not the one you speak

**Processing time:** ${c.wait} weeks. During processing you receive a temporary document you may not use abroad, nor, in some Bundesländer, in the car.`,
  },
  {
    id: "mobility-fahrschule",
    keywords: [
      "fahrschule", "driving school", "driving test", "driving lesson", "fahrstunde", "fuhrerscheinprufung",
      "theory test", "theorieprufung", "learn to drive", "driving licence cost", "cost of a driving", "driving license cost",
    ],
    related: ["How do I convert my foreign driving licence?", "What happens if I get caught speeding?", "Do I need winter tyres?"],
    answer: () => `Obtaining a German driving licence (**Klasse B**) is roughly as expensive as a used car, which you then cannot afford.

**Average costs:** € ${randInt(3200, 4600)},00, consisting of:
- Grundgebühr, Lernapp, Sehtest, Erste-Hilfe-Kurs, passport photo
- 14 Pflichtstunden: *Überland*, *Autobahn* and *Nachtfahrt* (at 22:00, in a Golf, in silence)
- An unspecified number of normal lessons, determined by your instructor's pension plans

**Theory test:** 30 questions from a pool of 1,100, e.g. *"Womit müssen Sie rechnen?"* (What must you expect?). Correct answer: everything.

**Practical test:** 55 minutes. Instant failure for forgetting the **Schulterblick** (shoulder check). The examiner's facial expression will not change, no matter the outcome.`,
  },
  {
    id: "mobility-tuev",
    keywords: ["tuv", "hauptuntersuchung", "car inspection", "vehicle inspection", "roadworthy", "prufplakette", "inspection sticker", "failed the tuv", "failed tuv", "need tuv", "tuv appointment", "mot test"],
    related: ["Do I need winter tyres?", "How do I register my car?", "What do I do after a car accident?"],
    answer: (c) => `The **TÜV** (Technischer Überwachungsverein) inspects your car every 2 years. It also inspects your character.

**Hauptuntersuchung (HU) checklist:**
- Brakes, lights, rust, exhaust, tyre tread (min. 1,6 mm, measured with a coin and contempt)
- Warndreieck, Verbandskasten (not expired — yes, first aid kits expire), Warnweste
- Any modification not entered in your papers, including the air freshener tree, if it looks *sportlich*

**Result:** a coloured sticker on your number plate. The colour indicates the year; the position of the notch the month. Only 11 people in Germany can read it. They all work for the Ordnungsamt.

**Fee:** ${c.fee}. Failed? You have 1 month to fix it and come back, humbled.`,
  },
  {
    id: "mobility-stau",
    keywords: [
      "stau", "traffic jam", "traffic on the", "baustelle", "roadwork", "road work", "construction site", "ferienverkehr",
      "holiday traffic", "rettungsgasse", "emergency lane", "rescue lane", "emergency corridor",
    ],
    related: ["Is there a speed limit on the Autobahn?", "What happens if I get caught speeding?", "Why are fuel prices so high?"],
    answer: () => `Welcome to the **Stau** (traffic jam), Germany's largest open-air waiting room.

**Current situation:** ${randInt(4, 40)} km Stau on the A${pick2()} between *Baustelle* and *Baustelle*. Cause: a Baustelle where nobody has worked since 2019. The cones are, however, very well maintained.

**Ferienverkehr:** When 16 Bundesländer start their summer holidays in staggered waves, all of them still leave on the same Saturday at 04:00, *"um dem Stau zu entgehen"* (to avoid the traffic).

**Rettungsgasse (emergency corridor):** mandatory as soon as traffic slows. Left lane moves left, all others move right. Not forming one costs up to € 320, 2 points in Flensburg and a month without driving. It is the one moment Germans cooperate spontaneously; please enjoy it.`,
  },
  {
    id: "mobility-speeding",
    keywords: [
      "blitzer", "geblitzt", "speed camera", "speeding", "caught speeding", "flensburg", "points in flensburg", "punkte in",
      "bussgeld", "speed trap", "radarfalle", "too fast",
    ],
    related: ["Is there a speed limit on the Autobahn?", "What do I do after a car accident?", "Why is there always a Stau?"],
    answer: (c) => `You have been **geblitzt** (flashed by a speed camera). Please smile; the photo will be sent to you by post, with your passenger's face carefully blacked out, out of respect for privacy.

**Fines (Bußgeldkatalog), inside town:**
- 10 km/h over: € 30
- 21 km/h over: € 115, **1 Punkt in Flensburg**
- 31 km/h over: € 260, 2 points, 1 month Fahrverbot

**Flensburg** is a town in the far north that stores your sins in the **Fahreignungsregister**. At 8 points your licence is withdrawn and you are sent to the **MPU** (colloquially: *Idiotentest*), a psychological examination with a waiting list of ${c.wait} weeks.

*Tip:* A letter titled **Anhörungsbogen** is not a greeting card. Please reply.`,
  },
  {
    id: "mobility-umweltzone",
    keywords: ["umweltzone", "environmental zone", "low emission", "emission zone", "feinstaub", "green sticker", "emission sticker", "diesel ban", "dieselfahrverbot", "fahrverbot fur diesel"],
    related: ["What is the TÜV?", "Do I need a toll vignette?", "Why are fuel prices so high?"],
    answer: (c) => `Most German cities have an **Umweltzone** (low-emission zone). You may only enter it with a green **Feinstaubplakette** on your windscreen.

- 🟢 Green: welcome
- 🟡 Yellow: historically welcome, now emotionally complicated
- 🔴 Red: please turn around, slowly, emitting as little as possible

The sticker costs ${c.fee} at the TÜV, the Zulassungsstelle or certain garages, and is valid **forever**, unlike every other document in this country. It must be affixed at the bottom right of the windscreen. Bottom left is a different Ordnungswidrigkeit.

**Foreign vehicles** need one too. Tourists typically learn this when the € 100 fine arrives at their home address, in German, 7 months later.`,
  },
  {
    id: "mobility-maut",
    keywords: ["maut", "toll", "vignette", "toll vignette", "road toll", "pkw-maut", "lkw-maut"],
    related: ["Is there a speed limit on the Autobahn?", "Why is there always a Stau?", "Do I need a green sticker for Berlin?"],
    answer: () => `**Is there a toll (Maut) for cars on German motorways?**

No. There was going to be one. It was planned, legislated, contracted, taken to the European Court of Justice, declared illegal, and then paid for anyway, in the form of compensation to the companies that were going to collect it.

The result is the world's most expensive toll that nobody has ever paid.

**Trucks (LKW)** do pay the **LKW-Maut**, calculated by weight, axles, CO₂ class and kilometres, collected by grey gantries above the Autobahn that everyone assumes are speed cameras.

Driving to Austria or Switzerland? Buy their **vignette** before the border. Their Beamte are just as thorough as ours, but with mountains.`,
  },
  {
    id: "mobility-ber",
    keywords: ["ber ", "ber?", "ber.", "is ber ", "is ber?", "ber finally", "berlin airport", "brandenburg airport", "flughafen ber", "flughafen berlin", "tegel", "schonefeld", "willy brandt"],
    related: ["What are my rights if my flight is cancelled?", "Is there a train strike tomorrow?", "How do I get a taxi?"],
    answer: () => `The **Flughafen Berlin Brandenburg (BER)** is open.

**Project history (abridged):**
- 2006: construction begins
- 2011: opening planned
- 2012: opening cancelled 4 weeks before, due to the fire protection system (the smoke would have been extracted downwards)
- 2012–2020: 7 new opening dates, 1 new Flughafenchef per date, approx. 750 escalators that were too short
- 2020: opens, during a pandemic, to an audience of nobody

**Budget:** planned € 2 billion, final approx. € 7 billion. Considered a success, as it exists.

It is now a fully functional airport. For the complete authentic experience, please arrive 3 hours early and queue at security, which is being renovated.`,
  },
  {
    id: "mobility-flights",
    keywords: ["flight got cancelled", "flight cancelled", "flight was cancelled", "flug annulliert", "flight", "flug", "flight is cancel", "flight cancel", "cancelled flight", "flight delay", "flight is delay", "lufthansa", "fluggastrecht", "airline", "airport", "lost luggage", "luggage", "gepack", "boarding", "plane"],
    related: ["Is there a train strike tomorrow?", "Is BER finally open?", "Why is my train late?"],
    answer: () => `**Fluggastrechte (passenger rights, EU 261/2004):**

- Delay of 3+ hours or cancellation: € 250–600 compensation, depending on distance
- Unless *"außergewöhnliche Umstände"* (extraordinary circumstances) apply. Weather, strikes, a bird, a pilot's mood, and Tuesdays are extraordinary circumstances.

**How to claim:**
1. Fill in the airline's online form. It will crash on page 4.
2. Wait 8 weeks for an automated rejection.
3. Contact the **Schlichtungsstelle für den öffentlichen Personenverkehr** (söp).
4. Receive € ${randInt(250, 600)} approximately ${randInt(9, 20)} months after your holiday, by which time you have forgotten the holiday.

**Lost luggage?** Report it at the *Lost & Found* counter, which is located past the security area you are no longer allowed to enter.`,
  },
  {
    id: "mobility-strike",
    keywords: ["gdl streik", "bahnstreik", "train strike", "rail strike", "zugstreik", "airport strike", "strike at the airport", "streik am flughafen", "transport strike", "bus strike", "gdl", "gdl on strike", "gdl strik", "lokfuhrer", "train driver"],
    related: ["What are my rights if my flight is cancelled?", "Why is there a replacement bus?", "Is Flixbus a good alternative to the train?"],
    answer: () => `**Streik** (strike) is a constitutionally protected right (Art. 9 Abs. 3 GG) and a popular seasonal event.

**Current strike calendar:**
- 🚆 **GDL** (train drivers): striking from Wednesday 02:00 to Friday 22:00, announced at 18:00 the day before
- ✈️ **Verdi** (airport ground staff): *Warnstreik* (warning strike), which is a strike, but as a warning, of more strikes
- 🚌 Local transport: striking on Thursday, in 4 Bundesländer, except where it isn't

**What does it mean for you?**
- Tickets remain valid "on the next available train", which may be next week.
- The *Notfahrplan* (emergency timetable) is published after the strike begins.

Please plan ahead. Planning ahead is also not possible.`,
  },
  {
    id: "mobility-fernbus",
    keywords: ["fernbus", "flixbus", "flix", "long distance bus", "long-distance bus", "coach", "intercity bus", "busbahnhof", "zob"],
    related: ["Why are train tickets so expensive?", "Is there a train strike tomorrow?", "Can I find a carpool or ride-share?"],
    answer: () => `The **Fernbus** is the Deutsche Bahn's cheaper, greener, more honest cousin.

**What to expect:**
- Ticket price: € ${randInt(4, 29)},99 (from), rising to € 60 once you click it
- Departure from the **ZOB** (Zentraler Omnibusbahnhof), a concrete structure designed to test your will to travel
- Wi-Fi: advertised. Sockets: one per bus, under seat 17c, broken
- Toilet: available, spiritually closed

**Punctuality:** better than the train, because the Autobahn has only *Stau*, whereas the railway has *Stau, Signalstörung, Weichenstörung* and *Personalmangel*.

Seats are assigned by the law of the jungle, unless you reserved one, in which case they are assigned by the person sitting in it.`,
  },
  {
    id: "mobility-taxi",
    keywords: ["taxi", "uber", "bolt", "rideshare", "ride-share", "freenow", "cab ", "cabs"],
    related: ["Can I pay by card?", "Can I ride an e-scooter?", "Can I take an Uber?"],
    answer: () => `**Taxis in Germany:**

- Colour: **Hellelfenbein** (light ivory, RAL 1015), by law, in most places. It is the only regulated beige in Europe.
- Model: Mercedes E-Klasse, driven with a calm that suggests the driver owns the road, which in a legal sense he partially does.
- Payment: *"Karte geht gerade nicht"* (the card machine just stopped working), at the exact moment you arrive.

**Uber** exists, but must operate through licensed rental car companies that return to their garage between rides (**Rückkehrpflicht**). The car must be empty, the driver sad, and the process ineffective.

Tipping: round up. *"Stimmt so"* means "keep the change". Saying it confidently is more important than the amount.`,
  },
  {
    id: "mobility-escooter",
    keywords: ["e-scooter", "escooter", "scooter", "roller", "e-roller", "lime", "tier scooter"],
    related: ["Can I ride my bike instead?", "What happens if I get caught speeding?", "Can I cross on red?"],
    answer: () => `**E-Scooter (Elektrokleinstfahrzeuge, eKFV)** — the rules:

- Minimum age 14. Maximum speed 20 km/h. Maximum people: **1**. You are two. Please stop.
- Use the cycle path. Not the pavement (Gehweg). Not the Autobahn. People have tried.
- Alcohol limit: the same as for cars (0,5 ‰). Riding a scooter home from the Biergarten counts as driving and will be explained to you by the police, slowly.
- Insurance sticker mandatory.

**Parking:** in the designated zones, upright. In practice, e-scooters are parked in rivers, on bus shelters, across the Radweg and, in one documented case, inside a Kirche.

Frau Schulze has filed ${randInt(12, 60)} complaints about the one outside her door.`,
  },
  {
    id: "mobility-bike-theft",
    keywords: ["stolen bike", "bike stolen", "bike was stolen", "bike got stolen", "bike theft", "bicycle stolen", "stolen bicycle", "fahrrad geklaut", "wurde geklaut", "fahrradklau", "fahrraddieb", "bike lock", "fahrradschloss", "lock my bike"],
    related: ["Can I ride my bike instead?", "Can I ride an e-scooter instead?", "How do I file a Widerspruch?"],
    answer: (c) => `We are sorry for your loss. Your bicycle is now in one of three places:

1. A flea market (**Flohmarkt**), on sale for € 40
2. A canal
3. Still at the station, but you forgot where you locked it

**Procedure:**
- File an **Anzeige** (police report) online or at the station. Required: frame number (Rahmennummer), which you did not write down, and a receipt from 2014.
- Your case will be closed after ${c.wait} days as *"Täter unbekannt"*.
- Your Hausratversicherung may pay, if the bike was locked to a fixed object between 22:00 and 06:00 with a lock worth at least 10% of the bike.

*Prevention:* Use two locks, both heavier than the bicycle.`,
  },
  {
    id: "mobility-bahncard",
    keywords: ["bahncard", "bahn card", "sparpreis", "supersparpreis", "flexpreis", "zugbindung", "train ticket", "cheap train", "db ticket", "fahrkarte"],
    related: ["Is the Deutschlandticket worth it?", "Why is my train late?", "Can I reserve a seat on the train?"],
    answer: () => `**Deutsche Bahn fares — a short guide:**

- **Flexpreis:** the price of a small used car; valid on any train, which will be delayed.
- **Sparpreis:** cheaper, bound to a specific train (**Zugbindung**). If that train is ${randInt(20, 59)} minutes late, the Zugbindung is lifted, so you may take a different late train.
- **Super Sparpreis:** no seat guarantee, no refunds, no hope.

**BahnCard 25 / 50 / 100:** a subscription for discounts. BahnCard 100 is for people who have given up all other hobbies.

Prices change dynamically, depending on demand, the day of the week and the phase of the moon. The cheapest ticket is always the one that was available yesterday.`,
  },
  {
    id: "mobility-quiet-zone",
    keywords: ["ruhebereich", "quiet zone", "quiet car", "quiet area", "seat reservation", "reserve a seat", "reserved seat", "sitzplatzreservierung", "in my seat", "my reserved"],
    related: ["Why are train tickets so expensive?", "Why is my Deutsche Bahn train delayed?", "What are the Ruhezeiten?"],
    answer: () => `**Seat reservation (Sitzplatzreservierung):** € 5,50, valid for the seat displayed as *"ggf. freigeben"* (release if necessary). The seat will be occupied. The occupant will not look up. You will stand next to them for 40 minutes, and neither of you will speak. This is a very German conflict and it is considered resolved.

Also: your reservation is invalid today due to **Ersatzzug** (replacement train) with a different car order.

**Ruhebereich (quiet zone):**
- No phone calls, no music, no laptop clicking, no crisps
- Enforcement is not done by staff. It is done by a retired Studienrat in seat 64, who has been waiting his whole life for this moment.

A loud *"Psst!"* is legally binding.`,
  },
  {
    id: "mobility-sev",
    keywords: ["schienenersatzverkehr", "ersatzverkehr", "rail replacement", "replacement bus", "sev ", "bus instead of"],
    related: ["Why is my train late?", "Is there a train strike tomorrow?", "Is Flixbus a good alternative to the train?"],
    answer: () => `**Schienenersatzverkehr (SEV)** — rail replacement service — is the Deutsche Bahn's way of admitting that a train is, at heart, just a very long bus.

**How to find your replacement bus:**
1. Exit the station via the exit that is closed.
2. Follow the small laminated sign with an arrow and the word *SEV*, taped to a lamp post in 2021.
3. Wait at a bus stop that does not officially exist.
4. The bus arrives. It goes to all stations, plus several that were closed in 1994.

**Travel time:** original + ${randInt(40, 95)} minutes. The SEV is itself occasionally replaced by a *SEV für den SEV* (a replacement for the replacement), which is a taxi for 8 people containing 31.`,
  },
  {
    id: "mobility-fuel",
    keywords: ["tankstelle", "petrol", "gas station", "fuel", "fuel price", "is e10", "benzin", "sprit", "e10", "gas price", "diesel price", "tanken", "refuel"],
    related: ["Can I go shopping on Sunday?", "Do I need a green sticker for Berlin?", "What is the TÜV?"],
    answer: () => `**Fuel prices (Spritpreise)** in Germany change up to **${randInt(6, 12)} times a day**, following a pattern understood only by the **Markttransparenzstelle für Kraftstoffe** (a real office) and the Tankstelle owner's cat.

- Cheapest: between 18:00 and 22:00
- Most expensive: exactly when you need to fill up
- Price difference between two petrol stations 300 m apart: 14 cents, fuelling ${randInt(20, 80)} minutes of detours

**E10:** cheaper, but nobody trusts it. 15 years later, still nobody knows if it's fine for their car. It is.

The **Tankstelle** is also Germany's only 24/7 supermarket, selling beer, flowers for forgotten anniversaries and Bockwurst. On Sundays, the entire population queues here.`,
  },
  {
    id: "mobility-winter-tyres",
    keywords: ["tyres", "tires", "reifen", "winterreifen", "winter tyre", "winter tire", "snow tyre", "snow tire", "o bis o", "reifenwechsel", "summer tyre", "summer tire", "tyre", "tires", "all-season"],
    related: ["What is the TÜV?", "What do I do after a car accident?", "What is the weather like?"],
    answer: () => `**Winterreifen (winter tyres)** are mandatory *"bei winterlichen Straßenverhältnissen"* (in wintry road conditions), i.e. not by date but by situation. You must judge the situation. The police will judge your judgement.

**The folk rule: "von O bis O"** — from *Oktober* to *Ostern* (Easter).

**Twice a year** the whole country changes tyres simultaneously. Appointments at the garage (**Reifenwechsel**) must be booked by August. Otherwise you will change them yourself, on a Saturday, while your neighbour watches and says nothing but *"Hm."*

Your summer tyres will be stored in the **Keller**, where they will remain after you sell the car.

Minimum tread for winter tyres: 4 mm recommended, measured with a 1-euro coin and disappointment.`,
  },
  {
    id: "mobility-accident",
    keywords: ["accident", "unfall", "crash", "warndreieck", "warning triangle", "verbandskasten", "first aid kit", "warnweste", "fender bender", "scratched my car", "hit my car", "dent in my car", "blechschaden"],
    related: ["What is the TÜV?", "What happens if I get caught speeding?", "How do I file a Widerspruch?"],
    answer: () => `**After a car accident (Unfall), please proceed as follows:**

1. Stop. Switch on the hazard lights.
2. Put on the **Warnweste** (hi-vis vest). It must be inside the car, reachable from the driver's seat, not in the boot under the summer tyres.
3. Set up the **Warndreieck** (warning triangle): 50 m behind the car in town, 100 m on country roads, 200 m on the Autobahn — i.e. walk back along the Autobahn with a small red triangle, as a sacrifice.
4. Help the injured. Your **Verbandskasten** (first aid kit) expired in ${randInt(2009, 2019)}.
5. Exchange details. Fill in the **Europäischer Unfallbericht** in blue ink, on the bonnet, in the rain.

Driving away from even a minor scratch is **Unfallflucht** (hit-and-run), a criminal offence. Leaving a note behind the wiper does not count, but is very German.`,
  },
];

// Pick an Autobahn number that sounds plausible.
function pick2() {
  return [1, 2, 3, 5, 6, 7, 8, 9, 10, 40, 61, 99][randInt(0, 11)];
}
