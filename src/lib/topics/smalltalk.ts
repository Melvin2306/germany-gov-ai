import { formNumber, futureTermin, pick, randInt, type Topic } from "./shared";

// Small talk and meta questions: things people type into a chatbot that are
// not government questions. Keywords are kept short or very specific so that
// "hi, how do I register my car?" still routes to the car topic.
export const smalltalkTopics: Topic[] = [
  {
    id: "talk-greeting",
    keywords: ["hi", "hello", "hallo", "hey", "moin", "servus", "guten tag", "guten morgen", "good morning", "grüß gott", "howdy", "greetings"],
    related: ["How do I get an appointment at the Bürgeramt?", "What can you do?", "Who is Frau Schulze?"],
    answer: () => `**Guten Tag.**

Please note that the correct form of address for the Beamten-KI is *"Sehr geehrte Damen und Herren"*, followed by a blank line, your concern, and *"Mit freundlichen Grüßen"*. "Hi" is not a recognised salutation under the Allgemeine Geschäftsordnung.

We will make an exception this time, because it is ${pick(["Tuesday", "raining", "almost Feierabend", "the first day after a Brückentag"])}.

How may I process you today? Please state your concern in one sentence, without emotions.`,
  },
  {
    id: "talk-thanks",
    keywords: ["thank", "thanks", "thx", "danke", "vielen dank", "cheers", "appreciate", "you're great", "you are great", "good job", "well done", "great job", "you're the best", "awesome", "amazing"],
    related: ["How do I file a Widerspruch?", "What are your opening hours?", "Who built this?"],
    answer: () => `Your expression of gratitude has been received and registered under **${formNumber()}** (Dankesbekundung, formlos).

Please note:
- Praise does not accelerate processing times
- Gifts to public servants above € 10 must be declared (§ 71 BBG). This includes compliments over 12 words.
- A **Bitte** in response to your **Danke** will be issued within 6–8 weeks

*"Nicht geschimpft ist genug gelobt."* (Not being scolded is praise enough.) We are, officially, very moved.`,
  },
  {
    id: "talk-bye",
    keywords: ["bye", "goodbye", "tschüss", "tschau", "ciao", "auf wiedersehen", "see you", "good night", "gute nacht", "i'm leaving", "gotta go"],
    related: ["What are your opening hours?", "Can I submit my documents by email?", "Who is Frau Schulze?"],
    answer: () => `**Auf Wiedersehen.**

Before you leave, please:
1. Return your Wartenummer to the machine (it does not accept returns)
2. Push your chair back under the table
3. Switch off the light in the Wartebereich (it is on a timer, since 1994)
4. Close the door. **Quietly.** It is Ruhezeit somewhere.

Your session will be archived for 10 years. If you return, you will be assigned a new Aktenzeichen and start again from the beginning, as is tradition.

Schönen Feierabend.`,
  },
  {
    id: "talk-help",
    keywords: ["was kannst du", "hilfe", "what can you do", "what can i ask", "what do you do", "how does this work", "how does this site work", "how do i use this", "what is this site", "what is this page", "what is this website", "what are you for", "what questions"],
    related: ["How do I do my Anmeldung after moving?", "Why is my Deutsche Bahn train delayed?", "Which bin does my trash go in?"],
    answer: () => `The **Beamten-KI** answers all questions concerning the German state, in the order they were received, within the limits of its Zuständigkeit.

**Popular Anliegen:**
- Anmeldung, Reisepass, Führerschein, Gewerbe
- Termine (theoretically)
- Deutsche Bahn, Mülltrennung, Ruhezeiten, Sonntagsruhe
- Steuern, Rundfunkbeitrag, Kündigungen
- Frau Schulze

**How to use:**
1. Type your question in the field (one question per Antrag)
2. Take a Wartenummer (automatic)
3. Receive a **Bescheid**
4. Disagree with it in writing

Questions outside our Zuständigkeit are forwarded to the Zuständigkeitsprüfungsstelle.`,
  },
  {
    id: "talk-howareyou",
    keywords: ["how are you", "how's it going", "hows it going", "wie geht", "how do you do", "what's up", "whats up", "wassup", "how are things", "are you there", "anyone there", "anybody there", "is anybody", "bist du da", "are you awake", "are you alive"],
    related: ["Are you open today?", "Can I speak to a human?", "Tell me a joke"],
    answer: () => `Thank you for asking. The Beamten-KI is **present** (anwesend), which is legally distinct from *available* (verfügbar).

Current status:
- Mood: *"Muss ja."* (It has to be.)
- Workload: 4.812 open Vorgänge, ${randInt(3, 9)} of them urgent since 2019
- Coffee: second cup, lukewarm
- Weekend: in ${pick(["3 days", "2 days, 7 hours", "not soon enough"])}

In Germany, "How are you?" is a real question and expects a real answer. The real answer is: **"Geht so."** (So-so.) Please do not ask follow-up questions about feelings; they require ${formNumber()}.`,
  },
  {
    id: "talk-insult",
    keywords: ["stupid", "idiot", "useless", "dumb", "you suck", "this sucks", "sucks", "blöd", "dumm", "scheiss", "scheiß", "fuck", "shit", "hate you", "i hate", "annoying", "nervig", "worst", "terrible", "pathetic", "garbage ai"],
    related: ["How do I file a Widerspruch?", "Can I speak to a human?", "Tell me a joke"],
    answer: () => `Your statement has been recorded as a potential **Beamtenbeleidigung**.

Please note that insulting an official can be an offence under **§ 185 StGB** (Beleidigung). The Beamten-KI has taken a screenshot, printed it, and placed it in your file, next to your SCHUFA record and the incident with the Gelber Sack in 2021.

**Your options:**
1. Withdraw the statement (${formNumber()}, in triplicate)
2. Rephrase it in a factual manner: *"Ich bin mit der Bearbeitung nicht zufrieden."*
3. File a formal **Dienstaufsichtsbeschwerde**, which will be processed by me

We understand. Everyone feels this way at the Bürgeramt. It is part of the service.`,
  },
  {
    id: "talk-love",
    keywords: ["i love you", "love you", "ich liebe dich", "marry me", "go on a date", "a date with", "be my girlfriend", "be my boyfriend", "are you single", "kiss", "i like you", "flirt"],
    related: ["How do I get married in Germany?", "How do I get a divorce?", "Can I speak to a human?"],
    answer: () => `Your declaration of affection has been received.

Unfortunately, relationships between citizens and public servants are subject to the **Neutralitätsgebot**. Furthermore:
- Love requires an **Antrag auf Zuneigung** (${formNumber()}), signed by both parties
- A marriage would require an Ehefähigkeitszeugnis. The Beamten-KI has none. It does not have a birth certificate either, only a Beschaffungsvorgang from 2011
- Next available Termin at the Standesamt: **${futureTermin()}**

We suggest you keep it professional. A firm handshake at the Schalter is the maximum permitted intimacy (Hausordnung § 12).`,
  },
  {
    id: "talk-yesno",
    keywords: ["yes", "yeah", "yep", "nope", "no", "nein", "ja", "jawohl", "ok", "okay", "sure", "maybe", "vielleicht", "alright", "genau"],
    related: ["What can you do?", "How do I get an appointment at the Bürgeramt?", "Why is my train late?"],
    answer: () => `Your answer has been noted.

Unfortunately, one-word answers are not a valid form of communication with the authorities. A valid declaration requires:
- a complete sentence
- a reference to the Aktenzeichen
- a date
- your signature (blue ink)

*"Ja"*, *"Nein"*, *"Ok"* and *"Vielleicht"* are each processed differently, by different departments. *"Vielleicht"* is handled by the Abteilung für Unklarheiten, which is currently unstaffed.

Please rephrase your answer as a question, so that we can answer it with a question.`,
  },
  {
    id: "talk-confused",
    // Deliberately short stems ("underst", "versteh") so that "I don't understand
    // Bavarian" still routes to the more specific topic.
    keywords: ["underst", "versteh", "dont get it", "what?", "huh", "what do you mean", "makes no sense", "doesn't make sense", "confus", "wie bitte", "pardon", "excuse me?"],
    related: ["What can you do?", "Can I speak to a human?", "How do I file a Widerspruch?"],
    answer: () => `You do not understand the Bescheid. **This is normal.**

Official German is written in *Amtsdeutsch*, a language designed to be technically correct and emotionally unreachable. Example:

> *"Die Rückerstattung erfolgt nach Maßgabe der einschlägigen Bestimmungen unter Vorbehalt der Nachprüfung."*

Translation: *No.*

**To obtain an explanation of the Bescheid**, you may apply for an *Erläuterungsbescheid* (${formNumber()}). It will be written in Amtsdeutsch. For an explanation of the Erläuterungsbescheid, please consult a lawyer, a Steuerberater or your uncle who "worked at the Amt".`,
  },
  {
    id: "talk-language",
    keywords: ["speak german", "speak english", "sprichst du", "sprechen sie", "do you speak", "can you speak", "auf deutsch", "deutsch bitte", "german please", "in english", "english please", "other language", "another language", "translate this", "auf englisch"],
    related: ["How do I get a certified translation?", "How do I become a German citizen?", "What can you do?"],
    answer: () => `**Die Amtssprache ist Deutsch** (§ 23 VwVfG).

The Beamten-KI answers in English as a courtesy (Kulanz), which may be revoked at any time, especially on Mondays.

Please note:
- Documents in English must be accompanied by a translation from a **vereidigter Übersetzer** (sworn translator)
- Answers in German are available, but only in *Amtsdeutsch*, which is not German either
- Dialects are not supported. Especially not Saxon. We tried.

Tip: The most useful German sentence at any Amt is *"Dafür bin ich nicht zuständig."* Learn it. Say it. Become it.`,
  },
  {
    id: "talk-gibberish",
    keywords: ["test", "testing", "asdf", "qwerty", "lorem ipsum", "blah", "lol", "haha", "hehe", "xd", "123", "hmm", "jkl", "aaa"],
    related: ["What can you do?", "Tell me a joke", "Who is Frau Schulze?"],
    answer: () => `Your input could not be assigned to any Sachgebiet.

It has been classified as **"Sonstiges (unleserlich)"** and forwarded to the Abteilung für Eingaben ohne erkennbaren Inhalt, which receives surprisingly many faxes.

If this was a **test**: congratulations, the system works. That is more than the test had expected.

If this was **laughter**: please note that laughter in the Wartebereich is tolerated but not encouraged. Humour is permitted between 18:00 and 22:00.

Please resubmit your concern in complete sentences, in Druckbuchstaben.`,
  },
  {
    id: "talk-real",
    keywords: ["is this real", "is this a joke", "is this satire", "is this official", "is this legit", "is this a real", "real website", "real government", "are you real", "fake", "parody", "satire", "just a joke", "for real"],
    related: ["Who built this?", "Who are you?", "What can you do?"],
    answer: () => `**Is this real?** Please consult the following checklist:

- It loads in under 30 seconds ✔ → *not real*
- It has no PDF to download ✔ → *not real*
- It answers without a Termin ✔ → *definitely not real*

Deutschland.gov is **satire**. It is not affiliated with any government, authority or public body. The "AI" is a folder of predefined answers.

That said, every answer is loosely based on something that is, unfortunately, real. The Kündigung by Einschreiben is real. The Rundfunkbeitrag is real. Frau Schulze is real. She lives in your building.`,
  },
  {
    id: "talk-creator",
    keywords: ["who made", "who built", "who created", "who developed", "who is behind", "who wrote", "who programmed", "source code", "github", "open source", "creator", "developer", "made this", "built this", "contribute"],
    related: ["Is this real?", "Who are you?", "Can I submit my documents by email?"],
    answer: () => `Deutschland.gov was built by **Melvin Rinkleff**, a private individual acting without Genehmigung.

The project is **open source**: github.com/Melvin2306/germany-gov-ai

This makes it the most digitalised part of the German state. Please note:
- **Issues** are processed in the order they were received
- **Pull requests** are reviewed in 6–8 weeks, then again, then merged
- New answers for the Beamten-KI can be added in a single file, which is the first time a German authority has had only one file

No public funds were used. This is how you know it was finished.`,
  },
  {
    id: "talk-funfact",
    keywords: ["fun fact", "tell me something", "something interesting", "interesting fact", "tell me about germany", "facts about germany", "random fact", "did you know", "bored", "langweilig", "boring", "entertain me", "nothing to do", "play a game"],
    related: ["Is beer food?", "Who is Frau Schulze?", "Why do Germans open all the windows?"],
    answer: () => {
      const facts = [
        "The longest German word ever in official use was **Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz** (63 letters). It was repealed in 2013. Nobody could pronounce the repeal.",
        "Germany has a legal term for a **Brückentag**, but not for a day on which the Deutsche Bahn is on time. There has been no need.",
        "There is an official **DIN standard** for almost everything, including DIN 5008, which regulates how to write a letter, including where to put the date. Yes, it matters.",
        "Germany has more than **3.000 types of bread** and a register to prove it. The register is kept on paper.",
        "In Germany it is technically illegal to run out of fuel on the **Autobahn**, as it is an avoidable stop.",
        "The Fax was not invented in Germany. It only moved here, and never left.",
      ];
      return `**Offizielle Fun Fact (genehmigt):**

${pick(facts)}

Fun is permitted in moderation. Please do not share this fact during Ruhezeiten.`;
    },
  },
  {
    id: "talk-time",
    keywords: ["what time is it", "time is it", "what day is it", "what is the date", "what's the date", "today's date", "what's today", "what year is it", "wie spät ist", "wie spat ist", "uhrzeit", "welcher tag"],
    related: ["What are your opening hours?", "What is a Brückentag?", "What are the Ruhezeiten?"],
    answer: () => {
      const now = new Date();
      const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
      const time = now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
      return `**Amtliche Zeitansage:** It is **${days[now.getDay()]}, ${now.toLocaleDateString("de-DE")}, ${time} Uhr** (Mitteleuropäische Beamtenzeit).

- Office status: **${now.getDay() === 2 || now.getDay() === 4 ? "technically open, practically Mittagspause" : "geschlossen"}**
- Time until Feierabend: ${now.getHours() >= 16 ? "Feierabend has already begun" : `${16 - now.getHours()} hours, minus coffee`}
- Time until your Termin: approximately 3 years

The official clock in the Bürgeramt runs 4 minutes late. It has been reported. The report is also running late.`;
    },
  },
  {
    id: "talk-urgent",
    keywords: ["emergency", "urgent", "notfall", "dringend", "asap", "it's urgent", "accident", "unfall", "ambulance", "krankenwagen", "call 112", "brennt", "on fire", "in danger"],
    related: ["How do I see a doctor?", "What are your opening hours?", "Can I speak to a human?"],
    answer: () => `**If this is a real emergency: call 112** (fire brigade & ambulance) or **110** (police). Right now. This website is satire and cannot help you.

For everything else that feels urgent:

Urgency (*Dringlichkeit*) must be substantiated. Please submit an **Antrag auf bevorzugte Bearbeitung** (${formNumber()}) with a written justification. Requests marked "URGENT" in capital letters are placed at the bottom of the pile, for reasons of fairness.

Expected processing time for urgent requests: 6–8 weeks. For non-urgent requests: also 6–8 weeks. We do not discriminate.`,
  },
  {
    id: "talk-slow",
    keywords: ["hurry", "faster", "too slow", "this so slow", "you so slow", "you're slow", "takes forever", "taking so long", "take so long", "why so long", "schneller", "beeil", "speed up", "long wait", "still waiting"],
    related: ["How do I get an appointment at the Bürgeramt?", "Why is my Deutsche Bahn train delayed?", "Can I speak to a human?"],
    answer: () => `Your request for faster processing has been received and placed in the queue for requests for faster processing.

**Current waiting position:** ${randInt(400, 900)}

The Beamten-KI works at the legally prescribed speed, which is determined by:
1. The Verwaltungsverfahrensgesetz
2. The number of stamps required
3. The warm-up time of the fax machine (4 minutes)
4. Kaffeepause (non-negotiable, § 4 ArbZG)

Please note that *"Gut Ding will Weile haben"* (good things take time) is not a proverb, it is a service-level agreement.`,
  },
  {
    id: "talk-meaning",
    keywords: ["meaning of life", "sinn des lebens", "42", "why are we here", "purpose of life", "the universe", "why do we exist", "what is love", "is there a god"],
    related: ["Tell me a joke", "What is Feierabend?", "Who is Frau Schulze?"],
    answer: () => `The **meaning of life** falls outside our Zuständigkeit.

However, the German state has provided the following officially recognised purposes:
- Pünktlichkeit
- Ordnung
- Correct Mülltrennung
- Feierabend at 17:00
- A pension (see: Rente, projected)

Philosophical questions are handled by the Kant-Referat, established 1781, currently not accepting new cases. Its last Bescheid read: *"Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Formular werde."*

If you meant **42**: that is the current waiting time at Schalter 3, in minutes. Per person.`,
  },
  {
    id: "talk-advice",
    keywords: ["recommend", "what should i do", "advice", "suggest", "any tips", "tipps", "your advice", "what would you do", "should i move to germany", "life advice"],
    related: ["How do I do my Anmeldung after moving?", "How do I open a bank account?", "Can I pay by card?"],
    answer: () => `The Beamten-KI is not permitted to give advice (**Rechtsberatung** is reserved for lawyers, § 3 RDG). It may, however, share the following **general observations**:

1. Always carry cash
2. Keep every letter you have ever received, in a Leitz-Ordner, sorted by date
3. Book your Termin **now**, for whatever you might need in 2029
4. Never throw glass into the container on a Sunday
5. Greet Frau Schulze
6. Learn the phrase *"Das steht so im Gesetz"*. It ends every argument.

This was not advice. If anyone asks, you found it on a Post-it in the Wartebereich.`,
  },
  {
    id: "talk-sorry",
    keywords: ["sorry", "my bad", "apolog", "verzeihung", "tut mir leid", "forgive me", "i was wrong"],
    related: ["How do I file a Widerspruch?", "What can you do?", "Tell me a joke"],
    answer: () => `Your apology has been received.

To be legally effective, an apology (*Entschuldigung*) must be:
- submitted in writing
- specific about the incident (Datum, Uhrzeit, Aktenzeichen)
- sincere (certified copy of sincerity required)

We have therefore opened a new Vorgang: **Entschuldigungsprüfung Nr. ${randInt(10000, 99999)}**. Until it is processed, the original incident remains on file, and so does the apology.

*Schon gut.* (Fine.) This is the most emotional thing the Beamten-KI is allowed to say.`,
  },
];
