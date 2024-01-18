const words = [
    { 
        word: "GLOBUS", 
        category: "Mitjans de transport", 
        image: "https://www.visitelche.com/wp-content/uploads/2017/04/Experiencias-en-Elche-descubre-Elche-desde-el-cielo-2-scaled.jpg", 
        about: "Un globus aerostàtic és com un gran globus que pot portar persones o coses al cel. Està fet de material lleuger i ple d'aire calent. Quan l'aire dins del globus s'escalfa, es comença a elevar perquè l'aire calent pesa menys que l'aire fred que l'envolta."
    },
    { 
        word: "COTXE", 
        category: "Mitjans de transport", 
        image: "https://neomotor.epe.es/binrepository/990x619/0c31/990d557/none/2594535/VGRS/seat-arona-2021-031-hq_285-48846659_20230613130557.jpg", 
        about: "Un cotxe és un vehicle amb rodes que utilitza un motor per moure's. Les persones seuen dins del cotxe i el condueixen per anar d'un lloc a un altre. Pot ser petit o gran i pot ser de molts colors diferents."
    },
    { 
        word: "BICICLETA", 
        category: "Mitjans de transport", 
        image: "https://contents.mediadecathlon.com/p2091636/k$cc0790528e1a07724f38362c6dc52705/sq/bicicleta-de-montana-29-aluminio-ntt-sport-60-rojo.jpg?format=auto&f=800x0", 
        about: "Una bicicleta és un vehicle amb dues rodes que es mou gràcies a la força de les cames de qui la condueix. Té pedals que es giren i fan moure les rodes. És genial per fer exercici i anar a llocs propers."
    },
    { 
        word: "AVIO", 
        category: "Mitjans de transport", 
        image: "https://easbcn.com/wp-content/uploads/2020/07/256409_1-1000x423.jpg", 
        about: "Un avió és un gran objecte que vol pel cel. Té ales que li permeten mantenir-se a l'aire. Molta gent el pren per anar de país a país perquè pot anar molt ràpid i cobrir llargues distàncies en poc temps."
    },
    { 
        word: "VAIXELL", 
        category: "Mitjans de transport", 
        image: "https://img.asmedia.epimg.net/resizer/vINHdmfiKpttBW-87LxOL9emUW8=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/7U5MMEA3TFNZZBHOCB2QWP52VI.jpg", 
        about: "Un vaixell és un mitjà de transport que navega pels rius, mars i oceans. Pot ser petit com un vaixell de pesca o molt gran com un vaixell de càrrega. Les persones poden viatjar en vaixell per explorar l'aigua."
    },
    { 
        word: "TREN", 
        category: "Mitjans de transport", 
        image: "https://murciaeconomia.com/upload/images/07_2021/2636_4837_5953_1037_4107_renfeok.jpg", 
        about: "Un tren és una cadena de vagons que es mouen sobre uns rails. Les persones poden pujar i baixar del tren a les estacions. És un mitjà de transport molt utilitzat per anar de ciutat a ciutat."
    },
    { 
        word: "HELICOPTER", 
        category: "Mitjans de transport", 
        image: "https://iaerocol.co/wp-content/uploads/2022/09/donde-va-el-motor-de-un-helicoptero.jpg", 
        about: "Un helicòpter és com un cotxe que pot volar pel cel. Té helices a dalt que giren ràpidament i l'eleven. Pot aterrar en molts llocs diferents i és molt divertit veure la terra des de dalt."
    },
    { 
        word: "PATINET", 
        category: "Mitjans de transport", 
        image: "https://img.babymarkt.com/isa/163853/c3/detailpage_desktop_600/-/ada51801853b4742b1da7af220ce6edd/motion-patinete-scooter-urban-pro-negro-azul-a329128", 
        about: "Un patinet és un petit vehicle amb dues rodes que les persones utilitzen per desplaçar-se. Es mouen fent força amb una cama i poden ser molt divertits per jugar a l'aire lliure."
    },
    { 
        word: "TRICICLE", 
        category: "Mitjans de transport", 
        image: "https://ciclismo.calmera.es/4362-large_default/triciclo-gomier--v.jpg", 
        about: "Un tricicle és com una bicicleta, però amb tres rodes en lloc de dues. És perfecte per als nens petits que encara estan aprenent a equilibrar-se. Poden pedalar i divertir-se sense preocupar-se de caure."
    },
    { 
        word: "MOTO", 
        category: "Mitjans de transport", 
        image: "https://cdn.shopify.com/s/files/1/0608/7819/2888/files/ducati-panigale-2023.jpg?v=1674124748", 
        about: "Una moto és un vehicle petit i ràpid amb dues rodes. Les persones seuen a sobre i la condueixen agafant el manillar. És com una bicicleta amb motor. Les motos són genials per moure's ràpidament pel trànsit i sentir el vent en la cara."
    },
    { 
        word: "FORMULA", 
        category: "33?", 
        image: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/11/06/alonso-celebra-su-tercer-puesto.jpeg", 
        about: "33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33 33"
    },
    { 
        word: "GAT", 
        category: "Animals", 
        image: "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg", 
        about: "Un gat és un animal pelut amb bigotis i orelles punxegudes. Els gats poden ser de molts colors diferents i molta gent els té com a mascotes. Als gats els agrada jugar amb ratolins de joguina i fer la migdiada al sol."
    },
    { 
        word: "OS", 
        category: "Animals", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Brown_bear_%28Ursus_arctos%29%2C_Viiksimo%2C_Kainuu_region%2C_Finland%2C_16_June_2018_%2843094873292%29.jpg", 
        about: "Un ós és un animal gros i pelut que viu en boscos i muntanyes. Tenen un pelatge gruixut i pot ser marró, negre o fins i tot blanc. Als óssos els agrada pescar peixos i menjar mel d'abella."
    },
    { 
        word: "CANGUR", 
        category: "Animals", 
        image: "https://cdn0.ecologiaverde.com/es/posts/7/3/9/el_canguro_en_peligro_de_extincion_causas_e_informacion_1937_orig.jpg", 
        about: "Un cangur és un animal saltarí molt divertit. Viu a Austràlia i té una bossa en la qual pot portar els seus nadons. Els cangurs salten amb les seves potes poderoses i sovint es mouen saltant en lloc de caminar."
    },
    { 
        word: "ELEFANT", 
        category: "Animals", 
        image: "https://www.nationalgeographic.com.es/medio/2020/03/04/elefante-en-el-parque-nacional-de-amboseli-con-el-kilimanjaro-al-fondo_4308fa58_800x800.jpg", 
        about: "Un elefant és un animal molt gran amb una trompa llarga. Els elefants viuen a Àfrica i Àsia. Són coneguts per ser intel·ligents i tenir una memòria excel·lent. Als elefants els agrada menjar herba, fulles i fruites."
    },
    { 
        word: "TIGRE", 
        category: "Animals", 
        image: "https://s1.eestatic.com/2023/07/29/ciencia/782681856_235038553_1706x960.jpg", 
        about: "Un tigre és un gran felí que té ratlles a la seva pell i és molt fort i àgil. Els tigres viuen en boscos i jungles. Són excel·lents caçadors i poden córrer molt ràpidament. Als tigres els agrada cacar preses com cérvols i porcs salvatges."
    },
    { 
        word: "LLEO", 
        category: "Animals", 
        image: "https://www.todoservivo.com/wp-content/uploads/2023/10/Descubre-donde-vive-el-leon_-su-habitat-alimentacion-y-caracteristicas-del-rey-de-la-118155722.jpg", 
        about: "Un lleó és un gran felí amb una melena als mascles. Els lleons viuen a Àfrica i alguns a Àsia. Són coneguts per ser els reis de la selva. Als lleons els agrada viure en grups anomenats manades i cacen en col·laboració."
    },
    { 
        word: "GIRAFFA", 
        category: "Animals", 
        image: "https://t3.ftcdn.net/jpg/00/99/89/92/360_F_99899269_is9LgBQsPVPIsYQ08fzkJ6c6yHRnNPqw.jpg", 
        about: "Una girafa és un animal alt amb un coll llarg. Viuen a les terres africanes. Les girafes tenen taques a la seva pell i un llenguatge molt llarg. Als arbres els agrada menjar fulles, i poden arribar a ser molt altes."
    },
    { 
        word: "SERP", 
        category: "Animals", 
        image: "https://statics-cuidateplus.marca.com/cms/serpiente-azul.jpg", 
        about: "Una serp és un animal llarg i sense potes. Algunes serps són venenosas, però altres no. Mouen el cos per lliscar pel terra o bé poden pujar als arbres. Les serps muden la pell de tant en tant."
    },
    { 
        word: "AGUILA", 
        category: "Animals", 
        image: "https://unamglobal.unam.mx/wp-content/uploads/2023/08/destacada-aguila-real.jpg", 
        about: "Un àguila és un ocell majestuós i fort amb ales grans. Té un bec fort i agut que utilitza per agafar la seva presa. Les àguiles volen molt alt i veuen molt bé. És un símbol de llibertat en moltes cultures."
    },
    { 
        word: "DOFI", 
        category: "Animals", 
        image: "https://i.blogs.es/d26f27/delfin_curioso_sian-kaan/650_1200.jpg", 
        about: "Un dofí és un mamífer marí que viu a l'oceà. Tenen una aleta dorsal a l'esquena i són molt intel·ligents. Als dofins els agrada saltar fora de l'aigua i jugar en grup. També poden fer sorolls divertits."
    },
    { 
        word: "ESPANYA", 
        category: "Països", 
        image: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Espana_Cataluna_Barcelona_shutterstock_178539545_Kanuman_Shutterstock.jpg?itok=nK7lkP2E", 
        about: "Espanya és un país situat al sud-oest d'Europa. Té moltes ciutats interessants com Barcelona i Madrid. La gent d'Espanya parla espanyol i gaudeixen de festes animades com la Tomatina i la Feria de Abril."
    },
    { 
        word: "JAPO", 
        category: "Països", 
        image: "https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/GettyImages-181331018.jpg?w=1224&h=647&crop=1", 
        about: "Japó és un país a l'Àsia oriental. Té una rica història i cultura. Algunes coses famoses de Japó són els seus temples, els bonsais i els robots. Tokio és la seva capital i és una ciutat molt moderna."
    },
    { 
        word: "AUSTRALIA", 
        category: "Països", 
        image: "https://travelfine.es/wp-content/uploads/2023/05/45.1-que-continente-es-australia.jpg", 
        about: "Austràlia és un país situat a l'hemisferi sud. Té animals únics com els coalas i els cangurs. Les seves ciutats més grans són Sydney i Melbourne. A Austràlia es parla anglès i gaudeixen de les platges i el sol."
    },
    { 
        word: "BRASIL", 
        category: "Països", 
        image: "https://www.preferente.com/wp-content/uploads/2021/10/Cristo-Redentor-Rio-de-Janeiro-RJ-002.jpg", 
        about: "Brasil és el país més gran d'Amèrica del Sud. Té la selva plena d'animals increïbles com ara aranyes i panteres. Les seves platges, com Copacabana, són conegudes per ser molt boniques. Brasil és famós pels seus grans festivals de carnaval amb música i ball."
    },
    { 
        word: "XINA", 
        category: "Països", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg", 
        about: "Xina és un país molt gran a l'Àsia oriental. Té una antiga història i una rica cultura. La Gran Muralla Xinesa és una famosa estructura que es va construir per protegir el país. Xina té moltes ciutats impressionants com Pequín i Shanghai."
    },
    { 
        word: "CANADA", 
        category: "Països", 
        image: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg", 
        about: "Canadà és un país enorme a Amèrica del Nord. Té paisatges impressionants com les Muntanyes Rocalloses i les cascades del Niàgara. Els hiverns a Canadà poden ser molt freds, però també hi ha molta natura per explorar."
    },
    { 
        word: "RUSSIA", 
        category: "Països", 
        image: "https://www.exteriores.gob.es/Embajadas/moscu/es/Embajada/PublishingImages/MAEC_RUSIA_MOSCU.jpg?width=1440&height=628", 
        about: "Rússia és el país més gran del món, ocupant gran part d'Europa i Àsia. Té una història rica amb molts castells i catedrals. Moscou és la seva capital i Sant Petersburg té molts museus impressionants."
    },
    { 
        word: "INDIA", 
        category: "Països", 
        image: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg", 
        about: "L'Índia és un país a l'Àsia del Sud amb una rica cultura i tradicions. Té molts temples impressionants com el Taj Mahal, que és un famós monument d'amor. La gent d'Índia gaudeix de colors brillants i celebracions festives."
    },



];


let currentWord;
let usedLetters = [];
let incorrectGuesses = 0;

document.getElementById("game-result").style.display = "none";

function startGame() {
    // Recollir el nom del usuari
    const username = document.getElementById("username").value;

    //Fins que l'usuari no hagi introduit un nom no s'iniciarà el joc
    if (!username) {
        return;
    }

    // Mostrar el joc i amagar l'inici
    document.getElementById("user-input").style.display = "none";
    document.getElementById("game-result").style.display = "none";
    document.getElementById("game-content").style.display = "block";
    
    // Recuperar l'estat de la partida si hi habia dades guardades
    const savedGameState = localStorage.getItem('hangmanGameState');
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);

        // Mostrar les dades guardades
        currentWord = gameState.currentWord;
        usedLetters = gameState.usedLetters;
        incorrectGuesses = gameState.incorrectGuesses;
        document.getElementById("incorrect-guesses").innerText = `${incorrectGuesses}/6`;

        document.getElementById("category-info").innerText = `Categoria: ${currentWord.category}`;
        updateWordMask();
        updateHangmanImage();
        updateLetterButtons();
    } else {
        // Si no hi ha res guardat començar un nou joc
        incorrectGuesses = 0;
        document.getElementById("incorrect-guesses").innerText = `0/6`;
        usedLetters = [];
        // Seleccionar una nova paraula aleatoria
        currentWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById("category-info").innerText = `Categoria: ${currentWord.category}`;
        updateWordMask();
        updateHangmanImage();
        updateLetterButtons();
    }
}




// Mascara de la paraula
function updateWordMask() {
    const wordMaskElement = document.getElementById("word-mask");
    wordMaskElement.innerHTML = currentWord.word
        .split('') // Transforma la paraula en una array de lletre
        .map(letter => usedLetters.includes(letter) ? letter : '_') // Si alguna lletra de la paraula ja ha sigut escollida la mostra, en cas contrari es mostra _
        .join(' '); // Torna l'array de lletres a una cadena de text
}

// Mostrar les imatges segons les errades
function updateHangmanImage() {
    const hangmanImageElement = document.getElementById("hangman-image");
    hangmanImageElement.innerHTML = `<img src="img/hangman-${incorrectGuesses}.svg" alt="Hangman Image">`;
}

// Teclat
// function updateLetterButtons() {
//     const letterButtonsElement = document.getElementById("letter-buttons");
//     letterButtonsElement.innerHTML = Array.from({ length: 28 }, (_, index) => {
//         let letter;
//         if (index === 26) {
//             letter = 'Ç';
//         } else if (index === 27) {
//             letter = 'L·L';
//         } else {
//             // Genera les llestres de A a Z, amb unicode sent 65 "A" i sumant index del array
//             letter = String.fromCharCode(65 + index);
//         }
    
//         const isDisabled = usedLetters.includes(letter);
//         return `<button class="btn keyboard-btn" ${isDisabled ? 'disabled' : ''} onclick="guessLetter('${letter}')">${letter}</button>`;
//     }).join(' ');
// }

function updateLetterButtons() {
    const letterButtonsElement = document.getElementById("letter-buttons");
    letterButtonsElement.innerHTML = ''; // Limpiar el contenido existente
    
    const letters = Array.from({ length: 28 }, (_, index) => {
        if (index === 26) {
            return 'Ç';
        } else if (index === 27) {
            return 'L·L';
        } else {
            return String.fromCharCode(65 + index);
        }
    });

    letters.forEach(letter => {
        const isDisabled = usedLetters.includes(letter);

        const button = document.createElement('button');
        button.className = 'btn keyboard-btn';
        button.textContent = letter;
        if (isDisabled) {
            button.setAttribute('disabled', 'true');
        }
        button.addEventListener('click', () => guessLetter(letter));

        letterButtonsElement.appendChild(button);
    });
}



function guessLetter(letter) {
    usedLetters.push(letter);
    // Si la paraula aleatoria no te la lletra escogida s'incrementa els errors
    if (!currentWord.word.includes(letter)) {
        incorrectGuesses++;
    }

    updateWordMask();
    updateHangmanImage();
    updateLetterButtons();

    saveGameState();

    if (currentWord.word.split('').every(letter => usedLetters.includes(letter))) {
        endGame(true);
    } else if (incorrectGuesses === 6) {
        endGame(false);
    }

    document.getElementById("incorrect-guesses").innerText = `${incorrectGuesses}/6`;
}


function endGame(isWinner) {
    // Mostrar info final
    document.getElementById("game-content").style.display = "none";
    document.getElementById("game-result").style.display = "block";
    document.getElementById("win-lose").innerText = isWinner ? 'Felicitats! Has encertat la paraula.' : 'Ho sentim, has perdut. La paraula era: ' + currentWord.word;
    document.getElementById("word-image").innerHTML = '<br><img class="rounded-4" src="' + currentWord.image + '" alt="Word Image" style="width: 90%;"><br>'
    document.getElementById("word-about").innerText = currentWord.about;   

    resetGameState();
   
}
    

function saveGameState() {
    // Guarda la informació
    const gameState = {
        currentWord: currentWord,
        usedLetters: usedLetters,
        incorrectGuesses: incorrectGuesses
    };

    // Guardar informació local storage
    localStorage.setItem('hangmanGameState', JSON.stringify(gameState));
}

function resetGameState() {
    // En cas d'acabar la partida elimina informacio local storage
    localStorage.removeItem('hangmanGameState');
    currentWord = null;
    usedLetters = [];
    incorrectGuesses = 0;
}

window.onload = startGame;
