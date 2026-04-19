export const sunniData = {
  id: 'sunni',
  name: 'Sunni Islam',
  parent: 'islam',
  subtitle: 'The largest branch of Islam · ~87–90% of global Muslims',
  meta: {
    adherents: '1.5–1.6 billion',
    founded: '7th century CE',
    primaryRegions: 'MENA, S. Asia',
  },
  sections: {
    overview: {
      paragraphs: [
        "Sunni Islam is the largest denomination of Islam, comprising approximately 87–90% of the world's Muslim population. The term \"Sunni\" derives from Ahl al-Sunnah wa'l-Jamā'ah, meaning \"people of the prophetic tradition and the community,\" emphasizing adherence to the Sunnah — the recorded words and actions of the Prophet Muhammad — alongside the Quran as the twin foundations of religious authority.",
        "The historical origins of Sunni identity crystallized in the decades following the Prophet Muhammad's death in 632 CE, particularly around the question of political succession. Sunni Muslims accepted Abu Bakr al-Siddiq, elected through a process of communal consultation (shura), as the first caliph — a position distinct from that of the Shia, who held that Ali ibn Abi Talib, the Prophet's cousin and son-in-law, was the divinely designated successor. This foundational divergence shaped two distinct theological and political traditions.",
        "Today, Sunni Islam spans an enormous geographic and cultural range — from Morocco to Indonesia, from sub-Saharan Africa to Central Asia. It encompasses four major legal schools (madhhabs), multiple theological traditions, and a diverse array of cultural expressions. Its decentralized structure, with no single clerical hierarchy equivalent to the papacy or the Shia marjaʿ, has allowed for remarkable diversity within a broad doctrinal consensus.",
      ],
      keyFacts: [
        { label: 'Primary Text', value: 'Quran & Hadith' },
        { label: 'Schools of Law', value: '4 major Madhhabs' },
        { label: 'Theology', value: "Ash'ari, Maturidi, Athari" },
        { label: 'Global share', value: '~87–90% of Muslims' },
      ],
    },
    beliefs: [
      {
        title: 'Tawhid — Oneness of God',
        description: "The absolute monotheism at the core of Islam. God (Allah) is one, unique, and without partners or equals. Sunni theology elaborates Tawhid across three dimensions: oneness of lordship, oneness of divinity, and oneness of God's names and attributes.",
      },
      {
        title: 'Six Articles of Faith',
        description: "Sunni Muslims affirm six foundational beliefs: belief in God, in His angels, in His revealed books, in His messengers and prophets, in the Day of Judgment, and in divine decree (qadar). These are derived from the hadith of Gabriel (Jibril) and form the doctrinal core.",
      },
      {
        title: 'Sunnah — Prophetic Tradition',
        description: "The Sunnah — the recorded practice, statements, and tacit approvals of the Prophet Muhammad — constitutes the second primary source of Islamic law and theology after the Quran. Sunni Islam places particular weight on authenticated hadith collections.",
      },
      {
        title: "Legitimacy of Abu Bakr's Caliphate",
        description: "A distinguishing Sunni position: the first four caliphs (Abu Bakr, Umar, Uthman, Ali) are regarded as legitimate successors — the Rightly Guided Caliphs (Khulafa Rashidun). Their collective example is considered authoritative alongside Prophetic precedent.",
      },
      {
        title: "Ijma' — Scholarly Consensus",
        description: "Consensus among qualified Islamic scholars on a legal or theological question is considered a binding source of religious authority in Sunni jurisprudence. It serves as a mechanism for stabilizing doctrine across generations and geographies.",
      },
      {
        title: 'Qiyas — Analogical Reasoning',
        description: "The fourth source of Sunni legal reasoning: extending rulings from established cases to new situations through structured analogy. Along with the Quran, Sunnah, and ijma, qiyas forms the classical framework of usul al-fiqh (principles of Islamic jurisprudence).",
      },
    ],
    practices: [
      { name: 'Shahada — Declaration of Faith', description: 'The foundational act of entering Islam: bearing witness that there is no god but God and that Muhammad is His messenger. Its utterance with sincere belief constitutes conversion and daily reaffirmation.' },
      { name: 'Salah — Ritual Prayer', description: 'Five daily prayers performed at prescribed times (dawn, midday, afternoon, sunset, night). Prayers are preceded by ritual purification (wudu), performed facing Mecca, and involve specific bodily postures and Quranic recitation.' },
      { name: 'Zakat — Almsgiving', description: 'An obligatory annual alms-tax of 2.5% on qualifying wealth held above the nisab threshold for a lunar year. Distributed to eight designated categories of recipients, including the poor and those in debt.' },
      { name: 'Sawm — Fasting', description: 'Fasting from food, drink, and other prescribed acts from dawn to sunset throughout the month of Ramadan. Regarded as a spiritual discipline cultivating God-consciousness (taqwa) and solidarity with those in need.' },
      { name: 'Hajj — Pilgrimage', description: 'Annual pilgrimage to Mecca, obligatory once in a lifetime for those physically and financially able. Involves a prescribed sequence of rituals including circumambulation of the Kaaba, standing at Arafat, and symbolic stoning of the devil.' },
      { name: "Jumu'ah — Friday Prayer", description: 'A congregational midday prayer held every Friday, replacing the regular dhuhr prayer. Includes a formal sermon (khutba) delivered by the imam and is considered a communal obligation for Muslim men.' },
      { name: 'Quran Recitation', description: 'Daily recitation and memorization of the Quran is a central devotional practice. The tradition of tahfiz (full memorization) is highly valued; those who complete it receive the honorary title hafiz.' },
      { name: 'Eid Celebrations', description: 'Two annual festivals: Eid al-Fitr marking the end of Ramadan, and Eid al-Adha commemorating Ibrahim\'s willingness to sacrifice his son. Both involve communal prayer, feasting, charity, and family gatherings.' },
    ],
    texts: [
      { name: 'The Quran', type: 'primary', description: "The verbatim word of God as revealed to the Prophet Muhammad over 23 years. Comprising 114 chapters (suras), it is the supreme source of Islamic law, theology, and spiritual guidance." },
      { name: 'Sahih al-Bukhari', type: 'hadith', description: 'Compiled by Muhammad al-Bukhari (d. 870 CE), this collection is considered the most authentic hadith collection in Sunni Islam. Al-Bukhari reportedly examined over 600,000 narrations and preserved approximately 7,275.' },
      { name: 'Sahih Muslim', type: 'hadith', description: 'The second most authoritative hadith collection in Sunni Islam, compiled by Muslim ibn al-Hajjaj (d. 875 CE). Together with Bukhari, it forms the basis of the \"Two Sahihs\" (al-Sahihayn).' },
      { name: 'Sunan Abu Dawood', type: 'hadith', description: 'One of the six canonical Sunni hadith collections (Kutub al-Sittah), compiled by Abu Dawood al-Sijistani (d. 889 CE). Particularly focused on legal hadith and Islamic jurisprudence.' },
      { name: 'Muwatta Imam Malik', type: 'jurisprudence', description: "The earliest surviving Muslim legal code, compiled by Imam Malik ibn Anas (d. 795 CE), founder of the Maliki school. It integrates hadith with the practice of the people of Medina as a source of legal authority." },
      { name: "Al-Risala — Imam al-Shafi'i", type: 'jurisprudence', description: "The foundational text of Islamic jurisprudential theory (usul al-fiqh), authored by Imam Muhammad ibn Idris al-Shafi'i (d. 820 CE). It systematized the sources of Islamic law and their hierarchy." },
    ],
    history: [
      { year: '570 CE', event: 'Birth of Prophet Muhammad', description: 'Muhammad ibn Abdullah is born in Mecca in the Arabian peninsula, into the Quraysh tribe.' },
      { year: '610 CE', event: 'First Quranic Revelation', description: "The angel Jibril (Gabriel) appears to Muhammad in the Cave of Hira near Mecca with the first Quranic revelation: 'Read in the name of your Lord who created.'" },
      { year: '622 CE', event: 'Hijra to Medina', description: "The Prophet's migration from Mecca to Medina, marking the beginning of the Islamic calendar (AH 1) and the establishment of the first Muslim community-state." },
      { year: '632 CE', event: 'Death of the Prophet & Abu Bakr chosen as Caliph', description: "Upon the Prophet's death, the community elects Abu Bakr al-Siddiq as the first caliph through consultation (shura) — the foundational event defining Sunni political theology." },
      { year: '661 CE', event: 'Umayyad Caliphate established', description: "Muawiyah I establishes the Umayyad dynasty in Damascus, marking a shift from elected to hereditary rule and expanding the Muslim world from Spain to Central Asia." },
      { year: '750 CE', event: 'Abbasid Caliphate & Golden Age', description: "The Abbasid revolution overthrows the Umayyads. Baghdad becomes the center of a golden age of Islamic scholarship, philosophy, science, and the compilation of canonical hadith collections." },
      { year: '1258 CE', event: 'Mongol Sack of Baghdad', description: "The Mongol army under Hulagu Khan destroys Baghdad, ending the Abbasid Caliphate. The House of Wisdom is destroyed. A catastrophic rupture in the classical Islamic world." },
      { year: '1924 CE', event: 'Abolition of the Ottoman Caliphate', description: "The newly formed Republic of Turkey under Mustafa Kemal Atatürk formally abolishes the Ottoman Caliphate — the last widely recognized institution claiming caliphal authority in Sunni Islam." },
    ],
    geography: [
      { region: 'Middle East & North Africa', percentage: 92, note: 'Dominant majority in all MENA states except Iran and Iraq' },
      { region: 'Sub-Saharan Africa', percentage: 95, note: 'Near-total Sunni majority; Shia communities very small' },
      { region: 'South Asia (India, Pakistan, Bangladesh)', percentage: 82, note: 'Large Sunni majority; significant Shia minority in Pakistan (~15%)' },
      { region: 'Southeast Asia', percentage: 99, note: 'Nearly exclusively Sunni across Indonesia, Malaysia, Bangladesh' },
      { region: 'Central Asia', percentage: 85, note: 'Sunni Hanafi tradition historically dominant; some Shia in Azerbaijan' },
      { region: 'European Muslim populations', percentage: 90, note: 'Overwhelmingly Sunni, reflecting migration patterns from MENA and South Asia' },
    ],
    culture: [
      { category: 'Architecture', description: 'Mosque design reflects Islamic artistic traditions: minarets, domes, arabesque geometric tilework, and the qibla wall marking the direction of Mecca. Regional styles range from Ottoman grandeur to Mughal intricacy to West African earthen mosques.' },
      { category: 'Clothing', description: 'Regional dress varies widely: the hijab and abaya in the Arab world, the shalwar kameez across South Asia, the thobe and keffiyeh in the Gulf, and diverse sub-Saharan and Southeast Asian styles. Modesty principles are universal; expressions are local.' },
      { category: 'Calligraphy', description: 'Arabic calligraphy is the preeminent Islamic art form, elevating the written word of God. Major scripts include Naskh, Thuluth, Kufic, and Diwani. Calligraphic inscriptions adorn mosques, manuscripts, and domestic spaces across the Muslim world.' },
      { category: 'Music', description: 'Nasheed (devotional vocal music without instruments) is widely practiced. Scholarly opinion on music permissibility varies by school — conservative Hanbali and Deobandi positions restrict most music; Sufi and Barelvi traditions embrace devotional song (qawwali, sama). The debate remains active.' },
      { category: 'Food', description: 'Halal dietary laws (permitted) exclude pork, alcohol, and improperly slaughtered animals. Eid al-Adha centers on the sacrifice and sharing of meat. Regional cuisines — Middle Eastern meze, South Asian biryani, North African tagine — reflect Islam\'s geographic breadth.' },
      { category: 'Language', description: "Arabic holds sacred status as the language of the Quran and obligatory liturgical prayer. Classical Arabic is studied across the Muslim world. Regional vernaculars (Persian, Urdu, Bahasa, Turkish, Swahili) serve as literary and cultural mediums with deep Islamic literary traditions." },
    ],
    controversies: [
      {
        title: 'Succession after the Prophet',
        positionA: { label: 'Sunni position', text: 'Abu Bakr al-Siddiq was legitimately selected as caliph through shura (communal consultation) among the Companions. The first four caliphs are regarded as the Rightly Guided Caliphs (Khulafa Rashidun) whose rule is normatively authoritative.' },
        positionB: { label: 'Shia position', text: 'Ali ibn Abi Talib was divinely designated by the Prophet Muhammad at Ghadir Khumm as his rightful successor. The caliphates of Abu Bakr, Umar, and Uthman are considered illegitimate usurpations of this divine appointment.' },
      },
      {
        title: 'Authenticity and Authority of Hadith Collections',
        positionA: { label: 'Traditional Sunni view', text: 'The six canonical hadith collections — particularly Sahih al-Bukhari and Sahih Muslim — represent the most rigorous hadith verification methodology in Islamic history and are foundational sources of religious law and practice.' },
        positionB: { label: 'Critical scholarly view', text: 'Academic historians (Goldziher, Schacht, and more recently Jonathan Brown) have noted methodological challenges in hadith authentication. Some Muslim reform thinkers argue that certain hadith require re-evaluation against Quranic principles.' },
      },
      {
        title: 'Music and Artistic Expression',
        positionA: { label: 'Conservative Sunni position', text: "Hanbali, Salafi, and Deobandi scholars hold that most forms of music (particularly with instruments) are prohibited (haram) or strongly discouraged (makruh), citing hadith that speak against musical instruments." },
        positionB: { label: 'Liberal and Sufi position', text: "Hanafi, Maliki, and Sufi traditions have historically permitted devotional music (qawwali, sama, nasheed). Scholars such as al-Ghazali argued that spiritual music cultivating love of God is not only permitted but beneficial." },
      },
    ],
    research: [
      {
        title: 'Sunni Islam and the Decentralization of Religious Authority',
        analysis: "Unlike Catholicism's papacy or Shia Islam's doctrine of Wilayat al-Faqih (guardianship of the jurist), Sunni Islam has no central clerical institution with binding doctrinal authority. The role of the caliph historically combined political and limited religious functions, but the caliph was not considered infallible or prophetically guided. This decentralization has profound implications: religious authority is distributed across thousands of individual scholars (ulama), and competing fatwas on the same question can co-exist within the tradition. The rise of the internet and transnational media has further fragmented authority, enabling self-styled scholars to reach global audiences. Some analysts argue this structural flexibility has been Sunni Islam's great strength — enabling adaptation across diverse cultures — while others contend it creates vulnerability to radical reinterpretation without institutional checks.",
      },
      {
        title: 'The Four Madhhabs as a System of Managed Legal Diversity',
        analysis: "The four Sunni legal schools — Hanafi, Maliki, Shafi'i, and Hanbali — represent one of Islamic civilization's most sophisticated institutional achievements: a system that preserves legal diversity within theological unity. Each school developed distinct methodologies for deriving rulings from primary sources, producing different legal outcomes on hundreds of questions while all recognizing each other's legitimacy. The classical position is that a qualified Muslim may follow any of the four schools. This pluralism functioned as a form of built-in intellectual humility — no single school could claim to have definitively resolved all questions. The modern challenge comes from Salafi-Wahhabi movements that reject taqlid (following a school) and advocate direct ijtihad (independent legal reasoning) from primary sources, a position that paradoxically risks narrowing the tradition's intellectual breadth.",
      },
    ],
    sources: [
      { author: 'John L. Esposito', title: 'Islam: The Straight Path', publisher: 'Oxford University Press', year: '2011', url: '#' },
      { author: 'Jonathan A.C. Brown', title: 'Misquoting Muhammad: The Challenge and Choices of Interpreting the Prophet\'s Legacy', publisher: 'Oneworld Publications', year: '2014', url: '#' },
      { author: 'Wael B. Hallaq', title: 'A History of Islamic Legal Theories', publisher: 'Cambridge University Press', year: '1997', url: '#' },
      { author: 'Marshall G.S. Hodgson', title: 'The Venture of Islam, Vol. 1–3', publisher: 'University of Chicago Press', year: '1974', url: '#' },
      { author: "Timothy Winter (ed.)", title: 'The Cambridge Companion to Classical Islamic Theology', publisher: 'Cambridge University Press', year: '2008', url: '#' },
      { author: 'Fazlur Rahman', title: 'Islam', publisher: 'University of Chicago Press', year: '1979', url: '#' },
    ],
  },
};
