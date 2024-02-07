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
                PYTANIE 4.1
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
                PYTANIE 4.2
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
                PYTANIE 5
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
                PYTANIE 6
##############################################
*/


const QuestionsKeys = Array.from(Object.keys(Questions));