const newTestamentBooks = [
    { name: "Mateo", chapters: 28 },
    { name: "Marcos", chapters: 16 },
    { name: "Lucas", chapters: 24 },
    { name: "Juan", chapters: 21 },
    { name: "Buhat sa mga Apostoles", chapters: 28 },
    { name: "Roma", chapters: 16 },
    { name: "1 Corinto", chapters: 16 },
    { name: "2 Corinto", chapters: 13 },
    { name: "Galacia", chapters: 6 },
    { name: "Efeso", chapters: 6 },
    { name: "Filipos", chapters: 4 },
    { name: "Colosas", chapters: 4 },
    { name: "1 Tesalonica", chapters: 5 },
    { name: "2 Tesalonica", chapters: 3 },
    { name: "1 Timoteo", chapters: 6 },
    { name: "2 Timoteo", chapters: 4 },
    { name: "Tito", chapters: 3 },
    { name: "Filemon", chapters: 1 },
    { name: "Hebreohanon", chapters: 13 },
    { name: "Santiago", chapters: 5 },
    { name: "1 Pedro", chapters: 5 },
    { name: "2 Pedro", chapters: 3 },
    { name: "1 Juan", chapters: 5 },
    { name: "2 Juan", chapters: 1 },
    { name: "3 Juan", chapters: 1 },
    { name: "Judas", chapters: 1 },
    { name: "Gipadayag", chapters: 22 }
];

const sampleVerses = newTestamentBooks.reduce((acc, book) => {
    acc[book.name] = Array.from({ length: book.chapters }, (_, ch) => ({
        chapter: ch + 1,
        verses: Array.from({ length: 3 }, (_, v) => ({
            verse: v + 1,
            text: `Placeholder nga bersikulo para sa ${book.name} ${ch + 1}:${v + 1}. Palihug ilisan sa aktuwal nga Cebuano NIV nga teksto.`
        }))
    }));
    return acc;
}, {});

 // Mateo 1
        sampleVerses["Mateo"][0] = {
            chapter: 1,
            sections: [
                {
                    title: "Ang Kagikan ni Jesu-Cristo",
                    verses: [
                        { verse: 1, text: "Mao kini ang kagikan ni Jesu-Cristo nga kaliwat ni David. Si David kaliwat ni Abraham." },
                        { verse: 2, text: "Si Abraham amahan ni Isaac, si Isaac amahan ni Jacob, ug si Jacob amahan ni Juda ug sa mga igsoon niini nga lalaki." },
                        { verse: 3, text: "Si Juda nakapangasawa kang Tamar ug may duha sila ka anak nga si Perez ug si Zara. Si Perez amahan ni Hezron, ug si Hezron amahan ni Aram." },
                        { verse: 4, text: "Si Aram amahan ni Aminadab, si Aminadab amahan ni Naason, ug si Naason amahan ni Salmon." },
                        { verse: 5, text: "Si Salmon nakapangasawa kang Rahab ug ang ilang anak mao si Boaz. Si Boaz amahan ni Obed ug ang inahan niini mao si Ruth. Si Obed amahan ni Jesse," },
                        { verse: 6, text: "ug si Jesse amahan ni Haring David. Si Haring David amahan ni Solomon ug ang iyang inahan asawa kaniadto ni Uria." },
                        { verse: 7, text: "Si Solomon amahan ni Rehoboam, si Rehoboam amahan ni Abia, ug si Abia amahan ni Asa." },
                        { verse: 8, text: "Si Asa amahan ni Jehoshafat, si Jehoshafat amahan ni Joram, ug si Joram amahan ni Uzia." },
                        { verse: 9, text: "Si Uzia amahan ni Jotam, si Jotam amahan ni Ahaz, ug si Ahaz amahan ni Hezekia." },
                        { verse: 10, text: "Si Hezekia amahan ni Manase, si Manase amahan ni Amos, si Amos amahan ni Josias," },
                        { verse: 11, text: "ug si Josias amahan ni Jeconia ug sa mga igsoon niini nga lalaki. Niadtong panahona gibihag ang mga taga-Israel ngadto sa Babilonia." },
                        { verse: 12, text: "Mao kini ang kagikan ni Jesus human mabihag ang mga taga-Israel ngadto sa Babilonia: si Jeconia amahan ni Shealtiel, si Shealtiel amahan ni Zerubabel," },
                        { verse: 13, text: "si Zerubabel amahan ni Abiud, si Abiud amahan ni Eliakim, ug si Eliakim amahan ni Azor." },
                        { verse: 14, text: "Si Azor amahan ni Zadok, si Zadok amahan ni Akim, ug si Akim amahan ni Eliud." },
                        { verse: 15, text: "Si Eliud amahan ni Eleazar, si Eleazar amahan ni Matan, si Matan amahan ni Jacob," },
                        { verse: 16, text: "si Jacob amahan ni Jose nga bana ni Maria. Si Maria mao ang inahan ni Jesus nga gitawag nga Cristo." },
                        { verse: 17, text: "Busa may 14 ka mga henerasyon gikan kang Abraham hangtod kang David. Ug may 14 usab ka mga henerasyon gikan kang David hangtod sa panahon sa pagkabihag sa mga taga-Israel ngadto sa Babilonia. Gikan sa pagkabihag nila may 14 pa gayod ka mga henerasyon hangtod kang Cristo." }
                    ]
                },
                {
                    title: "Ang Pagkatawo ni Cristo",
                    verses: [
                        { verse: 18, text: "Mao kini ang sugilanon sa pagka-tawo ni Jesu-Cristo: Si Maria nga iyang inahan kaslonon na kang Jose. Apan sa wala pa sila mahiusa namatikdan ni Maria nga mabdos na siya pinaagi sa gahom sa Espiritu Santo." },
                        { verse: 19, text: "Si Jose nga iyang pamanhonon usa ka matarong nga tawo ug dili siya buot nga maulawan si Maria. Busa nakadesisyon siya nga bulagan niya sa hilom si Maria." },
                        { verse: 20, text: "Ug samtang nagapamalandong si Jose niini, nagpakita kaniya pinaagi sa damgo ang anghel sa Ginoo ug miingon, “Jose, kaliwat ni David, ayaw kahadlok sa pagpa-ngasawa kang Maria, kay nagmabdos siya pinaagi sa Espiritu Santo." },
                        { verse: 21, text: "Manganak siyag lalaki ug nganlan mo siyag Jesus, kay luwason niya ang iyang katawhan gikan sa ilang mga sala.”" },
                        { verse: 22, text: "Nahitabo kini aron matuman ang giingon sa Ginoo pinaagi sa propeta nga nagaingon," },
                        { verse: 23, text: "“Magmabdos ang usa ka dalagang putli, ug manganak siyag lalaki. Ug ang maong bata pagatawgon nga Emmanuel” (nga kon sabton, “Ang Dios kauban nato”)." },
                        { verse: 24, text: "Busa sa pagmata ni Jose gituman niya ang giingon kaniya sa anghel sa Ginoo, ug gipangasawa niya si Maria." },
                        { verse: 25, text: "Apan wala siya makighilawas kang Maria samtang wala pa kini manganak. Sa dihang nanganak na si Maria, ginganlan ni Jose ang bata ug Jesus." }
                    ]
                }
            ]
        };

        // Mateo 2
        sampleVerses["Mateo"][1] = {
            chapter: 2,
            sections: [
                {
                    title: "Mga Bisita gikan sa Sidlakan",
                    verses: [
                        { verse: 1, text: "Natawo si Jesus sa lungsod sa Betlehem, lalawigan sa Judea sa panahon nga nag hari sa Herodes. Unya may mga tawo nga may kaalam bahin sa mga bituon nga nangabot sa Jerusalem gikan sa sidlakan" },
                        { verse: 2, text: `ug nangutana: "Hain man ang bata nga natawo nga maoy mahimong hari sa mga Judio ? Nakita namo ang bituon nga nagpahibalo sa iyang pagkatawo sa pagsubang niini didto sa sidlakan ug mianhi kami aron pagsimba kaniya." ` },
                        { verse: 3, text: "Sa pagkahibalo ni Hari Herodes niini, wala siya mahimutang ingon man ang tibuok Jerusalem." },
                        { verse: 4, text: `Gitigom niya ang kadagkoan sa mga pari ug ang mga magtutudlo sa Balaod ug gipangutana niya sila, "Asa man matawo ang Mesiyas?"` },
                        { verse: 5, text: `Sila mitubag, "Sa lunsod sa Betlehem, sa Judea." Mao kini ang giingon sa Dios nga gisulat sa propeta:` },
                        { verse: 6, text: " ’ikaw, Betlehem, sa yuta sa Juda, dili ka labing ubos sa mga dagkong lungsod sa Juda; kay maggikan kanimo ang usa ka pangulo nga maoy mag mando sa akong katwhan, sa Israel.’" },
                        { verse: 7, text: "Busa gipatawag ni Herodes sa hilom ang mga maalamong bisita nga gikan sa sidlakan. Iyang nasayran gikan kanila ang untop nga takna sa pagsubang sa bituon." },
                        { verse: 8, text: "Unya gipaadto niya sila sa Betlehem nga nag-ingon, “Lakaw kamo ug pangitaa pag-ayo ang bata ug kon makaplagan na ninyu siya, pahibaloa ako aron moadto ug mosimba usab kaniya.”" },
                        { verse: 9, text: "Human nila paminawa ang hari, nanglakaw sila. Sa didto na sila sa dalan, nakita nila pag-usab ang bituon nga nakit-an nila sa sidlakan." },
                        { verse: 10, text: "Dako kaayo ang ilang kalipay sa pagkakita nila sa bituon! Ug nag-una kini kanila hangtod nga miabot kini ug mihunong sa tungod gayod sa nahimutangan sa bata." },
                        { verse: 11, text: "Unya misulod sila sa balay ug nakita nila ang bata uban sa iyang inahan nga si Maria. Nangluhod sila ug misimba sa bata. Unya giablihan nila ang ilang mga gasa ug mihalad sila kaniyag bulawan, insenso ug mira." },
                        { verse: 12, text: "Pinaagi sa damgo gipahimatngonan sila sa Dios sa dili pagbalik ngadto kang Herodes busa namauli sila agi sa laing dalan." }
                    ]
                },
                {
                    title: "Ang Pagkagiw ngadto sa Ehipto",
                    verses: [
                        { verse: 13, text: `Sa diha nga nanglakaw na ang mga maalamong bisita, usa ka anghel sa Ginoo ang mipakita kang Jose pinaagi sa damgo nga nag-ingon, “Bangon, dad-a ang bata ug ang iyang inahan ug pangagiw kamo ngadto sa Ehipto ug pabilin didto hangtod nga papaulion ko kamo kay ang bata pangitaon ni Herodes aron patyon.”` },
                        { verse: 14, text: `Busa mibangon si Jose, gidala niya ang bata ug ang inahan ug mikagiw sila niadtong gabhiona padulong sa Ehipto.` },
                        { verse: 15, text: `Nagpabilin sila didto hangtod nga namatay si Herodes. Nahitabo kini aron matuman ang giingon sa Ginoo pinaagi sa propeta, “Gitawag ko ang akong Anak gikan sa Ehipto.”` }
                    ]
                },
                {
                    title: "Gipamatay ang mga Bata",
                    verses: [
                        { verse: 16, text: `Sa pagkamatngon ni Herodes nga nalingla siya sa mga bisita, hilabihan gayod niyang sukoa. Unya misugo siya nga pamatyon ang tanang bata nga lalaki nga nagpanuigon gikan sa duha ka tuig ug ubos nga didto sa Betlehem ug sa mga dapit nga kasikbit. Kini pinasikad sa iyang pangagpas nga maoy gidugayon sukad sa pagsubang sa bituon sumala sa mga bisita.` },
                        { verse: 17, text: `Sa maong hitabo natuman gayod ang giingon sa Dios pinaagi kang propeta Jeremias:`},
                        { verse: 18, text: `“May tingog nga nabati didto sa Rama, usa ka mapait nga pagminatay ug pagbangotan. Naghilak si Raquel tungod sa iyang mga anak ug walay makahupay kaniya kay patay na man sila.”`},
                    ]
                },
                 {
                    title: "Ang Pagpauli gikan sa Ehipto",
                    verses: [
                        {verse: 19, text: `Sa patay na si Herodes, usa ka anghel sa Ginoo mipakita kang Jose didto sa Ehipto pinaagi sa damgo,`},
                        {verse: 20, text: `“Bangon! Dad-a ang bata ug ang iyang inahan ug balik ngadto sa yuta sa Israel kay patay na ang nagtinguha pagpatay sa bata,” matod sa anghel.`},
                        {verse: 21, text: `Busa mibangon si Jose ug gidala niya ang bata ug ang inahan ug namauli sila sa yuta sa Israel.`},
                        {verse: 22, text: `Apan sa pagkadungog niya nga si Arquelao na ang naghari sa Judea puli kang Herodes nga iyang amahan, nahadlok si Jose sa pagpuyo didto. Unya gipahimangnoan na usab siya sa Ginoo pinaagi sa damgo busa miadto siya sa lalawigan sa Galilea`},
                        {verse: 23, text: `ug mipuyo sa usa ka lungsod nga ginganlag Nazaret. Nahitabo kini aron matuman ang giingon sa mga propeta, “Siya pagailhong taga-Nazaret.”`},
                    ]
                }
            ]
        };

        // Mateo 3
        sampleVerses["Mateo"][2] = {
            chapter: 3,
            sections: [
                {
                    title: `Ang Pagwali ni Juan nga Magbubunyag <br> (Mar. 1:1-8; Luc. 3:1-18; Juan 1:19-28)`,
                    verses: [
                        {verse: 1, text: "Niadtong panahona miadto si Juan nga Magbubunyag didto sa dapit nga awaaw sa Judea ug nagwali"},
                        {verse: 2, text: `nga nag-ingon, “Hinulsoli ug biyai ang inyong mga sala kay hapit na maghari ang Dios.” `},
                        {verse: 3, text: `Si Juan mao ang gihisgotan ni propeta Isaias sa iyang pag-ingon, “May nagsinggit didto sa kamingawan: ‘Andama ninyo ang dalan alang sa Ginoo, himoang tul-id ang iyang agianan!’ ”`},
                        {verse: 4, text: `Ang bisti ni Juan hinimo gikan sa balhibo sa kamelyo ug nagbakos siyag panit ug ang iyang kan-onon dulon ug dugos.`},
                        {verse: 5, text: `Unya nangadto kaniya ang mga tawo gikan sa Jerusalem ug tibuok lalawigan sa Judea ug gikan sa kayutaan nga kasikbit sa Suba sa Jordan.`},
                        {verse: 6, text: `Gisugid nila ang ilang mga sala ug gibunyagan niya sila didto sa Suba sa Jordan.`},
                        {verse: 7, text: `Sa pagkakita ni Juan nga may daghang Pariseo ug Saduseo nga nanuol kaniya aron magpabunyag, giingnan niya sila, “Mga bitin! Kinsay nagsulti kaninyo nga makalikay kamo sa taliabot nga paghukom sa Dios?`},
                        {verse: 8, text: `Ipakita ninyo nga naghinulsol na kamo sa inyong mga sala pinaagi sa inyong buhat. `},
                        {verse: 9, text: `Nagdahom ba kamo nga kay kaliwat kamo ni Abraham maluwas kamo? Sultihan ko kamo: makahimo ang Dios pagkuha niining mga bato aron himoong mga anak ni Abraham! `},
                        {verse: 10, text: `Gani giandam na sa Dios ang atsa aron iputol sa mga kahoy diha sa mga gamot. Ang tanang kahoy nga dili mamunga ug maayong bunga putlon ug isugnod sa kalayo. `},
                        {verse: 11, text: `Ako nagbunyag kaninyo pinaagi sa tubig aron pagpakita nga naghinulsol ug mibiya kamo sa inyong mga sala. Apan ang moanhi sunod kanako magbunyag kaninyo pinaagi sa Espiritu Santo ug sa kalayo. Siya mas gamhanan kay kanako ug dili ako angay bisan gani sa pagbitbit sa iyang sandalyas. `},
                        {verse: 12, text: `Naggiok siya ug nagpalid aron lainon ang uhot gikan sa mga lugas. Tigumon niya ang mga lugas didto sa kamalig apan ang mga uhot iyang sunogon sa kalayo nga dili mapalong!”`},
                    ]
                },
                {
                    title: `Gibunyagan si Jesus <br>(Mar. 1:9-11; Luc. 3:21-22)`,
                    verses: [
                        {verse: 13, text: `Unya gikan sa lalawigan sa Galilea miadto si Jesus sa Jordan aron magpabunyag kang Juan. `},
                        {verse: 14, text: `Dili unta mobunyag kaniya si Juan nga miingon, “Ako ang angay nimong bunyagan apan nganong ako na man hinuon ang mobunyag kanimo?”`},
                        {verse: 15, text: `Apan gitubag siya ni Jesus, “Pasagdi lang nga mahitabo kini kay niining paagiha makatuman kita sa tanan nga gisugo sa Dios.” Busa miuyon si Juan.`},
                        {verse: 16, text: `Human gayod sa pagbunyag kang Jesus, mikawas siya sa tubig. Unya naabli ang langit ug nakita niya ang Espiritu sa Dios nga mipaubos daw salampati ug mitugdon kaniya. `},
                        {verse: 17, text: `Ug unya may tingog gikan sa langit nga nag-ingon, “Kini mao ang pinangga kong Anak nga nakalipay kanako pag-ayo.”`},
                    ]
                }
            ]
        };

        // Mateo 4
        sampleVerses["Mateo"][3] = {
            chapter: 4,
            sections: [
                {
                    title: `Gitintal si Jesus <br> (Mar. 1:12-13; Luc. 4:1-13)`,
                    verses : [
                        {verse: 1, text: `Unya gidala si Jesus sa Espiritu Santo ngadto sa dapit nga awaaw aron tintalon sa Yawa. `},
                        {verse: 2, text: `Didto nagpuasa si Jesus sulod sa 40 ka adlaw ug 40 ka gabii ug unya gigutom siya. `},
                        {verse: 3, text: `Ug miduol kaniya ang Yawa nga nag-ingon, “Anak ka man kaha sa Dios, himoang pan kining mga bato.”`},
                        {verse: 4, text: `Mitubag si Jesus, “Ang Kasulatan nag-ingon, ‘Ang tawo mabuhi dili sa pan lamang, kondili sa matag pulong usab nga isulti sa Dios.’ ”`},
                        {verse: 5, text: `Unya gidala si Jesus sa Yawa ngadto sa Jerusalem, ang Balaang Siyudad, ug gipatindog siya sa kinatas-ang bahin sa Templo `},
                        {verse: 6, text: `ug giingnan, “Anak ka man kaha sa Dios, ambak ngadto sa ubos kay nag-ingon man ang Kasulatan:<br>
                       ‘Ang Dios magsugo sa iyang mga anghel pagbantay kanimo;
                        sapnayon ka nila aron dili maigo sa bato bisan gani ang imong tiil.’ ”`},
                        {verse: 7, text: `Si Jesus mitubag, “Apan nag-ingon usab ang Kasulatan, ‘Ayaw tintala ang Ginoo nga imong Dios.’ ”`},
                        {verse: 8, text: `Unya gidala si Jesus sa Yawa ngadto sa usa ka habog kaayong bukid ug gipakita kaniya ang tanang gingharian sa kalibotan ug ang ilang kaanindot. `},
                        {verse: 9, text: `Ang Yawa miingon, “Ihatag ko kanimo kining tanan kon moluhod ka ug mosimba kanako.”`},
                        {verse: 10, text: `Mitubag si Jesus, “Pahawa, Satanas! Ang Kasulatan nag-ingon, ‘Simbaha ang Ginoo nga imong Dios ug siya lamang ang alagari!’ ”`},
                        {verse: 11, text: `Busa ang Yawa mibiya kaniya ug unya nangabot ang mga anghel ug miatiman kaniya.`},
                    ]
                },
                {
                    title: `Nagsugod si Jesus sa Iyang Buluhaton didto sa Galilea <br> (Mar. 1:14-15; Luc. 4:14-15)`,
                    verses : [
                        {verse: 12, text: `Sa pagkadungog ni Jesus nga gibilanggo si Juan, mibalik siya sa lalawigan sa Galilea. `},
                        {verse: 13, text: `Mibiya siya sa Nazaret ug didto mipuyo sa Capernaum, usa ka lungsod daplin sa Lanaw sa Galilea, sa kayutaan sa Zabulon ug Neftali. `},
                        {verse: 14, text: `Sa ingon natuman ang gisulti ni propeta Isaias:`},
                        {verse: 15, text: `“Yuta sa Zabulon ug yuta sa Neftali, <br>
    agianan padulong sa dagat, tabok sa Jordan,<br>
    Galilea, dapit sa mga dili Judio!`},
                        {verse: 16, text: `Ang mga tawo nga nagpuyo sa kangitngit nakakitag dakong kahayag!<br>
    Kanila nga nagpuyo sa mangitngit nga yuta sa kamatayon <br>
    midan-ag ang kahayag!”`},
                        {verse: 17, text: `Sukad niadto si Jesus misugod pagwali nga nag-ingon, “Hinulsoli ang inyong mga sala kay hapit na maghari ang Dios!”`},
                    ]
                }, {
                    title: `Gidapit ni Jesus ang Upat ka Mananagat <br> (Mar. 1:16-20; Luc. 5:1-11)`,
                    verses : [
                        {verse: 18, text: `Samtang naglakaw si Jesus daplin sa Lanaw sa Galilea, nakita niya ang duha ka magsoong mananagat nga namukot: si Simon nga ginganlag Pedro ug si Andres. `},
                        {verse: 19, text: `Si Jesus miingon kanila, “Kuyog kamo kanako ug tudloan ko kamo sa pagpanagat ug mga tawo.”`},
                        {verse: 20, text: `Dihadiha gibiyaan nila ang ilang mga pukot ug mikuyog kaniya.`},
                         {verse: 21, text: `Mipadayon siya paglakaw ug nakita niya ang laing duha ka magsoon, si Santiago ug si Juan nga mga anak ni Sebedeo. Didto sila sa ilang sakayan uban sa ilang amahan, nag-ayo sa ilang mga pukot. Gitawag sila ni Jesus `},
                          {verse: 22, text: `ug dihadiha gibiyaan nila ang ilang sakayan ug ang ilang amahan ug mikuyog sila kaniya.`},
                    ]
                }, {
                    title: `Nagwali ug Nag-ayo si Jesus <br> (Luc. 6:17-19)`,
                    verses: [
                          {verse: 23, text: `Unya gilibot ni Jesus ang tibuok Galilea ug nagtudlo siya sulod sa ilang mga sinagoga, nagwali sa Maayong Balita bahin sa paghari sa Dios ug nag-ayo sa mga masakiton. `},
                          {verse: 24, text: `Mikaylap sa tibuok lalawigan sa Siria ang iyang kabantog ug gidala sa mga tawo ngadto kaniya ang tanang nag-antos sa nagkalainlaing mga sakit ug mga balatian: mga giyawaan, mga patulon, mga paralitiko ug giayo ni Jesus silang tanan.`},
                          {verse: 25, text: `Misunod kaniya ang daghang mga tawo gikan sa Galilea, sa Decapolis, sa Jerusalem, sa Judea ug tabok sa Jordan.`},
                    ]
                }
            ]
        };

        // Mateo 5
        sampleVerses["Mateo"][4] = {
            chapter: 5,
            sections: [
                {
                    title: `Ang Wali ni Jesus didto sa Bungtod`,
                    verses : [
                        {verse: 1, text: `Sa pagkakita ni Jesus sa katawhan, mitungas siya sa bungtod ug milingkod didto. Unya mialirong kaniya ang iyang mga tinun-an `},
                        {verse: 2, text: `ug gitudloan niya sila niining mosunod:`}
                    ]
                },
                {
                    title: `Mga Tawong Bulahan <br> (Luc. 6:20-23)`,
                    verses: [
                        { verse: 3, text: `“Bulahan ang miila nga sila kabos sa mga butang nga espirituhanon kay maangkon nila ang paghari sa Dios!` },
                        { verse: 4, text: `Bulahan ang nagsubo kay lipayon sila sa Dios!` },
                        { verse: 5, text: `“Bulahan ang mapaubsanon kay maila ang tibuok yuta.` },
                        { verse: 6, text: `“Bulahan kadtong naningkamot pagtuman sa kabubut-on sa Dios kay tagbawon niya sila!` },
                        { verse: 7, text: `“Bulahan ang maluluy-on kay kaluy-an sila sa Dios!` },
                        { verse: 8, text: `“Bulahan ang putli ug kasingkasing kay makakita sila sa Dios!` },
                        { verse: 9, text: `“Bulahan ang naningkamot nga managdait ang katawhan kay isipon sila sa Dios nga iyang mga anak!` },
                        { verse: 10, text: `“Bulahan ang gilutos tungod sa ilang pagsunod sa kabubut-on sa Dios kay mahisakop sila sa paghari sa Dios!` },
                        { verse: 11, text: `“Bulahan kamo kon biaybiayon ug daugdaogon sa mga tawo ug butangbutangan sa tanang matang sa kadaotan tungod sa inyong pagsunod kanako.` },
                        { verse: 12, text: `Paglipay ug pagmaya kamo kay dako ang ganti nga gitagana alang kaninyo didto sa langit. Giingon usab nila niini pagpasipala ang mga propeta nga nahiuna kaninyo.` }
                    ]
                },
                {
                    title: `Asin ug Kahayag <br> (Mar. 9:50; Luc. 14:34-35)`,
                    verses: [
                        { verse: 13, text: `“Kamo ang asin sa katawhan. Kon ang asin kawad-an sa iyang kaparat, unsaon pa man pagpabalik sa kaparat niini? Kini wala nay kapuslanan ug angay na lamang ilabay unya tunobtunoban sa mga tawo.` },
                        { verse: 14, text: `“Kamo ang kahayag sa kalibotan. Ang siyudad nga nahimutang sa bungtod dili gayod matago. ` },
                        { verse: 15, text: `Walay magdagkot ug suga aron lamang isulod sa gantangan kondili ibutang gayod kini sa tungtonganan aron maghatag ug kahayag sa tanan nga anaa sa balay.` },
                        { verse: 16, text: `Busa sa samang paagi ipadan-ag ang inyong kahayag atubangan sa mga tawo aron makita nila ang inyong mga maayong buhat ug daygon nila ang inyong Amahan nga atua sa langit.` }
                    ]
                },
                {
                    title: `Pagtulon-an mahitungod sa Balaod`,
                    verses: [
                        { verse: 17, text: `“Ayaw ninyo hunahunaa nga mianhi ako aron pagsalikway sa Balaod ni Moises ug sa mga pagtulon-an sa mga propeta. Wala ako moanhi aron pagsalikway niini kondili aron pagtuman hinuon sa hustong kahulogan. ` },
                        { verse: 18, text: `Timan-i kini: samtang anaa pa ang langit ug ang yuta, bisan ang labing gamay nga kudlit o ang labing diyutay nga bahin sa Balaod, dili gayod mahanaw hangtod matuman ang tanan. ` },
                        { verse: 19, text: `Busa ang dili magtuman bisan sa labing gamayng bahin sa kasugoan ug magtudlo sa uban sa pagbuhat sa ingon, mahimong labing ubos sa Gingharian sa langit. Apan ang magtuman sa Balaod ug magtudlo sa uban sa pagbuhat sa ingon mahimong dako sa Gingharian sa langit.` },
                        { verse: 20, text: `Busa sultihan ko kamo nga dili kamo makasulod sa Gingharian sa langit kon ang inyong pagtuman sa kabubut-on sa Dios sama lamang sa gihimo sa mga magtutudlo sa Balaod ug sa mga Pariseo.` }
                    ]
                },
                {
                    title: `Pagtulon-an mahitungod sa Kasuko`,
                    verses: [
                        { verse: 21, text: "Nasayod kamo nga ang mga tawo giingnan kaniadto, ‘Ayaw pagpatay; ang magpatay manubag niini sa hukmanan.’" },
                        { verse: 22, text: "Apan karon sultihan ko kamo nga ang masuko sa iyang isigkatawo dad-on ngadto sa maghuhukom ug ang maghingalag kuwanggol sa iyang isigkatawo manubag niini ngadto sa Labawng Hukmanan ug bisan kinsa nga moingon nga buang ang iyang isigkatawo malagmit nga mahiagom sa kalayo sa impirno." },
                        { verse: 23, text: "Busa inigdala na nimo sa imong halad ngadto sa halaran unya didto mahinumdoman mo nga nasilo kanimo ang imong isigkatawo," },
                        { verse: 24, text: "Biyai ang imong halad atubangan sa halaran ug adtoa dayon ang imong isigkatawo ug pakig-uli una kaniya. Unya balik sa halaran ug padayona ang imong paghalad sa Dios." },
                        { verse: 25, text: "Kon may mokiha kanimo ug dad-on ka niya sa hukmanan, pakighusay dayon kaniya samtang may panahon pa ug wala pa kamo moabot didto kay kon moabot na kamo sa hukmanan, itugyan ka niya sa huwes ug ang huwes motugyan kanimo sa polis ug bilanggoon ka niya." },
                        { verse: 26, text: "Ug magpabilin ka didto hangtod nga mabayran nimo ang tanan mong multa." }
                    ]
                }, {
                    title: `Pagtulon-an mahitungod sa Pagpanapaw`,
                    verses: [
                        { verse: 27, text: "Nakadungog kamo nga giingon kaniadto, ‘Ayaw panapaw.’" },
                        { verse: 28, text: "Apan karon sultihan ko kamo nga bisan kinsay motan-aw sa usa ka babaye uban sa daotang tinguha nakapanapaw na ngadto kaniya sulod sa iyang kasingkasing." },
                        { verse: 29, text: "Busa kon ang imong tuong mata makaangin kanimo sa pagpakasala, lugita kini ug ilabay kay mas maayo pa nga kawad-an ang imong lawas ug usa ka bahin kay sa itambog ang tibuok mong lawas ngadto sa impirno." },
                        { verse: 30, text: "Kon ang imong tuong kamot makaangin kanimo sa pagpakasala, putla kini ug ilabay! Mas maayo pa nga kawad-an ka ug usa ka kamot kay sa itambog ang tibuok mong lawas ngadto sa impirno." }
                    ]
                }, {
                    title: `Pagtulon-an mahitungod sa Panagbulag <br>(Mat. 19:9; Mar. 10:11-12; Luc. 16:18)`,
                    verses: [
                        { verse: 31, text: "Giingon usab kaniadto, ‘Ang makigbulag sa iyang asawa kinahanglan nga maghatag kaniya ug sinulat nga pahibalo sa pakigbulag.’" },
                        { verse: 32, text: "Apan karon sultihan ko kamo nga kinsa kadtong mobulag sa iyang asawa bisan wala magluib kaniya makasala kay siya man ang hinungdan sa pagpanapaw unya sa iyang asawa kon magminyo kini pag-usab. Bisan ang mangasawa kaniya makapanapaw usab." }
                    ]
                },
                {
                    title: `Pagtulon-an mahitungod sa Panaad`,
                    verses: [
                        { verse: 33, text: "Nakadungog usab kamo nga giingnan ang atong katigulangan kaniadto, ‘Ayaw pakyasa ang imong panaad kondili tumana ang imong gipanumpa ngadto sa Ginoo.’" },
                        { verse: 34, text: "Apan karon sultihan ko kamo: ayaw gayod panumpa kon mosaad ka; ayaw panumpa sa langit kay ang langit mao ang trono sa Dios" },
                        { verse: 35, text: "O sa yuta, kay ang yuta mao ang iyang tumbanan o sa Jerusalem kay kini mao ang siyudad sa halangdong Hari." },
                        { verse: 36, text: "Ayaw kamo panumpa bisan gani sa inyong ulo kay dili man kamo makapaputi o makapaitom sa usa ka lugas nga buhok." },
                        { verse: 37, text: "Ingna lamang ‘Oo’ kon ‘oo’ o ‘Dili’ kon ‘dili’, kay kon may mosobra pa niini, kana gikan na sa Yawa." }
                    ]
                }, {
                    title: `Pagtulon-an mahitungod sa Panimalos <br>(Luc. 6:29-30)`,
                    verses: [
                        { verse: 38, text: "Nakadungog kamo sa giingon kaniadto, ‘Mata bayrag mata ug ngipon bayrag ngipon.’" },
                        { verse: 39, text: "Apan karon sultihan ko kamo: ayawg balosi ang nagbuhat kaninyog daotan. Kon sagpaon ang imong tuong aping, ipasagpa usab ang wala." },
                        { verse: 40, text: "Kon may mokiha kanimo aron mailog niya ang imong sapot nga pang-ilalom, ihatag usab kaniya ang imong sapot nga pang-ibabaw." },
                        { verse: 41, text: "Kon may mamugos sa pagpakuyog kanimo ug balig usa ka kilometro, himoa kining duha ka kilometro." },
                        { verse: 42, text: "Kon may mohangyo kanimo ug usa ka butang, ihatag kini kaniya ug ayaw balibari ang buot mohulam kanimo." }
                    ]
                }, {
                    title: `Gugma alang sa mga Kaaway <br> (Luc. 6:27-28, 32-36)`,
                    verses: [
                        { verse: 43, text: "Nakadungog kamo nga giingon kaniadto, ‘Higugmaa ang imong mga higala ug dumti ang imong mga kaaway.’" },
                        { verse: 44, text: "Apan karon sultihan ko kamo: higugmaa ang inyong mga kaaway ug pag-ampo kamo alang sa mga tawo nga nagpasipala kaninyo" },
                        { verse: 45, text: "Aron makita nga kamo matuod nga mga anak sa inyong Amahan nga atua sa langit. Kay siya, sa walay pagpili, nagpasidlak sa iyang adlaw ug naghatag ug ulan ngadto sa mga matarong ug sa mga makasasala." },
                        { verse: 46, text: "Nganong magpaabot man kamo ug ganti gikan sa Dios kon ang inyong gihigugma mao lamang kadtong mga tawo nga nahigugma kaninyo? Dili ba bisan gani ang mga kobrador sa buhis nagbuhat man niana?" },
                        { verse: 47, text: "Kon kamo mahigalaon ngadto lamang sa inyong mga higala, unsa may nahimo ninyo nga labaw pa sa gihimo sa kadaghanan? Dili ba bisan gani ang mga tawo nga wala moila sa Dios nagbuhat man niana?" },
                        { verse: 48, text: "Kinahanglang magmahingpit kamo ingon nga hingpit ang inyong Amahan nga atua sa langit." }
                    ]
                }
            ]
        };

        // Mateo 6
        sampleVerses["Mateo"][5] = {
            chapter: 6,
            sections: [
                {
                    title: `Pagtulon-an mahitungod sa Buhat sa Kaluoy`,
                    verses: [
                          { verse: 1, text: `“Matngoni nga dili ninyo ipasundayag ang inyong mga maayong buhat. Kon ingnon ninyo niana, dili kamo makadawat ug ganti gikan sa inyong Amahan nga atua sa langit.` },
                          { verse: 2, text: `“Busa kon mohatag kamog hinabang, ayaw kini ipanghambog sama sa gibuhat sa mga tigpakaaron-ingnon sulod sa mga sinagoga ug sa kadalanan. Nagbuhat sila niini aron daygon sa mga tawo. Apan sultihan ko kamo nga ang naghimo niini nakadawat na sa ilang ganti.` },
                          { verse: 3, text: `Kon pananglit motabang ka sa usa ka tawong kabos, tabangi siya sa paagi nga bisan gani ang labing suod kanimo dili masayod niini.` },
                         { verse: 4, text: `Himoa kini sa tago ug ang imong Amahan nga nagtan-aw sa imong gibuhat moganti kanimo.` }
]

                }, 
                {
                    title: `Pagtulon-an mahitungod sa Pag-ampo <br> (Luc. 11:2-4)`, 
                        verses: [
                        { verse: 5, text: `“Ug kon mag-ampo ka, ayaw buhata ang gihimo sa mga tigpakaaron-ingnon. Gusto silang mag-ampo nga magtindog sulod sa mga sinagoga ug diha sa mga eskina sa kadalanan aron makita sila sa mga tawo. Sultihan ko kamo nga nakadawat na sila sa ilang ganti.` },
                        { verse: 6, text: `Apan kon mag-ampo ka, sulod ngadto sa imong kuwarto unya sirhi ang pultahan ug pag-ampo ngadto sa imong Amahan nga dili makita. Ug gantihan ka sa imong Amahan nga nagtan-aw sa imong gibuhat sa tago.` },
                        { verse: 7, text: `“Sa  inyong pag-ampo, ayaw paggamit ug daghang pulong nga walay kahulogan sama sa gibuhat sa mga dili magtutuo kinsa naghunahuna nga tubagon sila tungod sa taas nilang pag-ampo. ` },
                        { verse: 8, text: `Ayaw sunda ang gihimo nila kay ang inyong Amahan nahibalo nang daan sa inyong gikinahanglan bisan gani sa dili pa kamo mangayo kaniya. ` },
                        { verse: 9, text: `Busa, ingna hinuon niini pag-ampo: <br>‘Amahan namo nga anaa sa langit, <br>balaanon ang imong ngalan;` },
                        { verse: 10, text: `maghari ka kanamo <br> ug tumanon ang imong pagbuot dinhi sa yuta <br>sama nga gituman kini didto sa langit.` },
                        { verse: 11, text: `Ihatag kanamo ang pagkaon<br>nga among gikinahanglan karong adlawa;` },
                        { verse: 12, text: `ug pasayloa kami sa among mga sala sama nga kami nagpasaylo sa mga nakasala kanamo.` },
                        { verse: 13, text: `` },
                        { verse: 14, text: `` },
                        { verse: 15, text: `` }
]

                },
                {
                    title: "Pagtulon-an mahitungod sa Pagpuasa",
                      verses: [
                        { verse: 16, text: "Sa inyong pagpuasa ayaw ipakita nga nagsubo kamo sama sa gibuhat sa mga tigpakaaron-ingnon. Gipasundayag nila ang gutom nilang panagway aron mailhan gayod nga nagpuasa sila. Sultihan ko kamo nga nakadawat na sila sa ilang ganti." },
                        { verse: 17, text: "Kon magpuasa ka, panghilam-os ug panudlay" },
                         { verse: 18, text: "Aron walay mahibalo nga nagpuasa ka gawas sa imong Amahan nga dili makita kinsa nagtan-aw sa imong gibuhat sa tago. Ug gantihan ka niya." }
                         ]
                }, {
                    title: `Ang Suga sa Lawas <br> (Luc. 11:34-36)`, 
                   verses: [
               { verse: 22, text: "Ang mata maoy suga sa lawas. Kon maayo ang imong mata, malukop sa kahayag ang tibuok mong lawas." },
                { verse: 23, text: "Apan kon daotan ang imong mata, malukop sa kangitngit ang imong lawas. Busa kon ang kahayag nga anaa kanimo kangitngit diay, unsa na lang kaha ang imong kangitngit!" }
]
                }, 
                {
                    title: `Ang Dios ug ang Bahandi <br> (Luc. 16:13; 12:22-31)`,
                verses: [
                { verse: 24, text: "Dili mahimo nga ang usa ka tawo magpaulipon sa duha ka agalon kay mahitabo gayod nga iyang dumtan ang usa ug ang usa iyang higugmaon o unongan niya ang usa ug ang usa iyang tamayon. Dili kamo makapaulipon sa Dios ug sa salapi." },
                { verse: 25, text: "Tungod niini sultihan ko kamo: ayaw kabalaka unsay inyong kan-on ug imnon aron kamo mabuhi o sa inyong ibisti. Dili ba mas bililhon pa man ang kinabuhi kay sa pagkaon ug ang lawas kay sa bisti?" },
                { verse: 26, text: "Tan-awa ang mga langgam: wala sila magpugas ug mag-ani aron ilang tigumon sa kamalig. Apan giatiman sila sa inyong Amahan nga atua sa langit! Dili ba mas bililhon pa man kamo kay sa mga langgam?" },
                { verse: 27, text: "Kinsa man kaninyo ang makadugang sa gitas-on sa inyong kinabuhi pinaagi sa pagkabalaka?" },
                { verse: 28, text: "Ug nganong mabalaka man kamo sa inyong ibisti? Tan-awa giunsa pagtubo sa mga bulak sa kaumahan. Wala sila maghago aron makabisti." },
                { verse: 29, text: "Apan sultihan ko kamo nga bisan gani si Solomon nga dato kaayo walay sapot nga sama katahom sa usa niining mga bulaka." },
                { verse: 30, text: "Kon gibistihan sa Dios ang mga balili nga buhi karon apan sa sunod adlaw sunogon ra, kamo pa kahay dili bistihan? Pagkagamay ninyog pagtuo!" },
                { verse: 31, text: "Busa ayaw kamo kabalaka kon asa kamog kan-on o imnon o ibisti." },
                { verse: 32, text: "(Kining mga butanga maoy gitinguha kanunay sa mga dili magtutuo.) Ang inyong Amahan nga atua sa langit nasayod nga nagkinahanglan kamo niining mga butanga." },
                { verse: 33, text: "Apan labaw sa tanan, paharia ninyo ang Dios ug pagkinabuhi kamo uyon sa iyang kabubut-on ug ang ubang mga butang ihatag ra niya kaninyo." },
                { verse: 34, text: "Busa ayaw kabalak-i ang mosunod nga adlaw kay may kaugalingon kining suliran. Ayaw na pun-i ang suliran sa matag adlaw." }
]
                }
            ]
        };

        sampleVerses["Mateo"][6] = {
            chapter: 7,
            sections: [
                {
                    title: `Pagtulon-an mahitungod sa Paghukom <br> (Luc. 6:37-38, 41-42)`, 
                   verses: [
                        { verse: 1, text: "Ayaw ninyo hukmi ang uban aron dili kamo hukman sa Dios." },
                        { verse: 2, text: "Kay hukman kamo sa Dios sama sa paghukom ninyo sa uban ug sukdon kamo niya sa samang sukdanan nga inyong gigamit sa uban." },
                        { verse: 3, text: "Nganong nakita man nimo ang puling sa imong isigkatawo apan wala ka magtagad sa troso diha sa imong mata?" },
                        { verse: 4, text: "Unsaon man nimo pag-ingon sa imong isigkatawo, ‘Kuhaon ko kanang imong puling’ nga naa may troso sa imong mata?" },
                        { verse: 5, text: "Tigpakaaron-ingnon! Kuhaa una ang troso nga anaa sa imong mata aron makakita ka pag-ayo ug makuha mo ang puling sa imong isigkatawo." },
                        { verse: 6, text: "Ayaw ihatag ang mga butang nga balaan ngadto sa mga iro kay tingalig mosumbalik sila ug mopaak kaninyo. Ug ayaw iitsa ang mga perlas ngadto sa mga baboy kay kini tamaktamakan lamang nila." }
                    ]
                },
                {
                    title: `Pangayo, Pangita, Pagtuktok <br> (Luc. 11:9-13)`,
                        verses: [
                        { verse: 7, text: "Pangayo ug kamo hatagan; pangita ug kamo makakaplag; panuktok ug ang pultahan ablihan alang kaninyo." },
                        { verse: 8, text: "Kay ang mangayo hatagan ug ang mangita makakaplag ug ang manuktok ablihan." },
                        { verse: 9, text: "Kamong mga amahan, hatagan ba ninyog bato ang inyong anak kon mangayo siyag pan?" },
                        { verse: 10, text: "O hatagan ba ninyog bitin kon mangayo siyag isda?" },
                        { verse: 11, text: "Kon kamo nga mga daotan mahibalong mohatag ug maayong butang ngadto sa inyong mga anak, unsa pa kaha ang inyong Amahan nga atua sa langit? Mohatag gayod siya sa mga maayong butang niadtong mangayo kaniya!" },
                        { verse: 12, text: "Buhata ngadto sa uban ang buot ninyo nga ilang buhaton nganha kaninyo: kini ang kahulogan sa Balaod ni Moises ug sa pagtulon-an sa mga propeta." }
                        ]
                }, 
                {
                    title: `Ang Sigpit nga Ganghaan <br> (Luc. 13:24)`,
                    verses: [
                        { verse: 13, text: "Sa inyong pagpangita sa dalan sa kinabuhi, sulod kamo sa sigpit nga ganghaan kay ang lapad nga ganghaan ug ang sayon nga dalan paingon man sa kalaglagan. Mao kini ang gisubay sa kadaghanan." },
                        { verse: 14, text: "Apan masigpit ang ganghaan ug malisod ang dalan paingon sa kinabuhing dayon ug diyutay ra ang nakakaplag niini." }
                    ]
                },
                {
                    title: `Ang Punoan Maila sa Iyang Bunga <br> (Luc. 6:43-44)`,
                    verses: [
                            { verse: 15, text: "Pagbantay kamo sa mga mini nga propeta. Moanha sila kaninyo nga morag mga karnero apan ang tinuod sama sila sa bangis nga mga lobo." },
                            { verse: 16, text: "Mailhan ninyo sila sa ilang binuhatan kay ang sampinit dili man mamungag ubas ug ang kadyapa dili usab mamungag igos." },
                            { verse: 17, text: "Ang punoan nga walay sakit mamungag maayong bunga apan ang punoan nga masakiton dili mamunga ug maayong bunga." },
                            { verse: 18, text: "Dili makabungag walay pulos nga bunga ang punoan nga walay sakit sama nga ang masakiton nga punoan dili makabungag maayong bunga." },
                            { verse: 19, text: "Ang matag punoan nga dili mamungag maayong bunga putlon ug isugnod sa kalayo." },
                            { verse: 20, text: "Busa mailhan ninyo ang mga mini nga propeta pinaagi sa ilang binuhatan." }
                        ]
                },
                {
                    title: `Wala Ako Makaila Kaninyo (Luc. 13:25-27)`,
                                verses: [
                                { verse: 21, text: "Dili ang tanan nga magtawag kanakog ‘Ginoo, Ginoo,’ makasulod sa Gingharian sa langit kondili kadto lamang nagtuman sa kabubut-on sa akong Amahan nga atua sa langit." },
                                { verse: 22, text: "Niadtong adlawa daghan unya ang moingon kanako, ‘Ginoo, dili ba nagsangyaw man kami sa mensahe sa Dios, naghingilin sa mga yawa ug naghimog daghang mga milagro pinaagi sa imong ngalan?’" },
                                { verse: 23, text: "Apan ingnon ko unya sila, ‘Wala ako makaila kaninyo. Mga makasasala, pahawa kamo!’" }
                    ]
                },
                {
                    title: `Ang Duha ka Tawo nga Nagbuhat ug Balay <br> (Luc. 6:47-49)`,
                            verses: [
                            { verse: 24, text: "Busa ang tanan nga nakadungog sa akong gisulti ug nagtuman niini mahisama sa usa ka maalamong tawo nga nagtukod sa iyang balay diha sa bato." },
                            { verse: 25, text: "Sa dihang mibundak ang ulan ug mibaha ang mga suba ug ang hangin mihapak ug mikusokuso niadtong balaya, wala kini matumba kay natukod man diha sa bato." },
                            { verse: 26, text: "Apan ang tanan nga nakadungog sa akong gisulti ug dili motuman niini, mahisama sa usa ka tawong buangbuang nga nagtukod sa iyang balay diha sa balas." },
                            { verse: 27, text: "Sa dihang mibundak ang ulan ug mibaha ug ang hangin mihapak ug mikusokuso niadtong balaya, natumba kini ug nagun-ob!" }
                        ]

                },
                {
                    title: `Ang Awtoridad ni Jesus`,
                    verses: [
    { verse: 28, text: "Sa pagkahuman ni Jesus ug sulti niining mga butanga, ang mga tawo natingala sa iyang pagtulon-an." },
    { verse: 29, text: "Lahi siya sa ilang mga magtutudlo sa Balaod kay ang iyang pagtudlo inubanan man sa awtoridad." }
]
                }
        ]
        }


        sampleVerses["Mateo"][7] = {
            chapter: 8, 
            sections: [
                {
                    title: `Giayo ni Jesus ang Usa ka Sanlahon <br> (Mar. 1:40-45; Luc. 5:12-16)`,
                verses: [
                { verse: 1, text: "Milugsong si Jesus gikan sa bungtod ug misunod kaniya ang bagang panon sa katawhan." },
                { verse: 2, text: "Unya miduol kaniya ang usa ka sanlahon ug miluhod sa iyang atubangan nga nag-ingon, “Sir, kon gusto nimo makahimo ka paghinlo kanako.”" },
                { verse: 3, text: "Gihikap siya ni Jesus ug giingnan, “Gusto ko. Mamaayo ka!” Ug dihadiha naayo siya." },
                { verse: 4, text: "Unya miingon si Jesus kaniya, “Pamati! Ayaw kinig isaba kang bisan kinsa. Adtoa hinuon dayon ang pari ug ipakita ang imong kaugalingon kaniya unya paghalad sumala sa gisugo ni Moises aron pagmatuod nga naayo ka na.”" }
                ]
                },
                {
                    title: `Giayo ni Jesus ang Sulugoon sa Usa ka Opisyal nga Romanhon <br> (Luc. 7:1-10)`,
                    
                verses: [
                { verse: 5, text: "Sa pagsulod ni Jesus sa Capernaum, gitagbo siya sa usa ka kapitan sa kasundalohang Romanhon nga nagpakiluoy:" },
                { verse: 6, text: "“Sir, ang akong sulugoon atua sa akong balay naghigda, dili makalihok ug nag-antos pag-ayo.”" },
                { verse: 7, text: "Si Jesus miingon, “Moadto ako ug ayohon ko siya.”" },
                { verse: 8, text: "Ang opisyal mitubag, “Ayaw lang pag-adto, Sir, kay dili ako angay nga mopadayon kanimo sa akong balay. Isulti lang ug mamaayo na ang akong sulugoon." },
                { verse: 9, text: "Ako mismo ubos sa pagbuot sa labawng mga opisyal ug aduna akoy mga sundalo nga ubos sa akong pagmando. Kon sugoon nako ang usa kanila sa paglakaw, molakaw siya ug kon tawgon nako ang usa, moduol siya ug kon sugoon ko ang akong ulipon sa pagbuhat sa bisan unsa, motuman siya.”" },
                { verse: 10, text: "Natingala si Jesus sa iyang pagkabati niini ug miingon siya sa mga tawo nga mikuyog kaniya, “Sultihan ko kamo nga bisan dinhi sa Israel wala pa akoy nakitang tawo nga dunay pagtuo nga sama kadako niini.”" },
                { verse: 11, text: "“Hinumdomi kini: daghan ang mangabot gikan sa sidlakan ug sa kasadpan ug makigsalo kang Abraham, kang Isaac ug kang Jacob didto sa Gingharian sa langit.”" },
                { verse: 12, text: "“Apan sila nga mao untay makaambit diha sa Gingharian itambog hinuon ngadto sa kangitngitan diin maghilak sila ug magkagot ang ilang ngipon.”" },
                { verse: 13, text: "Ug miingon si Jesus sa opisyal, “Pauli sa inyo ug mahitabo ang imong gituohan.” Ug ang sulugoon sa opisyal naayo niadtong taknaa." }
               ]
                    
                },{
                    title: `Giayo ni Jesus ang Daghang mga Tawo <br> (Mar. 1:29-34; Luc. 4:38-41)`,
                    verses: [
                { verse: 14, text: "Unya miadto si Jesus sa balay ni Pedro ug didto nakita niya ang naghigdang ugangang babaye ni Pedro nga gihilantan." },
                { verse: 15, text: "Gihikap niya ang kamot sa masakiton ug gihuwasan kini sa hilanat, mibangon ug misilbi kaniya." },
                { verse: 16, text: "Sa pagsalop na sa adlaw, gidala sa mga tawo ngadto kang Jesus ang daghang mga giyawaan. Gipagula ni Jesus ang daotang mga espiritu pinaagi lamang sa pulong ug giayo niya ang tanang masakiton." },
                { verse: 17, text: "Gihimo niya kini aron matuman ang giingon ni propeta Isaias, “Siya gayod maoy nag-ayo sa atong mga balatian ug mga sakit.”" }
            ]
                }, {
                    title: `Ang mga Tawo nga Buot Unta Mosunod kang Jesus <br> (Luc. 9:57-62)`,
                   verses: [
                { verse: 18, text: "Sa pagkakita ni Jesus sa daghan kaayong tawo nga nag-alirong kaniya, miingon siya sa iyang mga tinun-an, “Manabok kita sa lanaw.”" },
                { verse: 19, text: "Unya may usa ka magtutudlo sa Balaod nga miduol kaniya ug miingon, “Magtutudlo, andam ako sa pagkuyog kanimo bisag asa ka moadto.”" },
                { verse: 20, text: "Si Jesus mitubag kaniya, “Ang mga milo may mga tagoanan ug ang mga langgam may mga salag apan ang Anak sa Tawo walay dapit nga kapahulayan.”" },
                { verse: 21, text: "Ug may laing tinun-an nga miingon, “Ginoo, mopauli una ako aron paglubong sa akong amahan.”" },
                { verse: 22, text: "Si Jesus mitubag, “Sunod kanako ug pasagdi ang mga patay nga maoy molubong sa ilang mga minatay.”" }
            ]
                }, {
                    title: `Gipahunong ni Jesus ang Unos <br> (Mar. 4:35-41; Luc. 8:22-25)`,
                    verses: [
                { verse: 23, text: "Misakay si Jesus sa usa ka sakayan ug mikuyog kaniya ang iyang mga tinun-an." },
                { verse: 24, text: "Unya mikalit paghuros ang usa ka kusog nga unos ug nasudlag tubig ang sakayan ug hapit kini malunod apan natulog si Jesus." },
                { verse: 25, text: "Miduol kaniya ang mga tinun-an ug gipukaw siya, “Ginoo, tabang! Malunod na ta!”" },
                { verse: 26, text: "Si Jesus mitubag, “Nganong nangahadlok man mo kaayo? Pagkagamay sa inyong pagsalig!” Unya mibangon siya ug gibadlong niya ang hangin ug ang mga balod ug mibanos ang kalinaw." },
                { verse: 27, text: "Natingala ang tanan ug miingon sila, “Unsa ba gyod diay kining tawhana nga bisan ang hangin ug ang mga balod mopatuo man kaniya?”" }
            ]
                },
                {
                    title: `Giayo ni Jesus ang Duha ka Tawo nga Giyawaan <br>(Mar. 5:1-20; Luc. 8:26-39)`,
                     verses: [
                { verse: 28, text: "Unya miabot si Jesus sa yuta sa Gadara didto sa tabok sa lanaw ug gitagbo siyag duha ka tawo nga nanggula gikan sa mga langub nga gihimong lubnganan. Giyawaan kining mga tawhana ug bangis kaayo busa walay nangahas pag-agi niadtong dalana." },
                { verse: 29, text: "Ug misinggit sila, “Anak sa Dios, unsa may imong tuyo kanamo? Mianhi ka ba aron pagsakit kanamo bisag dili pa panahon?”" },
                { verse: 30, text: "Dili layo didto, may usa ka panon sa mga baboy nga nanibsib." },
                { verse: 31, text: "Mihangyo ang mga yawa kang Jesus, “Kon abugon mo kami pasudla kami nianang panon sa mga baboy.”" },
                { verse: 32, text: "“Sigi, panulod kamo,” miingon si Jesus. Ug mipahawa ang mga yawa ug nanulod sa mga baboy. Unya ang tibuok panon sa baboy nanaglumba paingon sa pangpang ug nangambak sa lanaw ug nangalumos." },
                { verse: 33, text: "Ang mga nag-atiman sa mga baboy nanagan ngadto sa lungsod aron pagsugilon sa tanang nahitabo ingon man sa gidangatan sa mga giyawaan." },
                { verse: 34, text: "Tungod niini nanggawas ang tanang tawo niadtong lungsora aron pagsugat kang Jesus ug sa ilang pagkakita kaniya, nangaliyupo sila nga mobiya siya sa ilang dapit." }
            ]
                }
            ]
        }

        sampleVerses["Mateo"][8] = {
            chapter: 9, 
            sections: [
                {
                    title: `Giayo ni Jesus ang Usa ka Paralitiko <br> (Mar. 2:1-12; Luc. 5:17-26)`,

                    verses: [
                { verse: 1, text: "Misakay si Jesus sa usa ka sakayan ug mibalik pagtabok sa lanaw ug miabot sa iyang kaugalingong lungsod." },
                { verse: 2, text: "Unya may pipila ka tawo nga naghatod ngadto kaniya ug usa ka paralitiko nga gipahigda sa duyan. Nakita ni Jesus ang kadako sa ilang pagsalig kaniya ug miingon siya sa paralitiko, “Anak, ayaw kabalaka kay gipasaylo na ang imong mga sala.”" },
                { verse: 3, text: "Unya may pipila ka magtutudlo sa Balaod nga miingon sa ilang kaugalingon, “Nagpasipala sa Dios kining tawhana!”" },
                { verse: 4, text: "Nasayod si Jesus sa ilang gihunahuna ug miingon siya, “Nganong naghunahuna man kamog daotan?" },
                { verse: 5, text: "Hain may sayon isulti, ‘Gipasaylo na ang imong mga sala’ o ‘Bangon ug lakaw’?" },
                { verse: 6, text: "Karon ipakita ko kaninyo nga ang Anak sa Tawo may gahom dinhi sa yuta sa pagpasaylo sa mga sala.” Busa miingon siya sa paralitiko, “Bangon, dad-a ang imong gihigdaan ug pauli sa inyo!”" },
                { verse: 7, text: "Ug mibangon ang paralitiko ug mipauli." },
                { verse: 8, text: "Sa pagkakita sa mga tawo niini, nahingangha sila ug gidayeg nila ang Dios tungod sa paghatag niya niining gahoma ngadto sa mga tawo." }
            ]
                
                }, 
                {
                    title: `Ang Pagtawag kang Mateo <br> (Mar. 2:13-17; Luc. 5:27-32)`,
                    verses: [
                { verse: 9, text: "Unya mibiya si Jesus niadtong dapita ug samtang naglakaw siya, nakita niya ang usa ka kobrador sa buhis nga ginganlag Mateo nga naglingkod sulod sa iyang opisina. Miingon si Jesus kaniya, “Sunod kanako.” Mitindog si Mateo ug misunod kaniya." },
                { verse: 10, text: "Samtang nagkaon si Jesus didto sa balay, may daghang kobrador sa buhis ug mga makasasala nga miduol ug misalo kaniya ug sa iyang mga tinun-an." },
                { verse: 11, text: "Nakakita niini ang pipila ka Pariseo ug miingon sila sa iyang mga tinun-an, “Nganong nakigsalo man ang inyong magtutudlo sa mga kobrador sa buhis ug sa mga makasasala?”" },
                { verse: 12, text: "Nakadungog si Jesus kanila ug mitubag, “Ang mga tawo nga walay sakit wala magkinahanglag doktor kondili ang masakiton ra.”" },
                { verse: 13, text: "“Susiha ninyo kon unsay kahulogan niining bahina sa kasulatan nga nag-ingon, ‘Pagkamaluluy-on ang akong gusto, dili mga halad.’ Kay wala ako moanhi aron pagtawag sa mga matarong kondili sa mga makasasala.”" }
            ]
                },
                {
                    title: `Ang Pangutana bahin sa Pagpuasa <br> (Mar. 2:18-22; Luc. 5:33-39)`,
                    verses: [
                { verse: 14, text: "Unya miadto kang Jesus ang mga tinun-an ni Juan nga Magbubunyag ug nangutana, “Nganong kami ra man ug ang mga Pariseo ang nagpuasa kanunay apan ang imong mga tinun-an wala?”" },
                { verse: 15, text: "Si Jesus mitubag, “Naghunahuna ba diay kamo nga magsubo ang mga dinapit sa kombira sa kasal samtang ang pamanhonon uban pa kanila? Dili gayod! Apan moabot ang panahon nga ang pamanhonon kuhaon gikan kanila ug magpuasa na unya sila." },
                { verse: 16, text: "“Walay mogamit ug bag-ong panapton aron itapak sa daang bisti kay ang bag-ong panapton mokulo man ug modako hinuon ang gisi niini." },
                { verse: 17, text: "Ug walay tawo nga mogamit ug daang sudlanan nga panit aron sudlan sa bag-ong bino. Kay kon himoon niya kini, mabusbos ang sudlanan ug unya mausik ang bino ug madaot ang sudlanan. Apan ang bag-ong bino isulod hinuon sa mga sudlanan nga bag-o aron dili madaot ang bino ug ang mga sudlanan.”" }
            ]
                },
                {
                    title: `Ang Dalagita nga Anak sa Opisyal ug ang Babaye nga Mihikap sa Bisti ni Jesus <br>(Mar. 5:21-43; Luc. 8:40-56)`,
                    verses: [
                { verse: 18, text: "Samtang nagsulti si Jesus niini, miduol kaniya ang usa ka opisyal, miluhod sa iyang atubangan ug miingon, “Bag-o pa lang namatay ang akong anak nga babaye. Apan adtoa ug hikapa siya ug mabuhi siya.”" },
                { verse: 19, text: "Busa mitindog si Jesus ug misunod kaniya ug mikuyog ang iyang mga tinun-an." },
                { verse: 20, text: "Unya usa ka babaye nga nag-antos tungod sa iyang pagsigig dugo sulod na sa napulog-duha ka tuig miduol sa luyo ni Jesus ug miingon sa iyang kaugalingon, “Kon makahikap lang ako sa bisti ni Jesus, siguradong mamaayo ako.”" },
                { verse: 21, text: "Unya gihikap niya ang sidsid sa bisti ni Jesus." },
                { verse: 22, text: "Milingi si Jesus ug nakita niya ang babaye ug miingon siya, “Ayaw kabalaka, anak! Ang imong pagsalig maoy nakaayo kanimo.” Ug dihadiha dayon naayo ang babaye." },
                { verse: 23, text: "Unya misulod si Jesus sa balay sa opisyal. Sa pagkakita niya sa mga musikero alang sa paglubong ug sa mga tawo nga nagkaguliyang," },
                { verse: 24, text: "miingon siya, “Panggawas kamong tanan! Wala mamatay ang bata—natulog lang siya!” Tungod niini gibugalbugalan nila si Jesus." },
                { verse: 25, text: "Sa nakapanggawas na ang mga tawo, misulod si Jesus sa lawak sa bata ug gigunitan niya ang kamot niini ug mitindog ang bata." },
                { verse: 26, text: "Ug nabalita dayon kini sa tanang dapit niadtong yutaa." }
            ]
                },
                {
                    title: `Giayo ni Jesus ang Duha ka Buta`,
                     verses: [
                { verse: 27, text: "Unya mibiya si Jesus niadtong dapita ug samtang naglakaw siya, misunod kaniya ang duha ka buta nga lalaki. Naninggit sila, “Anak ni David, kaluy-i intawon kami!”" },
                { verse: 28, text: "Sa nakasulod na si Jesus sa balay, miduol kaniya ang duha ka buta ug nangutana siya kanila, “Nagtuo ba kamo nga makaayo ako kaninyo?” Sila mitubag, “Oo, Sir.”" },
                { verse: 29, text: "Unya gihikap ni Jesus ang ilang mga mata ug miingon, “Mamaayo kamo sumala sa inyong pagtuo!”" },
                { verse: 30, text: "Ug nakakita sila. Unya gipasidan-an sila ni Jesus nga dili gayod kini isaba kang bisan kinsa." },
                { verse: 31, text: "Apan milakaw sila ug gipamalita hinuon nila ang kabantog ni Jesus sa tanang dapit niadtong yutaa." }
            ]
                }, {
                    title: `Giayo ni Jesus ang Usa ka Amang`,
                    verses: [
                { verse: 32, text: "Sa pagpanglakaw na sa mga tawo, dihay pipila nga nagdala ngadto kang Jesus ug usa ka tawo nga naamang tungod kay gisudlan kinig yawa." },
                { verse: 33, text: "Sa nahinginlan na ang yawa, nakasulti ang tawo ug nahibulong ang tanan nga nag-ingon, “Wala pa gayoy nahitabo nga sama niini dinhi sa Israel!”" },
                { verse: 34, text: "Apan miingon ang mga Pariseo, “Ang pangulo sa mga yawa maoy naghatag kaniyag gahom sa pagpagula kanila.”" }
            ]
                }, {
                    title: `Naluoy si Jesus sa mga Tawo`,
                     verses: [
                { verse: 35, text: "Unya gilibot ni Jesus ang tanang kalungsoran ug kabaryohan. Nanudlo siya didto sa ilang mga sinagoga ug giwali niya ang Maayong Balita bahin sa paghari sa Dios. Giayo usab niya ang mga tawo sa tanan nilang balatian ug sakit." },
                { verse: 36, text: "Sa pagkakita niya sa daghang mga tawo, naluoy siya kanila kay nagluya man sila ug walay kadasig, morag mga karnero nga walay magbalantay." },
                { verse: 37, text: "Busa giingnan niya ang iyang mga tinun-an, “Daghan ang anihonon apan diyutay ra ang mangangani." },
                { verse: 38, text: "Busa pag-ampo kamo sa tag-iya sa anihonon aron magpadala siyag dugang pang mangangani.”" }
            ]
                }
            ]
        }

        sampleVerses["Mateo"][9] = {
            chapter: 10, 
            sections: [
                {
                    title: `Ang Napulog-Duha ka Apostoles <br> (Mar. 3:13-19; Luc. 6:12-16)`, 
                    verses: [
                { verse: 1, text: "Gitigom ni Jesus ang iyang napulog-duha ka tinun-an ug gihatagan niya silag gahom sa paghingilin sa mga daotang espiritu ug sa pag-ayo sa tanang sakit ug balatian." },
                { verse: 2, text: "Mao kini ang mga ngalan sa napulog-duha ka apostoles: una si Simon (nga ginganlag Pedro) ug ang iyang igsoon nga si Andres; si Santiago ug ang iyang igsoon nga si Juan, mga anak ni Sebedeo;" },
                { verse: 3, text: "si Felipe ug si Bartolome; si Tomas ug si Mateo, ang kobrador sa buhis; si Santiago, ang anak ni Alfeo ug si Tadeo;" },
                { verse: 4, text: "si Simon nga Patriyota ug si Judas Iscariote, ang nagbudhi kang Jesus." }
            ]
                }, {
                    title: `Ang Misyon sa Napulog-Duha ka Apostoles <br> (Mar. 6:7-13; Luc. 9:1-6)`,
                    verses: [
                { verse: 5, text: "Gidala ni Jesus kining napulog-duha ka apostoles uban niining mga pahimangno: “Ayaw kamo pag-adto sa kayutaan sa mga dili Judio ug sa bisan unsang lungsod sa Samaria." },
                { verse: 6, text: "Adtoa hinuon ninyo ang nangawala nga mga karnero sa nasod sa Israel." },
                { verse: 7, text: "Lakaw kamo ug isangyaw nga nagsugod na paghari ang Dios." },
                { verse: 8, text: "Ayoha ninyo ang mga masakiton, banhawa ang mga patay, hinloi ang mga sanlahon ug hinginli ang mga yawa. Nakadawat kamo nga walay bayad busa panghatag kamo sa walay pagpangayog bayad." },
                { verse: 9, text: "Ayaw kamo pagdalag kuwarta—bulawan, plata o tumbaga;" },
                { verse: 10, text: "ayaw pagdalag bag sa inyong pagpanaw o ilisan o sandalyas o sungkod. Ang mamumuo angay hatagan sa iyang kabuhian." },
                { verse: 11, text: "Inig-abot ninyo sa usa ka lungsod o balangay, pangita kamog tawo nga moabiabi kaninyo ug pabilin uban kaniya hangtod nga mobiya kamo niadtong dapita." },
                { verse: 12, text: "Inigdayon ninyo sa usa ka balay, ingna ang tagbalay, ‘Ang kalinaw mag-uban kaninyo.’" },
                { verse: 13, text: "Kon modawat kaninyo ang tagbalay, ibilin kanila ang inyong panghinaot sa kalinaw. Apan kon dili, bakwia ang inyong panghinaot." },
                { verse: 14, text: "Ug kon anaay dili modawat o dili mamati kaninyo, itaktak ang abog sa inyong tiil ug biyai ang ilang balay o lungsod." },
                { verse: 15, text: "Hinumdomi kini: sa Adlaw sa Paghukom mas maluoy pa ang Dios sa mga tawo sa Sodoma ug sa Gomora kay sa mga tawo nianang lungsora!" }
            ]
                }, 
                
                {

                    title: `Umaabot nga mga Paglutos <br> (Mar. 13:9-13; Luc. 21:12-17)`,
                    verses: [
                { verse: 16, text: "“Pamati kamo! Ako nagpadala kaninyo nga sama sa mga karnero ngadto sa panon sa mga lobo. Busa kinahanglan nga magmaigmat kamo sama sa bitin ug magmalumo sama sa salampati.”" },
                { verse: 17, text: "“Pagbantay kamo kay may mga tawo unya nga modakop ug modala kaninyo ngadto sa hukmanan ug latoson kamo nila sulod sa ilang mga sinagoga.”" },
                { verse: 18, text: "“Dad-on kamo atubangan sa mga namunoan ug sa mga hari tungod kanako ug pinaagi niini makasangyaw kamo sa Maayong Balita ngadto kanila ug sa mga dili Judio.”" },
                { verse: 19, text: "“Kon dad-on na kamo sa hukmanan, ayaw kamog kabalaka unsay inyong isulti o unsaon ninyo pagsulti kay inig-abot na sa panahon, hatagan kamo sa angay ninyong isulti.”" },
                { verse: 20, text: "“Kay ang mga pulong nga inyo unyang isulti dili inyo kondili iya sa Espiritu sa inyong Amahan nga magsulti pinaagi kaninyo.”" },
                { verse: 21, text: "“Itugyan sa mga tawo ang ilang kaugalingong mga igsoon aron patyon ug mao usab kini ang buhaton sa mga amahan ngadto sa ilang mga anak. Makigbatok usab ang mga anak sa ilang mga ginikanan ug ipapatay sila sa ilang mga anak.”" },
                { verse: 22, text: "“Dumtan kamo sa tanan tungod kanako apan maluwas ang molahutay hangtod sa kataposan.”" },
                { verse: 23, text: "“Kon lutoson kamo sa katawhan sa usa ka lungsod, dangop kamo ngadto sa laing lungsod. Sultihan ko kamo nga sa dili pa ninyo mahuman ang inyong buluhaton sa tanang lungsod sa Israel, moabot na ang Anak sa Tawo.”" },
                { verse: 24, text: "“Walay tinun-an nga labaw sa iyang magtutudlo ug walay ulipon nga labaw sa iyang agalon.”" },
                { verse: 25, text: "“Busa angayng malipay ang tinun-an kon mahisama siya sa iyang magtutudlo ug ang ulipon mahisama sa iyang agalon. Kon ang pangulo sa panimalay ginganlag Beelsebul, unsa pa kaha kangil-ad ang ihingalan sa iyang mga sakop!”" }
            ]
                },
                {
                    title: `Kinsay Angay nga Kahadlokan <br>(Luc. 12:2-7)`
                ,
                    verses: [
                { verse: 26, text: "“Busa ayaw kamo kahadlok sa mga tawo. Walay tinagoan nga dili mahibaw-an ug walay sikreto nga dili mabutyag.”" },
                { verse: 27, text: "“Ang gisulti ko kaninyo diha sa ngitngit kinahanglan isulti ninyo diha sa hayag ug kadtong kamo ray nakabati kinahanglan ibalita ninyo ngadto sa uban.”" },
                { verse: 28, text: "“Ayaw kamo kahadlok niadtong mopatay sa lawas apan dili makapatay sa kalag. Kahadloki hinuon ninyo ang Dios nga makalaglag sa lawas ug sa kalag didto sa impirno.”" },
                { verse: 29, text: "“Sa gamayng kantidad, makapalit na kamog duha ka gagmayng langgam nga sayaw, apan bisan pa niana walay usa kanila nga mahulog sa yuta kon walay pagtugot sa inyong Amahan.”" },
                { verse: 30, text: "“Bisan gani ang buhok sa inyong ulo inihap man.”" },
                { verse: 31, text: "“Busa ayaw kamo kahadlok kay labaw pa kaayo kamog bili kay sa mga langgam!”" }
            ]
                }, {
                    title: `Ang Pag-angkon ug ang Paglimod kang Cristo <br> (Luc. 12:8-9)`,
                    verses: [
                { verse: 32, text: "“Ang moila ug moangkon kanako atubangan sa mga tawo, angkonon ko usab atubangan sa akong Amahan didto sa langit.”" },
                { verse: 33, text: "“Apan ang dili moangkon nga siya akoa, dili ko usab angkonon atubangan sa akong Amahan didto sa langit.”" }
            ]
                }, {
                    title: `Dili Kalinaw kondili Espada <br>(Luc. 12:51-53; 14:26-27)`,
                    verses: [
                { verse: 34, text: "“Ayaw kamo paghunahuna nga mianhi ako aron pagdalag kalinaw sa kalibotan. Dili kalinaw ang akong gidala kondili espada.”" },
                { verse: 35, text: "“Hinuon mianhi ako aron magkabangi ang mga anak nga lalaki ug ang ilang amahan, ang mga anak nga babaye ug ang ilang inahan ug ang mga umagad nga babaye ug ang ilang ugangan nga babaye.”" },
                { verse: 36, text: "“Ang labing ngil-ad nga kaaway sa tawo mao ra unya ang mga sakop sa iyang kaugalingong panimalay.”" },
                { verse: 37, text: "“Ang nagmahal sa iyang amahan o inahan labaw kay kanako dili takos nga mahimong tinun-an nako. Kadtong nagmahal sa iyang anak labaw kay kanako, dili usab takos mahimong tinun-an nako.”" },
                { verse: 38, text: "“Ang dili mopas-an sa iyang krus ug mosunod kanako, dili takos mahimong tinun-an nako.”" },
                { verse: 39, text: "“Ug kadtong maniguro sa iyang kaugalingong kinabuhi, kawad-an niini. Apan ang kawad-an sa iyang kinabuhi tungod kanako, makabaton hinuon niini.”" }
            ]
                }, {
                    title: `Mga Ganti <br>(Mar. 9:41)`,
                     verses: [
                { verse: 40, text: "“Ang nagdawat kaninyo, nagdawat usab kanako ug ang nagdawat kanako, nagdawat usab kaniya nga nagsugo kanako.”" },
                { verse: 41, text: "“Ang nagdawat sa usa ka propeta tungod sa iyang pagkapropeta makadawat usab sa ganti alang sa usa ka propeta. Ang nagdawat sa tawo nga matarong, tungod sa iyang pagkamatarong, makadawat usab sa ganti nga alang sa tawo nga matarong.”" },
                { verse: 42, text: "“Ug hinumdomi kini: kadtong nagpainom ug bisan na lag bugnawng tubig sa labing ubos sa akong mga sumusunod tungod kay siya akong sumusunod, gantihan gayod.”" }
            ]
                }
            ]
        }

        sampleVerses["Mateo"][10] = {
            chapter: 11, 
            sections: [
                {title: `Ang mga Sinugo ni Juan nga Magbubunyag <br>(Luc. 7:18-35)`,

                    verses: [
                { verse: 1, text: "Human pahimangnoi ni Jesus ang iyang napulog-duha ka tinun-an, mibiya siya niadtong dapita ug miadto sa mga kasilinganang lungsod aron pagtudlo ug pagwali." },
                { verse: 2, text: "Sa pagkadungog ni Juan nga Magbubunyag nga didto sa bilanggoan mahitungod sa gihimo ni Cristo, gipaadto niya ang pipila sa iyang mga tinun-an ngadto kang Jesus." },
                { verse: 3, text: "Ug nangutana sila kaniya, “Sultihi kami, ikaw ba ang giingon ni Juan nga moanhi o magpaabot pa ba kamig lain?”" },
                { verse: 4, text: "Si Jesus mitubag, “Pamauli kamo ug suginli si Juan sa inyong nadungog ug nakita:" },
                { verse: 5, text: "ang mga buta nakakita, ang mga bakol nakalakaw, ang mga sanlahon nangaayo, ang mga bungol nakadungog, ang mga minatay nangabanhaw ug ang Maayong Balita gisangyaw ngadto sa mga kabos." },
                { verse: 6, text: "Bulahan kadtong wala magduhaduha kanako!”" },
                { verse: 7, text: "Samtang namauli ang mga tinun-an ni Juan, si Jesus miingon sa mga tawo mahitungod kang Juan, “Sa pag-adto ninyo kang Juan didto sa dapit nga awaaw, unsay gipaabot ninyong makita? Sagbot ba nga gipilaypilay sa hangin? Dili." },
                { verse: 8, text: "Unsa ba gyod ang inyong giadto aron tan-awon? Tawo ba nga nindot kaayog pamisti? Dili usab kay ang mga tawo nga nagbistig sama niini atua man magpuyo sa mga palasyo." },
                { verse: 9, text: "Sultihi ako unsa man gyod ang gipaabot ninyong makita? Propeta ba? Oo, propeta, apan ang nakita ninyo labaw pa sa usa ka propeta." },
                { verse: 10, text: "Si Juan mao ang giingon sa kasulatan: ‘Ania ang akong sinugo, nag-ingon ang Dios, ipadala ko siya una kanimo aron andamon niya ang dalan alang kanimo.’" },
                { verse: 11, text: "Hinumdomi kini: Wala pay tawo nga milabaw kang Juan nga Magbubunyag. Apan bisan kadtong labing ubos sa mga nagpailalom sa paghari sa Dios labaw pa kay kaniya." },
                { verse: 12, text: "Sukad sa pagwali ni Juan hangtod karon, ang paghari sa Dios kusganon gayod nga miabot ug ang mga tawo kusganong naninguha paghupot niini." },
                { verse: 13, text: "Kay ang tanang propeta ug ang Balaod ni Moises hangtod sa panahon ni Juan, naghisgot mahitungod sa paghari sa Dios." },
                { verse: 14, text: "Ug kon gusto kamo motuo sa ilang mensahe, si Juan mao ang gipasabot sa propeta sa dihang miingon siya nga mobalik si Elias." },
                { verse: 15, text: "Busa pamati kon may dalunggan kamo!" }
            ]
        },
        {
            title: `Ang mga Tawo niining Panahona`,
            verses: [
                { verse: 16, text: "“Karon, unsa may akong ikatandi sa mga tawo niining panahona? Sama sila sa mga bata nga naglingkudlingkod lang sa merkado. Usa ka pundok sa mga kadula mosinggit ngadto sa lain," },
                { verse: 17, text: "‘Mitugtog mig para sa kasal apan wala mo mosayaw! Nanganta mig para sa lubong apan wala mo manghilak!’" },
                { verse: 18, text: "Mianhi si Juan, nagpuasa siya ug wala moinom ug bino. Ug miingon sila, ‘Giyawaan siya!’" },
                { verse: 19, text: "Mianhi ang Anak sa Tawo ug mikaon siya ug miinom. Ug miingon na usab sila, ‘Tan-awa ninyo kining tawhana! Hangol siya sa pagkaon ug palahubog, unya higala pa gyod sa kobrador sa buhis ug sa mga makasasala!’ Apan ang kaalam sa Dios milutaw nga husto diha sa mga resulta niini.”" }
            ]
        },
        {
            title: `Ang mga Lungsod nga Wala Motuo <br> (Luc. 10:13-15)`,
            verses: [
        { verse: 20, text: "Unya gisaway pag-ayo ni Jesus ang mga lungsod diin niya himoa ang kadaghanan sa iyang mga milagro kay ang mga tawo didto wala man maghinulsol sa ilang mga sala." },
        { verse: 21, text: "“Pagkaalaot nimo, Corasin! Pagkaalaot usab nimo, Betsaida! Kay kon ang mga milagro nga nahimo diha kaninyo didto pa himoa sa Tiro ug sa Sidon, ang mga tawo didto dugay na unta nga nagsul-ob ug sako ug nagbolibod ug abo sa ilang ulo aron pagpaila nga sila naghinulsol sa ilang mga sala." },
        { verse: 22, text: "Busa hinumdomi nga sa Adlaw sa Paghukom, ang Dios mas maluoy pa sa mga taga-Tiro ug sa taga-Sidon kay kaninyo!" },
        { verse: 23, text: "Ug ikaw, Capernaum, abi nimog ipahitaas ka ngadto sa langit? Dili. Itambog ka hinuon ngadto sa impirno! Kay kon ang mga milagro nga nahimo diha kanimo didto pa himoa sa Sodoma, ania pa unta kini hangtod karong adlawa!" },
        { verse: 24, text: "Busa hinumdomi nga sa Adlaw sa Paghukom, ang Dios mas maluoy pa sa Sodoma kay kaninyo!”" }
    ]
        },
        {
            title: `Umari Kamo Kanako ug Pahulay <br>(Luc. 10:21-22)`,
            verses: [
        { verse: 25, text: "Unya si Jesus miingon, “O Amahan, Ginoo sa langit ug sa yuta! Nagpasalamat ako kanimo kay gipadayag man nimo ngadto sa mga walay kahibalo kining mga butanga nga imong gitago gikan sa mga maalamon ug sa mga makinaadmanon." },
        { verse: 26, text: "Oo, Amahan, natuman kini kay mao may imong gusto ug pagbuot." },
        { verse: 27, text: "“Ang akong Amahan naghatag kanako sa tanang butang. Walay nakaila sa Anak gawas sa Amahan ug walay nakaila sa Amahan gawas sa Anak ug kadtong mga tawo nga buot sa Anak nga makaila sa Amahan." },
        { verse: 28, text: "“Duol kamo kanako, kamong tanan nga gikapuyan ug gibug-atan sa inyong gipas-an ug papahulayon ko kamo." },
        { verse: 29, text: "Isangon ang akong yugo ug sunda ninyo ako kay malumo ako ug mapaubsanon sa espiritu ug makapahulay kamo." },
        { verse: 30, text: "Sayon ang yugo nga akong isangon kaninyo ug gaan ang ipapas-an ko kaninyo.”" }
    ]
        }
            ]
        }

        sampleVerses["Mateo"][11] = {
            chapter: 12, 
           sections: [
        {
            title: `Ang Pangutana mahitungod sa Adlawng Igpapahulay <br> (Mar. 2:23-28; Luc. 6:1-5)`,
            verses: [
                { verse: 1, text: "Usa niana ka Adlawng Igpapahulay, naglakaw si Jesus ug ang iyang mga tinun-an latas sa kaumahan sa trigo. Gigutom ang iyang mga tinun-an busa nangutlo silag mga uhay sa trigo aron ilang kan-on." },
                { verse: 2, text: "Sa pagkakita niini sa mga Pariseo, miingon sila kang Jesus, “Tan-awa ra, dili ba supak man sa atong Balaod ang gihimo sa imong mga tinun-an niining Adlawng Igpapahulay?”" },
                { verse: 3, text: "Si Jesus mitubag, “Wala ba diay kamo makabasa sa gibuhat ni David sa dihang gigutom siya ug ang iyang mga kauban?" },
                { verse: 4, text: "Misulod siya sa balay sa Dios ug siya ug ang iyang mga kauban mikaon sa pan nga gihalad ngadto sa Dios bisag supak sa Balaod nga mangaon sila niadtong pan kay ang mga pari ra man ang gitugotan sa pagkaon niini." },
                { verse: 5, text: "O wala ba diay kamo makabasa sa Balaod ni Moises, nga sa matag Adlawng Igpapahulay ang mga pari sulod sa Templo nakalapas man sa balaod sa Adlawng Igpapahulay apan wala sila ilha nga nakasala?" },
                { verse: 6, text: "Sultihan ko kamo nga dinhi aniay labaw pa kay sa Templo." },
                { verse: 7, text: "Kon nakasabot pa lang kamo sa kahulogan niining bahina sa kasulatan nga nag-ingon, ‘Kaluoy ang akong gusto, dili mga halad,’ dili unta ninyo pakasad-on ang mga tawo nga walay sala." },
                { verse: 8, text: "Kay ang Anak sa Tawo mao ang magbuot sa angayng buhaton sa Adlawng Igpapahulay.”" }
            ]
        },
        {
            title: `Ang Tawo nga Kimay <br> (Mar. 3:1-6; Luc. 6:6-11)`,
            verses: [
                { verse: 9, text: "Si Jesus mibiya niadtong dapita ug miadto sa usa sa mga sinagoga." },
                { verse: 10, text: "Didto may usa ka tawo nga kimay. May pipila usab ka tawo nga gustong mangitag bikil aron mapasanginlan nila si Jesus nga nagbuhat ug daotan. Busa nangutana sila kaniya, “Dili ba supak sa atong Balaod ang pag-ayog masakiton sa Adlawng Igpapahulay?”" },
                { verse: 11, text: "Si Jesus mitubag, “Unsa may inyong buhaton kon ang inyong karnero mahulog sa usa ka lawom nga lungag sa Adlawng Igpapahulay? Dili ba diay ninyo kini kuhaon?" },
                { verse: 12, text: "Mas dako pag bili ang tawo kay sa karnero! Busa ang atong Balaod nagtugot kanato sa pagtabang kang bisan kinsa sa Adlawng Igpapahulay.”" },
                { verse: 13, text: "Unya giingnan niya ang tawo, “Ituy-od ang imong kamot.” Ug gituy-od sa tawo ang iyang kamot ug naayo kini." },
                { verse: 14, text: "Unya nanglakaw ang mga Pariseo ug naglaraw sa pagpatay kang Jesus." }
            ]
        },
        {
            title: `Ang Piniling Sulugoon sa Dios`,
            verses: [
                { verse: 15, text: "Nakamatngon si Jesus mahitungod sa laraw batok kaniya busa mibiya siya niadtong dapita ug mikuyog kaniya ang daghang mga tawo. Giayo niya ang tanang masakiton" },
                { verse: 16, text: "ug gidid-an niya sila pagpanugilon mahitungod kaniya." },
                { verse: 17, text: "Nahitabo kini aron matuman ang giingon ni propeta Isaias:" },
                { verse: 18, text: "“Ang Dios nag-ingon, ‘Ania ang akong gipili nga sulugoon, ang akong gihigugma ug gikahimut-an. Kaniya pakunsaron ko ang akong Espiritu ug isangyaw niya ang akong kabubut-on ngadto sa tanang katawhan." },
                { verse: 19, text: "Dili siya makiglalis o mosinggit o mohimog masaba nga pakigpulong sa kadalanan." },
                { verse: 20, text: "Dili niya balion ang bawog nga bugang o palungon ang nagkaawop nga suga. Magpadayon siya sa iyang buhat hangtod nga mapatunhay niya ang hustisya" },
                { verse: 21, text: "ug siyay mahimong paglaom sa tanang katawhan.’”" }
            ]
        },
        {
            title: `Si Jesus ug si Beelsebul <br> (Mar. 3:20-30; Luc. 11:14-23)`,
            verses: [
                { verse: 22, text: "Unya may pipila ka tawo nga midala ngadto kang Jesus ug usa ka tawong giyawaan nga maoy hinungdan sa iyang pagkabuta ug pagkaamang. Giayo ni Jesus ang tawo busa nakasulti na siya ug nakakita." },
                { verse: 23, text: "Natingala ang mga tawo ug nangutana sila, “Siya ba kaha ang Anak ni David?”" },
                { verse: 24, text: "Sa pagkadungog niini sa mga Pariseo, sila miingon, “Nakapagula siyag mga yawa kay yawa man sab ang nagtabang niya. Ang ilang pangulo nga si Beelsebul mao may naghatag kaniyag gahom.”" },
                { verse: 25, text: "Nasayod si Jesus sa ilang gihunahuna busa miingon siya kanila, “Ang nasod nga magkabahinbahin ug mag-unay pag-away dili molungtad ug dugay. Ug ang nagkabahinbahin nga lungsod o panimalay dili motunhay." },
                { verse: 26, text: "Busa kon ang usa ka pundok sa gingharian ni Satanas makig-away sa laing pundok nga iya ra gihapon ni Satanas, nagpasabot kini nga nagkabahinbahin kini. Unya unsaon man paglungtad niini?" },
                { verse: 27, text: "Matod ninyo nakapagula akog mga yawa kay si Beelsebul naghatag kanako sa gahom. Kon mao kana, kinsa may naghatag ug gahom sa inyong mga sumusunod aron pagpagula kanila? Ang inyong mga sumusunod mao ang nagmatuod nga kamo nasayop pag-ayo!" },
                { verse: 28, text: "Dili si Satanas kondili ang Espiritu sa Dios ang naghatag kanako sa gahom sa pagpagulag mga yawa ug nagpaila kini nga miabot na kaninyo ang paghari sa Dios." },
                { verse: 29, text: "“Walay makalungkab sa balay sa usa ka tawong kusgan ug makakawat sa iyang kabtangan kon dili una niya gaposon ang maong tawo. Kon mahimo na niya kini anha pa siya makakuha sa mga kabtangan." },
                { verse: 30, text: "“Ang dili dapig kanako, batok gayod kanako. Ug ang dili motabang kanako pagtigom, nagpatibulaag lang." },
                { verse: 31, text: "Tungod niini, sultihan ko kamo: ang mga tawo mapasaylo sa bisan unsang sala nila ug sa bisan unsang sulti nila nga daotan. Apan dili mapasaylo ang magsultig daotan batok sa Espiritu Santo." },
                { verse: 32, text: "Ang magsultig daotan batok sa Anak sa Tawo mapasaylo, apan ang magsultig daotan batok sa Espiritu Santo dili gayod mapasaylo karon o bisan kanus-a." }
            ]
        },
        {
            title: `Ang Punoan Maila sa Iyang Bunga <br>(Luc. 6:43-45)`,
            verses: [
                { verse: 33, text: "“Kinahanglan nga walay sakit ang punoan aron mamunga kinig maayong bunga. Kon ang punoan masakiton, ang bunga niini walay pulos. Kay ang punoan maila sa iyang bunga." },
                { verse: 34, text: "Mga bitin! Unsaon man ninyo pagsultig mga maayong butang nga daotan man kamo? Kay unsa gani ang nakapuno sa kasingkasing mao usab ang isulti sa baba." },
                { verse: 35, text: "Ang maayong tawo magsultig maayo gikan sa mga maayong butang nga anaa sa iyang kasingkasing. Ang tawong daotan magsultig daotan gikan sa mga butang nga daotan nga anaa sa iyang kasingkasing." },
                { verse: 36, text: "“Sultihan ko kamo nga sa Adlaw sa Paghukom, ang matag usa ka tawo mohatag unya ug husay sa matag walay pulos nga pulong nga iyang gisulti." },
                { verse: 37, text: "Kay ang inyong mga pulong mao usab unya ang gamiton sa paghukom kaninyo aron maila kon kamo sad-an ba o dili.”" }
            ]
        },
        {
            title: `Buot Sila Motan-aw ug Milagro <br> (Mar. 8:11-12; Luc. 11:29-32)`,
            verses: [
                { verse: 38, text: "Unya pipila ka magtutudlo sa Balaod ug mga Pariseo miingon, “Magtutudlo, pakit-a kamig milagro.”" },
                { verse: 39, text: "Apan mitubag si Jesus, “Pagkadaotan gayod sa mga tawo karon. Wala nay pagtuo sa Dios! Nangayo kamog milagro kanako? Dili ako mohatag niini. Ang milagro nga akong ihatag kaninyo mao ra ang kahibulongan nga nahitabo kang Jonas nga propeta." },
                { verse: 40, text: "Sama nga si Jonas tulo ka adlaw ug tulo ka gabii didto sa tiyan sa dakong isda sa dagat, tulo usab ka adlaw ug tulo ka gabii ang Anak sa Tawo sa ilalom sa yuta." },
                { verse: 41, text: "Sa Adlaw sa Paghukom ang mga tawo sa Ninibe mamangon ug mosudya kaninyo kay naghinulsol man sila sa ilang mga sala sa pagkadungog nila sa wali ni Jonas. Ug hibaloi nga dinhi aniay labaw pa kang Jonas!" },
                { verse: 42, text: "Sa Adlaw sa Paghukom ang Rayna sa Sheba mobangon ug mosudya kaninyo kay mipanaw siyag layo kaayo aron lang pagpamati sa mga maalamong pagtulon-an ni Haring Solomon. Ug hibaloi nga dinhi aniay labaw pa kang Solomon!" }
            ]
        },
        {
            title: `Ang Pagbalik sa Daotang Espiritu <br> (Luc. 11:24-26)`,
            verses: [
                { verse: 43, text: "“Kon ang usa ka daotang espiritu mogula gikan sa usa ka tawo, magsuroysuroy siya sa mga dapit nga mamala ug mangitag iyang kapahulayan. Kon wala siyay hikit-an," },
                { verse: 44, text: "moingon siya sa iyang kaugalingon, ‘Mobalik lang ko sa akong gipuy-an kaniadto.’ Busa mobalik siya ug makaplagan niya kini nga wala puy-i, limpyo ug ang tanang kasangkapan maayong pagkapahimutang." },
                { verse: 45, text: "Unya mogula siya ug mobalik nga magdalag laing pito ka espiritu nga labi pang daotan kay kaniya ug manulod sila ug mopuyo didto. Busa, sa kataposan, kadtong tawhana molabaw pa kadaotan kay sa sinugdan. Mao usab unya kini ang dangatan niining daotang katawhan.”" }
            ]
        },
        {
            title: `Ang Inahan ni Jesus ug ang Iyang mga Igsoong Lalaki <br> (Mar. 3:31-35; Luc. 8:19-21)`,
            verses: [
                { verse: 46, text: "Samtang nakigsulti pa si Jesus sa mga tawo, miabot ang iyang inahan ug mga igsoong lalaki. Nagtindog sila didto sa gawas kay gusto makigsulti kaniya." },
                { verse: 47, text: "Unya usa sa mga tawo didto miingon kaniya, “Ang imong inahan ug mga igsoon atua sa gawas ug buot sila makigsulti kanimo.”" },
                { verse: 48, text: "Si Jesus mitubag, “Kinsa man ang akong inahan? Kinsa man ang akong mga igsoon?”" },
                { verse: 49, text: "Unya gitudlo niya ang iyang mga tinun-an ug miingon, “Tan-awa! Mao kini sila ang akong inahan ug ang akong mga igsoon." },
                { verse: 50, text: "Kay ang akong inahan ug mga igsoon mao kadtong nagbuhat sa kabubut-on sa akong Amahan nga atua sa langit.”" }
            ]
        }
    ]
        }

        sampleVerses["Mateo"][12] = {
            chapter: 13, 
            sections: [
                {
                    title: `Ang Sambingay mahitungod sa Magpupugas <br> (Mar. 4:1-9; Luc. 8:4-8)`,
                    verses: [
                { verse: 1, text: "Niana gihapong adlawa mibiya si Jesus sa balay ug milingkod sa daplin sa lanaw." },
                { verse: 2, text: "Unya tungod sa daghan kaayong mga tawo nga mialirong kaniya, misakay siya sa usa ka sakayan. Milingkod siya didto samtang ang mga tawo nagtindog sa daplin sa lanaw." },
                { verse: 3, text: "Migamit siyag mga sambingay aron pagtudlo kanilag daghang mga butang. Miingon siya, “May usa ka tawo nga miadto sa uma aron pagpugas." },
                { verse: 4, text: "Sa pagsabod niya sa binhi, adunay nahulog sa agianan ug miabot ang mga langgam ug gipanuka kini." },
                { verse: 5, text: "Ang uban nahulog sa yuta nga batoon ug nanurok dayon kay diyutay ra man ug dili lawom ang yuta niini." },
                { verse: 6, text: "Apan sa pagsubang na sa adlaw, nalawos ang bag-ong nanurok ug kay wala man makagamot pag-ayo, nangalaya dayon kini." },
                { verse: 7, text: "Ang ubang mga binhi didto nahulog sa dapit sa mga tunokong sagbot. Nanubo ang mga tunokong sagbot ug gilupig ang mga bag-ong tanom." },
                { verse: 8, text: "Ug ang uban nahulog sa maayong yuta ug namunga. May namunga ug balig 100 ka pilo kay sa natanom, ang uban balig 60 ka pilo ug ang uban balig 30 ka pilo.”" },
                { verse: 9, text: "Ug miingon si Jesus, “Busa kon aduna kamoy dalunggan, pamati!”" }
            ]
                },
                {
                    title: `Ang Tuyo sa mga Sambingay <br> (Mar. 4:10-12; Luc. 8:9-10)`,
                    verses: [
        { verse: 10, text: "Unya ang mga tinun-an miduol kang Jesus ug nangutana kaniya, “Nganong sambingay man ang imong gigamit sa pagtudlo kanila?”" },
        { verse: 11, text: "Si Jesus mitubag, “Ang mga tinago mahitungod sa paghari sa Dios gipadayag na kaninyo apan wala ipadayag kanila." },
        { verse: 12, text: "Kay ang aduna nay iya, dugangan pa hinuon aron maiya ang labaw sa iyang gikinahanglan. Apan sa tawo nga walay nahot, bisan ang gamay nga naa kaniya kuhaon pa gyod." },
        { verse: 13, text: "Naggamit ako ug mga sambingay sa akong pagtudlo kanila kay nagtan-aw sila apan dili makakita ug namati apan dili makadungog ug dili makasabot." },
        { verse: 14, text: "Busa natuman ang panagna ni Isaias: ‘Nakakita kamo ug nakadungog apan nagpakabuta-bungol lang kamo." },
        { verse: 15, text: "Kay kining mga tawhana gahig ulo; gisampongan nila ang ilang mga dalunggan ug gipiyong ang ilang mga mata. Kay dili sila buot makakita ug dili buot makadungog kay tingali unyag makasabot sila ug mobalik kanako ug sila akong ayohon, nag-ingon ang Dios.’" },
        { verse: 16, text: "“Apan kamo, pagkabulahan ninyo! Kay makakita ang inyong mga mata ug makadungog ang inyong mga dalunggan." },
        { verse: 17, text: "Sultihan ko kamo sa tinuod: daghang mga propeta ug daghang mga tawo sa Dios nga buot gayod unta motan-aw sa inyong nakita apan wala sila makakita ug gusto untang mamati sa inyong nadungog apan wala sila makabati." }
    ]
                },{
                    title: `Gisaysay ni Jesus ang Kahulogan sa Sambingay mahitungod sa Magpupugas <br> (Mar. 4:13-20; Luc. 8:11-15)`,
                     verses: [
        { verse: 18, text: "“Busa pamati kamo ug sabta ninyo ang kahulogan sa sambingay mahitungod sa magpupugas." },
        { verse: 19, text: "Kadtong nakadungog sa mensahe mahitungod sa gingharian apan wala makasabot niini adtoon sa Yawa ug sakmiton gikan kaniya ang mga binhi nga napugas diha sa iyang kasingkasing. Sama niini ang binhi nga nahulog didto sa agianan." },
        { verse: 20, text: "Ang binhi nga nahulog sa yutang batoon sama sa mga tawo nga malipayong midawat sa mensahe sa pagkadungog nila niini." },
        { verse: 21, text: "Apan wala kini makagamot diha kanila busa dili sila molahutay. Sa pag-abot sa mga kalisdanan ug mga paglutos tungod sa mensahe, mobiya dayon sila." },
        { verse: 22, text: "Ug ang binhi nga nahulog sa dapit sa mga tunokon nga sagbot sama sa mga tawo nga nakadungog sa mensahe. Apan ang mga kabalaka bahin niining kinabuhia ug ang gugma alang sa mga bahandi mipatigbabaw kay sa mensahe ug dili sila makabunga." },
        { verse: 23, text: "Ug ang binhi nga napugas didto sa maayong yuta sama sa mga tawo nga nakadungog ug nakasabot sa mensahe. Mamunga silag tag-100, ang uban tag-60 ug ang uban tag-30.”" }
    ]
                },
                {
                    title: `Ang Sambingay mahitungod sa mga Sagbot`,
                    verses: [
        { verse: 24, text: "Unya misugilon si Jesus kanilag laing sambingay: “Ang paghari sa Dios nahisama sa usa ka tawo nga nagpugas ug maayong binhi didto sa iyang uma." },
        { verse: 25, text: "Usa niana ka gabii, samtang nangatulog ang tanan, usa ka kaaway ang miadto ug misabod ug liso sa mga sagbot sagol sa trigo ug unya mibiya." },
        { verse: 26, text: "Sa nakatubo na ang mga tanom ug misugod na pagbuswak ang mga uhay, diha pa mailhi ang mga sagbot." },
        { verse: 27, text: "Ang mga sulugoon sa tag-iya miduol kaniya ug miingon, ‘Sir, maayo man unta ang binhi nga imong gipugas apan diin man gikan ang mga sagbot?’" },
        { verse: 28, text: "Siya mitubag, ‘Usa ka kaaway ang naghimo niini.’ Sila nangutana kaniya, ‘Gusto ka bang mangadto kami ug pangibton namo ang mga sagbot?’" },
        { verse: 29, text: "Siya mitubag, ‘Ayaw! Kay sa inyo unyang pag-ibot sa mga sagbot, basig maapil ug kaibot ang trigo." },
        { verse: 30, text: "Pasagdi ninyo nga ang trigo ug ang mga sagbot magdungag tubo hangtod sa ting-ani kay ingnon ko ra unya ang mga tig-ani: Ibta ninyo pag-una ang mga sagbot, bugkosa kini ug ilabay ngadto sa kalayo. Apan tigoma ang trigo ug hiposa didto sa akong kamalig.’”" }
    ]
                }, 
                {
        title: `Ang Sambingay mahitungod sa Liso sa Mustasa <br> (Mar. 4:30-32; Luc. 13:18-19)`,
        verses: [
        { verse: 31, text: "Unya misugilon si Jesus kanilag laing sambingay: “Ang paghari sa Dios sama sa liso sa mustasa nga gikuha sa usa ka tawo ug gipugas didto sa iyang uma." },
        { verse: 32, text: "Mao kini ang kinagamyan sa tanang liso, apan sa pagtubo na niini, nahimo kini nga labing dako sa tanang tanom. Nahimo kining kahoy ug nanugdon ang mga langgam niini ug nagsalag sa iyang mga sanga.”" }
    ]
},

{
     title: `Ang Sambingay mahitungod sa Igpapatubo sa Pan <br> (Luc. 13:20-21)`,
     verses:[
        {verse: 33, text: `Si Jesus misugilon na usab kanila ug laing sambingay: “Ang paghari sa Dios sama niini. Gikuha sa usa ka babaye ang igpapatubo sa pan ug gisagol sa balig tulo ka takos nga harina hangtod mitubo ang tibuok minasa.”`}
     ]
},
{
    title: `Ang Paggamit ni Jesus sa mga Sambingay <br> (Mar. 4:33-34)`,
    verses: [
        {verse: 34, text: `Si Jesus migamit ug mga sambingay aron pagsugilon niining mga butanga ngadto sa mga tawo. Wala siyay gisulti kanila bisag unsa nga dili pinaagig sambingay. `},
        {verse: 35, text: `Gihimo niya kini aron matuman ang giingon sa propeta:<br>
       “Mogamit akog mga sambingay sa akong pagpakigsulti kanila;<br>
       ko silag mga butang nga wala pa hibaloi sukad mabuhat ang kalibotan.”`}
    ]
},
{
    title: `Gisaysay ni Jesus ang Kahulogan sa Sambingay mahitungod sa mga Sagbot`,
    verses: [
        {verse: 36, text: `Unya mibiya si Jesus sa mga tawo ug misulod sa balay. Ang iyang mga tinun-an miduol kaniya ug miingon, “Pasabta kami sa kahulogan sa sambingay mahitungod sa mga sagbot sa uma.”`},
        { verse: 37, text: "Si Jesus mitubag, ‘Ang nagpugas sa maayong binhi mao ang Anak sa Tawo.’" },
{ verse: 38, text: "Ang uma mao ang kalibotan ug ang maayong binhi mao ang mga tawo nga sakop sa Gingharian. Ang mga sagbot mao ang mga tawo nga sakop sa Yawa." },
{ verse: 39, text: "Ug ang kaaway nga nagsabod sa mga sagbot mao ang Yawa. Ang pagpangani mao ang kataposan sa kalibotan ug ang tig-ani mao ang mga anghel." },
{ verse: 40, text: "Sama nga ang mga sagbot hiposon ug sunogon, mao usab kini ang mahitabo sa kataposan sa kalibotan." },
{ verse: 41, text: "Ipadala unya sa Anak sa Tawo ang iyang mga anghel. Hiposon nila gikan sa iyang gingharian ang tanan nga maoy nakaangin sa mga tawo sa pagpakasala, lakip ang tanan nga nagbuhat ug daotan." },
{ verse: 42, text: "Itambog sila ngadto sa kalayo nga nagdilaab diin maghilak sila ug magkagot sa ilang ngipon." },
{ verse: 43, text: "Unya ang katawhan sa Dios modan-ag sama sa adlaw didto sa gingharian sa ilang Amahan. Busa kon may dalunggan kamo, pamati!" },

    ]
},
{
    title: `Ang Sambingay mahitungod sa Gitagoang Bahandi`,
    verses: [
        { verse: 44, text: "Ang paghari sa Dios sama sa usa ka bahandi nga gilubong didto sa usa ka uma. Hikalotan kini sa usa ka tawo apan iya kining gitabonan pag-usab. Hilabihan niyang lipaya ug tungod niini milakaw siya ug iyang gibaligya ang tanan niyang katigayonan ug unya mibalik siya ug iyang gipalit ang uma." },
    ]
},
{
    title: `Ang Sambingay mahitungod sa Perlas`,
    verses: [
        { verse: 45, text: "Ang paghari sa Dios sama usab sa usa ka negosyante nga nangitag maanindot nga mga perlas." },
{ verse: 46, text: "Sa dihang nakakaplag siyag usa ka perlas nga may talagsaong kaanindot, milakaw siya ug gibaligya ang tanan niyang katigayonan ug unya gipalit niya ang perlas." },

    ]
}
,{
    title: `Ang Sambingay mahitungod sa Baling`,
    verses: [
        { verse: 47, text: "Ang paghari sa Dios sama usab sa usa ka baling nga gitaktak didto sa dagat ug nakakuha sa tanang matang sa isda." },
{ verse: 48, text: "Inigkapuno na niini, birahon kini sa mga mananagat ngadto sa baybayon. Manglingkod sila aron pagpili sa isda: ang mga maayong isda isulod nila sa ilang mga sudlanan ug ang walay pulos ilang ilabay." },
{ verse: 49, text: "Mao usab kini ang mahitabo sa kataposan sa kalibotan. Moanhi ang mga anghel aron ilain nila ang mga daotang tawo gikan sa mga maayo." },
{ verse: 50, text: "Unya itambog nila ang mga daotan ngadto sa hudno nga nagdilaab. Didto maghilak sila ug magkagot ang ilang mga ngipon." },

    ]
},
{
    title: `Bag-o ug Karaang mga Kamatuoran`,
    verses: [
        { verse: 51, text: "Nakasabot ba mo niining mga butanga?” nangutana si Jesus kanila. “Oo,” mitubag sila." },
{ verse: 52, text: "Busa miingon siya, “Tungod niini, ang tanang magtutudlo sa Balaod nga nahimong tinun-an ilalom sa paghari sa Dios sama sa usa ka tagbalay nga nagpagawas sa bag-o ug karaan niyang mga kabtangan gikan sa tipiganan.”" },

    ]
},
{
    title: `Gisalikway si Jesus didto sa Iyang Kaugalingong Dapit <br>(Mar. 6:1-6; Luc. 4:16-30)`,
    verses:[
        { verse: 53, text: "Sa nakahuman na si Jesus pagsugilon sa maong mga sambingay, mibiya siya niadtong dapita." },
{ verse: 54, text: "Mipauli siya sa lungsod nga iyang gipuy-an. Nagtudlo siya didto sa ilang sinagoga ug natingala ang nakadungog kaniya. “Diin man niya kuhaa kining maong kaalam?” nangutana sila. “Ug diin man siyag gahom paghimog mga milagro?" },
{ verse: 55, text: "Dili ba mao man kana siya ang anak sa panday? Dili ba si Maria man ang iyang inahan? Ug dili ba igsoon man kana siya ni Santiago, ni Jose, ni Simon ug ni Judas?" },
{ verse: 56, text: "Dili ba nia man dinhi magpuyo ang tanan niyang mga igsoong babaye? Diin man niya kuhaa kining tanan?”" },
{ verse: 57, text: "Tungod niini gisalikway nila siya. Ug miingon si Jesus kanila, “Ang usa ka propeta tinahod bisan diin gawas lang sa lungsod nga iyang gipuy-an ug sa iyang kaugalingong panimalay.”" },
{ verse: 58, text: "Busa wala siya mohimog daghang milagro didto kay wala man silay pagtuo." },

    ]
}
                
            ]
        }



        sampleVerses["Mateo"][13] = {
            chapter: 14, 
            sections: [
                {
                    title: `Ang Kamatayon ni Juan nga Magbubunyag <br>(Mar. 6:14-29; Luc. 9:7-9)`,
                    verses:[
                            { verse: 1, text: "Niadtong panahona, si Herodes, nga nagmando sa Galilea, nakabalita mahitungod kang Jesus." },
                            { verse: 2, text: "Giingnan niya ang iyang mga opisyal, “Siya mao si Juan nga Magbubunyag. Nabanhaw siya! Mao kanay hinungdan nga makahimo siya niining mga milagroha.”" },
                            { verse: 3, text: "Si Herodes mao ang nagsugo nga dakpon si Juan ug gaposon ug prisohon. Gibuhat niya kini tungod kang Herodias, ang asawa sa iyang igsoon nga si Felipe." },
                            { verse: 4, text: "Kay si Juan nga Magbubunyag nagsigi man gyod ug sulti kang Herodes, “Dili matarong nga mangasawa ka kang Herodias.”" },
                            { verse: 5, text: "Buot untang patyon ni Herodes si Juan apan nahadlok siya sa mga Judio kay giila man nila si Juan nga usa ka propeta." },
                            { verse: 6, text: "Sa dihang gisaulog ang adlawng natawhan ni Herodes, misayaw ang anak nga babaye ni Herodias atubangan sa tanang nanambong. Nahimuot kaayo si Herodes." },
                            { verse: 7, text: "Busa misaad siya kaniya, “Ipanumpa ko nga hatagan ko ikaw bisag unsay imong pangayoon!”" },
                            { verse: 8, text: "Sumala sa sugo sa iyang inahan, miingon siya kang Herodes, “Ihatag kanako karon dayon ang ulo ni Juan nga Magbubunyag ug ibutang kini sa bandihado!”" },
                            { verse: 9, text: "Naguol ang hari apan tungod sa panumpa nga iyang gihimo sa atubangan sa tanan niyang mga dinapit, misugo siya nga hatagan ang dalagita sa iyang gipangayo." },
                            { verse: 10, text: "Busa iyang gipapunggotan si Juan didto sa prisohan." },
                            { verse: 11, text: "Ang ulo nga gibutang sa bandihado gidala ug gihatag ngadto sa dalagita. Gidala usab kini niya ngadto sa iyang inahan." },
                            { verse: 12, text: "Unya miabot ang mga tinun-an ni Juan ug ilang gihipos ang iyang lawas ug gilubong. Human niini, giadto nila si Jesus ug ilang gisuginlan sa nahitabo." },

                    ]
                },
                {
                    title: `Gipakaon ni Jesus ang 5,000 ka Tawo <br>(Mar. 6:30-44; Luc. 9:10-17; Juan 6:1-14)`,
                    verses: [
                        { verse: 13, text: "Sa pagkadungog ni Jesus sa balita nga gipatay si Juan, mibiya siya niadtong dapita sakay sa usa ka sakayan. Nag-inusara siyang miadto sa usa ka dapit nga awaaw. Nakabalita niini ang mga tawo busa namiya sila sa ilang mga lungsod ug nanglakaw sila aron pag-apas kaniya." },
                            { verse: 14, text: "Mikawas si Jesus sa sakayan ug sa pagkakita niya sa dakong pundok sa mga tawo, giabot siyag dakong kaluoy kanila ug giayo niya ang ilang mga masakiton." },
                            { verse: 15, text: "Sa hapit na mosalop ang adlaw ang iyang mga tinun-an miduol kaniya ug miingon, “Mongitngit na ra ba ug awaaw kining dapita. Maayo tingaling palakton na lang nimo ang mga tawo ug paadtoon sa mga balangay nga duol aron mamalit ug pagkaon alang sa ilang kaugalingon.”" },
                            { verse: 16, text: "Si Jesus mitubag, “Dili na kinahanglan nga manglakaw pa sila. Kamo mismo ang maghatag kanilag pagkaon.”" },
                            { verse: 17, text: "Sila mitubag, “Lima ra ka pan ug duha ka isda ang ania diri.”" },
                            { verse: 18, text: "Si Jesus miingon, “Dad-a ngari.”" },
                            { verse: 19, text: "Unya iyang gipalingkod sa mga sagbot ang mga tawo ug gikuha niya ang lima ka pan ug ang duha ka isda. Unya mihangad siya sa langit ug nagpasalamat sa Dios. Gipikaspikas niya ang mga pan ug gihatag ngadto sa mga tinun-an nga mao usab ang nanghatag niini ngadto sa mga tawo." },
                            { verse: 20, text: "Nangaon ang tanan ug nangabusog. Unya gihipos sa mga tinun-an ang mga sobra nga nakapuno ug napulog-duha ka bukag." },
                            { verse: 21, text: "Lima ka libo ang gidaghanon sa mga tawo nga nangaon, walay labot sa mga babaye ug sa mga bata." },

                            ]
                },
                {
                    title: `Si Jesus Milakaw Ibabaw sa Tubig <br>(Mar. 6:45-52; Juan 6:15-21)`,
                    verses:[
                        { verse: 22, text: "Human niini gipasakay ni Jesus sa sakayan ang mga tinun-an ug gipauna niya ngadto sa tabok sa lanaw samtang iyang gipalakaw ang mga tawo." },
                        { verse: 23, text: "Mitungas siya nga nag-inusara sa usa ka bungtod aron mag-ampo. Ug sa pagkagabii na, si Jesus didto pa gihapon, nag-inusara." },
                        { verse: 24, text: "Niadtong tungora ang sakayan didto na sa lawod, gikusokuso sa mga balod kay ang hangin sungsungon man." },
                        { verse: 25, text: "Nianang pagkakaadlawon, si Jesus miapas kanila nga naglakaw ibabaw sa tubig." },
                        { verse: 26, text: "Sa pagkakita sa mga tinun-an kaniya nga naglakaw sa tubig, nangahadlok kaayo sila ug naninggit, “Multo!”" },
                        { verse: 27, text: "Si Jesus miingon kanila, “Ayaw kamo kahadlok! Ako kini!”" },
                        { verse: 28, text: "Unya si Pedro miingon, “Ginoo, kon ikaw kana, palakta ako sa tubig nganha kanimo.”" },
                        { verse: 29, text: "“Dali ngari,” mitubag si Jesus. Busa mikawas si Pedro sa sakayan ug milakaw sa tubig ngadto kang Jesus." },
                        { verse: 30, text: "Apan sa pagkamatikod niya sa kusog nga hangin, nahadlok siya ug misugod pagkaunlod. Busa misinggit siya, “Ginoo, luwasa ako!”" },
                        { verse: 31, text: "Dihadiha gikuptan siya ni Jesus ug gibira ug miingon si Jesus kaniya, “Pagkagamay sa imong pagtuo! Nganong nagduhaduha ka man?”" },
                        { verse: 32, text: "Ug nanakay silang duha sa sakayan. Unya mihunong ang hangin." },
                        { verse: 33, text: "Ang mga tinun-an nga didto sa sakayan misimba kang Jesus ug miingon, “Ikaw gayod ang Anak sa Dios!”" },

                    ]
                },
                {
                    title: `Giayo ni Jesus ang mga Masakiton didto sa Genesaret <br>(Mar. 6:53-56)`,
                    verses: [
                        { verse: 34, text: "Mitabok sila sa lanaw ug midunggo sa Genesaret." },
                        { verse: 35, text: "Nailhan si Jesus sa mga tawo busa gipakuha nila ang mga masakiton sa kasikbit nga kayutaan ug ilang gidala ngadto kang Jesus." },
                        { verse: 36, text: "Mihangyo sila kaniya nga pahikapon ang mga masakiton bisan na lang sa sidsid sa iyang bisti. Ug ang tanan nga nakahikap niini nangaayo." },

                    ]
                }

            ]
        }

        sampleVerses["Mateo"][14] = {
            chapter: 15, 
            sections: [
                {
                    title: `Ang mga Kabiling Pagtulon-an sa mga Katigulangan <br>(Mar. 7:1-13)`, 
                    verses: [
                        { verse: 1, text: "May pipila ka Pariseo ug mga magtutudlo sa Balaod gikan sa Jerusalem nga miduol kang Jesus. Nangutana sila kaniya," },
                        { verse: 2, text: "“Nganong naglapas man ang imong mga tinun-an sa pagtulon-an nga gipasunod kanato sa atong mga katigulangan? Dili sila manghunaw sa hustong paagi sa dili pa sila mangaon!”" },
                        { verse: 3, text: "Si Jesus mitubag, “Ug nganong naglapas man usab kamo sa sugo sa Dios ug mao hinuoy inyong gisunod ang inyong kaugalingong pagtulon-an?" },
                        { verse: 4, text: "Kay nag-ingon ang Dios, ‘Tahora ang imong amahan ug inahan,’ ug ‘Bisag kinsa nga magsultig daotan batok sa iyang amahan o inahan kinahanglan nga patyon.’" },
                        { verse: 5, text: "Apan nagtudlo kamo nga ang usa ka tawo mahimong moingon sa iyang amahan o inahan, ‘Ang ako untang itabang kaninyo gihatag ko na sa Dios.’" },
                        { verse: 6, text: "Sa ingon niana, gitudloan ninyo siya sa dili pagtahod sa iyang amahan. Kini maoy inyong paagi sa pagsalikway sa pulong sa Dios aron ang inyong kaugalingong pagtulon-an maoy matuman." },
                        { verse: 7, text: "Mga tigpakaaron-ingnon! Husto gayod ang giingon sa Dios pinaagi kang Isaias mahitungod kaninyo:" },
                        { verse: 8, text: "‘Kining mga tawhana, nagpasidungog kanako sa pulong lamang, apan layo kanako ang ilang kasingkasing.’" },
                        { verse: 9, text: "‘Walay kapuslanan ang ilang pagsimba kanako, kay ilang gitudlo ingon nga balaod sa Dios ang mga sugo nga hinimo lamang sa tawo!’”" },

                    ]
                
                },
                {
                    title: `Ang mga Butang nga Makahugaw sa Tawo <br> (Mar. 7:14-23)`,

                    verses: [
                        { verse: 10, text: "Unya gipaduol ni Jesus ang mga tawo ngadto kaniya ug miingon siya kanila, “Pamati kamo ug sabta ninyo kini:" },
                        { verse: 11, text: "Dili ang mosulod sa baba sa tawo ang makahugaw kaniya kondili ang mogula sa iyang baba.”" },
                        { verse: 12, text: "Unya miduol kaniya ang mga tinun-an ug miingon, “Nasayod ka ba nga naglagot ang mga Pariseo tungod sa imong gisulti?”" },
                        { verse: 13, text: "Si Jesus mitubag, “Ang tanang tanom nga wala itanom sa akong Amahan nga atua sa langit pagaibton." },
                        { verse: 14, text: "Pasagdi lang sila kay sila mga giya nga buta. Ug kon ang usa ka buta maoy mag-agak sa laing buta, silang duha mangahulog sa kanal.”" },
                        { verse: 15, text: "Si Pedro miingon, “Sultihi kami sa kahulogan niining sambingaya.”" },
                        { verse: 16, text: "Si Jesus miingon kanila, “Dili pa ba usab diay kamo kasabot?" },
                        { verse: 17, text: "Wala ba diay kamo makasabot nga ang mosulod sa baba sa tawo mopadulong sa iyang tiyan ug unya mogula sa iyang lawas?" },
                        { verse: 18, text: "Apan ang mga butang nga mogula sa baba naggikan sa kasingkasing. Kining mga butanga maoy makahugaw sa tawo." },
                        { verse: 19, text: "Kay gikan sa iyang kasingkasing manggula ang mga daotang hunahuna: pagpatay, pagpanapaw, daotan nga pagpakighilawas, pagpangawat, pagpamakak ug pagbutangbutang." },
                        { verse: 20, text: "Kini ang mga butang nga makahugaw sa tawo. Apan dili makahugaw sa tawo kon mokaon siya nga dili una manghunaw sumala sa ilang giingon nga maoy angayng buhaton.”" },

                    ]
                },
                {
                    title: `Ang Pagsalig sa Usa ka Babaye <br>(Mar. 7:24-30)`,
                    verses: [
                        { verse: 21, text: "Unya mibiya si Jesus niadtong dapita ug miadto sa kayutaan duol sa mga siyudad sa Tiro ug sa Sidon." },
                        { verse: 22, text: "Usa ka babaye nga taga-Canaan nga nagpuyo niadtong dapita ang miduol kaniya ug nagpakiluoy, “Ginoo, Anak ni David, kaluy-i intawon ako! Ang akong anak nga babaye giyawaan ug nag-antos pag-ayo.”" },
                        { verse: 23, text: "Apan wala motubag si Jesus. Miduol ang iyang mga tinun-an kaniya ug miingon, “Papahawaa siya kay nagsunodsunod siya kanato ug saba kaayo!”" },
                        { verse: 24, text: "Unya mitubag si Jesus, “Gipadala ako ngadto lamang sa nawalang mga karnero sa nasod sa Israel.”" },
                        { verse: 25, text: "Apan miduol ang babaye ug miluhod sa atubangan ni Jesus. “Ginoo, tabangi intawon ko!” miingon siya." },
                        { verse: 26, text: "Si Jesus mitubag, “Dili maayo nga kuhaon ang pagkaon sa mga anak aron ipakaon sa mga iro.”" },
                        { verse: 27, text: "Ang babaye mitubag, “Tinuod kana, Ginoo, apan bisan gani ang mga iro makakaon man sa mga mumho nga mahulog gikan sa lamisa sa agalon.”" },
                        { verse: 28, text: "Ug si Jesus mitubag kaniya, “Babaye, pagkadako sa imong pagsalig! Matuman ang imong gihangyo.” Ug niadto gyod dayong gutloa naayo ang iyang anak." },


                    ]
                },
                {
                    title:  `Giayo ni Jesus ang Daghang mga Tawo`,
                    verses:[
                        { verse: 29, text: "Si Jesus mibiya niadtong dapita ug misubay sa daplin sa Lanaw sa Galilea. Mitungas siya sa usa ka bungtod ug milingkod didto." },
                        { verse: 30, text: "Ug may dagkong panon sa mga tawo nga miduol kaniya nga nagdalag mga bakol, pilay, buta, amang ug uban pang mga masakiton. Gipahimutang nila ang mga masakiton sa tiilan ni Jesus. Ug giayo niya sila." },
                        { verse: 31, text: "Natingala ang mga tawo sa pagkakita nila nga ang mga amang nakasulti, ang mga pilay nangaayo, ang mga bakol nakalakaw ug ang mga buta nakakita. Ug gidayeg nila ang Dios sa Israel." },

                    ]
                },
                {
                    title: `Gipakaon ni Jesus ang 4,000 ka Tawo <br>(Mar. 8:1-10)`,
                    verses:[
                        { verse: 32, text: "Gitawag ni Jesus ang iyang mga tinun-an ug giingnan, “Naluoy ako niining mga tawhana kay tulo na ka adlaw nga sila nakig-uban kanako ug wala na silay makaon. Dili ko gusto nga papaulion sila nga walay kaon kay tingali unyag kuyapan sila sa dalan.”" },
                        { verse: 33, text: "Ang mga tinun-an nangutana kaniya, “Asa man ta mangitag igong ipakaon niining mga tawhana nga awaaw man ning dapita?”" },
                        { verse: 34, text: "“Pila ba ka pan ang inyong dala?” nangutana si Jesus.  Sila mitubag, “Pito ug may pipila ka gagmayng isda.”" },
                        { verse: 35, text: "Busa ang mga tawo gipalingkod ni Jesus sa yuta." },
                        { verse: 36, text: "Unya gikuha niya ang pito ka pan ug ang mga isda ug nagpasalamat siya sa Dios. Iya kining gipikaspikas ug gihatag ngadto sa mga tinun-an. Gihatag usab kini sa mga tinun-an ngadto sa mga tawo." },
                        { verse: 37, text: "Ug nangaon silang tanan ug nangabusog. Nakahipos pa gayod ang mga tinun-an ug pito ka bukag nga salin." },
                        { verse: 38, text: "Upat ka libo ang mga tawo nga nangaon, wala pay labot sa ihap ang mga babaye ug mga bata." },
                        { verse: 39, text: "Unya gipapauli ni Jesus ang mga tawo ug misakay siya sa sakayan ug miadto sa yuta sa Magadan." },

                    ]
                }

            ]
        }

        sampleVerses["Mateo"][15] = {
            chapter: 16, 
            sections: [
                {
                    title: `Mihangyo Silang Pakit-og Milagro <br>(Mar. 8:11-13; Luc. 12:54-56)`,
                    verses: [
                        { verse: 1, text: "Miadto kang Jesus ang pipila ka Pariseo ug Saduseo aron pagbitik kaniya. Busa gihangyo nila siya paghimog milagro aron pagpaila nga pinadala gayod siya sa Dios." },
                        { verse: 2, text: "Apan mitubag si Jesus, “Inigsalop na sa adlaw moingon kamo, ‘Maayo ang panahon kay pula man ang langit.’" },
                        { verse: 3, text: "Ug sa pagkabuntag moingon kamo, ‘Moulan karon kay pula ang langit ug nagdag-um.’ Makatagna kamo sa panahon pinaagi sa pagtan-aw sa langit. Apan nganong dili man kamo maantigong mosabot sa kahulogan sa mga timaan niining mga panahona?" },
                        { verse: 4, text: "Pagkadaotan sa mga tawo karon ug wala nay pagtuo sa Dios!” Ug midugang si Jesus pag-ingon, “Naghangyo kamo kanako sa paghimog milagro apan dili ko kini himoon! Ang bugtong milagro nga ikahatag ko kaninyo mao ang milagro nga nahitabo kang Jonas.” Unya milakaw siya." },

                    ]
                },
                {
                    title: `Ang Igpapatubo sa Pan sa mga Pariseo ug sa mga Saduseo <br>(Mar. 8:14-21)`,
                    verses:[
                        { verse: 5, text: "Nakatabok na sa lanaw ang mga tinun-an apan nakalimot sila pagdalag pan." },
                        { verse: 6, text: "Giingnan sila ni Jesus, “Pagbantay kamo sa igpapatubo sa pan sa mga Pariseo ug sa mga Saduseo.”" },
                        { verse: 7, text: "Ang mga tinun-an nagsultihanay nga nag-ingon, “Nagsulti siya niini kay wala man kita makadalag pan.”" },
                        { verse: 8, text: "Apan nasayod si Jesus sa ilang gipanulti busa nangutana siya kanila, “Nganong naghisgot man kamo nga wala kamo makadalag pan? Pagkagamay sa inyong pagtuo!" },
                        { verse: 9, text: "Wala ba gihapon kamo makasabot hangtod karon? Wala ba kamo makahinumdom sa lima ka pan nga akong gipikaspikas alang sa lima ka libo ka tawo? Pila man ka bukag ang napuno sa salin?" },
                        { verse: 10, text: "Ug mahitungod niadtong pito ka pan alang sa upat ka libo ka tawo, pila man ka bukag ang napuno sa salin?" },
                        { verse: 11, text: "Nganong wala man kamo makasabot nga dili pan ang akong gihisgotan? Ang gusto nakong ipasabot mao nga magbantay kamo sa igpapatubo sa pan sa mga Pariseo ug sa mga Saduseo!”" },
                        { verse: 12, text: "Unya nasabtan sa mga tinun-an nga dili diay ang igpapatubo sa pan ang gipalikayan ni Jesus kanila kondili ang pagtulon-an sa mga Pariseo ug sa mga Saduseo." },

                    ]
                },
                {
                    title: `Ang Pahayag ni Pedro mahitungod kang Jesus <br>(Mar. 8:27-30; Luc. 9:18-21)`,
                    verses: [
                        { verse: 13, text: "Unya miadto si Jesus sa yuta duol sa lungsod sa Cesarea Filipo ug didto nangutana siya sa iyang mga tinun-an, “Sumala sa mga tawo, kinsa man ang Anak sa Tawo?”" },
                        { verse: 14, text: "Sila mitubag, “May nag-ingon nga siya mao si Juan nga Magbubunyag. Ang uban nag-ingon nga siya mao si Elias samtang ang uban nag-ingon nga siya mao si Jeremias o laing propeta.”" },
                        { verse: 15, text: "Si Jesus nangutana kanila, “Apan kamo, unsa may inyong ikasulti? Kinsa man ako?”" },
                        { verse: 16, text: "Ug mitubag si Simon Pedro, “Ikaw mao ang Mesiyas, ang Anak sa Dios nga buhi.”" },
                        { verse: 17, text: "Giingnan siya ni Jesus, “Bulahan ka gayod, Simon nga anak ni Jonas. Kay kining maong kamatuoran wala moabot kanimo pinaagi sa bisan unsang tawhanong pamaagi. Ang akong Amahan nga atua sa langit mao ang naghatag niini kanimo." },
                        { verse: 18, text: "Busa sultihan ko ikaw: ikaw si Pedro ug ibabaw niining bato tukoron ko ang akong simbahan ug bisan gani ang kamatayon dili gayod makabuntog niini." },
                        { verse: 19, text: "Ihatag ko kanimo ang mga yawi sa Gingharian sa langit: ang imong idili dinhi sa yuta, idili usab didto sa langit. Ug ang imong itugot dinhi sa yuta, itugot usab didto sa langit.”" },
                        { verse: 20, text: "Unya gipasidan-an ni Jesus ang iyang mga tinun-an nga dili isaba kang bisan kinsa nga siya mao ang Mesiyas." },

                    ]
                },
                {
                    title: `Gipasidaan ni Jesus ang Iyang Pag-antos ug Kamatayon <br> (Mar. 8:31–9:1; Luc. 9:22-27)`,
                    verses:[
                        { verse: 21, text: "Sukad niadtong higayona, giklaro na gyod ni Jesus pagsulti ngadto sa iyang mga tinun-an: “Kinahanglang moadto ako sa Jerusalem aron paantuson pag-ayo sa mga namunoan sa mga Judio ug sa mga pangulong pari ingon man sa mga magtutudlo sa Balaod. Patyon ako nila apan sa ikatulo ka adlaw mabanhaw ako.”" },
                        { verse: 22, text: "Tungod niini gidala siya ni Pedro layo sa uban ug giingnan, “Dili unta kana mahitabo kanimo, Ginoo!”" },
                        { verse: 23, text: "Miatubang si Jesus ug miingon kang Pedro, “Pahawa, Satanas! Usa ikaw ka babag sa akong agianan kay ang imong hunahuna, hunahuna sa tawo ug dili sa Dios!”" },
                        { verse: 24, text: "Unya miingon si Jesus sa iyang mga tinun-an, “Kon ang usa ka tawo buot mahimong akong tinun-an kinahanglang dili siya magtuman sa iyang kaugalingon, pas-anon niya ang iyang krus ug mosunod siya kanako." },
                        { verse: 25, text: "Kay ang gustong magluwas sa iyang kaugalingong kinabuhi mawad-an hinuon niini. Apan ang mawad-an sa iyang kinabuhi tungod kanako makabaton niini." },
                        { verse: 26, text: "May makuha ba ang tawo kon maangkon niya ang tibuok kalibotan apan kawad-an siya sa iyang kinabuhi? Wala gayod! Walay bisan unsa nga ikahatag ang tawo aron mabawi niya ang iyang kinabuhi." },
                        { verse: 27, text: "Kay ang Anak sa Tawo hapit na moabot uban sa himaya sa iyang Amahan kinuyogan sa iyang mga anghel ug unya balosan niya ang tagsatagsa sumala sa iyang nabuhat." },
                        { verse: 28, text: "Hinumdomi kini: aniay pipila dinhi nga dili mamatay hangtod nga makit-an nila ang Anak sa Tawo nga moabot aron maghari.”" },


                    ]
                }

            ]
        }

        sampleVerses["Mateo"][16] = {
            chapter: 17, 
            sections: [
                {
                    title: `Nausab ang Panagway ni Jesus <br>(Mar. 9:2-13; Luc. 9:28-36)`,
                    verses:[
                        { verse: 1, text: "Tapos sa unom ka adlaw, gidala ni Jesus si Pedro ug ang magsoon nga si Santiago ug si Juan ngadto sa usa ka taas nga bukid." },
                        { verse: 2, text: "Samtang nagtan-aw sila kaniya, nausab ang iyang panagway. Ang iyang nawong misanag sama sa adlaw ug ang iyang bisti mihayag sa kaputi." },
                        { verse: 3, text: "Unya nakita sa tulo ka tinun-an si Moises ug si Elias nga nakigsulti kang Jesus." },
                        { verse: 4, text: "Si Pedro miingon kang Jesus, “Ginoo, maayo nga ania kita dinhi. Kon gusto ka, magbuhat ako dinhi ug tulo ka tolda, usa alang kanimo, usa alang kang Moises ug usa alang kang Elias.”" },
                        { verse: 5, text: "Samtang nagsulti siya niini, usa ka masanag nga panganod ang mitabon kanila ug unya usa ka tingog gikan sa panganod ang miingon, “Kini mao ang pinangga kong Anak nga akong gikahimut-an. Pamati kamo kaniya!”" },
                        { verse: 6, text: "Sa pagkadungog sa tulo ka tinun-an sa tingog, nangahadlok sila pag-ayo busa nanghapa sila." },
                        { verse: 7, text: "Si Jesus miduol ug mihikap kanila nga nag-ingon, “Tindog kamo ug ayaw kahadlok.”" },
                        { verse: 8, text: "Sa paghangad nila, wala na silay laing nakita gawas kang Jesus." },
                        { verse: 9, text: "Samtang nanglugsong sila sa bukid, gipasidan-an sila ni Jesus, “Ayaw ninyo isulti kang bisan kinsa kining panan-awon nga inyong nakita hangtod nga mabanhaw na ang Anak sa Tawo.”" },
                        { verse: 10, text: "Unya nangutana kang Jesus ang mga tinun-an, “Nganong nag-ingon man ang mga magtutudlo sa Balaod nga kinahanglan nga moanhi pag-una si Elias usa moabot ang Mesiyas?”" },
                        { verse: 11, text: "Si Jesus mitubag, “Si Elias una gayod nga moanhi aron andamon niya ang tanan." },
                        { verse: 12, text: "Apan sultihan ko kamo: mianhi na si Elias apan wala makaila kaniya ang mga tawo busa ilang gibuhat kaniya ang kutob sa ilang gusto. Sa samang paagi, ang Anak sa Tawo ila usab nga pasipad-an.”" },
                        { verse: 13, text: "Unya nakasabot ang mga tinun-an nga si Juan nga Magbubunyag mao ang iyang gihisgotan." },

                    ]
                },
                {
                    title: `Giayo ni Jesus ang Usa ka Bata nga Giyawaan <br> (Mar. 9:14-29; Luc. 9:37-43a)`,
                    verses:[
                            { verse: 14, "text": "Sa pagbalik nila ngadto sa katawhan, may miduol kang Jesus. Miluhod siya sa atubangan ni Jesus" },
                            { verse: 15, "text": "ug miingon, “Sir, kaluy-i intawon ang akong anak! Patulon siya ug grabi ang iyang pag-antos kon mosugmat kini. Makadaghan na gani siya mahulog sa kalayo o sa tubig." },
                            { verse: 16, "text": "Gidala na nako siya ngadto sa imong mga tinun-an apan wala sila makaayo kaniya.”" },
                            { verse: 17, "text": "Si Jesus mitubag, “Pagkawalay pagtuo ug pagkagahi ninyog ulo! Magsigi na ba lang kog uban-uban ninyo? Magsigi na ba lang kog pailob ninyo? Dad-a dinhi ang bata!”" },
                            { verse: 18, "text": "Ug gihinginlan ni Jesus ang yawa ug migula kini gikan sa bata ug naayo siya dihadiha." },
                            { verse: 19, "text": "Unya miduol sa tago kang Jesus ang mga tinun-an ug nangutana kaniya, “Nganong wala man kami makapagula sa yawa?”" },
                            { verse: 20, "text": "Si Jesus mitubag, “Tungod kay wala man kamoy igong pagtuo. Sultihan ko kamo: kon may pagtuo kamo nga sama kadako sa liso sa mustasa, makasugo kamo niining bungtora sa pagbalhin ug mobalhin kini. Pinaagi sa pagtuo walay dili mahimo ninyo!”" }
                            ]

                },
                {
                    title: `Gipasidaan na Usab ni Jesus ang Iyang Kamatayon <br>(Mar. 9:30-32; Luc. 9:43b-45)`,
                    verses:[
                            { verse: 22, "text": "Unya ang tanang tinun-an nagkapundok didto sa Galilea. Miingon si Jesus kanila, “Ang Anak sa Tawo hapit na itugyan ngadto sa mga tawo" },
                            { verse: 23, "text": "nga mopatay kaniya. Apan sa ikatulo ka adlaw mabanhaw siya.” Tungod niini nasubo pag-ayo ang mga tinun-an." }
                        ]

                },
                {
                    title: `Ang Pagbayad sa Buhis alang sa Templo`,
                    verses:[
                            { "verse": 24, "text": "Miabot si Jesus ug ang iyang mga tinun-an didto sa Capernaum. Miduol kang Pedro ang mga kobrador sa buhis alang sa Templo ug nangutana, “Nagbayad ba ang inyong Magtutudlo sa buhis alang sa Templo?”" },
                            { "verse": 25, "text": "“Oo, nagbayad,” mitubag si Pedro. Sa pagsulod ni Pedro sa balay, miuna pagsulti si Jesus, “Simon, unsa may imong hunahuna? Kinsa man ang magbayad ug buhis o bayranan ngadto sa mga hari niining kalibotana? Ang mga lungsoranon ba o ang mga langyaw?”" },
                            { "verse": 26, "text": "Si Pedro mitubag, “Ang mga langyaw.” Si Jesus miingon, “Kon mao kana, ang mga lungsoranon dili kinahanglang mobayad." },
                            { "verse": 27, "text": "Apan dili kita gusto nga kining mga tawhana masilo. Busa lakaw ngadto sa lanaw ug pamasol. Biraha ang unang isda nga mokubit ug sa baba niini imong makita ang usa ka salapi nga igong ibayad sa imo ug sa akong buhis alang sa Templo. Kuhaa kini ug bayri ang atong buhis.”" }
                        ]

                }
            ]
        }

        sampleVerses["Mateo"][17] = {
            chapter: 18, 
            sections: [
                {
                    title: `Kinsa ang Labing Dako? <br> (Mar. 9:33-37; Luc. 9:46-48)`,
                    verses:[
                        { "verse": 1, "text": "Niadtong higayona ang mga tinun-an nangadto kang Jesus ug nangutana, “Kinsa man ang ilhong labing dako sa Gingharian sa langit?”" },
                        { "verse": 2, "text": "Si Jesus mitawag ug usa ka bata ug gipatindog niya sa atubangan nila." },
                        { "verse": 3, "text": "Unya miingon siya, “Mao kini ang tinuod: gawas kon mausab kamo ug mahimong sama sa mga bata, dili gayod kamo makasulod sa Gingharian sa langit." },
                        { "verse": 4, "text": "Ang labing dako ilalom sa pagmando sa Dios mao kadtong magpaubos sa iyang kaugalingon ug magpakasama niining bataa." },
                        { "verse": 5, "text": "Ug ang magdawat sa usa ka bata nga sama niini sa akong ngalan, magadawat kanako." }
                        ]
                },
                {
                    title: `Mga Pagtintal sa Pagpakasala <br> (Mar. 9:42-48; Luc. 17:1-2)`,
                    verses:[
                        { "verse": 6, "text": "“Bisan kinsa nga mahimong hinungdan nga makasala kining mga gagmayng bata nga nagtuo kanako, mas maayo pa nga hiktan ug dako nga galingang bato ang iyang liog ug itambog siya sa lawod." },
                        { "verse": 7, "text": "Pagkaalaot gayod sa kalibotan kay anaa man niini ang mga butang nga makaangin sa mga tawo sa pagpakasala! Kining mga butanga mahitabo gayod kanunay apan alaot ang tawo nga maghimo niini!" },
                        { "verse": 8, "text": "“Kon ang imong kamot o ang imong tiil makaangin kanimo sa pagpakasala, putla kini ug ilabay! Mas maayo pa nga mosulod ka sa kinabuhing dayon nga usa ray kamot o usay tiil kay sa kumpleto kag kamot ug tiil apan itambog ka sa kalayo nga walay pagkapalong." },
                        { "verse": 9, "text": "Ug kon ang imong mata makaangin kanimo sa pagpakasala, lugita kini ug ilabay! Mas maayo pa nga mosulod ka sa kinabuhing dayon nga usa ray mata kay sa kumpleto kag mata apan itambog ka sa kalayo sa impirno." }
                        ]
                },
                {
                    title: `Ang Sambingay mahitungod sa Karnero nga Nawala`,
                    verses:[
                        { "verse": 10, "text": "“Matngoni ninyo nga dili kamo magtamay bisag usa niining mga gagmayng bata nga nagtuo kanako. Kay sultihan ko kamo nga ang ilang mga anghel atua kanunay sa atubangan sa akong Amahan didto sa langit." },
                        { "verse": 12, "text": "“Sa inyong hunahuna, unsa may buhaton sa usa ka tawo kon kawad-an siyag usa sa iyang usa ka gatos ka karnero? Iya gayong biyaan ang 99 nga manibsib didto sa bungtod ug molakaw siya aron pagpangita sa nawala." },
                        { "verse": 13, "text": "Sultihan ko kamo nga sa dihang makit-an na niya kini, mas malipay pa siya pag-ayo tungod niining karneroha kay sa 99 nga wala mawala." },
                        { "verse": 14, "text": "Sa samang paagi, ang inyong Amahan nga atua sa langit dili buot nga may mawala bisag usa niining mga gagmayng bata." }
                        ]

                },
                {
                    title: `Ang Igsoon nga Nakasala`,
                    verses:[
                            { "verse": 15, "text": "“Kon ang imong igsoon makasala kanimo, adtoa siya ug pakit-a siya sa iyang sayop. Apan himoa kini nga kamo rang duha. Kon mamati siya kanimo, magkauli ang inyong maayong kabubut-on." },
                            { "verse": 16, "text": "Apan kon dili siya mamati kanimo, pagdalag usa o duha ka tawo aron ang matag sumbong kapamatud-an sa duha o tulo ka saksi, sumala sa giingon sa kasulatan." },
                            { "verse": 17, "text": "Ug kon dili gayod siya mamati kanila, isulti ang tanan ngadto sa simbahan. Ug kon dili siya mamati sa simbahan, isipa siya nga usa ka dili magtutuo o kobrador sa buhis." }
                        ]

                },
                {
                    title: `Ang Pagdili ug ang Pagtugot`,
                    verses:[
                            { "verse": 18, "text": "“Ug busa sultihan ko kamong tanan: ang inyong idili dinhi sa yuta, idili usab didto sa langit ug ang inyong itugot dinhi sa yuta, itugot usab didto sa langit." },
                            { "verse": 19, "text": "“Ug sultihan ko pa gayod kamo: kon duha kaninyo dinhi sa yuta magkauyon sa pagpangayo bisag unsang butanga, kini ihatag kaninyo sa akong Amahan nga atua sa langit." },
                            { "verse": 20, "text": "Kay kon may duha o tulo nga magkatigom sa akong ngalan, anaa ako uban kanila.”" }
                    ]

                },
                {
                    title: `Ang Sambingay mahitungod sa Sulugoon nga Wala Mopasaylo`,
                    verses:[
                            { "verse": 21, "text": "Unya miduol si Pedro kang Jesus ug nangutana, “Ginoo, kon ang akong igsoon kanunay makasala kanako, hangtod kapila ko man siya pasayloon? Kapito ba?”" },
                            { "verse": 22, "text": "Si Jesus mitubag, “Dili kay kapito ra, kondili kapitoan ka pito." },
                            { "verse": 23, "text": "Kay ilalom sa pagmando sa Dios ang kahimtang sama sa usa ka hari nga naghusay sa mga utang sa iyang mga sulugoon." },
                            { "verse": 24, "text": "Sa diha nga nagsugod siya paghusay, gidala ngadto kaniya ang usa ka sulugoon nga nakautang kaniyag dako kaayong kantidad." },
                            { "verse": 25, "text": "Wala siyay igong ikabayad sa iyang utang. Busa misugo ang iyang agalon nga ibaligya siya lakip ang iyang asawa ug ang iyang mga anak ug ang tanan nga iyaha aron makabayad siya sa utang." },
                            { "verse": 26, "text": "Miluhod ang sulugoon sa atubangan sa iyang agalon ug nagpakiluoy nga nag-ingon, ‘Sir, ayaw intawon ako apikiha kay mobayad ra unya ko sa tanan kong utang!’" },
                            { "verse": 27, "text": "Naluoy kaniya ang agalon busa gipapas niya ang utang sa sulugoon ug iyang gipalakaw." },
                            { "verse": 28, "text": "Milakaw kining maong sulugoon ug gikasugat niya ang usa sa iyang mga kaubang sulugoon nga nakautang kaniya ug gamay ra kaayong kantidad. Iya dayon kining gilabni, gituok ug giingnan, ‘Bayri na ko sa imong utang!’" },
                            { "verse": 29, "text": "Ang iyang kaubang sulugoon miluhod ug nagpakiluoy kaniya, ‘Ayaw intawon ako apikiha kay mobayad ra unya ko nimo!’" },
                            { "verse": 30, "text": "Apan wala siya mosugot. Gipapriso hinuon niya kini hangtod nga makabayad sa utang." },
                            { "verse": 31, "text": "Sa pagkakita sa ubang sulugoon sa nahitabo, nasubo sila pag-ayo. Nangadto sila sa ilang agalon ug gisuginlan nila siya sa tanan." },
                            { "verse": 32, "text": "Busa gipatawag sa agalon ang sulugoon ug giingnan, ‘Wala kay puangod! Gipapas ko ang tanan mong utang kay nagpakiluoy ka man kanako." },
                            { "verse": 33, "text": "Angay ka untang maluoy sa imong isigkasulugoon, sama nga ako naluoy kanimo!’" },
                            { "verse": 34, "text": "Nasuko pag-ayo ang agalon ug gipapriso niya ang sulugoon aron silotan hangtod nga makabayad siya sa tanang utang.”" },
                            { "verse": 35, "text": "Ug gitapos ni Jesus ang sambingay sa pag-ingon, “Ingon usab niana ang buhaton kaninyo sa akong Amahan nga atua sa langit kon dili kamo mopasaylo sa inyong isigkatawo sa kinasingkasing gayod.”" }
                            ]

                }

            ]
        }

        sampleVerses["Mateo"][18] = {
            chapter: 19, 
            sections: [
                {title: `Nagtudlo si Jesus mahitungod sa Pakigbulag <br> (Mar. 10:1-12)`,
                    verses: [
                            { verse: 1, text: "Tapos si Jesus makasulti niining mga butanga, mibiya siya sa lalawigan sa Galilea ug miadto sa Judea, tabok sa Suba sa Jordan." },
                            { verse: 2, text: "Misunod kaniya ang daghang mga tawo ug didto iyang giayo ang mga masakiton." },
                            { verse: 3, text: "May pipila ka Pariseo nga miduol ug misulay pagbitik kaniya pinaagi sa pagpangutana, “Nagtugot ba ang atong Balaod nga ang bana makabulag sa iyang asawa sa bisan unsang hinungdan?”" },
                            { verse: 4, text: "Si Jesus mitubag, “Wala ba kamo makabasa niini sa kasulatan nga sa sinugdan ang Dios naghimo kanila nga lalaki ug babaye?" },
                            { verse: 5, text: "Nag-ingon siya, ‘Tungod niini ang lalaki mobiya sa iyang amahan ug inahan ug motipon sa iyang asawa ug silang duha mahimong usa.’" },
                            { verse: 6, text: "Busa dili na sila duha kondili usa lamang. Tungod niini kinahanglang dili bulagon sa tawo ang gihiusa sa Dios.”" },
                            { verse: 7, text: "Ang mga Pariseo nangutana kaniya, “Kon mao kana, nganong nagtugot man si Moises nga makabulag ang bana sa iyang asawa human siya mosulat ug pahibalo sa pakigbulag sa iyang asawa?”" },
                            { verse: 8, text: "Si Jesus mitubag, “Mitugot si Moises kaninyo sa pagbulag sa inyong asawa kay gahi man kamog ulo. Apan dili gayod kini mao sa sinugdan." },
                            { verse: 9, text: "Busa sultihan ko kamo nga bisag kinsa nga mobulag sa iyang asawa nga wala magluib kaniya, makapanapaw kon siya magminyog lain.”" },
                            { verse: 10, text: "Ang iyang mga tinun-an miingon kaniya, “Kon mao kini ang mahitabo tali sa bana ug asawa, maayo pag dili na lang magminyo.”" },
                            { verse: 11, text: "Si Jesus mitubag, “Kining maong pagtulon-an dili alang sa tanan kondili alang lamang niadtong gihatagan sa Dios niini." },
                            { verse: 12, text: "Kay may nagkalainlaing katarongan nganong dili makaminyo ang ubang mga tawo: may dili gayod makahimo pagminyo tungod kay natawo sila ingon nga yunuko. Ang uban dili makaminyo tungod kay gikapon sila sa mga tawo aron mahimong yunuko. Ug ang uban boluntaryo nga dili magminyo aron mas makapangalagad sila sa Dios. Sabta kini kon makasabot kamo!”" }
                        ]
                },
                {title: `Gipanalanginan ni Jesus ang Gagmayng mga Bata <br>(Mar. 10:13-16; Luc. 18:15-17)`,
                    verses: [
                            { verse: 13, text: "May pipila ka tawo nga nagdalag mga bata ngadto kang Jesus aron iyang pandongan sa iyang kamot ang ilang mga ulo ug mag-ampo alang kanila apan gikasab-an sa mga tinun-an kadtong mga tawhana." },
                            { verse: 14, text: "Si Jesus miingon, “Paduola kanako ang mga bata ug ayaw sila pugngi kay ang gingharian sa langit ila sa mga tawo nga sama kanila.”" },
                            { verse: 15, text: "Ug iyang gipandong ang iyang kamot sa ilang mga ulo ug unya milakaw siya." }
                        ]
        },
                {title: `Ang Batan-on nga Dato <br>(Mar. 10:17-31; Luc. 18:18-30)`,
                     verses: [
                            { verse: 16, text: "Usa niana ka higayon, may miduol kang Jesus ug nangutana kaniya, “Magtutudlo, unsa may maayo nakong buhaton aron maangkon nako ang kinabuhing dayon?”" },
                            { verse: 17, text: "Si Jesus mitubag, “Nganong nangutana ka man kanako kon unsa ang maayo? Usa ray maayo, ang Dios lamang. Tumana ang mga sugo kon buot ka mosulod sa kinabuhi.”" },
                            { verse: 18, text: "Siya nangutana, “Unsang mga sugoa?” Si Jesus mitubag, “Ayaw pagpatay; ayaw panapaw; ayaw pangawat; ayaw pamakak;" },
                            { verse: 19, text: "Tahora ang imong amahan ug inahan; ug higugmaa ang imong isigkatawo sama sa imong kaugalingon.”" },
                            { verse: 20, text: "Ang batan-on mitubag, “Gituman ko kining tanan. Unsa pa may kinahanglan kong buhaton?”" },
                            { verse: 21, text: "Ug miingon si Jesus kaniya, “Kon gusto kang mahingpit, lakaw ug ibaligya ang tanan mong katigayonan. Ihatag ang halin ngadto sa mga kabos ug makabaton kag mga bahandi didto sa langit. Unya balik nganhi ug sunod kanako.”" },
                            { verse: 22, text: "Sa pagkadungog niini sa batan-on milakaw siya nga masulob-on kay dato man kaayo siya." },
                            { verse: 23, text: "Unya miingon si Jesus sa iyang mga tinun-an, “Sultihan ko kamo nga malisod kaayo sa usa ka dato ang pagsulod sa Gingharian sa langit." },
                            { verse: 24, text: "Usbon ko: mas lisod alang sa usa ka dato ang pagsulod sa Gingharian sa Dios, kay sa usa ka kamelyo paglusot sa lungag sa dagom.”" },
                            { verse: 25, text: "Sa pagkadungog niini sa mga tinun-an nahibulong sila pag-ayo. Busa nangutana sila, “Unya, kinsa ra man diay ang maluwas?”" },
                            { verse: 26, text: "Si Jesus mitutok kanila ug mitubag, “Kini dili mahimo sa tawo; apan mahimo sa Dios ang tanang butang.”" },
                            { verse: 27, text: "Unya miingon si Pedro, “Ginoo, among gibiyaan ang tanan ug misunod kami kanimo. Unsa may among mapaabot?”" },
                            { verse: 28, text: "Si Jesus miingon kanila, “Isulti ko kini kaninyo: iniglingkod unya sa Anak sa Tawo sa iyang mahimayaong trono diha sa Bag-ong Kalibotan, kamong napulog-duha ka tinun-an molingkod usab sa mga trono aron pagmando sa napulog-duha ka banay sa Israel." },
                            { verse: 29, text: "Ug ang tanan nga mibiya sa ilang balay, mga igsoon, amahan, inahan, mga anak o mga uma tungod kanako makadawat ug labaw sa usa ka gatos ka pilo ug hatagan pa gayod siyag kinabuhing dayon." },
                            { verse: 30, text: "Apan daghan sa nag-una karon maulahi ug daghan sa naulahi karon mahiuna." }
    ]
            }
            ]
        }

        sampleVerses["Mateo"][19] = {
            chapter: 20, 
            sections: [
                {
                    title: `Ang mga Mamumuo sa Parasan`,
                    verses: [
                            { verse: 1, text: "“Ang paghari sa Dios sama niini: Adunay tag-iya sa usa ka parasan nga milakaw sayo sa buntag aron pagpangitag mga tawo nga iyang patrabahuon." },
                            { verse: 2, text: "Misugot siya paghatag kanila sa naandang suhol nga usa ka denario ang adlaw ug gipadala sila ngadto sa iyang parasan." },
                            { verse: 3, text: "Sa pagkaalas nuybe, miadto na usab siya sa merkado ug didto nakita niya ang pipila ka tawo nga nagtindog nga walay buhat" },
                            { verse: 4, text: "Busa miingon siya kanila, ‘Trabaho usab kamo sa akong parasan ug hatagan ko kamog hustong suhol.’" },
                            { verse: 5, text: "Ug nangadto sila. Sa pagkaalas dose ug sa pagkaalas tres mao gihapon ang iyang gihimo." },
                            { verse: 6, text: "Unya sa hapit na kadto mo-alas singko miadto siya sa merkado ug didto nakakita siyag laing pipila ka tawo nga walay buhat. Siya nangutana kanila, ‘Nganong giusikan man ninyo ang tibuok adlaw?’" },
                            { verse: 7, text: "Sila nanubag, ‘Kay wala may mipatrabaho kanamo.’ Ug miingon siya kanila, ‘Kon mao kana, trabaho usab kamo didto sa akong parasan.’" },
                            { verse: 8, text: "“Sa pagsalop na sa adlaw, ang tag-iya miingon sa iyang kapatas, ‘Tawga ang mga trabahante ug hatagi sila sa ilang suhol. Unaha pagsuhol kadtong ulahing gipatrabaho ug ipaulahi kadtong unang gipatrabaho.’" },
                            { verse: 9, text: "Ang matag usa nga misugod pagtrabaho sa alas singko sa hapon gisuholan ug usa ka denario." },
                            { verse: 10, text: "Busa sa pagduol na sa mga tawo nga unang gipatrabaho, nagtuo sila nga labaw pa ang ilang madawat. Apan ang usag-usa kanila gihatagan usab ug tagsa ka denario." },
                            { verse: 11, text: "Gidawat nila ang ilang suhol ug nagbagutbot sila batok sa agalon." },
                            { verse: 12, text: "Miingon sila, ‘Kining mga tawhana nga ulahi mong gipatrabaho nagtrabaho lamang sulod sa usa ka oras samtang kami nagtrabaho sa tibuok adlaw ug napagod sa kainit. Apan bisan pa niini imo silang gihatagag samang suhol nga imong gihatag kanamo.’" },
                            { verse: 13, text: "Ang agalon mitubag sa usa kanila, ‘Pamati ra. Wala ako maglimbong nimo kay miuyon ka man sa suhol nga usa ka denario ang adlaw." },
                            { verse: 14, text: "Karon, dawata ang imong suhol ug pauli sa inyo. Maoy akong gusto nga kining tawhana nga ulahing gipatrabaho hatagan sa samang suhol nga akong gihatag kanimo." },
                            { verse: 15, text: "Wala ba diay akoy katungod sa paggamit sa akong kuwarta sumala sa akong gusto? O nasina ka ba hinuon kay ako manggihatagon man?’ ”" },
                            { verse: 16, text: "Ug gitapos ni Jesus ang sambingay sa pag-ingon, “Busa kadtong naulahi mahiuna ug kadtong nahiuna maulahi.”" }
                ]
                },
                {
                    title: `Gipasidaan ni Jesus sa Ikatulong Higayon ang Iyang Kamatayon <br>(Mar. 10:32-34; Luc. 18:31-34)`,
                    verses: [
                            { verse: 17, text: "Samtang nagtungas si Jesus paingon sa Jerusalem, nagpalain siya ug ang napulog-duha ka tinun-an ug giingnan niya sila," },
                            { verse: 18, text: "“Pamati kamo: nagpadulong kita sa Jerusalem ug didto ang Anak sa Tawo itugyan ngadto sa kadagkoan sa mga pari ug sa mga magtutudlo sa Balaod. Siya hukman nila sa kamatayon" },
                            { verse: 19, text: "Ug unya itugyan nila ngadto sa mga dili Judio. Bugalbugalan siya ug latoson ug ilansang sa krus. Apan sa ikatulo ka adlaw banhawon siya.”" }
                    ]
                },
                {
                    title: `Ang Hangyo sa Usa ka Inahan <br>(Mar. 10:35-45)`,
                    verses: [
                            { verse: 20, text: "Unya ang asawa ni Sebedeo miadto kang Jesus uban sa iyang mga anak, miyukbo ug mihangyo kaniyag usa ka butang." },
                            { verse: 21, text: "Nangutana si Jesus kaniya, “Unsa may imong gusto?” Siya mitubag, “Isaad kanako nga kining duha ko ka anak palingkoron mo sa imong tuo ug sa imong wala kon maghari ka na.”" },
                            { verse: 22, text: "Si Jesus mitubag kanila, “Wala kamo masayod sa inyong gipangayo. Makahimo ba kamo pag-inom sa kupa sa pag-antos nga sa dili madugay akong imnan?” Sila mitubag, “Oo, makahimo.”" },
                            { verse: 23, text: "Si Jesus miingon kanila, “Kamo makainom gyod gikan sa akong kupa apan wala akoy katungod sa pagpili kon kinsa ang palingkoron sa akong tuo ug sa akong wala. Kining mga dapita alang lamang niadtong giandaman niini sa akong Amahan.”" },
                            { verse: 24, text: "Sa pagkadungog niini sa napulo ka tinun-an, nangasuko sila sa duha ka magsoon." },
                            { verse: 25, text: "Busa gitawag ni Jesus silang tanan ug giingnan, “Nasayod kamo nga ang mga namunoan niining kalibotana nagpahawud-hawod ug ang mga kadagkoan hangol ug gahom." },
                            { verse: 26, text: "Apan dili kini mao ang paagi nga angay ninyong sundon. Kon usa kaninyo gustong ilhon nga dako kinahanglan nga mag-alagad siya sa tanan." },
                            { verse: 27, text: "Ug kon usa kaninyo gusto nga molabaw sa tanan kinahanglan nga magpaulipon siya kaninyo—" },
                            { verse: 28, text: "sama sa Anak sa Tawo nga wala moanhi aron alagaran kondili sa pag-alagad ug paghatag sa iyang kinabuhi aron pagluwas sa daghang tawo.”" }
                        ]
                },
                {
                    title: `Giayo ni Jesus ang Duha ka Buta <br>(Mar. 10:46-52; Luc. 18:35-43)`,
                                        verses: [
                            { verse: 29, text: "Sa ilang pagbiya sa Jerico, daghang tawo ang misunod kang Jesus." },
                            { verse: 30, text: "May duha ka buta nga lalaki nga naglingkod daplin sa dalan. Nakadungog sila nga si Jesus hapit nang molabay busa misinggit sila, “Kaliwat ni David! Kaluy-i intawon kami!”" },
                            { verse: 31, text: "Gipahilom sila sa mga tawo apan misamot hinuon sila pagsinggit, “Kaliwat ni David! Kaluy-i intawon kami!”" },
                            { verse: 32, text: "Mihunong si Jesus ug nangutana kanila, “Unsa may gusto ninyo nga akong buhaton kaninyo?”" },
                            { verse: 33, text: "Sila mitubag, “Sir, gusto unta kami nga makakita!”" },
                            { verse: 34, text: "Naluoy si Jesus kanila ug gihikap niya ang ilang mga mata ug dihadiha nakakita sila ug misunod kaniya." }
                        ]
                }
            ]
        }

        sampleVerses["Mateo"][20] = {
            chapter: 21, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][21] = {
            chapter: 22, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][22] = {
            chapter: 23, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][23] = {
            chapter: 24, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][24] = {
            chapter: 25, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][25] = {
            chapter: 26, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][26] = {
            chapter: 27, 
            sections: [

            ]
        }

        sampleVerses["Mateo"][27] = {
            chapter: 28, 
            sections: [

            ]
        }



        // Sample verses for other books
        sampleVerses["Marcos"][0].verses = [
            { verse: 1, text: "Ang Maayong Balita mahitungod kang Jesu-Cristo, ang Anak sa Dios." },
            { verse: 2, text: "Sama sa gisulat sa propeta nga si Isaias: 'Tan-awa, gipadala ko ang akong mensahero sa unahan nimo aron pag-andam sa imong dalan.'" },
            { verse: 3, text: "Adunay usa nga nagasinggit sa kamingawan: 'Andama ninyo ang dalan alang sa Ginoo, paghimo og tul-id nga mga agianan alang kaniya!'" }
        ];
        sampleVerses["Juan"][0].verses = [
            { verse: 1, text: "Sa sinugdan pa, anaa na ang Pulong, ug ang Pulong anaa uban sa Dios, ug ang Pulong mao ang Dios." },
            { verse: 2, text: "Siya anaa na uban sa Dios sa sinugdan pa." },
            { verse: 3, text: "Pinaagi kaniya nahimo ang tanan, ug wala nay bisan unsa nga nahimo nga wala pinaagi kaniya." }
        ];


    sampleVerses["1 Corinto"][0] = {
    chapter: 1,
    sections: [
        {
            title: "Pagpanimbaya ni Pablo",
            verses: [
                { verse: 1, text: "Ako si Pablo, gitawag nga apostol ni Jesu-Cristo pinaagi sa kabubut-on sa Dios, ug si Sostenes nga atong igsoon." },
                { verse: 2, text: "Ngadto sa iglesia sa Dios nga anaa sa Corinto, ngadto sa mga gibalaan diha kang Cristo Jesus..." },
                { verse: 3, text: "Grasya ug kalinaw gikan sa Dios nga atong Amahan ug sa Ginoong Jesu-Cristo." },
                { verse: 4, text: "Nagapasalamat ako kanunay sa Dios tungod kaninyo alang sa grasya nga gihatag kaniya diha kang Cristo Jesus." }
            ]
        }
    ]
};


let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let notes = JSON.parse(localStorage.getItem('notes')) || {};
let preachingVerses = JSON.parse(localStorage.getItem('preachingVerses')) || [];
let categories = JSON.parse(localStorage.getItem('categories')) || [];
let currentViewMode = 'full';
let isSidebarVisible = true;
let isSettingsVisible = false;
let currentPreachingVerseIndex = 0;
let currentCategory = '';

function displayBooks(filteredBooks = newTestamentBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item p-3 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 border border-gray-100';
        bookItem.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-book mr-3 text-blue-600 text-lg"></i>
                <span class="font-medium text-gray-800">${book.name}</span>
                <span class="ml-auto text-sm text-gray-500">(${book.chapters} ka kap.)</span>
            </div>
        `;
        bookItem.onclick = () => {
            displayChapters(book.name, book.chapters);
            if (window.innerWidth < 768) toggleSidebar();
        };
        bookList.appendChild(bookItem);
    });
}

function displayChapters(book, chapterCount) {
    const chapterNav = document.getElementById('chapterNav');
    chapterNav.innerHTML = `
        <div class="flex items-center mb-4">
            <h2 class="text-3xl font-bold text-gray-900 flex items-center">
                <i class="fas fa-scroll mr-2 text-yellow-600"></i> ${book}
            </h2>
            <button id="bookmarkBtn" class="ml-auto px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mr-2">
                <i class="fas fa-bookmark"></i> Bookmark
            </button>
            <button id="savePreachingVerseBtn" class="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition mr-2">
                <i class="fas fa-save"></i> I-save para sa Wali
            </button>
            <button id="toggleViewBtn" class="toggle-view-btn">
                ${currentViewMode === 'full' ? '<i class="fas fa-eye mr-1"></i> Tan-awa Usa ka Bersikulo' : '<i class="fas fa-eye-slash mr-1"></i> Tan-awa Tanang Bersikulo'}
            </button>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
            <select id="chapterSelect" class="p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
                ${Array.from({ length: chapterCount }, (_, i) => `<option value="${i + 1}">Kap ${i + 1}</option>`).join('')}
            </select>
            <select id="verseSelect" class="p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"></select>
        </div>
    `;
    const chapterSelect = document.getElementById('chapterSelect');
    const verseSelect = document.getElementById('verseSelect');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const savePreachingVerseBtn = document.getElementById('savePreachingVerseBtn');
    const toggleViewBtn = document.getElementById('toggleViewBtn');
    function updateVerseSelect(chapter) {
        const chapterData = sampleVerses[book][chapter - 1];
        const verses = chapterData.sections ? chapterData.sections.flatMap(s => s.verses) : chapterData.verses || [];
        verseSelect.innerHTML = verses.map(v => `<option value="${v.verse}">Bersikulo ${v.verse}</option>`).join('');
        displayVerses(book, chapter, 0);
    }
    chapterSelect.onchange = () => updateVerseSelect(parseInt(chapterSelect.value));
    verseSelect.onchange = () => {
        const verseNum = parseInt(verseSelect.value);
        displayVerses(book, parseInt(chapterSelect.value), verseNum);
    };
    bookmarkBtn.onclick = () => addBookmark(book, chapterSelect.value, verseSelect.value);
    savePreachingVerseBtn.onclick = () => addPreachingVerse(book, chapterSelect.value, verseSelect.value);
    toggleViewBtn.onclick = () => {
        currentViewMode = currentViewMode === 'full' ? 'single' : 'full';
        const chapter = parseInt(chapterSelect.value);
        const verseNum = currentViewMode === 'full' ? 0 : parseInt(verseSelect.value);
        displayVerses(book, chapter, verseNum);
        toggleViewBtn.innerHTML = currentViewMode === 'full' ? '<i class="fas fa-eye mr-1"></i> Tan-awa Usa ka Bersikulo' : '<i class="fas fa-eye-slash mr-1"></i> Tan-awa Tanang Bersikulo';
    };
    updateVerseSelect(1);
}

function displayVerses(book, chapter, verseNum = 0) {
    const chapterContent = document.getElementById('chapterContent');
    const chapterTitle = `<h3 class="text-2xl font-semibold mb-6 text-gray-800 border-b border-yellow-200 pb-2">
        ${book} ${chapter}${verseNum > 0 ? `:${verseNum}` : ''}
    </h3>`;
    const chapterData = sampleVerses[book][chapter - 1];
    const allVerses = chapterData.sections ? chapterData.sections.flatMap(s => s.verses) : chapterData.verses || [];
    const totalVerses = allVerses.length;
    if (verseNum > 0) {
        let foundVerse = null;
        let sectionTitle = '';
        if (chapterData.sections) {
            for (let section of chapterData.sections) {
                const verse = section.verses.find(v => v.verse === verseNum);
                if (verse) {
                    foundVerse = verse;
                    sectionTitle = `<h4 class="section-title text-xl font-semibold mb-4">${section.title}</h4>`;
                    break;
                }
            }
        } else {
            foundVerse = allVerses.find(v => v.verse === verseNum);
        }
        if (foundVerse) {
            const verseHTML = `
                <div class="verse">
                    <strong class="text-lg text-blue-900 block mb-2">${book} ${chapter}:${foundVerse.verse}</strong>
                    <p class="verse-text text-gray-700">${foundVerse.text}</p>
                </div>`;
            const buttonsHTML = `
                <div class="nav-buttons flex justify-between mt-6">
                    <button id="prevVerse" class="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition" ${verseNum === 1 ? 'disabled' : ''}>Miaging Bersikulo</button>
                    <button id="nextVerse" class="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition" ${verseNum === totalVerses ? 'disabled' : ''}>Sunod nga Bersikulo</button>
                </div>`;
            chapterContent.classList.add('single-verse');
            chapterContent.innerHTML = chapterTitle + sectionTitle + verseHTML + buttonsHTML;
            document.getElementById('prevVerse').addEventListener('click', () => {
                const newVerse = verseNum - 1;
                if (newVerse >= 1) {
                    document.getElementById('verseSelect').value = newVerse;
                    displayVerses(book, chapter, newVerse);
                }
            });
            document.getElementById('nextVerse').addEventListener('click', () => {
                const newVerse = verseNum + 1;
                if (newVerse <= totalVerses) {
                    document.getElementById('verseSelect').value = newVerse;
                    displayVerses(book, chapter, newVerse);
                }
            });
        } else {
            chapterContent.classList.remove('single-verse');
            chapterContent.innerHTML = chapterTitle + `<p class="text-gray-500">Wala nay natagana nga bersikulo ${verseNum} alang sa ${book} ${chapter}.</p>`;
        }
    } else {
        chapterContent.classList.remove('single-verse');
        chapterContent.innerHTML = chapterTitle;
        if (chapterData.sections) {
            chapterData.sections.forEach(section => {
                const sectionElement = document.createElement('div');
                sectionElement.innerHTML = `<h4 class="section-title text-xl font-semibold">${section.title}</h4>`;
                section.verses.forEach(verse => {
                    const verseElement = document.createElement('div');
                    verseElement.className = 'verse';
                    verseElement.innerHTML = `
                        <strong class="text-lg text-blue-900 block mb-2">${book} ${chapter}:${verse.verse}</strong>
                        <p class="verse-text text-gray-700">${verse.text}</p>
                    `;
                    sectionElement.appendChild(verseElement);
                });
                chapterContent.appendChild(sectionElement);
            });
        } else {
            const verses = chapterData.verses || [
                { verse: 1, text: `Wala pay kompleto nga Cebuano NIV nga bersikulo alang sa ${book} ${chapter}. Palihug i-report kini aron ma-update!` }
            ];
            verses.forEach(verse => {
                const verseElement = document.createElement('div');
                verseElement.className = 'verse';
                verseElement.innerHTML = `
                    <strong class="text-lg text-blue-900 block mb-2">${book} ${chapter}:${verse.verse}</strong>
                    <p class="verse-text text-gray-700">${verse.text}</p>
                `;
                chapterContent.appendChild(verseElement);
            });
        }
    }
    const noteKey = `${book}-${chapter}`;
    document.getElementById('notesArea').value = notes[noteKey] || '';
}

function addBookmark(book, chapter, verse) {
    const ref = `${book} ${chapter}:${verse}`;
    if (!bookmarks.includes(ref)) {
        bookmarks.push(ref);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarks();
    }
}

function deleteBookmark(ref) {
    bookmarks = bookmarks.filter(b => b !== ref);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks();
}

function displayBookmarks() {
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';
    bookmarks.forEach(ref => {
        const bookmarkItem = document.createElement('div');
        bookmarkItem.className = 'p-2 bg-gray-50 rounded-lg flex items-center justify-between';
        bookmarkItem.innerHTML = `
            <div class="cursor-pointer flex items-center" onclick="navigateToBookmark('${ref}')">
                <i class="fas fa-bookmark mr-2 text-yellow-600"></i>
                <span>${ref}</span>
            </div>
            <button class="delete-btn" onclick="deleteBookmark('${ref}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        bookmarkList.appendChild(bookmarkItem);
    });
}

function navigateToBookmark(ref) {
    const [book, chVerse] = ref.split(' ');
    const [chapter, verse] = chVerse.split(':').map(Number);
    showMainApp();
    displayChapters(book, newTestamentBooks.find(b => b.name === book).chapters);
    displayVerses(book, chapter, verse);
    if (window.innerWidth < 768) toggleSidebar();
}

function addCategory() {
    const categoryInput = document.getElementById('newCategoryInput');
    const categoryName = categoryInput.value.trim();
    if (categoryName && !categories.includes(categoryName)) {
        categories.push(categoryName);
        localStorage.setItem('categories', JSON.stringify(categories));
        updateCategorySelect();
        categoryInput.value = '';
        displayPreachingVerses();
    } else if (categoryName) {
        alert('Ang kategorya naa na!');
    } else {
        alert('Palihug isulat ang pangalan sa kategorya!');
    }
}

function deleteCategory(category) {
    categories = categories.filter(c => c !== category);
    preachingVerses = preachingVerses.filter(pv => pv.category !== category);
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('preachingVerses', JSON.stringify(preachingVerses));
    updateCategorySelect();
    displayPreachingVerses();
}

function updateCategorySelect() {
    const categorySelect = document.getElementById('preachingCategory');
    categorySelect.innerHTML = '<option value="">Pilia ang Kategorya</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function addPreachingVerse(book, chapter, verse) {
    const ref = `${book} ${chapter}:${verse}`;
    const category = document.getElementById('preachingCategory').value;
    if (!category) {
        alert('Palihug pilia ang kategorya sa wali!');
        return;
    }
    if (!preachingVerses.some(pv => pv.ref === ref && pv.category === category)) {
        preachingVerses.push({ ref, category });
        localStorage.setItem('preachingVerses', JSON.stringify(preachingVerses));
        displayPreachingVerses();
    } else {
        alert('Kini nga bersikulo naa na sa kategorya!');
    }
}

function deletePreachingVerse(ref, category) {
    preachingVerses = preachingVerses.filter(pv => !(pv.ref === ref && pv.category === category));
    localStorage.setItem('preachingVerses', JSON.stringify(preachingVerses));
    displayPreachingVerses();
}

function displayPreachingVerses() {
    const preachingVersesList = document.getElementById('preachingVersesList');
    preachingVersesList.innerHTML = '';
    categories.forEach(category => {
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'flex items-center justify-between text-lg font-semibold mt-4 mb-2';
        categoryHeader.innerHTML = `
            <span>${category}</span>
            <button class="delete-category-btn" onclick="deleteCategory('${category}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        preachingVersesList.appendChild(categoryHeader);
        const versesInCategory = preachingVerses.filter(pv => pv.category === category);
        versesInCategory.forEach(pv => {
            const verseItem = document.createElement('div');
            verseItem.className = 'p-2 bg-gray-50 rounded-lg flex items-center justify-between';
            verseItem.innerHTML = `
                <div class="cursor-pointer flex items-center" onclick="navigateToPreachingVerse('${pv.ref}', '${pv.category}', ${versesInCategory.findIndex(v => v.ref === pv.ref)})">
                    <i class="fas fa-bible mr-2 text-green-600"></i>
                    <span>${pv.ref}</span>
                </div>
                <button class="delete-btn" onclick="deletePreachingVerse('${pv.ref}', '${pv.category}')">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            preachingVersesList.appendChild(verseItem);
        });
    });
}

function navigateToPreachingVerse(ref, category, index) {
    currentCategory = category;
    currentPreachingVerseIndex = index;
    const versesInCategory = preachingVerses.filter(pv => pv.category === category);
    const [book, chVerse] = ref.split(' ');
    const [chapter, verse] = chVerse.split(':').map(Number);
    const chapterData = sampleVerses[book][chapter - 1];
    const allVerses = chapterData.sections ? chapterData.sections.flatMap(s => s.verses) : chapterData.verses || [];
    const foundVerse = allVerses.find(v => v.verse === verse);
    const preachingVerseTitle = document.getElementById('preachingVerseTitle');
    const preachingVerseContent = document.getElementById('preachingVerseContent');
    const noMoreVersesMsg = document.getElementById('noMoreVersesMsg');
    const nextButton = document.getElementById('nextVerseBtn');
    preachingVerseTitle.textContent = `${category}: ${ref}`;
    preachingVerseContent.innerHTML = foundVerse
        ? `
            <div class="verse">
                <strong class="text-lg text-blue-900 block mb-2">${ref}</strong>
                <p class="verse-text text-gray-700">${foundVerse.text}</p>
            </div>`
        : `<p class="text-gray-500">Wala nay natagana nga bersikulo para sa ${ref}.</p>`;
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('preachingVersePage').classList.remove('hidden');
    document.getElementById('summaryPage').classList.add('hidden');
    const prevButton = document.getElementById('prevVerseBtn');
    prevButton.style.display = index === 0 ? 'none' : 'block';
    if (index === versesInCategory.length - 1) {
        nextButton.innerHTML = '<i class="fas fa-check mr-2"></i> Finish';
    } else {
        nextButton.innerHTML = '<i class="fas fa-arrow-right mr-2"></i> Sunod';
    }
    noMoreVersesMsg.classList.toggle('hidden', index < versesInCategory.length - 1);
    noMoreVersesMsg.textContent = index === versesInCategory.length - 1 ? 'Wala na’y sunod nga bersikulo sa kategorya.' : '';
    if (window.innerWidth < 768) toggleSidebar();
}

function showNextVerse() {
    const versesInCategory = preachingVerses.filter(pv => pv.category === currentCategory);
    if (currentPreachingVerseIndex < versesInCategory.length - 1) {
        currentPreachingVerseIndex++;
        const nextVerse = versesInCategory[currentPreachingVerseIndex];
        navigateToPreachingVerse(nextVerse.ref, nextVerse.category, currentPreachingVerseIndex);
    } else {
        showSummaryPage();
    }
}

function showPrevVerse() {
    const versesInCategory = preachingVerses.filter(pv => pv.category === currentCategory);
    currentPreachingVerseIndex = (currentPreachingVerseIndex - 1 + versesInCategory.length) % versesInCategory.length;
    const prevVerse = versesInCategory[currentPreachingVerseIndex];
    navigateToPreachingVerse(prevVerse.ref, prevVerse.category, currentPreachingVerseIndex);
}

function showSummaryPage() {
    const versesInCategory = preachingVerses.filter(pv => pv.category === currentCategory);
    const summaryTitle = document.getElementById('summaryTitle');
    const summaryContent = document.getElementById('summaryContent');
    summaryTitle.textContent = `Summary sa mga Bersikulo sa "${currentCategory}"`;
    summaryContent.innerHTML = versesInCategory.map(pv => {
        const [book, chVerse] = pv.ref.split(' ');
        const [chapter, verse] = chVerse.split(':').map(Number);
        const chapterData = sampleVerses[book][chapter - 1];
        const allVerses = chapterData.sections ? chapterData.sections.flatMap(s => s.verses) : chapterData.verses || [];
        const foundVerse = allVerses.find(v => v.verse === verse);
        return foundVerse
            ? `
                <div class="verse mb-4">
                    <strong class="text-lg text-blue-900 block mb-2">${pv.ref}</strong>
                    <p class="verse-text text-gray-700">${foundVerse.text}</p>
                </div>`
            : `<p class="text-gray-500 mb-4">Wala nay natagana nga bersikulo para sa ${pv.ref}.</p>`;
    }).join('');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('preachingVersePage').classList.add('hidden');
    document.getElementById('summaryPage').classList.remove('hidden');
}

function showMainApp() {
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('preachingVersePage').classList.add('hidden');
    document.getElementById('summaryPage').classList.add('hidden');
    currentPreachingVerseIndex = 0;
    currentCategory = '';
}

function deleteNote(noteKey) {
    delete notes[noteKey];
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
    const book = document.getElementById('chapterNav').querySelector('h2')?.textContent.trim();
    const chapter = document.getElementById('chapterSelect')?.value;
    if (book && chapter && noteKey === `${book}-${chapter}`) {
        document.getElementById('notesArea').value = '';
    }
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    Object.keys(notes).forEach(noteKey => {
        const [book, chapter] = noteKey.split('-');
        const noteText = notes[noteKey];
        const noteItem = document.createElement('div');
        noteItem.className = 'p-2 bg-gray-50 rounded-lg flex items-center justify-between';
        noteItem.innerHTML = `
            <div class="cursor-pointer flex items-center" onclick="navigateToNote('${noteKey}')">
                <i class="fas fa-sticky-note mr-2 text-yellow-600"></i>
                <span><strong>${book} ${chapter}</strong>: ${noteText.substring(0, 30)}${noteText.length > 30 ? '...' : ''}</span>
            </div>
            <button class="delete-btn" onclick="deleteNote('${noteKey}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        notesList.appendChild(noteItem);
    });
}

function navigateToNote(noteKey) {
    const [book, chapter] = noteKey.split('-');
    showMainApp();
    displayChapters(book, newTestamentBooks.find(b => b.name === book).chapters);
    displayVerses(book, parseInt(chapter), 0);
    document.getElementById('notesArea').value = notes[noteKey];
    if (window.innerWidth < 768) toggleSidebar();
}

document.getElementById('saveNote').addEventListener('click', () => {
    const book = document.getElementById('chapterNav').querySelector('h2').textContent.trim();
    const chapter = document.getElementById('chapterSelect').value;
    const noteKey = `${book}-${chapter}`;
    const noteText = document.getElementById('notesArea').value;
    if (noteText) {
        notes[noteKey] = noteText;
        localStorage.setItem('notes', JSON.stringify(notes));
        alert('Nota na-save!');
        displayNotes();
    }
});

document.getElementById('searchBar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    const filteredBooks = newTestamentBooks.filter(book => book.name.toLowerCase().includes(query));
    displayBooks(filteredBooks.length > 0 ? filteredBooks : newTestamentBooks);
    searchResults.innerHTML = '';
    if (query) {
        const suggestions = [];
        newTestamentBooks.forEach(book => {
            sampleVerses[book.name].forEach(ch => {
                const verses = ch.sections ? ch.sections.flatMap(s => s.verses) : ch.verses || [];
                verses.forEach(v => {
                    if (v.text.toLowerCase().includes(query) || `${book.name} ${ch.chapter}:${v.verse}`.toLowerCase().includes(query)) {
                        suggestions.push({ book: book.name, chapter: ch.chapter, verse: v.verse, text: v.text });
                    }
                });
            });
        });
        suggestions.slice(0, 5).forEach(s => {
            const suggestion = document.createElement('div');
            suggestion.className = 'p-2 hover:bg-yellow-100 rounded cursor-pointer';
            suggestion.innerHTML = `<strong>${s.book} ${s.chapter}:${s.verse}</strong>: ${s.text.substring(0, 50)}...`;
            suggestion.onclick = () => {
                showMainApp();
                displayChapters(s.book, newTestamentBooks.find(b => b.name === s.book).chapters);
                displayVerses(s.book, s.chapter, s.verse);
                if (window.innerWidth < 768) toggleSidebar();
            };
            searchResults.appendChild(suggestion);
        });
    }
});

document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
document.getElementById('overlay').addEventListener('click', () => {
    if (isSidebarVisible) toggleSidebar();
    if (isSettingsVisible) toggleSettings();
});
document.getElementById('toggleSettings').addEventListener('click', toggleSettings);
document.getElementById('closeSettings').addEventListener('click', toggleSettings);
document.getElementById('textSize').addEventListener('change', (e) => {
    localStorage.setItem('textSize', e.target.value);
    applySettings();
});
document.getElementById('theme').addEventListener('change', (e) => {
    localStorage.setItem('theme', e.target.value);
    applySettings();
});
document.getElementById('backToMain').addEventListener('click', showMainApp);
document.getElementById('backToSummaryMain').addEventListener('click', showMainApp);
document.getElementById('nextVerseBtn').addEventListener('click', showNextVerse);
document.getElementById('prevVerseBtn').addEventListener('click', showPrevVerse);

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');
    const toggleButton = document.getElementById('toggleSidebar');
    isSidebarVisible = !isSidebarVisible;
    if (isSidebarVisible) {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('open');
        overlay.classList.remove('hidden');
        mainContent.classList.remove('full-width');
        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('open');
        overlay.classList.add('hidden');
        mainContent.classList.add('full-width');
        toggleButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    }
}

function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const overlay = document.getElementById('overlay');
    isSettingsVisible = !isSettingsVisible;
    if (isSettingsVisible) {
        settingsPanel.classList.remove('hidden');
        settingsPanel.classList.add('open');
        overlay.classList.remove('hidden');
    } else {
        settingsPanel.classList.add('hidden');
        settingsPanel.classList.remove('open');
        overlay.classList.add('hidden');
    }
}

function applySettings() {
    const textSize = localStorage.getItem('textSize') || 'medium';
    const theme = localStorage.getItem('theme') || 'light';
    document.body.className = `min-h-screen text-gray-800 text-${textSize} ${theme === 'dark' ? 'dark' : ''}`;
    document.getElementById('textSize').value = textSize;
    document.getElementById('theme').value = theme;
}

displayBooks();
displayBookmarks();
displayNotes();
updateCategorySelect();
displayPreachingVerses();
applySettings();