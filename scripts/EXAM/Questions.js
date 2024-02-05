let StaredExam = true;

const Questions = { }

let pyt = `Co wypisze w konsoli poniższy fragment kodu: 
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



const QuestionsKeys = Array.from(Object.keys(Questions));