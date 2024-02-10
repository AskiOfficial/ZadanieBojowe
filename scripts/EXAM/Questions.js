let StaredExam = true;

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

pyt = `Jak stworzyć komentarz wieloliniowy
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

pyt = `Jak stworzyć komentarz jednoliniowy
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
pyt = `Który z poniższych zapisów deklaracji zmiennej spowoduje błąd`
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
pyt = `Jaki jest wynik poniższego kodu
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
pyt = `Słowa kluczowe w javie są pisane z dużej litery`
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
pyt = `Co należy wstawić pomiędzy dwoma warunkami w <code class="keyword">if</code>(), żeby wykonało się jeśli oba warunki będą spełnione`
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
pyt = `Co należy wstawić pomiędzy dwoma warunkami w <code class="keyword">if</code>(), żeby wykonało się jeśli jeden z warunków będzie spełnione`
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
pyt = `NIGGER`
Questions[pyt] = [2,
    `TRUE`,
    `FALSE`,
    `#*#`,
    `#*#`
]




const QuestionsKeys = Array.from(Object.keys(Questions));
console.log(QuestionsKeys.length)