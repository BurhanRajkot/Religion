export const shiaData = {
  id: 'shia',
  name: "Shia Islam",
  parent: 'islam',
  subtitle: "Second largest branch of Islam · ~10–13% of global Muslims",
  meta: {
    adherents: '200–300 million',
    founded: '7th century CE',
    primaryRegions: 'Iran, Iraq, Lebanon, Azerbaijan',
  },
  sections: {
    overview: {
      paragraphs: [
        "Shia Islam (from Shīʿat ʿAlī, 'the party of Ali') is the second largest branch of Islam, encompassing approximately 10–13% of the world's Muslim population, or 200–300 million adherents. The Shia theological tradition emerged from a foundational dispute over the succession to the Prophet Muhammad following his death in 632 CE.",
        "The defining Shia conviction is that the Prophet Muhammad explicitly designated his cousin and son-in-law, Ali ibn Abi Talib, as his rightful successor at the event of Ghadir Khumm. The subsequent caliphates of Abu Bakr, Umar, and Uthman are thus regarded as illegitimate in traditional Shia theology. This position gave rise to a distinct understanding of religious authority: the Imam (descended from the Prophet's family, the Ahl al-Bayt) is not merely a political leader but a divinely guided interpreter of religion.",
        "The largest Shia denomination — Twelver (Ithna-Ashari) Shia Islam — holds that there were twelve legitimate Imams descending from Ali, the last of whom, Muhammad al-Mahdi, entered a state of occultation in 874 CE and is expected to return. In his absence, qualified scholars (maraji') exercise religious leadership, a system formalized in Ayatollah Khomeini's doctrine of Wilayat al-Faqih (guardianship of the jurist), implemented in the Islamic Republic of Iran.",
      ],
      keyFacts: [
        { label: 'Largest subgroup', value: 'Twelver (Imami)' },
        { label: 'Key doctrine', value: 'Imamate of Ali & descendants' },
        { label: 'Primary scripture', value: 'Quran + Hadith of Ahl al-Bayt' },
        { label: 'Geographic heartland', value: 'Iran, Iraq, Lebanon' },
      ],
    },
    beliefs: [
      { title: "Imamate — Divine Leadership", description: "The Shia doctrine of Imamate holds that after the Prophet, divinely guided leadership passed to Ali and then through a designated line of Imams from the Prophet's family (Ahl al-Bayt). The Imam possesses special knowledge ('ilm) and is protected from sin and error (isma — infallibility)." },
      { title: "Wilayat — Guardianship", description: "Beyond political authority, the Imam exercises a spiritual guardianship (wilaya) over believers. In Twelver Shia thought, this concept was extended by Khomeini to living senior jurists (maraji') during the Imam's occultation." },
      { title: "Occultation of the Twelfth Imam", description: "Twelver Shia believe the twelfth Imam, Muhammad al-Mahdi, went into occultation (ghayba) in 874 CE — first a minor occultation, then a major one — and will return as the Mahdi at the end of times. His return is a central eschatological expectation." },
      { title: 'Commemoration of Karbala', description: "The martyrdom of Husayn ibn Ali (grandson of the Prophet) at Karbala in 680 CE is the central formative tragedy of Shia consciousness. Its annual commemoration during Ashura — involving mourning, processions, and in some communities self-flagellation — is the most visible Shia ritual observance." },
    ],
    practices: [
      { name: 'Ashura Observance', description: "Annual mourning for the martyrdom of Imam Husayn at Karbala (680 CE). Observed on the 10th of Muharram with processions, lamentation, theatrical passion plays (ta'ziya), and in some traditions self-flagellation (disputed by senior scholars)." },
      { name: 'Ziyara — Shrine Pilgrimage', description: "Pilgrimage to the shrines of the Imams and their family members is a major devotional practice, distinct from Sunni tradition. Major shrine cities include Karbala and Najaf (Iraq), Mashhad (Iran), and Samarra (Iraq)." },
      { name: 'Five Pillars + Two Additional', description: "Shia Islam recognizes the five pillars of Islam and adds Wilayat (guardianship/love of the Imams) and, in some formulations, Jihad and Amr bil-Ma'ruf (enjoining good) as additional pillars." },
      { name: "Temporary Marriage (Mut'a)", description: "Twelver Shia jurisprudence permits a form of temporary marriage (mut'a or sigheh) for a fixed period and agreed dowry. Sunni jurisprudence holds that the Prophet prohibited this practice after initially permitting it." },
    ],
    texts: [
      { name: 'The Quran', type: 'primary', description: "Shared with all Muslims as the supreme revelation. Shia scholars have historically disputed the completeness of the transmitted text, though the mainstream Shia position accepts the standard Uthmanic codex." },
      { name: 'Nahj al-Balagha', type: 'primary', description: "A collection of sermons, letters, and sayings attributed to Imam Ali ibn Abi Talib, compiled by Sharif al-Radi in the 10th century CE. One of the most revered texts in Shia tradition." },
      { name: 'Al-Kafi — al-Kulayni', type: 'hadith', description: "The most authoritative Shia hadith collection, compiled by Muhammad ibn Ya'qub al-Kulayni (d. 941 CE). Contains approximately 16,000 hadith from the Prophet and the Imams." },
      { name: 'Man la Yahduruhu al-Faqih', type: 'jurisprudence', description: "One of the four canonical Shia hadith books, compiled by Shaykh al-Saduq (d. 991 CE). A practical legal guide structured for those without access to a jurist." },
    ],
    history: [
      { year: '632 CE', event: 'Death of Prophet & disputed succession', description: "The Prophet's death triggers a succession crisis. Shia tradition holds that Ali was designated at Ghadir Khumm; instead, Abu Bakr is chosen. Ali becomes the fourth caliph only in 656 CE." },
      { year: '656–661 CE', event: "Ali's Caliphate & First Civil War", description: "Ali rules as the fourth caliph amid the First Fitna (civil war). He is assassinated in 661 CE in Kufa. His followers constitute the nascent Shia movement." },
      { year: '680 CE', event: 'Battle of Karbala', description: "Husayn ibn Ali, grandson of the Prophet, is killed with most of his family and followers by Umayyad forces at Karbala. This event becomes the foundational tragedy of Shia consciousness and is commemorated annually." },
      { year: '874 CE', event: 'Major Occultation of the Twelfth Imam', description: "The twelfth Imam, Muhammad al-Mahdi, enters the Major Occultation. Twelver Shia theology holds that he remains alive and will return." },
      { year: '1501 CE', event: 'Safavid Empire establishes Shia state', description: "Shah Ismail I establishes the Safavid dynasty in Persia and makes Twelver Shia Islam the official state religion — a decisive event shaping Iran's religious identity to the present day." },
      { year: '1979 CE', event: 'Islamic Revolution in Iran', description: "Ayatollah Khomeini leads the Iranian Revolution, establishing the Islamic Republic and implementing his doctrine of Wilayat al-Faqih — clerical governance in the Imam's absence." },
    ],
    geography: [
      { region: 'Iran', percentage: 95, note: 'Official state religion since the Safavid period; Twelver Shia majority' },
      { region: 'Iraq', percentage: 60, note: 'Shia majority; contains the holy cities of Karbala and Najaf' },
      { region: 'Lebanon', percentage: 30, note: 'Largest single religious community; Hezbollah\'s political-military constituency' },
      { region: 'Azerbaijan', percentage: 65, note: 'Officially secular; culturally Shia but many are non-practicing' },
      { region: 'Pakistan', percentage: 15, note: 'Significant minority; second-largest Shia population in absolute numbers after Iran' },
    ],
    culture: [
      { category: 'Mourning Traditions', description: "Ashura observances are the most visually distinctive Shia cultural expression — black clothing, lamentation processions, ta'ziya passion plays (especially in Iran), and communal meals (nazr food distribution)." },
      { category: 'Shrine Architecture', description: "Shia shrine architecture — the elaborate golden domes of Najaf, Karbala, and Mashhad — represents a distinctive aesthetic tradition. Shrines function as centers of pilgrimage, scholarship, and charity." },
      { category: 'Poetry and Literature', description: "Persian Shia poetry has produced some of Islamic civilization's greatest literary works. The marsiya (elegy for the Imams) is a major literary genre in Urdu and Persian, with poets like Mir Anis creating complex commemorative narratives of Karbala." },
    ],
    controversies: [
      {
        title: 'Intercession through the Imams and Saints',
        positionA: { label: 'Shia position', text: "Seeking intercession (tawassul) through the Prophet, Imams, and righteous saints is a legitimate devotional practice. The Imams possess a special spiritual station (maqam) that makes their intercession effective. Visiting their shrines is meritorious." },
        positionB: { label: 'Salafi / Wahhabi position', text: "Seeking intercession through the dead — including the Prophet and Imams — is shirk (polytheism) or a dangerous innovation (bid'a). Shrine veneration and tawassul through deceased persons are considered serious theological errors." },
      },
      {
        title: "Mut'a — Temporary Marriage",
        positionA: { label: 'Twelver Shia view', text: "Mut'a (temporary marriage) is explicitly permitted in the Quran (4:24) and was practiced during the Prophet's lifetime. Its prohibition by Umar ibn al-Khattab was a human legal decision that Shia jurisprudence does not accept as binding." },
        positionB: { label: 'Sunni view', text: "The Prophet himself abrogated mut'a before his death, as recorded in Sahih Muslim and other authentic hadith. It is uniformly prohibited in all four Sunni legal schools as a consensus ruling (ijma')." },
      },
    ],
    research: [
      {
        title: 'Wilayat al-Faqih and the Politicization of Shia Theology',
        analysis: "Khomeini's doctrine of Wilayat al-Faqih (guardianship of the jurist) represented a radical innovation within Shia political theology. Classical Shia thought had largely confined the role of senior scholars (maraji') to religious guidance during the Imam's occultation, not political governance. Khomeini's argument — that senior jurists must exercise political authority to safeguard Islamic governance — was contested by many senior Shia scholars, including Ayatollah Khoei and later Grand Ayatollah Sistani. The resulting tension between quietist Shia scholarship (represented by the Najaf seminary) and activist political Islam (represented by Tehran) remains one of the defining fissures within contemporary Shia thought. Sistani's intervention in Iraqi politics — exercised through religious decrees rather than political office — illustrates a competing model of scholarly authority.",
      },
    ],
    sources: [
      { author: 'Vali Nasr', title: 'The Shia Revival', publisher: 'W.W. Norton & Company', year: '2006', url: '#' },
      { author: 'Heinz Halm', title: 'Shiism', publisher: 'Edinburgh University Press', year: '2004', url: '#' },
      { author: 'Moojan Momen', title: 'An Introduction to Shi\'i Islam', publisher: 'Yale University Press', year: '1985', url: '#' },
      { author: 'Juan Cole', title: 'Sacred Space and Holy War: The Politics, Culture and History of Shi\'ite Islam', publisher: 'I.B. Tauris', year: '2002', url: '#' },
    ],
  },
};
