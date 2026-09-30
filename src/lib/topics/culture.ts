import { randInt, type Topic } from "./shared";

// Culture, stereotypes and leisure. Affectionate clichés only.
export const cultureTopics: Topic[] = [
  {
    id: "culture-punctuality",
    keywords: ["punctual", "punctuality", "pünktlich", "on time", "being late", "running late", "too early", "zu spät", "zu fruh", "minutes early", "minutes late", "be early", "akademisches viertel", "verspäte"],
    related: ["Why is my train late?", "How do I address my boss?", "What should I bring when I'm invited?"],
    answer: () => `**Pünktlichkeit** is not a virtue in Germany. It is the baseline.

- **On time** means 5 minutes early.
- **5 minutes early** means you are on time.
- **Exactly on time** means you are late, but we will not say anything. We will only look at our watch.
- **Late** (1 minute or more) requires a phone call beforehand, an apology, and a short explanation of the circumstances, ideally with a reference number.

**Exception:** the *akademisches Viertel* (c.t.) at universities, which grants 15 minutes of legally sanctioned lateness.

**Second exception:** the Deutsche Bahn, which has been granted a permanent Ausnahmegenehmigung from punctuality.`,
  },
  {
    id: "culture-football",
    keywords: ["football", "soccer", "fußball", "bundesliga", "world cup", "weltmeister", "stammtisch", "fc bayern", "bayern munich", "dortmund", "schalke", "bvb", "public viewing", "penalty", "elfmeter"],
    related: ["What is a Verein?", "Is beer food?", "Can I go to the Stammtisch?"],
    answer: (c) => `**Fußball** in Germany is officially a sport and unofficially the weekly national mood regulator.

1. **Samstag, 15:30 Uhr:** Bundesliga kick-off. Your Termin at the Bürgeramt has been moved for this reason. New date: **${c.termin}**.
2. **The Stammtisch:** a reserved table in a pub, occupied by the same 6 men since 1983, discussing why the Schiedsrichter was wrong. You may join after approximately 11 years of regular attendance.
3. **Penalties (Elfmeter):** Germany wins them. This is not a stereotype; it is an administrative expectation.
4. **Public Viewing:** watching a match outdoors in the rain with 40,000 strangers, legally classified as a *Veranstaltung* requiring a Genehmigung, 3 Ordner and a Toilettenkonzept.

Please note: the correct answer to *"Who will win the league?"* has been the same for many years and is not subject to Widerspruch.`,
  },
  {
    id: "culture-karneval",
    keywords: ["karneval", "carnival", "fasching", "fastnacht", "helau", "alaaf", "rosenmontag", "weiberfastnacht", "jeck", "costume", "kostum", "11.11"],
    related: ["Is it true Germans have no humour?", "Can I drink on the street?", "What are the Ruhezeiten?"],
    answer: () => `**Karneval** (also *Fasching*, *Fastnacht*) is the officially designated period of spontaneity.

- **Start:** 11.11. at 11:11 Uhr sharp. Spontaneity begins punctually.
- **Peak:** *Rosenmontag*, when entire cities stop working to throw sweets (*Kamelle*) at each other.
- **Weiberfastnacht:** your tie will be cut off. This is legally not property damage. Please wear an old tie; the Kostümordnung recommends it.
- **Greeting:** *"Alaaf!"* in Köln, *"Helau!"* in Düsseldorf and Mainz. Using the wrong one in the wrong city is a serious Ordnungswidrigkeit of the heart.

**Ends:** Aschermittwoch (Ash Wednesday). All joy must be returned by 00:00. Leftover Konfetti is Restmüll.`,
  },
  {
    id: "culture-weihnachtsmarkt",
    keywords: ["weihnachtsmarkt", "christmas market", "glühwein", "mulled wine", "christkindl", "advent", "christmas", "weihnacht", "lebkuchen", "stollen", "nikolaus"],
    related: ["Where do I return Pfand bottles?", "What should I bring when I'm invited?", "What happens on Silvester?"],
    answer: () => `The **Weihnachtsmarkt** (Christmas market) opens in late November, or as retail sees it, in August.

**What to expect:**
- **Glühwein** (mulled wine) at € ${randInt(4, 6)},50 plus **€ 3 Pfand** for the mug. The mug is a collectible. You will own 14 of them. They are all in your kitchen cupboard, which you brought yourself.
- **Bratwurst**, **Lebkuchen**, **gebrannte Mandeln** and a wooden stall selling felt slippers you do not need, but will buy.
- **Adventskalender:** 24 doors. Opening door 25 is not permitted.

**Nikolaus** comes on 6 December and fills your boots — cleaned boots only. Unpolished boots receive a formal written warning (*Rute*).`,
  },
  {
    id: "culture-easter",
    keywords: ["easter", "oster", "osterhase", "easter bunny", "easter egg", "ostereier", "karfreitag", "good friday"],
    related: ["What is a Brückentag?", "Can I go shopping on Sunday?", "Why is everything closed on holidays?"],
    answer: () => `**Ostern** (Easter) is a 4-day festival of chocolate and closed shops.

- **Karfreitag (Good Friday):** a *stiller Feiertag*. Dancing is prohibited in most Bundesländer (*Tanzverbot*). Yes, really. Please move quietly and without rhythm.
- **Ostersonntag:** the **Osterhase** hides coloured eggs in the garden. Eggs must be hidden in accordance with the Hausordnung: not in the flowerbeds of Frau Schulze.
- **Ostermontag:** another holiday. Everything is closed. You forgot to buy milk on Saturday. Everybody forgot to buy milk on Saturday.

**Osterfeuer** (Easter bonfires) require a Genehmigung from the Ordnungsamt, a fire safety plan, and a volunteer fire brigade Verein, which is also hosting.`,
  },
  {
    id: "culture-sauna",
    keywords: ["sauna", "aufguss", "naked", "nackt", "textilfrei", "fkk", "freikörperkultur", "nudist", "nudism", "naturist", "nude", "steam room", "dampfbad"],
    related: ["Can I reserve a sun lounger with a towel?", "Why do Germans take off their shoes?", "What are the Ruhezeiten?"],
    answer: () => `**The German sauna — official rules (Saunaordnung):**

1. **Textilfrei.** Swimwear is not permitted. It is considered unhygienic. Your embarrassment is considered irrelevant.
2. **Towel:** mandatory. Your entire body must be on the towel, **including your feet**. A single toe on the wooden bench is a scandal that will be discussed.
3. **Aufguss:** at the full hour, the *Saunameister* pours water on the stones and waves a towel with the precision of a helicopter pilot. Leaving during the Aufguss is not forbidden. It is merely unforgivable.
4. **Silence.** Conversation above a whisper will be met with a *"Psst."* The Psst is final.

**FKK (Freikörperkultur):** the outdoor version. There are designated nude beaches, clearly signposted, and fully compliant with the relevant Badeordnung.`,
  },
  {
    id: "culture-pool-towel",
    keywords: ["towel", "handtuch", "sun lounger", "sunbed", "liegestuhl", "sonnenliege", "poolside", "by the pool", "pool", "hotel pool"],
    related: ["How do I behave in a sauna?", "Why do Germans love Mallorca?", "Is it rude to be early?"],
    answer: () => `The **Handtuch-Reservierung** (towel reservation) is a recognised international procedure.

**Procedure:**
1. Wake at **05:45**, before the buffet opens and before other nationalities.
2. Place a towel on the sun lounger (*Sonnenliege*) of your choice. Corners must be aligned.
3. Leave. Return at 11:00. The lounger is yours.

**Legal status:** the reservation is valid for up to **${randInt(3, 5)} hours**, or until someone gets the hotel manager. A towel held in place by a book counts as double reservation (*Doppelbelegung*).

Removing another person's towel is technically possible and socially equivalent to moving someone's car in a Schützenfest parking lot.`,
  },
  {
    id: "culture-schrebergarten",
    keywords: ["schrebergarten", "kleingarten", "allotment", "garden gnome", "gartenzwerg", "gartenverein", "garden club", "garden", "laube"],
    related: ["What is a Verein?", "Can I mow my lawn on Sunday?", "Can I have a barbecue on my balcony?"],
    answer: (c) => `A **Schrebergarten** (allotment garden) is a small plot of land with a shed (*Laube*) and approximately 400 rules.

**Bundeskleingartengesetz — highlights:**
- At least **one third** must be used for growing fruit and vegetables. Lawn alone is decadent.
- The Laube may not exceed **24 m²** and may not be used as a residence. You may nap in it. Briefly.
- Hedges: maximum height **1,25 m**. Measured by the Vorstand. With a tape measure. On Saturdays.
- **Gartenzwerge** (garden gnomes) are permitted, subject to Vereinsbeschluss regarding colour and pose.

**Waiting list:** currently **${c.wait} years** in major cities. Application via ${c.form()}, including a motivation letter and proof of green thumbs.`,
  },
  {
    id: "culture-verein",
    keywords: ["verein", "e.v.", "eingetragener verein", "join a club", "association", "hobby", "hobbies", "vereinsmeier", "club"],
    related: ["What is a Schrebergarten?", "Why do Germans love football so much?", "How do I register my new business?"],
    answer: (c) => `Germany has over **600.000 registered Vereine** (clubs). If an activity exists, there is a Verein for it. If it does not exist, there is a Verein working on it.

**To found a Verein (e. V.):**
1. Find **7 founding members** (*Gründungsmitglieder*).
2. Write a *Satzung* (constitution), at least 9 pages, including rules for the election of the Kassenwart.
3. Register with the **Vereinsregister** at the Amtsgericht via notary (${c.fee}).
4. Hold an annual *Mitgliederversammlung* with minutes (*Protokoll*), signed by the Schriftführer.

Every Verein has exactly one person who does everything, and 40 members who attend only the Sommerfest. The Kassenprüfung is the most feared event of the year.`,
  },
  {
    id: "culture-guest",
    keywords: ["hausschuh", "slipper", "shoes off", "take off my shoes", "take off their shoes", "take off shoes", "schuhe aus", "puschen", "mitbringsel", "gift", "geschenk", "present for", "invited", "invitation", "what to bring", "bring flowers", "flowers", "blumen", "dinner party"],
    related: ["Should I say du or Sie?", "Is it rude to be early?", "Why do Germans queue so strictly?"],
    answer: () => `**Visiting a German household — Besucherordnung:**

- **Shoes off** at the door. You will be offered **Gästehausschuhe** (guest slippers) from a basket. They are clean. They have been worn by 30 previous guests. They are clean.
- **Mitbringsel:** bring something. Acceptable: flowers (odd number, never red roses, unwrap before handing over), wine, chocolate. Unacceptable: arriving with nothing and a smile.
- **Arrival:** exactly on time (see *Pünktlichkeit*). Early is worse than late. Early means the host is still vacuuming, which is forbidden after 22:00 anyway.
- **Departure:** when the host says *"So…"* and slaps both thighs, the visit is over. This is a legally binding signal.

Please compliment the Wohnung. Do not ask about the rent.`,
  },
  {
    id: "culture-socks-sandals",
    keywords: ["socks", "socken", "sandal", "birkenstock", "fashion", "outfit", "style", "dress code"],
    related: ["Why do Germans wear Jack Wolfskin?", "What should I wear?", "How do I behave in a sauna?"],
    answer: () => `**Socks in sandals (Socken in Sandalen)** is not a fashion mistake. It is an engineering decision.

- The sandal provides **ventilation**.
- The sock provides **warmth** and protection against blisters (*Blasenbildung*).
- Together they form a functional system, certified for temperatures between 8 °C and 24 °C.

Preferred model: **Birkenstock**, anatomically correct, orthopaedically recommended, and older than most of your furniture.

**Official German dress code:**
- Casual: functional jacket
- Business: functional jacket, closed
- Wedding: functional jacket in dark blue

Fashion is permitted, provided it is *praktisch*.`,
  },
  {
    id: "culture-duzen",
    keywords: ["duzen", "siezen", "du or sie", "du and sie", "sie or du", "formal you", "informal you", "address my boss", "address people", "address someone", "address strangers", "herr doktor", "doktortitel", "title"],
    related: ["Why are Germans so direct?", "How do I learn German?", "What should I bring when I'm invited?"],
    answer: () => `German has two words for "you": **du** (informal) and **Sie** (formal). Choosing wrong has consequences.

**Rules:**
- Use **Sie** with anyone over 16 you do not know, anyone older than you, your landlord, your doctor, and your neighbour of 22 years.
- Switching to **du** requires an **offer** (*das Du anbieten*) from the older or higher-ranking person, ideally with a toast. It cannot be withdrawn. It is the German equivalent of a marriage.
- Exception: start-ups, IKEA, and the mountains above 1.000 m, where everyone is automatically *du*.

**Titles:** a Doctor is *"Herr Doktor"* / *"Frau Doktor"*, forever, including at the bakery. A professor with two doctorates is *"Herr Professor Doktor Doktor"*. There is no upper limit.`,
  },
  {
    id: "culture-directness",
    keywords: ["small talk", "smalltalk", "rude", "directness", "so direct", "so honest", "honesty", "blunt", "unfriendly", "smile", "so serious", "friendly", "compliment"],
    related: ["Should I say du or Sie?", "Is it true Germans have no humour?", "Why is service so direct?"],
    answer: () => `Germans are not rude. They are **efficient with words**.

**Example dialogue:**
> *"How are you?"*
> *"My knee hurts, my train was cancelled and the Finanzamt wrote to me. And you?"*

If you ask a German how they are, you will receive the **full report**. Please allocate 12 minutes.

**Small talk:** considered a waste of time that could be used to discuss the weather factually.

**Criticism:** delivered directly, for your benefit. *"The presentation was bad"* means the presentation was bad. **Compliments:** *"Kann man so machen"* (you can do it like that) is the highest praise available and should be framed.

**Smiling at strangers** without a reason may cause them to check whether they know you.`,
  },
  {
    id: "culture-language",
    keywords: ["german words", "words so long", "learn german", "learning german", "speak german", "deutsch lernen", "der die das", "der, die, das", "grammar", "grammatik", "compound word", "long word", "longest word", "articles", "sprachkurs", "language", "sprache", "umlaut", "deutschkurs"],
    related: ["Why are there so many dialects?", "Should I say du or Sie?", "How do I become a German citizen?"],
    answer: () => `**Learning German (Deutsch lernen) — an overview:**

1. **Articles:** every noun has a gender: *der*, *die* or *das*. There is no logic. The girl (*das Mädchen*) is neuter. The turnip is feminine. Please memorise all 200.000 nouns.
2. **Cases:** 4 of them. The article changes depending on case. *der* becomes *den*, *dem* or *des*. *die* becomes *der*. This is fine.
3. **Compound words:** you may combine nouns without limit. Example: **Grundstücksverkehrsgenehmigungszuständigkeitsübertragungsverordnung** (a real law, retired 2013, deeply missed).
4. **Verbs:** go at the end of the sentence, so you must wait until the end to find out what is happening. This builds patience, useful for the Bürgeramt.

After 3 years of lessons, you will reach level B1 and be told by a native: *"Ah, your German is very good"*, in English.`,
  },
  {
    id: "culture-dialect",
    keywords: ["dialect", "dialekt", "bavarian", "bayerisch", "bairisch", "saxon", "sachsisch", "swabian", "schwabisch", "schwaben", "plattdeutsch", "kolsch", "hessisch", "berlinerisch", "accent", "understand bavarian"],
    related: ["How do I learn German?", "What is Karneval?", "Is beer food?"],
    answer: () => `Germany has one written language and **approximately 250 spoken ones**.

**Selected dialects (Dialekte), officially recognised by the Beamten-KI:**
- **Bairisch:** *"Grüß Gott"*, *"Servus"*, and *"Oachkatzlschwoaf"* (squirrel tail). Used as an entrance exam.
- **Schwäbisch:** everything ends in *-le*. Also known for the **Kehrwoche** (mandatory stairwell cleaning rota) and never throwing anything away. *"Schaffe, schaffe, Häusle baue."*
- **Sächsisch:** widely considered the friendliest-sounding dialect in the country. By Saxons.
- **Plattdeutsch:** spoken in the north. The complete conversation is *"Moin."* — *"Moin."*
- **Kölsch:** a dialect and a beer, served in 0,2 l glasses, replaced automatically until you put a beer mat on top.

Standard German (*Hochdeutsch*) is spoken perfectly in Hannover and nowhere else.`,
  },
  {
    id: "culture-tatort",
    keywords: ["tatort", "watch tatort", "crime show", "krimi", "german tv", "sunday evening", "sonntagabend", "sunday night", "fernsehgarten", "tagesschau", "20 uhr", "8 pm"],
    related: ["Do I have to pay the Rundfunkbeitrag?", "Can I go shopping on Sunday?", "Why do Germans love Schlager?"],
    answer: () => `**Sonntagabend, 20:15 Uhr: Tatort.**

Since 1970, the entire country has watched the same crime show every Sunday. Each episode takes place in a different German city, with a different inspector, who has personal problems and a strained relationship with their Kommissariat.

**Protocol:**
1. **20:00** — *Tagesschau*. The news. Nobody speaks.
2. **20:15** — *Tatort*. Nobody speaks. Phones are silenced. Visitors are expected to leave or to be quiet.
3. **21:45** — Everyone checks social media to see whether the episode was *"gut"* or *"ein Totalausfall"*.

Calling a German during Tatort is permitted in emergencies only. A fire counts. A birthday does not.`,
  },
  {
    id: "culture-mallorca-schlager",
    keywords: ["mallorca", "malle", "ballermann", "sangria", "schlager", "volksmusik", "music", "musik", "sing along", "party song", "karaoke", "hasselhoff", "looking for freedom"],
    related: ["Can I reserve a sun lounger with a towel?", "What is Karneval?", "Why do Germans love football so much?"],
    answer: () => `**Mallorca** is informally known as the **17. Bundesland**.

- **Ballermann:** a beach section where German Schlager is played at 130 dB and sangria is served from buckets through 1,2 m straws. A Ruhezeit exists in theory.
- **Schlager:** music with 4 chords, lyrics about love, heartbreak and the sea, and a chorus that every German knows by heart without ever having voluntarily listened to it.
- **Sing-along protocol:** at the key change, everyone raises their arms. This is not optional.

On the mainland, the same songs are played at every **Schützenfest**, wedding, Abiball and Karneval session.

Historical note: a certain American actor once sang on the Berlin Wall in a jacket with light bulbs. We do not discuss it. We do still have the album.`,
  },
  {
    id: "culture-wandern",
    keywords: ["wander", "hiking", "hike", "jack wolfskin", "functional jacket", "funktionsjacke", "trekking", "nordic walking", "walking poles", "spaziergang", "spazier", "go for a walk", "outdoor", "mountains", "berge"],
    related: ["Why do Germans wear socks in sandals?", "What is the weather like?", "Why do Germans love Vereine?"],
    answer: () => `**Wandern** (hiking) is the national form of meditation.

**Mandatory equipment:**
- **Funktionsjacke** (functional jacket), wind- and waterproof, bought for a Himalaya expedition, used for a 4 km loop in the Taunus
- Trekking shoes, **Nordic Walking** poles, a *Butterbrot* in paper, a thermos with tea
- A printed map, in case the phone signal fails (it will; see *Funkloch*)

**Etiquette:**
1. Greet everyone you meet with *"Hallo"* or *"Grüß Gott"*. Not greeting is noticed. And remembered.
2. Stop at the **Hütte** for *Apfelschorle* and *Kaiserschmarrn*.
3. Stay on the marked path. The markings were painted by a Wanderverein in 1962 and are maintained monthly.

The Sunday **Spaziergang** is the entry-level version and is performed by everyone, weather irrelevant.`,
  },
  {
    id: "culture-silvester",
    keywords: ["silvester", "new year", "neujahr", "dinner for one", "bleigiessen", "firework", "feuerwerk", "boller", "raclette", "fondue", "countdown"],
    related: ["What is a Weihnachtsmarkt?", "What are the Ruhezeiten?", "Can I drink on the street?"],
    answer: () => `**Silvester** (New Year's Eve) is the one night the Ruhezeit is suspended by tradition.

**Official programme:**
1. **Raclette or Fondue** for dinner, taking approximately 4 hours because everyone has one tiny pan.
2. **"Dinner for One"** on TV — a short British sketch that Germany watches every year and Britain has never heard of. *"The same procedure as every year, James."* It is, in fact, the same procedure every year.
3. **Bleigießen** — melting metal to predict the future. Now banned for health reasons and replaced by *Wachsgießen*, which predicts the same.
4. **Feuerwerk:** fireworks may only be sold on **3 days** of the year and set off on **2**. In practice: from 29 December to mid-January, in every street.

On **1. Januar**, every German checks the price of fireworks cleanup on the local news.`,
  },
  {
    id: "culture-queue",
    keywords: ["queue", "queueing", "line up", "standing in line", "wait in line", "schlange", "anstehen", "vordrangeln", "drangel", "an der kasse", "in line", "cut in line", "cutting in line", "jump the queue", "ordnung muss sein"],
    related: ["How do I get an appointment at the Bürgeramt?", "Is it rude to be early?", "Why are Germans so direct?"],
    answer: () => `Germany does not queue. Germany forms an **orderly accumulation with a clear sense of entitlement**.

- At the **supermarket**, a second checkout opens. The person at the back of the first queue arrives first. This is legally correct and morally unforgivable.
- At the **bakery**, there is no line. Everyone knows exactly who was there first. Do not test this.
- At the **gate**, passengers stand up 40 minutes before boarding, although seats are assigned.
- **Vordrängeln** (cutting in line) is met with a loud, clearly articulated *"Entschuldigung, die Schlange ist da hinten!"* Several people will nod. One will say *"Unverschämt."*

Where a **ticket machine** exists, the queue is abolished and replaced by the Wartenummer. You are number **${randInt(300, 900)}**. Ordnung muss sein.`,
  },
];
