export const hanafiData = {
  id: 'hanafi',
  name: 'Hanafi School',
  parent: 'sunni',
  subtitle: 'The largest Sunni legal school · c. 699–767 CE',
  meta: {
    adherents: '~45% of Sunni Muslims',
    founded: 'c. 699–767 CE',
    primaryRegions: 'South Asia, Central Asia, Turkey',
  },
  sections: {
    overview: {
      paragraphs: [
        "The Hanafi school (Arabic: al-madhhab al-Hanafi) is one of the four canonical Sunni schools of Islamic jurisprudence (fiqh) and is the largest in terms of adherents, estimated to encompass approximately 45% of the world's Sunni Muslims. It is named after its founder, Nu'man ibn Thabit ibn Zuṭā ibn Marzubān, known as Abu Hanifa (699–767 CE), a merchant-scholar from Kufa, Iraq.",
        "The Hanafi school is historically distinguished by its relatively liberal use of analogical reasoning (qiyas), juristic preference (istihsan), and consideration of public interest (maslaha) in deriving legal rulings. Compared to other schools, it grants more weight to ra'y (considered legal opinion) where explicit textual evidence is absent or requires contextual interpretation. This methodological flexibility made the Hanafi school particularly adaptable to diverse cultural contexts.",
        "The school became the official legal code of the Abbasid Caliphate and later the Ottoman Empire, giving it an extraordinary institutional reach from the 8th through early 20th centuries. Today it remains predominant in South Asia (Pakistan, India, Bangladesh, Afghanistan), Central Asia, Turkey, and much of the Arab Levant and the Balkans.",
      ],
      keyFacts: [
        { label: 'Founder', value: 'Abu Hanifa (699–767 CE)' },
        { label: 'Origin', value: 'Kufa, Iraq' },
        { label: 'Legal method', value: 'Heavy use of qiyas & istihsan' },
        { label: 'Official code of', value: 'Ottoman Empire' },
      ],
    },
    beliefs: [
      { title: 'Primacy of Quran and Sunnah', description: "Like all Sunni schools, the Hanafi school affirms the Quran and authenticated Sunnah as the supreme sources of legal and theological authority. Abu Hanifa was known to rigorously authenticate hadith, accepting only those with strong chains of transmission." },
      { title: "Istihsan — Juristic Preference", description: "A defining methodological feature: where strict analogical reasoning would produce an outcome contrary to justice or public welfare, the Hanafi jurist may prefer an alternative ruling grounded in broader Quranic principles. This tool is more developed in Hanafi jurisprudence than in other schools." },
      { title: "Consideration of Local Custom ('Urf)", description: "The Hanafi school gives significant weight to established local custom ('urf) as a supplementary source where explicit texts are silent. This contributed to the school's adaptability across vastly different cultures, from the Ottoman Balkans to South Asian subcontinent." },
      { title: 'Theological Alignment with Maturidi Kalam', description: "While legal and theological schools are formally separate, Hanafi jurisprudence has historically been paired with Maturidi theology — the school founded by Abu Mansur al-Maturidi of Samarkand, offering a rationalist approach to divine attributes and human free will that differs subtly from the Ash'ari school dominant among Shafi'i and Maliki scholars." },
    ],
    practices: [
      { name: 'Raf al-Yadayn — Raising of Hands', description: 'A minor but notable practice distinction: Hanafi prayer does not prescribe raising hands at multiple points in prayer, unlike Shafi\'i practice. This is based on Hanafi hadith analysis and illustrates how schools can differ on ritual details.' },
      { name: 'Witr Prayer', description: 'The Hanafi school holds that the Witr prayer (an odd-number supplementary night prayer) is obligatory (wajib), whereas other schools classify it as a confirmed sunnah. This reflects the school\'s distinct hadith evaluation.' },
      { name: 'Ritual Purity Rulings', description: "Hanafi rulings on tahara (ritual purity) differ in several respects from other schools — for example, the conditions for wudu invalidation and the treatment of different types of water. These distinctions are studied in detail in the classical Hanafi manuals." },
    ],
    texts: [
      { name: 'Al-Mabsut — al-Sarakhsi', type: 'jurisprudence', description: 'A monumental 30-volume encyclopedia of Hanafi jurisprudence by Shams al-Aʾimma al-Sarakhsi (d. 1096 CE), covering virtually every area of Islamic law from a Hanafi perspective.' },
      { name: 'Mukhtasar al-Quduri', type: 'jurisprudence', description: "A foundational introductory primer of Hanafi fiqh by Ahmad al-Quduri (d. 1037 CE), widely studied in traditional Islamic seminaries (madrasas) across South Asia and the Arab world." },
      { name: 'Al-Hidaya — al-Marghinani', type: 'jurisprudence', description: "Perhaps the most influential Hanafi legal manual, authored by Burhan al-Din al-Marghinani (d. 1197 CE). It became the basis for the Ottoman Mecelle (legal code) and remains a core text in Hanafi seminaries worldwide." },
      { name: 'Fatawa-e-Alamgiri', type: 'jurisprudence', description: "A comprehensive compilation of Hanafi rulings commissioned by Mughal Emperor Aurangzeb (Alamgir) in the 17th century. It remains one of the largest Hanafi legal compilations ever produced." },
    ],
    history: [
      { year: '699 CE', event: 'Birth of Abu Hanifa', description: 'Nu\'man ibn Thabit (Abu Hanifa) is born in Kufa, Iraq, into a family of Persian merchants.' },
      { year: 'c. 730 CE', event: 'Abu Hanifa establishes his school', description: 'Abu Hanifa establishes his legal circle in Kufa, developing the methodological foundations of what would become the Hanafi school through collaborative legal reasoning with his students.' },
      { year: '767 CE', event: 'Death of Abu Hanifa', description: 'Abu Hanifa dies in Baghdad, reportedly in Abbasid detention. His two most important students, Abu Yusuf and Muhammad al-Shaybani, continue to develop and systematize the school.' },
      { year: '9th century', event: 'Hanafi adoption by Abbasid Caliphate', description: 'Abu Yusuf, student of Abu Hanifa, becomes the first Chief Justice (Qadi al-Qudat) of the Abbasid Caliphate. The Hanafi school becomes the official jurisprudence of the Abbasid state.' },
      { year: '1299–1922', event: 'Ottoman Empire adopts Hanafi law', description: 'The Ottoman Empire makes the Hanafi school its official legal code, extending its reach across Anatolia, the Arab world, the Balkans, and North Africa.' },
      { year: '19th–20th century', event: 'Deobandi and Barelvi movements emerge', description: 'Two major Hanafi reform movements emerge in British India: the Deobandi school (founded 1867) and the Barelvi movement — both operating within Hanafi jurisprudence but with distinct theological orientations.' },
    ],
    geography: [
      { region: 'South Asia (Pakistan, India, Bangladesh)', percentage: 95, note: 'Near-total Hanafi dominance; the Deobandi and Barelvi movements are both Hanafi' },
      { region: 'Central Asia (Uzbekistan, Kazakhstan, Tajikistan)', percentage: 90, note: 'Historical Hanafi heartland; Soviet era suppressed but did not erase the tradition' },
      { region: 'Turkey and the Balkans', percentage: 85, note: 'Ottoman legacy; official religious institutions follow Hanafi methodology' },
      { region: 'Arab Levant (Syria, Jordan, Palestine)', percentage: 60, note: 'Hanafi tradition present alongside Shafi\'i; historically the Ottoman-administered population was Hanafi' },
    ],
    culture: [
      { category: 'Madrasa Tradition', description: "The Hanafi school gave rise to one of the world's most extensive religious educational networks. From the Deoband seminary in India to Istanbul's Ottoman madrasas, Hanafi scholarship has historically been institutionalized and academically structured." },
      { category: 'Ottoman Legal Heritage', description: "The Ottoman Mecelle (1869–1876), a codification of Hanafi civil law, was one of the first modern legal codes in the Islamic world. Its legacy shaped legal systems in Turkey, Jordan, Lebanon, and Israel." },
      { category: 'Sufi-Hanafi Synthesis', description: "Many Sufi orders in South and Central Asia operate within a Hanafi legal framework. The Naqshbandi, Chishti, and Qadiri orders — while theologically distinct — generally follow Hanafi fiqh in their legal observance." },
    ],
    controversies: [
      {
        title: "Abu Hanifa's Use of Ra'y (Legal Opinion)",
        positionA: { label: "Hanafi defense", text: "Abu Hanifa's use of ra'y was not arbitrary speculation but disciplined legal reasoning grounded in Quranic principles. It reflected the intellectual environment of Kufa, where many hadith had not yet been compiled, requiring jurists to reason carefully from foundational texts." },
        positionB: { label: "Hadith-focused critique", text: "Classical critics, including early Shafi'i scholars, argued that Abu Hanifa's school gave insufficient weight to authentic hadith in favor of rational opinion, producing rulings that diverged from Prophetic precedent. Hanbali and Salafi scholars have historically shared this critique." },
      },
    ],
    research: [
      {
        title: "The Hanafi School's Role in Legal Pluralism",
        analysis: "The Hanafi school's historical dominance across the Ottoman and Mughal empires gave it an institutional permanence that the other schools did not achieve at comparable scale. Yet this institutional success also created a tension: as the official state law, Hanafi jurisprudence sometimes functioned as an instrument of political administration rather than pure religious reasoning. The 19th-century reforms within British India — both the Deobandi and Barelvi movements — can be read as attempts to renew and protect the school's intellectual integrity against both colonial legal impositions and what reformers saw as doctrinal drift. The Hanafi school thus demonstrates how a legal tradition can simultaneously be a vehicle for state power and a site of internal renewal.",
      },
    ],
    sources: [
      { author: 'Wael B. Hallaq', title: 'A History of Islamic Legal Theories', publisher: 'Cambridge University Press', year: '1997', url: '#' },
      { author: 'Christopher Melchert', title: 'The Formation of the Sunni Schools of Law, 9th–10th Centuries CE', publisher: 'Brill', year: '1997', url: '#' },
      { author: 'Norman Calder', title: 'Studies in Early Muslim Jurisprudence', publisher: 'Clarendon Press', year: '1993', url: '#' },
      { author: 'Khaled Abou El Fadl', title: 'Speaking in God\'s Name: Islamic Law, Authority and Women', publisher: 'Oneworld Publications', year: '2001', url: '#' },
    ],
  },
};
