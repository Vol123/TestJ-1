class CountryAndPopulation {
    constructor(country, population){
        this.country = country;
        this.population = population;
    }
}

class RuleAndCapital {
    constructor(rule, capital) {
        this.rule = rule;
        this.capital = capital;
    }
}

let countryAndPopulation = [
    new CountryAndPopulation("Chiny",1426129000),
    new CountryAndPopulation("Indie",	1410266000),
    new CountryAndPopulation("USA",	336023460),
    new CountryAndPopulation("Indonezja",	280488501),	
    new CountryAndPopulation("Pakistan",	228003290),	
    new CountryAndPopulation("Brazylia",	218246900),	
    new CountryAndPopulation("Nigeria",	216826390),	
    new CountryAndPopulation("Bangladesz",	179740259),	
    new CountryAndPopulation("Rosja",	147182123),
    new CountryAndPopulation("Meksyk",	128649565),	
    new CountryAndPopulation("Japonia",	124830000),	
    new CountryAndPopulation("Etiopia"	,113656596),	
    new CountryAndPopulation("Filipiny",	112479086),	
    new CountryAndPopulation("DRK",	108407721),
    new CountryAndPopulation("Egipt",	104390203),	
    new CountryAndPopulation("Wietnam",	98510000),	
    new CountryAndPopulation("Iran",	87815354	),
    new CountryAndPopulation("Turcja",	86154997),	
    new CountryAndPopulation("Niemcy",	83349300),	
    new CountryAndPopulation("Tajlandia",	69611069),	
    new CountryAndPopulation("Francja",	68959599),	
    new CountryAndPopulation("Wielka Brytania",	67647112),	
    new CountryAndPopulation("Tanzania",	65890747),
    new CountryAndPopulation("Afryka Południowa",	61956900),
    new CountryAndPopulation("Włochy",	59236213),
    new CountryAndPopulation("Kenia",	57564296),
    new CountryAndPopulation("Myanmar",	54045000),
    new CountryAndPopulation("Półdniowa Korea",	51780579),
    new CountryAndPopulation("Kolumbia",	49258494),
    new CountryAndPopulation("Uganda",	48006),
    new CountryAndPopulation("Sudan",	47364750),
    new CountryAndPopulation("Hiszpania",	46934632),
    new CountryAndPopulation("Algieria",	45653000),
    new CountryAndPopulation("Argentyna"	,44938712),
    new CountryAndPopulation("Irak",	41310000),
    new CountryAndPopulation("Ukraina",	40997699),
    new CountryAndPopulation("Afganistan",	39225560),
    new CountryAndPopulation("Kanada",	39163590),
    new CountryAndPopulation("Polska",	38313035),
    new CountryAndPopulation("Maroko",	37192950),
    new CountryAndPopulation("Uzbekistan",	36110901),
    new CountryAndPopulation("Arabia Saudyjska",	35218169),
    new CountryAndPopulation("Angola",	34825000),
    new CountryAndPopulation("Malezja",	34511475),
    new CountryAndPopulation("Wenezuela"	,33748000),
    new CountryAndPopulation("Peru",	32162184),
    new CountryAndPopulation("Ghana",	31418000),
    new CountryAndPopulation("Mozambik",	31366000),
    new CountryAndPopulation("Jemen",	31162000),
    new CountryAndPopulation("Madagaskar",	28680342),
    new CountryAndPopulation("Nepal",	28609000),
    new CountryAndPopulation("Wybrzeże Kości Słoniowej",	27717000),
    new CountryAndPopulation("Australia",	26644000),
    new CountryAndPopulation("Kamerun",	26348251),
    new CountryAndPopulation("Północna Korea",	25666000),
    new CountryAndPopulation("Nigeria",	25314743),
    new CountryAndPopulation("Tajwan",23782448),
    new CountryAndPopulation("Burkina Faso",	22870060),
    new CountryAndPopulation("Sri Lanka",	21803000),
    new CountryAndPopulation("Chile",	20723065),
    new CountryAndPopulation("Mali",	20658000),
    new CountryAndPopulation("Kazachstan",	19666840),
    new CountryAndPopulation("Zambia",	19610769),
    new CountryAndPopulation("Rumunia",	19401658),
    new CountryAndPopulation("Senegal",	19256346),
    new CountryAndPopulation("Malawi",	18563749),
    new CountryAndPopulation("Ekwador",	18061650),
    new CountryAndPopulation("Holandia",17734945),
    new CountryAndPopulation("Gwatemala",	17679735),
    new CountryAndPopulation("Zimbabwe",	17645000),
    new CountryAndPopulation("Syria",	17070000),
    new CountryAndPopulation("Czad",	15948000),
    new CountryAndPopulation("Somalia",	15443000),
    new CountryAndPopulation("Kambodża",	15288489),
    new CountryAndPopulation("Gwinea",	12771000),
    new CountryAndPopulation("Rwanda",	11952693),
    new CountryAndPopulation("Tunezja",	11658341),
    new CountryAndPopulation("Belgia",	11476279),
    new CountryAndPopulation("Boliwia",	11469896),
    new CountryAndPopulation("Kuba",	11333000),
    new CountryAndPopulation("Burundi",	11215578),
    new CountryAndPopulation("Jordania",	11099055),
    new CountryAndPopulation("Południowy Sudan",	11062000),
    new CountryAndPopulation("Haiti",	10911819),
    new CountryAndPopulation("Grecja",	10741165),
    new CountryAndPopulation("Republika Dominikany",	10739000),
    new CountryAndPopulation("Czech",	10693939),
    new CountryAndPopulation("Portugalia",	10347892),
    new CountryAndPopulation("Benin",	10315244),
    new CountryAndPopulation("Szwecja",	10313447),
    new CountryAndPopulation("Azerbejdżan",	10119100),
    new CountryAndPopulation("ZEA",	9771000),
    new CountryAndPopulation("Węgry",	9769526),
    new CountryAndPopulation("Białoruś",	9255524),
    new CountryAndPopulation("Honduras",	9158345),
    new CountryAndPopulation("Izrael",	9136000),
    new CountryAndPopulation("Tadżykistan",	9127000),
    new CountryAndPopulation("Austria",	8915382),
    new CountryAndPopulation("Papua Nowa Gwinea",	8776000),
    new CountryAndPopulation("Szwajcaria",	8570146),
    new CountryAndPopulation("Togo",	8082000),
    new CountryAndPopulation("Sierra Leone",	7813000),
    new CountryAndPopulation("Hongkong",	7524100),
    new CountryAndPopulation("Paragwaj",	7152703),
    new CountryAndPopulation("Laos",	7123205),
    new CountryAndPopulation("Bułgaria",	6951482),
    new CountryAndPopulation("Serbia",	6926705),
    new CountryAndPopulation("Liban",	6856000),
    new CountryAndPopulation("Libia",	6777000),
    new CountryAndPopulation("Kirgistan",	6523500),
    new CountryAndPopulation("Salvador",6454000),
    new CountryAndPopulation("Nikaragua",	6198154),
    new CountryAndPopulation("Turkmenia",	5942000),
    new CountryAndPopulation("Dania",	5762082),
    new CountryAndPopulation("Singapur",	5703600),
    new CountryAndPopulation("Norwegia",5675900),
    new CountryAndPopulation("Finlandia",5526774),
    new CountryAndPopulation("Słowacja",	5449176),
    new CountryAndPopulation("Norwegia",	5408000),
    new CountryAndPopulation("Nowa Zelandia",	5102500),
    new CountryAndPopulation("Kostaryka",	4953199),
    new CountryAndPopulation("Irlandia",	4921500),
    new CountryAndPopulation("Palestyna",4816503),
    new CountryAndPopulation("Kuwejt",	4207000),
    new CountryAndPopulation("Oman",	4088690),
    new CountryAndPopulation("Chorwacja",	4076246),
    new CountryAndPopulation("Panama",	3764166),
    new CountryAndPopulation("Gruzja",	3723500),
    new CountryAndPopulation("Mołdawia",	3546500),
    new CountryAndPopulation("Bośnia i Hercegowina",	3511372),
    new CountryAndPopulation("Mongolia",	3480534),
    new CountryAndPopulation("Urugwaj",	3415866),
    new CountryAndPopulation("Portoryko",	3411307),
    new CountryAndPopulation("Armenia",	2962100),
    new CountryAndPopulation("Albania",	2845955),
    new CountryAndPopulation("Litwa",	2790472),
    new CountryAndPopulation("Katar",	2753045),
    new CountryAndPopulation("Jamajka",	2726667),
    new CountryAndPopulation("Słowenia",	2128240),
    new CountryAndPopulation("Macedonia Północna",	2077132),
    new CountryAndPopulation("Łotwa",	1908100),
    new CountryAndPopulation("Republika Kosowa",	1907592),
    new CountryAndPopulation("Bahrajn",	1451200),
    new CountryAndPopulation("Estonia",	1328360),
    new CountryAndPopulation("Cypr",875898),
    new CountryAndPopulation("Czarnogóra",	622218),
    new CountryAndPopulation("Luksemburg",	613894),
    new CountryAndPopulation("SADR",582000),
    new CountryAndPopulation("Surinam",	581000),
    new CountryAndPopulation("Malta",	493559),
    new CountryAndPopulation("Naddniestrze",467400),
    new CountryAndPopulation("Islandia",	356991),
    new CountryAndPopulation("NKR",	147000),
    new CountryAndPopulation("Andora",76177),
    new CountryAndPopulation("Grenlandia",	56196),
    new CountryAndPopulation("Liechtenstein",	38378),
    new CountryAndPopulation("Monako",	38300),
    new CountryAndPopulation("San Marino",	34590),
    new CountryAndPopulation("Watykan",	825),
    new CountryAndPopulation("Fidżi", 890000)
];

let ruleAndCapital = [
    new RuleAndCapital("Xi Jinping", "Pekin"),
    new RuleAndCapital("Draupadi Murma", "Nowe Delhi"),
    new RuleAndCapital("Joe Biden", "Waszyngton"),
    new RuleAndCapital("Joko Widodo", "Djakarta"),
    new RuleAndCapital("Arif Alvi", "Islamabad"),
    new RuleAndCapital("Luis Inacio Lula da Silva", "Brazylia"),
    new RuleAndCapital("Mohammad Buhari", "Abudża"),
    new RuleAndCapital("Abdula Hamida", "Dhaka"),
    new RuleAndCapital("HUY", "Moskwa"),
    new RuleAndCapital("Andresa Manuela Lopeza Obradora", "Meksyk"),
    new RuleAndCapital("Fumio Kishida", "Tokio"),
    new RuleAndCapital("Sahle Work Zewde", "Addis Abeba"),
    new RuleAndCapital("Marco z bongbonga", "Manila"),
    new RuleAndCapital("Felix Tshisekedi", "Kinszasa"),
    new RuleAndCapital("Abdul-Fattah As-Sisi", "Kair"),
    new RuleAndCapital("Nguyen Xuan Phuc", "Hanoi"),
    new RuleAndCapital("Ibrahima Raisiego", "Teheran"),
    new RuleAndCapital("Recepa Tayyipa Erdogana", "Ankara"),
    new RuleAndCapital("Franka-Waltera Steinmeiera", "Berlin"),
    new RuleAndCapital("Prayut Chan-Ocha", "Bangkok"),
    new RuleAndCapital("Emmanuela Macrona", "Paryż"),
    new RuleAndCapital("Karol III", "Londyn"),
    new RuleAndCapital("Samia Hassan Suluhu", "Dodoma"),
    new RuleAndCapital("Cyryl Ramaphosa", "Pretoria"),
    new RuleAndCapital("Sergio Mattarella", "Rzym"),
    new RuleAndCapital("Williama Ruto", "Nairobi"),
    new RuleAndCapital("Myin Shwe", "Naypyidaw"),
    new RuleAndCapital("Yoon Seok Yeol", "Seul"),
    new RuleAndCapital("Gustavo Francisco Petro Urrego", "Bogota"),
    new RuleAndCapital("Yoweri Kaguta Museveni", "Kampali"),
    new RuleAndCapital("Abdel Fattah al-Burhan", "Chartum"),
    new RuleAndCapital("Filip VI", "Madryt"),
    new RuleAndCapital("Abdelmajid Tebbun", "Algieria"),
    new RuleAndCapital("Alberta Fernandeza", "Buenos Aires"),
    new RuleAndCapital("Abdul Latif Raszid", "Bagdad"),
    new RuleAndCapital("Władimir Żeleński", "Kijów"),
    new RuleAndCapital("Hassan Akhund", "Kabul"),
    new RuleAndCapital("Justin Trudeau", "Ottawa"),
    new RuleAndCapital("Andrzej Duda", "Warszawa"),
    new RuleAndCapital("Mahomet VI", "Rabat"),
    new RuleAndCapital("Szawkat Mirzijojew", "Taszkent"),
    new RuleAndCapital("Salmana bin Abdulaziza Al Sauda", "Rijad"),
    new RuleAndCapital("Juana Lourenço", "Luanda"),
    new RuleAndCapital("Anwara Ibrahima", "Kuala Lumpur"),
    new RuleAndCapital("Nicholas Maduro", "Carakas"),
    new RuleAndCapital("Dina Boluarte", "Lima"),
    new RuleAndCapital("Nana Akufo-Addo", "Akra"),
    new RuleAndCapital("Filipe Nyusi", "Maputo"),
    new RuleAndCapital("Riszad Mohammed al-Alimi", "Sana"),
    new RuleAndCapital("Andriej Razuelina", "Antananarywa"),
    new RuleAndCapital("Bidhya Devi Bhandari", "Katmandu"),
    new RuleAndCapital("Alassane Ouattara", "Jamusukro"),
    new RuleAndCapital("Antoniego Albaniza", "Canberra"),
    new RuleAndCapital("Paweł Bija", "Jaunde"),
    new RuleAndCapital("Kim Chen In", "Pjongjang"),
    new RuleAndCapital("Mohamed Bazum", "Niamey"),
    new RuleAndCapital("Tsai Ingwen", "Tajpej"),
    new RuleAndCapital("Ibrahim Traore", "Wagadugu"),
    new RuleAndCapital("Ranil Wickramasinghe", "Sri Jayewardenepura Kotte"),
    new RuleAndCapital("Czcionka Gabriela Borica", "Santiago"),
    new RuleAndCapital("Assimi Goita", "Bamako"),
    new RuleAndCapital("Kasym-Jomart Tokajew", "Astana"),
    new RuleAndCapital("Hakainde Hichilema", "Lusaka"),
    new RuleAndCapital("Klausa Johannisa", "Bukareszt"),
    new RuleAndCapital("Mak Sal", "Dakar"),
    new RuleAndCapital("Łazarz Czakwera", "Lilongwe"),
    new RuleAndCapital("Guillermo Lasso", "Quito"),
    new RuleAndCapital("Willem-Alexander", "Amsterdam"),
    new RuleAndCapital("Alejandro Giammattei", "Gwatemala"),
    new RuleAndCapital("Emmerson Mnangagwa", "Harare"),
    new RuleAndCapital("Baszar Assad", "Damaszek"),
    new RuleAndCapital("Mahamat Debi", "Ndżamena"),
    new RuleAndCapital("Hassan Szejk Mahmoud", "Mogadiszu"),
    new RuleAndCapital("Norodom Sihamoni", "Phnom Penh"),
    new RuleAndCapital("Mamady Dumbuya", "Konakri"),
    new RuleAndCapital("Paweł Kagame", "Kigali"),
    new RuleAndCapital("Qais powiedział", "Tunezja"),
    new RuleAndCapital("Philip", "Bruksela"),
    new RuleAndCapital("Ludwik Arce", "Sucre"),
    new RuleAndCapital("Miguela Diaz-Canela", "Hawana"),
    new RuleAndCapital("Evariste Ndayishimiye", "Gitega"),
    new RuleAndCapital("Abdullah II", "Amman"),
    new RuleAndCapital("Salvatore Kiir", "Dżuba"),
    new RuleAndCapital("Ariel Henri", "Port-au-Prince"),
    new RuleAndCapital("Katerina Sakellaropoulou", "Ateny"),
    new RuleAndCapital("Ludwika Abinadera", "Santo Domingo"),
    new RuleAndCapital("Miłosz Zeman", "Praga"),
    new RuleAndCapital("Marcelo Rebelo de Sousa", "Lizbona"),
    new RuleAndCapital("Patryk Talon", "Porto Novo"),
    new RuleAndCapital("Karol XVI Gustaw", "Sztokholm"),
    new RuleAndCapital("Ilham Alijew", "Baku"),
    new RuleAndCapital("Muhammad ibn Zayed Al Nahyan", "Abu Dabi"),
    new RuleAndCapital("Katalin Nowak", "Budapeszt"),
    new RuleAndCapital("Swietłana Tichanowskaja", "Mińsk"),
    new RuleAndCapital("Siomary Castro", "Tegucigalpa"),
    new RuleAndCapital("Książę Icchak", "Jerozolima"),
    new RuleAndCapital("Emomali Rachmon", "Duszanbe"),
    new RuleAndCapital("Aleksandra Van der Bellena", "Żyła"),
    new RuleAndCapital("Jamesa Marapę", "Port Moresby"),
    new RuleAndCapital("Alaina Berseta", "Berno"),
    new RuleAndCapital("Dla Essozimny Gnassingbe", "Lome"),
    new RuleAndCapital("Julius Maada Bio", "Wolne miasto"),
    new RuleAndCapital("Niema", "Niema"),
    new RuleAndCapital("Mario Abdo Beniteza", "Asuncion"),
    new RuleAndCapital("Thonglun Sisulit", "Wientian"),
    new RuleAndCapital("Rumen Radew", "Sofia"),
    new RuleAndCapital("Aleksander Vucic", "Belgrad"),
    new RuleAndCapital("Najib Mikati", "Bejrut"),
    new RuleAndCapital("Muhammad al-Manfi", "Trypolis"),
    new RuleAndCapital("Sadyr Japarow", "Biszkek"),
    new RuleAndCapital("Nayib Bukele", "San Salvador"),
    new RuleAndCapital("Daniel Ortega", "Managua"),
    new RuleAndCapital("Serdar Berdymuhamedow", "Aszchabad"),
    new RuleAndCapital("Małgorzata II", "Kopenhaga"),
    new RuleAndCapital("Halima Jakub", "Singapur"),
    new RuleAndCapital("Harald W", "Oslo"),
    new RuleAndCapital("Sauli Niinistö", "Helsinki"),
    new RuleAndCapital("Zuzana Czaputowa", "Bratysława"),
    new RuleAndCapital("Król Harald V", "Oslo"),
    new RuleAndCapital("Cindy Kiro", "Wellington"),
    new RuleAndCapital("Rodrigo Chaveza Roblesa", "San Jose"),
    new RuleAndCapital("Michaela Higginsa", "Dublin"),
    new RuleAndCapital("Mahmud Abbas", "Ramallah"),
    new RuleAndCapital("Nawaf al-Ahmed al-Jaber al-Sabah", "El Kuwejt"),
    new RuleAndCapital("Haytham ben Tarik", "Muskat"),
    new RuleAndCapital("Zoran Milanović", "Zagrzeb"),
    new RuleAndCapital("Laurentino Cortiso", "Panama"),
    new RuleAndCapital("Salome Zurabiszwili", "Tbilisi"),
    new RuleAndCapital("Maja Sandu", "Kiszyniów"),
    new RuleAndCapital("Christiana Schmidta", "Sarajewo"),
    new RuleAndCapital("Ukhnaagiin Khurelsukh", "Ułan Bator"),
    new RuleAndCapital("Luis Alberto Lacalle Pou", "Montevideo"),
    new RuleAndCapital("Pedro Pierluisi Urrutia", "San Juan"),
    new RuleAndCapital("Vahagn Chaczaturian", "Erewan"),
    new RuleAndCapital("Bayram Begai", "Tirana"),
    new RuleAndCapital("Gitanas Nauseda", "Wilno"),
    new RuleAndCapital("Tamim ibn Hamad Al Thani", "Dauha"),
    new RuleAndCapital("Patricka Allena", "Kingston"),
    new RuleAndCapital("Natasza Pirc-Musar", "Lublan"),
    new RuleAndCapital("Stewo Pendarowski", "Skopje"),
    new RuleAndCapital("Egils Levits", "Ryga"),
    new RuleAndCapital("Wiosa Osmani", "Prisztina"),
    new RuleAndCapital("Hamad ibn Isa Al Khalifa", "Manama"),
    new RuleAndCapital("Alar Karis", "Tallinn"),
    new RuleAndCapital("Nikos Anastasiades", "Południowa Nikozja"),
    new RuleAndCapital("Milo Djukanović", "Podgorica"),
    new RuleAndCapital("Henryk (Heinrich)", "Luksemburg"),
    new RuleAndCapital("Brahim Ghali", "Tifariti"),
    new RuleAndCapital("Chan Santohi", "Paramaribo"),
    new RuleAndCapital("Jerzy Vella", "Valletta"),
    new RuleAndCapital("Wadim Krasnosielski", "Tyraspol"),
    new RuleAndCapital("Gvyudni Johannesson", "Reykjavik"),
    new RuleAndCapital("Arayik Harutyunyan", "Stepanakert"),
    new RuleAndCapital("Javiera Espota Zamorę", "Andora la Vella"),
    new RuleAndCapital("Małgorzata II", "Niema"),
    new RuleAndCapital("Hansa Adama II", "Vaduz"),
    new RuleAndCapital("Albert II", "Monako"),
    new RuleAndCapital("Niema", "San Marino"),
    new RuleAndCapital("Fernando Verges Alzaga", "Watykan"),
    new RuleAndCapital("Williama Catonivere'a", "Suwa")
]

class Country {
    constructor(country, population, rule, capital) {
        this.country = country;
        this.population = population;
        this.rule = rule;
        this.capital = capital;       
    }
}

let table = [];
for (let i = 0; i < countryAndPopulation.length; i++) {
    table.push(
        new Country(countryAndPopulation[i].country, 
                    countryAndPopulation[i].population, 
                    ruleAndCapital[i].rule, 
                    ruleAndCapital[i].capital));
}

class RandomQuestions {
    questions = [];

    constructor (count) {
        this.count = count;
    }

    printRandomQuestions() {
        function printQuestion(questions, index) {
            console.log("Index: " + index);
            console.log("[");
            console.log("Number Question: " + questions[index].numberQuestion);
            console.log("Correct Answer: " + questions[index].correctAnswer);
            for (let i = 0; i < 4; i++) 
                console.log(i + " answer: " + questions[index].answers[i]);
            console.log("],");
        }

        for (let i = 0; i < this.count; i++)
            printQuestion(this.questions, i);
    }

    start() {
        function addQuestion(questions, count) {
            class Question {
                answers = [];
                numberQuestion;
                correctAnswer;
            
                constructor () {
                    this.answers = [null, null, null, null];
                }
            }

            function addAnotherNumber(question, count) {
                let number;
        
                while(true) {
                    number = Math.floor(Math.random() * count);
                    if (question.numberQuestion != number)
                        break;
                }
        
                for (let i = 0; i < 4; i++) {
                    if (question.answers[i] == null) {
                        question.answers[i] = number;
                        return question;
                    }
                }
            }

            let question = new Question();
            let add = false;
    
            while(!add) {
                question.numberQuestion = Math.floor(Math.random() * (count - 1));
                add = true;
                for (let i = 0; i < questions.length; i++) {
                    if (questions[i] == question.numberQuestion) {
                        add = false;
                        break;
                    }
                }    
            }
    
            question.correctAnswer = Math.floor(Math.random() * 3);
            question.answers[question.correctAnswer] = question.numberQuestion;
    
            for (let i = 0; i < 3; i++)
                question = addAnotherNumber(question, count);
    
            questions.push(question);
        }

        for (let i = 0; i < this.count; i++)
            addQuestion(this.questions, this.count);
    }
}

let randomQuestions = new RandomQuestions(20);
randomQuestions.start();
randomQuestions.printRandomQuestions();