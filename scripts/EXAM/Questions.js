let StaredExam = false;

function Start()
{StaredExam = true; document.getElementById("eSTARTER").style.display = "none";}


const Questions = { }

let pyt = "";

/*
##############################################
                PYTANIE 1
##############################################
*/
pyt = `Co wypisze w konsoli poniższy fragment kodu: 
<div class=\"EcodeBlock\">
<code class=\"JClass\">System</code>.<code class=\"staticOrInstance\">out</code>.println(<code class=\"string\">\"3\"</code> + (<code class=\"number\">5d</code>/<code class=\"number\">100d</code>));
</div>
`
Questions[pyt] = [1, 
    "30.05",
    "3.05", 
    "35d/100d", 
    "Kod się nie uruchomi przez błąd"
]

/*
##############################################
                PYTANIE 2
##############################################
*/
pyt = `Który fragment kodu wypisze tylko liczby nieparzyste?`
Questions[pyt] = [4, 
    `<div class="EcodeBlock">
        <code class="keyword">for</code>(<code class="keyword">int</code> <code class="Var">i</code> = <code class="number">1</code>; <code class="Var">i</code> < <code class="number">20</code>; <code class="Var">i</code> += <code class="number">2</code>)<br>
        {<div class="codeTab">
            <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">i</code>);
        </div>}
    </div>`,

    `<div class="EcodeBlock">
    <code class="keyword">for</code>(<code class="keyword">int</code> <code class="Var">i</code> = <code class="number">0</code>; <code class="Var">i</code> < <code class="number">20</code>; <code class="Var">i</code>++)<br>
        {<div class="codeTab">
            <code class="keyword">if</code>(<code class="Var">i</code> % <code class="number">2</code> == <code class="number">1</code>)
            <div class="codeTab">
            <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">i</code>);
            </div>
        </div>}
    </div>`,

    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">i</code> = <code class="number">0</code>;<br>
        <code class="keyword">while</code>(<code class="Var">i</code> < <code class="number">20</code>)<br>
        {<div class="codeTab">
            <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println((<code class="Var">i</code> * <code class="number">2</code>) + <code class="number">1</code>);<br>
            <code class="Var">i</code>++;
        </div>}
    </div>`,

    `Wszystkie podane fragmenty kodu wypisują tylko liczby nieparzyste`
]


/*
##############################################
                PYTANIE 3
##############################################
*/
pyt = `Kiedy wykona się poniższy fragment kodu zakładając, że <code class="Var">x</code> oraz <code class="Var">y</code> to zmienne typu
<code class="keyword">int</code><br>
<div class="EcodeBlock">
    <code class="keyword">if</code>(<code class="Var">x</code> < <code class="Var">y</code> 
    || !<code class="keyword">false</code>)<br>{ }
</div>
`
Questions[pyt] = [2,
    `Kiedy <code class="Var">x</code> będzie mniejszy od <code class="Var">y</code>`,
    `Zawsze`,
    `Nigdy`,
    `Kiedy <code class="Var">x</code> będzie mniejszy bądź równy <code class="Var">y</code>`
]

/*
##############################################
                PYTANIE 4
##############################################
*/

pyt = `Jak stworzyć komentarz wieloliniowy?
`
Questions[pyt] = [2,
    `<div class="EcodeBlock"><code class="comment">// To jest komentarz wieloliniowy</code></div>`,
    `<div class="EcodeBlock"><code class="comment">/* To jest komentarz wieloliniowy */</code></div>`,
    `<div class="EcodeBlock"><code class="comment">''' To jest komentarz wieloliniowy '''</code></div>`,
    `#*#`
]

/*
##############################################
                PYTANIE 5
##############################################
*/

pyt = `Jak stworzyć komentarz jednoliniowy?
`
Questions[pyt] = [3,
    `<div class="EcodeBlock"><code class="comment">/* To jest komentarz jednoliniowy */</code></div>`,
    `<div class="EcodeBlock"><code class="comment"># To jest komentarz jednoliniowy</code></div>`,
    `<div class="EcodeBlock"><code class="comment">// To jest komentarz jednoliniowy</code></div>`,
    `#*#`
]

/*
##############################################
                PYTANIE 6
##############################################
*/

pyt = `Który kod poprawnie konwertuje sekundy na sekundy, minuty i godziny w następującym formacie:<br>
h : m : s
`
Questions[pyt] = [4,
    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">sekundy</code> = <code class="number">36950</code>;<br>
        <code class="keyword">int</code> <code class="Var">minuty</code> = (<code class="Var">sekundy</code> / <code class="number">60</code>) % <code class="number">60</code>;<br>
        <code class="keyword">int</code> <code class="Var">godziny</code> = <code class="Var">sekundy</code> / <code class="number">60</code> / <code class="number">60</code>;<br>
        <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="string">"godziny : minuty : sekundy % 60"</code>);
        </div>`,
    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">sekundy</code> = <code class="number">36950</code>;<br>
        <code class="keyword">int</code> <code class="Var">minuty</code> = (<code class="Var">sekundy</code> / <code class="number">60</code>);<br>
        <code class="keyword">int</code> <code class="Var">godziny</code> = <code class="Var">sekundy</code> / <code class="number">60</code> / <code class="number">60</code>;<br>
        <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">godziny</code> + <code class="string">" : "</code> + <code class="Var">minuty</code> + <code class="string">" : "</code> + <code class="Var">sekundy</code>);
    </div>`,
    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">sekundy</code> = <code class="number">36950</code>;<br>
        <code class="keyword">int</code> <code class="Var">minuty</code> = (<code class="Var">sekundy</code> * <code class="number">60</code>);<br>
        <code class="keyword">int</code> <code class="Var">godziny</code> = <code class="Var">sekundy</code> * <code class="number">60</code> * <code class="number">60</code>;<br>
        <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">godziny</code> + : + <code class="Var">minuty</code> + : + <code class="Var">sekundy</code>);
    </div>`,
    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">sekundy</code> = <code class="number">36950</code>;<br>
        <code class="keyword">int</code> <code class="Var">minuty</code> = (<code class="Var">sekundy</code> / <code class="number">60</code>) % <code class="number">60</code>;<br>
        <code class="keyword">int</code> <code class="Var">godziny</code> = <code class="Var">sekundy</code> / <code class="number">60</code> / <code class="number">60</code>;<br>
        <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">godziny</code> + <code class="string">" : "</code> + <code class="Var">minuty</code> + <code class="string">" : "</code> + <code class="Var">sekundy</code> % <code class="number">60</code>);
    </div>`
]

/*
##############################################
                PYTANIE 7
##############################################
*/
pyt = `Który z poniższych zapisów deklaracji zmiennej spowoduje błąd?`
Questions[pyt] = [3,
    `<div class="EcodeBlock">
        <code class="keyword">int</code> <code class="Var">mojInt</code> = <code class="number">2077</code>;
    </div>`,
    `<div class="EcodeBlock">
        <code class="JClass">String</code> <code class="Var">mojString</code> = <code class="string">"2077"</code>;
    </div>`,
    `<div class="EcodeBlock">
        <code class="keyword">byte</code> <code class="Var">mojByte</code> = <code class="number">2077</code>;
    </div>`,
    `<div class="EcodeBlock">
        <code class="keyword">double</code> <code class="Var">mojDouble</code> = <code class="number">20.77</code>;
    </div>`
]   

/*
##############################################
                PYTANIE 8
##############################################
*/
pyt = `Jaki jest wynik poniższego kodu:
<div class="EcodeBlock">
    <code class="JClass">String</code>[] <code class="Var">miasta</code> = {<code class="string">"Poznan"</code>,
        <code class="string">"Warszawa"</code>,
        <code class="string">"Lodz"</code>,
        <code class="string">"Krakow"</code>,
        <code class="string">"Gdansk"</code>,
        <code class="string">"Rzeszow"</code>};<br>
    
    <code class="keyword">for</code>(<code class="JClass">String</code> <code class="Var">miasto</code> : <code class="Var">miasta</code>)<br>
    {
        <div class="codeTab">
            <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">miasto</code>.substring(<code class="number">0</code>, <code class="number">2</code>);
        </div>
    }
</div>
`
Questions[pyt] = [4,
    `
    P<br>
    W<br>
    L<br>
    K<br>
    G<br>
    R
    `,
    `
    oz<br>
    ar<br>
    od<br>
    ra<br>
    da<br>
    ze
    `,
    `
    Poznan<br>
    Warszawa<br>
    Lodz<br>
    Krakow<br>
    Gdansk<br>
    Rzeszow
    `,
    `
    Po<br>
    Wa<br>
    Lo<br>
    Kr<br>
    Gd<br>
    Rz
    `,
]

/*
##############################################
                PYTANIE 9
##############################################
*/
pyt = `Słowa kluczowe w javie są pisane z dużej litery?`
Questions[pyt] = [2,
    `Prawda`,
    `Fałsz`,
    `#*#`,
    `#*#`
]
/*
##############################################
                PYTANIE 10
##############################################
*/
pyt = `Który typ danych przyjmie powyższą wartość: <code class="number">14.9d</code>`
Questions[pyt] = [4,
    `<code class="JClass">String</code>`,
    `<code class="keyword">int</code>`,
    `<code class="keyword">boolean</code>`,
    `<code class="keyword">double</code>`
]
/*
##############################################
                PYTANIE 11
##############################################
*/
pyt = `Co należy wstawić pomiędzy dwoma warunkami w <code class="keyword">if</code>(), żeby wykonało się jeśli oba warunki będą spełnione?`
Questions[pyt] = [3,
    `!`,
    `||`,
    `&&`,
    `#*#`
]
/*
##############################################
                PYTANIE 12
##############################################
*/
pyt = `Co należy wstawić pomiędzy dwoma warunkami w <code class="keyword">if</code>(), żeby wykonało się jeśli jeden z warunków będzie spełnione?`
Questions[pyt] = [2,
    `!`,
    `||`,
    `&&`,
    `#*#`
]
/*
##############################################
                PYTANIE 13
##############################################
*/
pyt = `Jak poprawnie wypisać w konsoli <code class="string">"Hello World"</code>?`
Questions[pyt] = [2,
    `print(<code class="string">"Hello World"</code>);`,
    `<code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="string">"Hello World"</code>);`,
    `<code class="JClass">Console</code>.WriteLine(<code class="string">"Hello World"</code>);`,
    `#*#`
]
/*
##############################################
                PYTANIE 14
##############################################
*/
pyt = `Java to skrót od Javascript`
Questions[pyt] = [2,
    `PRAWDA`,
    `FAŁSZ`,
    `#*#`,
    `#*#`
]
/*
##############################################
                PYTANIE 15
##############################################
*/
pyt = `Który typ danych przechowuje tekst?`
Questions[pyt] = [1,
    `<code class="JClass">String</code>`,
    `<code class="keyword">int</code>`,
    `<code class="keyword">boolean</code>`,
    `<code class="JClass">TextVar</code>`
]
/*
##############################################
                PYTANIE 16
##############################################
*/
pyt = `Który typ danych przechowuje jeden znak?`
Questions[pyt] = [2,
    `<code class="JClass">String</code>`,
    `<code class="keyword">char</code>`,
    `<code class="keyword">float</code>`,
    `<code class="JClass">CharacterVar</code>`
]
/*
##############################################
                PYTANIE 17
##############################################
*/
pyt = `Jak pozyskać długość tekstu?`
Questions[pyt] = [1,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.length();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.GetLength();</div>`,
    `<div class="EcodeBlock">sizeOf(<code class="Var">mojTekst</code>);</div>`,
    `<div class="EcodeBlock">len(<code class="Var">mojTekst</code>);</div>`
]
/*
##############################################
                PYTANIE 18
##############################################
*/
pyt = `Jak dodać do siebie dwie wartości?`
Questions[pyt] = [3,
    `<div class="EcodeBlock"><code class="Var">x</code> PLUS <code class="Var">y</code>;</div>`,
    `<div class="EcodeBlock"><code class="Var">x</code> * <code class="Var">y</code>;</div>`,
    `<div class="EcodeBlock"><code class="Var">x</code> + <code class="Var">y</code>;</div>`,
    `#*#`
]
/*
##############################################
                PYTANIE 19
##############################################
*/
pyt = `Jak zamienić tekst na taki składający się z dużych liter?`
Questions[pyt] = [3,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.MakeBig();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toLowerCase();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toUpperCase();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toUpper();</div>`
]
/*
##############################################
                PYTANIE 20
##############################################
*/
pyt = `W jakich nawiasach deklaruje się wartości dla tablicy?`
Questions[pyt] = [1,
    `{ }`,
    `< >`,
    `[ ]`,
    `( )`
]
/*
##############################################
                PYTANIE 21
##############################################
*/
pyt = `W jakie nawiasy stawia się obok typu zmiennej, żeby zadeklarować tablicę?`
Questions[pyt] = [3,
    `{ }`,
    `< >`,
    `[ ]`,
    `( )`
]
/*
##############################################
                PYTANIE 22
##############################################
*/
pyt = `Jak zamienić tekst na taki składający się z małycy liter?`
Questions[pyt] = [2,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.MakeSmall();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toLowerCase();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toUpperCase();</div>`,
    `<div class="EcodeBlock"><code class="Var">mojTekst</code>.toLower();</div>`
]
/*
##############################################
                PYTANIE 23
##############################################
*/
pyt = `Jak sprawdzić czy obie wartości są sobie równe?`
Questions[pyt] = [1,
    `<div class="EcodeBlock"><code class="keyword">if</code>(<code class="Var">x</code> == <code class="Var">y</code>)</div>`,
    `<div class="EcodeBlock">
        <code class="keyword">cmp</code> <code class="Var">eax</code>, <code class="Var">ebx</code><br>
        <code class="keyword">je</code> <code class="classOrMethodName">ifequal</code>
    </div>`,
    `<div class="EcodeBlock"><code class="keyword">if</code> <code class="Var">x</code> == <code class="Var">y</code>:</div>`,
    `#*#`
]
/*
##############################################
                PYTANIE 24
##############################################
*/
pyt = `Jak sprawdzić czy wartość jest większa od drugiej?`
Questions[pyt] = [1,
    `<div class="EcodeBlock"><code class="keyword">if</code>(<code class="Var">x</code> > <code class="Var">y</code>)</div>`,
    `<div class="EcodeBlock">
        <code class="keyword">cmp</code> <code class="Var">eax</code>, <code class="Var">ebx</code><br>
        <code class="keyword">jg</code> <code class="classOrMethodName">ifequal</code>
    </div>`,
    `<div class="EcodeBlock"><code class="keyword">if</code> <code class="Var">x</code> > <code class="Var">y</code>:</div>`,
    `#*#`
]
/*
##############################################
                PYTANIE 25
##############################################
*/
pyt = `Co wypisze poniższy kod
<div class="EcodeBlock">
   <code class="keyword">int</code> <code class="Var">n</code> = <code class="number">0</code>;<br>
   <code class="keyword">while</code>(<code class="Var">n</code> < <code class="number>100</code>)<br>
   {
   <div class="codeTab">
      <code class="JClass">System</code>.<code class="staticOrInstance">out</code>.println(<code class="Var">n</code>);
      <code class="keyword">if</code>(<code class="Var">n</code> == <code class="number">9</code>)
         <div class="codeTab">
           <code class="keyword">break</code>;
        </div>
      <code class="Var">n</code>++;
   </div>
   }
</div>
`
Questions[pyt] = [3,
    `Liczby od 0 do 99`,
    `Liczby od 0 do 99 z pominięciem 9`,
    `Liczby od 0 do 9`,
    `#*#`
]

const QuestionsKeys = Array.from(Object.keys(Questions));
console.log(QuestionsKeys.length)
