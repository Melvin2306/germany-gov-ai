import { randInt, type Topic } from "./shared";

// Shopping and consumer life: the Kasse, the Kassenbon, the Prospekt.
export const shoppingTopics: Topic[] = [
  {
    id: "shop-returns",
    keywords: ["umtausch", "umtauschen", "exchange it", "exchange a", "return policy", "return something", "return it to the shop", "return it to the store", "take it back", "money back", "geld zuruck", "warranty", "garantie", "gewahrleistung", "reklamation", "reklamier", "defective", "defekt", "broke after"],
    related: ["Do I need to keep the Kassenbon?", "Can I return something I ordered online?", "How do I cancel a contract?"],
    answer: (c) => `Thank you for your interest in the German **Umtausch** (exchange) procedure.

**Please note the difference:**
- **Gewährleistung** (statutory warranty): 2 years, legally guaranteed, and denied by the salesperson on first request
- **Garantie** (manufacturer's guarantee): voluntary, conditional, and printed on a card you threw away
- **Umtausch aus Kulanz** (goodwill exchange): not a right, a mood

**Required for a successful Reklamation:**
1. The item, in its **original packaging**, including the little plastic bag with the spare button
2. The **Kassenbon**
3. A description of the defect using the word *"sachgemäß"* at least twice
4. ${c.form()}, to be filled in at the Kundendienst counter, which is staffed by one person and a bell

In the first 12 months the shop must prove the item was fine when sold. The shop will instead ask: *"Haben Sie es vielleicht fallen lassen?"*`,
  },
  {
    id: "shop-receipt",
    keywords: ["kassenbon", "kassenzettel", "receipt", "quittung", "bon ", "belegpflicht", "keep the bon"],
    related: ["How do I return something?", "Why do I have to pack so fast at the checkout?", "Can I pay by card?"],
    answer: () => `Since 2020, the **Belegausgabepflicht** requires every shop to issue a **Kassenbon** (receipt) for every purchase, including a single Brötchen for € 0,45.

- The receipt is printed on thermal paper, which fades completely before the Gewährleistung expires
- The Bäcker will ask *"Brauchen Sie den Bon?"* and throw it into a box of 4,000 other Bons
- You may decline the receipt. It will be printed anyway. Paper saved: none

**Official recommendation:** keep all receipts in a shoebox, sorted by year, for 10 years. Nobody will ever ask for them, except on the one day you threw that year away.

A digital receipt (*E-Bon*) is available at selected shops, as a QR code, which requires an app, which requires an account, which requires an email, which requires a Kassenbon.`,
  },
  {
    id: "shop-checkout",
    keywords: ["checkout", "cashier", "kassierer", "pack so fast", "pack my groceries", "packing my", "scan so fast", "so fast at the", "aldi", "lidl", "self-checkout", "self checkout", "sb-kasse", "second till", "zweite kasse"],
    related: ["Why do shopping bags cost money?", "Why do I need a coin for the shopping cart?", "Can I pay by card?"],
    answer: () => `The German **Supermarktkasse** (checkout) is a competitive sport.

**Procedure:**
1. Place your items on the belt with a **Warentrenner** (divider) behind them. Forgetting the divider is a social offence
2. The cashier scans at approx. **${randInt(38, 64)} items per minute**, seated, without looking up
3. The items slide onto a tiny Ablage (shelf). You now have **4 seconds** to pack everything before the next customer's products avalanche onto yours
4. Packing is done *after* paying, at the **Packtisch**, never at the Kasse itself

**"Kasse zwei, bitte!"** — when a second till opens, the queue dissolves instantly and everyone behind you is now in front of you.

Self-checkout is available. It will announce *"Unerwarteter Artikel im Ablagebereich"* every 11 seconds, until an employee appears to confirm that the unexpected item is your hand.`,
  },
  {
    id: "shop-bags",
    keywords: ["plastic bag", "plastiktut", "shopping bag", "einkaufstut", "tute", "jutebeutel", "tote bag", "stoffbeutel", "carrier bag", "bags cost", "bag cost"],
    related: ["Why do I have to pack so fast at the checkout?", "Which bin does my trash go in?", "Why do I need a coin for the shopping cart?"],
    answer: () => `Free plastic bags (**Plastiktüten**) have been prohibited since 2022. A paper bag costs € 0,20–0,50 and tears exactly between the car park and your front door.

**Approved German bag hierarchy:**
1. **Jutebeutel** (cotton tote), ideally printed with the logo of a bookshop, a conference from 2014, or a Verein
2. A folded **Stoffbeutel** permanently stored in the jacket pocket
3. The large plastic **Mehrwegtasche** (reusable bag) from the discounter, owned in quantities of 40, all left at home
4. Carrying 11 items in your arms to the car, as a punishment for your forgetfulness

A German household owns an average of **${randInt(23, 57)} Jutebeutel**. They are kept in a Jutebeutel, hanging on a hook, in the Flur.`,
  },
  {
    id: "shop-ladenschluss",
    keywords: ["ladenschluss", "closing time", "shops close", "stores close", "supermarkets close", "supermarket close", "close at", "closes at", "open late", "open until", "shops open late", "spati", "what is a spati", "spatkauf", "kiosk", "24 hours", "24/7"],
    related: ["Can I go shopping on Sunday?", "What are your opening hours?", "Where can I buy bread on Sunday morning?"],
    answer: () => `The **Ladenschlussgesetz** (shop closing law) is regulated per Bundesland, so the answer depends on where you are, and on which side of the street.

- **Mon–Sat:** most supermarkets until 20:00 or 22:00. Small shops close at 18:30, or 13:00 on Saturday, or whenever the owner feels it is enough
- **Sunday:** closed (see *Sonntagsruhe*)
- **Bavaria:** everything closes at 20:00, sharp, and a minute earlier in spirit

**Exceptions:** petrol stations, train station shops, and the **Späti** (Berlin: *Spätkauf*), a small shop selling beer, Club-Mate, lighters and one tired banana, open until the owner goes to sleep.

Arriving at 19:58 is permitted. You will be served. You will also be watched as the lights are dimmed around you, aisle by aisle.`,
  },
  {
    id: "shop-flohmarkt",
    keywords: ["flohmarkt", "flea market", "kleinanzeigen", "ebay", "second hand", "second-hand", "secondhand", "gebraucht", "used furniture", "sell my old", "letzte preis", "trodelmarkt", "vinted"],
    related: ["Can I haggle in German shops?", "How do I get rid of an old sofa?", "Can I pay by card?"],
    answer: () => `Selling used items (**Gebrauchtwaren**) online via **Kleinanzeigen** follows a fixed ritual.

**Messages you will receive within 3 minutes of posting:**
> *"Ist noch da?"*
> *"Was letzte Preis?"*
> *"Ich gebe 5 Euro, hole heute ab."* (Item price: € 80)
> *"Können Sie es nach Rosenheim schicken?"* (You are in Kiel)

**Rules:** Pickup only (*"Nur Abholung"*). Cash only. Price is **VB** (*Verhandlungsbasis*, negotiable), which means everyone will negotiate, especially if it says *"Festpreis"*.

On the **Flohmarkt** (flea market), sellers arrive at 05:00 with a folding table and a thermos. Professional buyers arrive at 04:58 with a torch. By 07:00, only a fondue set and 40 Tatort DVDs remain.`,
  },
  {
    id: "shop-prospekt",
    keywords: ["prospekt", "flyer", "full of flyers", "letterbox full of", "leaflet", "special offer", "weekly offer", "angebot der woche", "sonderangebot", "keine werbung", "junk mail", "advertising in my mailbox", "brochures"],
    related: ["Why is my letterbox full of flyers?", "Are there discount codes or loyalty cards?", "Is organic food worth it?"],
    answer: () => `The **Prospekt** (weekly advertising leaflet) is delivered every Wednesday to every letterbox in the Republic, except those with the sticker **"Bitte keine Werbung"**, which receive it anyway, folded smaller.

**German Prospekt culture:**
- Offers are studied at the Frühstückstisch with a pen
- A route is planned: butter at one discounter, coffee at the other, toilet paper at the Drogerie
- The advertised item is **sold out at 08:04** on the first day of the offer
- *"Nur solange der Vorrat reicht"* (only while stocks last) means: the stock was 3

**Prospekt special:** a **Heißluftfritteuse**, a set of winter tyres, a Stand-Up-Paddle board and a 12-piece screwdriver set, all in the same week, all at the food discounter.

The sticker *"Bitte keine Werbung, aber kostenlose Zeitungen ja"* is a legally distinct declaration and is also ignored.`,
  },
  {
    id: "shop-drogerie",
    keywords: ["drogerie", "drugstore", "rossmann", "dm-markt", "dm markt", "toiletries", "shampoo", "toothpaste", "zahnpasta", "cosmetics"],
    related: ["Where can I buy medication?", "Are there discount codes or loyalty cards?", "Why do shopping bags cost money?"],
    answer: () => `The **Drogerie** (drugstore) is a German cultural institution, not to be confused with the **Apotheke** (pharmacy), which sells medicine, or the **Drogenberatung**, which is something else entirely.

**Available at the Drogerie:**
- Shampoo, toothpaste, toilet paper, organic muesli, baby food, birthday candles, 400 types of Duschgel
- Photo printing (Germans still print photos, for the album, for the Oma)
- A **Dauerniedrigpreis** (permanently low price), which is lower than a normal price but not an offer

Please do not ask for painkillers stronger than a Kamillentee. For that, see *Apotheke*, open until 18:30, with a Notdienst 43 km away.

German households are loyal to exactly **one** Drogerie chain. Mixed households exist, but they are discussed quietly.`,
  },
  {
    id: "shop-baumarkt",
    keywords: ["baumarkt", "hardware store", "diy store", "obi", "hornbach", "heimwerk", "diy project", "tools", "werkzeug"],
    related: ["Can I drill holes in my rented apartment?", "Can I renovate my rented apartment?", "What are the Ruhezeiten?"],
    answer: () => `The **Baumarkt** (DIY store) on Saturday morning is the German equivalent of church.

**Ritual:**
1. Arrive at 08:00 with a list, a pencil behind the ear and a car with a **Anhängerkupplung** (tow bar)
2. Search for one specific screw for 45 minutes in an aisle labelled *"Befestigungstechnik"*
3. Find a salesperson, who will explain in detail why you are doing it wrong
4. Buy a Bohrmaschine (drill) that you will use **${randInt(3, 13)} minutes** in its entire life
5. Have a **Bratwurst** at the stand outside, run by the local Freiwillige Feuerwehr

The average German owns tools worth € 2.400 and still borrows the good drill from the neighbour.

Please note: all drilling must be completed before 13:00 (see *Ruhezeiten*). The Baumarkt closes at 20:00. The logic is intentional.`,
  },
  {
    id: "shop-wochenmarkt",
    keywords: ["wochenmarkt", "farmers market", "weekly market", "market stall", "marktstand", "fresh vegetables", "local produce", "regional vegetables"],
    related: ["Is organic food worth it?", "Can I haggle in German shops?", "What is the cheapest way to shop?"],
    answer: () => `The **Wochenmarkt** (weekly farmers' market) takes place on Wednesday and Saturday mornings, on the Marktplatz, in front of the Rathaus, since approximately 1340.

**Market etiquette:**
- **Do not touch the vegetables.** The vendor will select your tomatoes. The vendor knows better
- Cash only, in exact amounts, ideally in coins
- Bring your own Korb (basket), ideally wicker, ideally inherited
- Regular customers are greeted by name; new customers are observed for about 3 years

**Seasonal calendar (strictly enforced):** Spargel in May, Erdbeeren in June, Pfifferlinge in August, Kürbis in October, and in February: cabbage, and the memory of vegetables.

The Wochenmarkt closes at 13:00, at which point the prices drop and the pensioners arrive, who have been waiting for exactly that.`,
  },
  {
    id: "shop-haggling",
    keywords: ["haggl", "feilsch", "negotiate the price", "bargain in", "can i bargain", "ask for a discount", "discount in a shop", "price is fixed", "handeln im laden", "cheaper if i"],
    related: ["How do I sell my old stuff?", "Are there discount codes or loyalty cards?", "Can I pay by card?"],
    answer: () => `Haggling (**Feilschen**) in German shops is technically possible and socially catastrophic.

**Official price situation:**
- The price on the shelf is the price. It has been calculated. It includes 19% Mehrwertsteuer. It is final
- Asking *"Geht da noch was am Preis?"* in a supermarket will lead to a long silence and a call for the Filialleiter
- **Exceptions:** Flohmarkt, Kleinanzeigen, car dealers, electronics stores (if you ask very politely, while holding the item, near closing time), and furniture stores that have been in *Räumungsverkauf* (closing-down sale) since 2009

**Approved German haggling technique:** *"Ich hab's online günstiger gesehen."* This works 30% of the time and is followed by a 15-minute comparison on the salesperson's computer.`,
  },
  {
    id: "shop-bio",
    keywords: ["bio ", "bio-", "biosiegel", "bio siegel", "bioladen", "bio products", "bio food", "organic", "okologisch", "demeter", "regional product", "fair trade", "fairtrade", "vegan", "vegan options", "vegetarian"],
    related: ["Why is food so expensive?", "When is the farmers market?", "Why do shopping bags cost money?"],
    answer: () => `**Bio** (organic) products in Germany are identified by the green hexagonal **Bio-Siegel**, which is regulated by EU law, national law and your aunt's opinion.

**The German organic hierarchy:**
1. **EU-Bio:** acceptable
2. **Bioland / Naturland:** respectable
3. **Demeter:** planted according to the moon, harvested by people who knit
4. **Regional:** grown within 50 km, packaged in 3 layers of plastic

**Also available:** vegan Leberwurst, vegetarian Schnitzel, oat milk in 14 varieties, and a *"Bio-Bratwurst"* that the Stammtisch is still discussing.

The Bioladen staff will ask whether you brought your own container. You did not. You will receive a paper bag and a gentle look of disappointment that lasts until the car.`,
  },
  {
    id: "shop-sparfuchs",
    keywords: ["sparfuchs", "geiz ist geil", "geiz", "stingy", "frugal", "cheapest way", "cheapest supermarket", "shop cheaply", "save on groceries", "coupon"],
    related: ["Why is food so expensive?", "Are there discount codes or loyalty cards?", "How do I sell my old stuff?"],
    answer: () => `The **Sparfuchs** (savings fox) is a protected German national animal.

**Characteristics of the Sparfuchs:**
- Compares butter prices across 3 Prospekte and drives 14 km to save € 0,30
- Owns a **Sparbuch**, a **Bausparvertrag** and a jar of coins labelled *"Urlaub 2031"*
- Uses the *"Aktion"* sticker as a primary navigation system
- Thinks paying for tap water in a restaurant is the fall of civilisation

The phrase **"Geiz ist geil"** (stinginess is cool) was an advertising slogan in 2002. It is no longer used. Its values remain.

Germans are Europe's champions of saving, and simultaneously own the most expensive kitchens. Both are considered financial prudence.`,
  },
  {
    id: "shop-tupperware",
    keywords: ["tupper", "tupperware", "thermomix", "home party", "verkaufsparty", "sales party"],
    related: ["What do I bring when I'm invited to someone's home?", "What are the Ruhezeiten?", "How do I sell my old stuff?"],
    answer: () => `The **Tupperparty** (Tupperware party) is a traditional German home sales gathering, now largely replaced by the **Thermomix-Vorführung**.

**Procedure:**
1. You are invited by a colleague's sister-in-law. Refusing is not possible
2. A presenter demonstrates a kitchen device that chops, cooks, weighs, stirs and judges you
3. Sekt is served. Dips are served. A price is mentioned, quietly: ***€ ${randInt(1300, 1600)},00***
4. You leave with an order form, a free spatula and a financing plan over 24 months

The Thermomix is legally not a kitchen appliance but a family member. It has its own seat at the table and a name, usually *"der Thermi"*.

Every German household owns at least one Tupperware without its lid. The lid is in another household.`,
  },
  {
    id: "shop-payback",
    keywords: ["payback", "payback card", "loyalty card", "loyalty program", "kundenkarte", "bonus points", "punkte sammeln", "rabattcode", "discount code", "gutschein", "voucher", "sammelpunkte", "stamp card"],
    related: ["Why is food so expensive?", "Are there good deals in the weekly flyer?", "Can I pay by card?"],
    answer: () => `**"Haben Sie eine Payback-Karte?"** is the most frequently asked question in the German language, ahead of *"Brauchen Sie den Bon?"*.

**German loyalty card system:**
- The average wallet contains **${randInt(9, 17)} Kundenkarten**, but not the one for the shop you are in
- Points are collected at a rate of 1 point per € 2, and redeemed after 11 years for a toaster
- Coupons must be **activated** in the app before shopping, which you will remember at the Kasse

**Sammelmarken** (sticker collections) for knife sets, porcelain, or plush animals are a serious family project; children are deployed to ask strangers for their stickers.

Gutscheine (vouchers) are the standard German gift. They expire after 3 years, one week before you find them in the drawer.`,
  },
  {
    id: "shop-schlussverkauf",
    keywords: ["schlussverkauf", "black friday", "summer sale", "winter sale", "on sale", "clearance sale", "rausverkauf", "rabattaktion", "cyber monday", "prime day"],
    related: ["Can I return something I ordered online?", "Are there good deals in the weekly flyer?", "Can I haggle in German shops?"],
    answer: () => `The official **Sommer- und Winterschlussverkauf** (seasonal clearance sales) were abolished by law in 2004. They have taken place every year since.

**Current German sale calendar:**
- January: Winterschlussverkauf (not official, but *"traditionell"*)
- July: Sommerschlussverkauf (same)
- November: **Black Friday**, which in Germany lasts from 1 to 30 November and is called *"Black Week"*, *"Black Month"* or *"Cyber Wochen"*
- Permanently: **Räumungsverkauf** (closing-down sale) at a furniture store that has been closing down for 12 years

Reductions of **70%** apply to the prices that were raised by 80% in October.

Germans participate in sales carefully: they research the product for 3 weeks, compare in 5 tabs, buy it, and then return it (see *Umtausch*).`,
  },
  {
    id: "shop-einkaufswagen",
    keywords: ["einkaufswagen", "shopping cart", "shopping trolley", "trolley", "cart coin", "coin for the cart", "coin for the shopping", "einkaufschip", "euro coin for", "chip for the cart"],
    related: ["Why do I have to pack so fast at the checkout?", "Why do shopping bags cost money?", "Can I pay by card?"],
    answer: () => `The German **Einkaufswagen** (shopping trolley) is secured with a coin lock. Insert **€ 1** or **50 Cent**, receive the trolley, return it to receive the coin. Ordnung muss sein.

**Required equipment:**
- A **Einkaufswagenchip** (plastic trolley token), received free at a trade fair, attached permanently to your key ring since 2008
- Alternatively: a € 1 coin, which you do not have, because you pay by card (see *Bargeld*)

**Social rules:**
- The trolley is returned to the correct trolley bay, pushed in neatly, in line
- A trolley abandoned in a parking space will be photographed and posted in the local Facebook group
- Someone will offer you their trolley in the parking lot "for the Euro". Accepting is allowed. Giving them the Euro is expected

The trolley has 4 wheels. One of them has its own plans.`,
  },
  {
    id: "shop-groceries",
    keywords: ["grocery", "groceries", "lebensmittel", "food prices", "grocery prices", "discounter", "edeka", "rewe", "kaufland", "netto markt", "food is so expensive", "food so expensive", "supermarket chain", "which supermarket"],
    related: ["What is the cheapest way to shop?", "Is organic food worth it?", "Why do I have to pack so fast at the checkout?"],
    answer: () => `Germany has one of the most competitive grocery markets in Europe, dominated by the **Discounter** (discount supermarkets) and their eternal rivalry.

**Official German supermarket classification:**
- **Discounter:** 1,200 products, no decorations, bananas in a cardboard box, butter prices that make headlines
- **Vollsortimenter** (full-range supermarket): 25,000 products, a cheese counter, a bakery, and a man in the wine aisle who knows too much
- **Feinkost:** truffle oil and the feeling of being on holiday

The **Butterpreis** (butter price) is a national economic indicator, reported on the evening news, more closely watched than the DAX.

Prices have risen. You will notice this when a Brezel costs € 1,10 and a pensioner at the Kasse says, loudly, *"Früher hat das 50 Pfennig gekostet."* She is right. She is always right.`,
  },
  {
    id: "shop-online",
    keywords: ["online shopping", "shop online", "ordered online", "i ordered online", "online order", "buy online", "rucksend", "return label", "return my order", "send it back", "widerruf", "14 days to return", "amazon", "zalando"],
    related: ["My DHL parcel was not delivered", "How do I return something?", "Do I need to keep the Kassenbon?"],
    answer: () => `**Online shopping** in the EU comes with a 14-day **Widerrufsrecht** (right of withdrawal). German consumers use it with enthusiasm.

**The German online shopping cycle:**
1. Order 3 sizes of the same trousers
2. Wait at home all day for the delivery. The parcel is delivered to Frau Schulze
3. Keep one pair, return two, using the **Retourenschein** (return label), printed on your printer, which is out of toner (see *Faxgerät*)
4. Take the return to a parcel shop, which is a kiosk, which closes at 18:00

Germany is Europe's return champion: roughly **1 in 4 parcels** goes back. The trucks carrying returns meet the trucks carrying orders on the Autobahn, where they are stuck in the same Stau.

Your *Widerruf* must be *"eindeutig"* (unambiguous). *"Passt nicht"* is fine. *"Meh"* is not.`,
  },
];
