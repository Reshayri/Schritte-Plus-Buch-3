 //alert("Просто вывод информации");
 const dictionary = {
    "1. Haus": "Дом",
    "2. Apfel": "Яблоко",
    "3.Tim bald ankommen": " Тим скоро приедет",
    "4. ansehen, du siehst  an, er siest an, hat angesehen.": "посмотри, ты посмотри, он смотрит на тебя, посмотрел.",
    "5. Tim sieht sich Foto von Lara an.": "Тим смотрит на фотографию Лары.",
    "6. der Nachbar. Die beiden Personen  im Supermarkt sind Nachbarn von Tom.": "сосед. Два человека в супермаркете — соседи Тома.",
    "7. der Einkauf. Tim geht es nach dem Einkauft besser.": "покупка. Тим чувствует себя лучше после шопинга.",
    "8. kloppen, hat gekloppt. Es hat gekloppt: Tim hat im Hotel ein Zimmer für Mitarbeiter bekommen.": "постучать, постучать. Это сработало: Тим получил номер в отеле для сотрудников.",
    "9. das Zentrum, Zentrum. Bis zum Hotel im Zentrum muss Tim vierzig Minuten fahren.": "центр, центр. Тиму нужно ехать сорок минут до отеля в центре.",
    "10. das Gefühl. Tim hat das Gefühl: Ich bin allein.": "чувство. У Тима такое чувство: я один.",
    "11. der Anfang. Aller Anfang ist schwer.": " начало. Каждое начало сложно.",
    "12. weil. Ich bin traurig, weil ich hier keinen Menschen kenne.": "потому что. Мне грустно, потому что я здесь никого не знаю.",
    "13. der Mensch- en. Ich bin traruring, weil ich hier keinen Meschen kenne.": "человек. Мне грустно, потому что я здесь никого не знаю.",
    "14. der Arbeitgeber. Arbeitgeberinen. Mein Arbeigeber zieht um.": "работодатель. работодатели. Мой работодатель переезжает.",
    "15. sich kennenlernen. hatkennengelernt. Ich habe schon zwei Nachbarn kennengelernt.": "знакомиться. встретился. Я уже встретил двух соседей.",
    "16. gestern. Ich war gestern Abend nach dem Umzug sehr müde.": "вчера. Вчера вечером я очень устал после переезда.",
    "17. der Umzug. Ich war gestern Abend nach dem Umzug sehr müde.": "переезд. Вчера вечером я очень устал после переезда.",
    "18. die Sachen. Ich habe nur noch ein paar Sachen ausgepackt. hat auspacken. ": "вещи. Я только что распаковал несколько вещей. есть распаковка.",
    "19. einschlafen. Meine Nachbarn haben laut Musik gehört, aber ich bin sofort eingeschlafen.": "заснуть. Мои соседи услышали громкую музыку, но я сразу уснул.",
    "20. der Wecker. Zuerst habe ich heute Morgen den Wecker nicht gehört.": "будильник. Во-первых, сегодня утром я не услышал будильник.",
    "21. sich merken. hat gemerkt. ich bin in der falsche S-Bahn eingestiegen und habe es erst zwei stationen später gemerkt.": "запомнить. заметил. Я сел не на ту городскую электричку и осознал это только через две остановки.",
    "22. schließlich.   Aber ich bin schließlich sogar noch pünktlich im Hotel angekommen.": "окончательно. Но в конце концов я прибыл в отель вовремя.",
    "der Arbeitstag. Oje! ich habe den Wecker auch schon oft nicht gehört. Aber zum Glück noch nie am ersten Arbeistag.": "рабочий день. О, Боже! Я тоже часто не слышал будильника. Но, к счастью, никогда в первый день работы.",
    "23. klingen. hat geklingen. das  klingt aber nicht gut.": "звук. звучало. но это звучит не очень хорошо.",
    "24. erleben. hat erlebt.   So was hast du noch nicht erlebt!": "опыт. испытал. Вы никогда не испытывали ничего подобного!",
    "25. die Panne. die Pannen. Pannen im Alltag.": "будни. Единственное число. Эрик испытывает много стресса в повседневной жизни.",
    "26. verpassen. hat verpasst. Ich habe die S-bahn verpasst.": "скучать. пропущенный. Я пропустил S-Bahn.",
    "27. erfahren Ich habe gerade erfahren: Heute muss ichlange arbeiten.": "Я только что узнал: мне сегодня долго работать.",
    "28. sich vorstellen. hat vorstellt Stell dir vor, Jan hat seine Geldbörse verloren.": "представиться. представил себе. Представьте себе, что Ян потерял свой кошелек.",
    "29. das Pech. So ein Pech!.": "невезение. Неудача!.",
    "30. die Kreditkarte. stoßen. du stößt": "кредитная карта.ударяться.ты толкаешь.",
    "31. er stößst. hat ist gestoßen. Mit papieren und Kreditkarte? Ich bin vor dem Büro mit meinem Chef zusammengestoßen...": "он толкает. ударил. С документами и кредитной картой? Я столкнулся со своим боссом возле офиса...",
    "33. peinlich. Wie peinlich.": "неуклюжий. Как неловко.",
    "34. der Onkel Stefan ist Annas Onkel.": "Дядя Стефан — дядя Анны.",
    "35. die Tante. Daniela ist Annas Tante.": "тётя. Даниэла — тетя Анны",
    "36. der Cousine -n Maria ist Annas Cousine.": "двоюродная сестра -n Мария - двоюродная сестра Анны.",
    "37. der Neffe.-n Luisa ist Annas Neffe.": "племянник.-n Луиза — племянник Анны.",
    "38. die Nichte -n.  Esther ist Annas Nichte.": "племянница -н. Эстер — племянница Анны.",
    "39. sympatisch. Anna sieht sehr sympatisch aus.": "симпатичный. Анна выглядит очень симпатично.",
    "40. das Mitglieder. das Mitglied. Welches Familienmitglied ist besonders wichtig für Sie?": "общение. член. Кто из членов семьи особенно важен для вас?",
    "41. die Wohngemeinschaft. Wohngemeinschaften. (WG)": "соседи по дому. общие квартиры. (РГ)",
    "42. Im dritten Stock wohnt die Wohngemeinschaft": "Коммунальная квартира живет на третьем этаже.",
    "43. wahrscheinlich Das ist wahrscheinlich die WG.": "Вероятно, это, вероятно, общая квартира.",
    "44. das Dach. Dacher. In der Dachwohnung wohnt der Single.": "крыша. Крыши. Одиночка живет в мансардной квартире.",
    "45. bisher. Hristo Radev hat bisher bei seinem Bruder gewohnt.": "до настоящего времени. Христо Радев до сих пор живет со своим братом.",
    "46. verschieden Luisa, Teresa, und Patricia kommen aus verschiedenen Ländern.": "разные Луиза, Тереза ​​и Патрисия родом из разных стран.",
    "47. das viertel In unserem Viertel werden jeder Monat neue Häuser fertig.": "район В нашем районе каждый месяц строятся новые дома.",
    "48. der Mieter. Vor einer Woche sind die Mieter eingezogen. ": "арендатор. Арендаторы заселились неделю назад.",
    "49. einziehen. ist eingezogen. Ich  wohne zum ersten Mal allein.": "входить. переехал. Я живу один впервые.",
    "50. das Mal, Male. komisch. Das ist noch ein bisschen komisch für mich.": "время, времена. забавный. Для меня это все еще немного странно.",
    "51. jemand. Dort ist immer Jemand da.": "кто-то. Там всегда кто-то есть.",
    "52. reichen. hat gereicht. Das reicht uns. ": " достаточны. было достаточно. Нам этого достаточно.  ",
    "53. teilen.  hat geteilt. Wir teilen uns die Zeit. Eine Woche ist Ella bei mir, dann eine Woche bei ihrem Vater.": "расколоть. общий. Мы делим время. Элла неделю со мной, потом неделю с отцом.",
    "54. ausziehen. ist ausgezogen. Alle sind ausgezogen und wir brauchen nicht mehr soviel Platz. der Platz. ": "раздеться. съехал. Все переехали, и нам больше не нужно столько места. место.",
    "55. jeder, jedes, jede.": "все, все, все.",
    "56. Jede von uns hat ihr eigenes Zimmer. Aber die Küche und das Bad benutzen wir gemeinsam.": "У каждого из нас есть своя комната. Но мы пользуемся кухней и ванной вместе.",
    "57. sonst. Ich möchte aber auch sonst nicht allein wohnen.": "иначе... Но иначе я не хочу жить один.",
    "58. nun. Nun komme ich nach Hause und es ist fast immer jemand da.": "так. Теперь я прихожу домой, и там почти всегда кто-то есть.",
    "59. normalerweise. Wir treffen uns normalerweise in der Küche.": "обычно. Обычно мы встречаемся на кухне.",
    "60. schwander. Frau Wasilewskz ist schwander": "Швандер. Г-жа Василевск беременна.",
    "61. der Schwiegervater. die Schwiegermutter. Meine Schwiegermutter lebt in der Türkey.": "тесть. свекровь. Моя свекровь живет в Турции.",
    "62. der Haushalt. der Haushalte. sie hilft ihrer Tochter im Haushalt.": " пенсия. Мой отец уже два года на пенсии.",
    "63. Zeigen Sie sich von Ihrer besten Seite": "Покажи свою лучшую сторону",
    "64. Sei Maskulin!": "Будьте мужественными!",
    "64. Auto": "Автомобиль",
    "Продолжение следует": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",




    // Добавьте больше слов
};

const germanWordInput = document.getElementById("germanWord");
const translationSpan = document.getElementById("translation");
const translateBtn = document.getElementById("translateBtn");
const nextBtn = document.getElementById("nextBtn");

let currentWordIndex = 0;
const germanWords = Object.keys(dictionary);

function translateWord() {
    const germanWord = germanWordInput.value;
    if (dictionary.hasOwnProperty(germanWord)) {
        translationSpan.textContent = dictionary[germanWord];
    } else {
        translationSpan.textContent = "Перевод не найден";
    }
}

function nextWord() {
    if (currentWordIndex < germanWords.length) {
        const nextGermanWord = germanWords[currentWordIndex];
        germanWordInput.value = nextGermanWord;
        translationSpan.textContent = "";
        currentWordIndex++;
    } else {
        germanWordInput.value = "";
        translationSpan.textContent = "Слова закончились";
    }
}

translateBtn.addEventListener("click", translateWord);
nextBtn.addEventListener("click", nextWord);
// --------------------Стиль для кнопки прдыдущее слово------Ваши переменные и словарь
const previousBtn = document.getElementById("previousBtn");

function previousWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        const previousGermanWord = germanWords[currentWordIndex];
        germanWordInput.value = previousGermanWord;
        translationSpan.textContent = "";
    }
}

previousBtn.addEventListener("click", previousWord);