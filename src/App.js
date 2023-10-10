import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Science Knowledge</h3>
          <ul>
            <li><a href="#index">Index</a></li>
            <li><a href="#contact">Contact-us</a></li>
          </ul>
        </div>
      </header>
      <div className="page-container">
        <h1>પરિચય</h1>
        <p>
          વિજ્ઞાન એ એવું માનવ પ્રયાસ છે જે આપણે આપણી આસપાસને અનવરણ, સમજવું અને
          સંવાદ કરવાની મંજૂરી આપે છે. આ પ્રક્રિયા સિસ્ટમેટિક અને પ્રમાણબાદી
          પ્રક્રિયા છે જે પ્રાકૃતિ અને બ્રહ્માંડની રહસ્યોને ખોલવાનો પ્રયાસ છે.
          તેમ કરીને, શાળુ અવલોકન, પ્રયોગશીલતા, અને વિશ્લેષણ દ્વારા, વિજ્ઞાન આપણે
          આપણી અસ્તિત્વની જટિલતાને સમજવાનો અધિકાર આપે છે.
        </p>
        <p>
          વૈજ્ઞાનિક પદ્ધતિ વૈજ્ઞાનિક અન્વેષણનો મૂળ છે. આમની તે હોય છે કે અનુમાનો
          બનાવવા, નિયંત્રિત પ્રયોગોનું ડિઝાઇન કરવું, ડેટા સંગ્રહણ અને વિશ્લેષણ
          અને આધાર પર નિષ્કર્ષણ કરવું. આ પ્રણાલીક પ્રક્રિયા વૈજ્ઞાનિક મળવાનાં
          આધારો પર આપતી છે કે વૈજ્ઞાનિક મળવાનું અવિશ્વાસને રહેઠાણી અને પુનરાવતની
          કરીને, વિશાલ જ્ઞાનના વિશાળ શરીરનું નિર્માણ થાય છે.
        </p>
        <p>
          આની મૂળભૂત સાચી, વિજ્ઞાન ક્યોરિઓઝિટીની માંની માનવ ઇચ્છા પર આધાર રાખે
          છે - નોટભૂત પ્રશ્નો પૂછવાની અને ઉત્તરો શોધવાની નાનોરી ઇચ્છા. આમણે આપણા
          અભિમાનોને ચુકવવાની, સ્થિતિ સામાન્ય પ્રશ્ન કરવાની, અને જ્ઞાનની શોધમાં
          રમવાની પ્રેરણા આપે છે. શ્રેણીઓ અને વિધાઓનો અધ્યયન કરવામાં આવતો છે, શું
          એ કમી અસરકારક ખેતરો માંથી છે, તેમનો વોરીયો અને પ્રક્રિયાઓનો સાથ.
          સ્પેસનું અને સમયનું અંતરમાં ઊભું જોવામાં આવે છે. આ વિશેષગ્યતાઓ સાથ કામ
          કરે છે અને એક અનેક પ્રકારના અદ્વાનો અને નવી શોધોને મુકાબલે અને મૂળભૂત
          પ્રશ્નોને જવાબ આપતા આવે છે જે આપણા વાસ્તવિકતાનો સમજણે આપે છે.
        </p>
        <p>
          વિજ્ઞાન એક એવું મર્યાદિત શ્રેણીમાં બંધેલો નથી, પરંતુ એવું સંવિધાનો જેમ
          છે, એક વિવિધ વર્ગને સમાવે છે, જેમણી આપણી વ્યાપક ધ્યાન અને પ્રક્રિયાઓ
          છે. ભૌતિકી વિશ્વના મૌલિક બળોને અભ્યાસે છે, રાસાયણિકનું પદાર્થોની
          ગુણવત્તામાં પ્રવેશ કરે છે, જીવનના રહસ્યોને ખોલવી છે, અને ખગોળને સમય
          અને સ્પેસની માંડવામાં આવે છે. આ વિદ્યાઓ આપણી જીવનને અનગિનત પ્રકારે
          પ્રભાવિત કરે છે અને આવાનું અભ્યાસ છે જે આપણા જીવન પર અસર કરે છે.
        </p>
        <p>
          આ વેબસાઇટ વિજ્ઞાનના આશ્ચર્યો અને તેનું અમારી દુનિયા પર આદભુત અસરને
          ઉજવણી માટે સમર્પિત છે. અમારી સાથે જોડાવો અને અન્વેષણ અને શોધનાં એક
          યાત્રામાં સાથી બનો, જ્યારે આપણી વૈજ્ઞાનિક જ્ઞાનના માંડવામાં વધુ દાખલ
          થઇશે, માઇક્રોસ્કોપિક થી બ્રહ્માંડીક પર. લેખો, સ્રોતો અને પ્રાક્તિક
          વિષયની મૂલક કંટેન્ટની માધ્યમે, આપને વિજ્ઞાનિક પ્રવૃત્તિમાં ભાગ બનવા
          માટે આમંત્રણ આપે છે.
        </p>
        <p>
          વિજ્ઞાન એ એવી પ્રણાલીત, પ્રણાલીક પ્રયાસ છે જે દુનિયા વિશેના ટેસ્ટેબલ
          વ્યાખ્યાઓ અને પ્રગ્નાનોનું રૂપ માં જ્ઞાન બનાવે છે. આધુનિક વિજ્ઞાન
          સામાન્યત: ન્યાયની રક્ષા અને નિયમોદ્ધારિત ફોર્મલ પ્રણાલીમાં આધાર રાખતું
          જોઈએ, તે ત્રણ મુખ્ય શાખાઓમાં વહેચેલું થયું છે: પ્રાકૃતિક વિજ્ઞાનો
          (ઉદાહરણ: જીવવિજ્ઞાન, રાસાયણિક, અને ભૌતિક), જે ભૌતિક વિશ્વને અભ્યાસ કરે
          છે; સામાજિક વિજ્ઞાનો (ઉદાહરણ: આર્થિક, માનસિક વિજ્ઞાન, અને
          સમાજશાસ્ત્ર), જે વ્યક્તિઓ અને સમાજોને અભ્યાસ કરે છે; અને ફોર્મલ
          વિજ્ઞાનો (ઉદાહરણ: તર્ક, ગણિત, અને થિઓરેટિકલ કમ્પ્યુટર સાઇન્સ), જે
          અક્ષરો અને નિયમો દ્વારા શાસન કરવામાં આવે છે. ફોર્મલ વિજ્ઞાનો કે શું તે
          વિજ્ઞાન શાખાઓ છે, આ વિષય પર મતભેદ છે, કારણ કે તેમનું આપેલું પ્રમાણ પર
          આધાર રાખતું નથી. લાગુયું વિજ્ઞાન, વિજ્ઞાનનો વિજ્ઞાનિક જ્ઞાનનો વ્યાવસાય
          કરે છે, ઉદાહરણ તરીકે ઇન્જિનિયરિંગ અને ડૉક્ટરીની. વિજ્ઞાનિક વિદ્યાનું
          ઈતિહાસ વિજ્ઞાનની વિદ્યાની સારી નોંધપાતી છે, મુખ્ય તારીખી રિકોર્ડનું
          મહત્વપૂર્ણ અંશ છે.
        </p>
        <h1 className="index-title" id="index">
          વિજ્ઞાન વિષયનું અનુક્રમણિકા
        </h1>
        <table>
          <thead>
            <tr>
              <th>ક્રમાંક</th>
              <th>અધ્યાય નામ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>પ્રાકૃતિક વિજ્ઞાન</td>
            </tr>
            <tr>
              <td>2</td>
              <td>રાસાયણિક વિજ્ઞાન</td>
            </tr>
            <tr>
              <td>3</td>
              <td>જીવવિજ્ઞાન</td>
            </tr>
            <tr>
              <td>4</td>
              <td>ભૌતિક વિજ્ઞાન</td>
            </tr>
            <tr>
              <td>5</td>
              <td>ખગોળશાસ્ત્ર</td>
            </tr>
          </tbody>
        </table>
        <h1 className="chapter-title">
          Chapter 1: પ્રાકૃતિક વિજ્ઞાન (Natural Science)
        </h1>
        <div>
          <p>
            અધ્યાય વિશેષતા (Chapter Overview): આ અધ્યાયમાં, અમે પ્રાકૃતિક
            વિજ્ઞાનના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ કરીશું. આમાં,
            પ્રાકૃતિક વિશ્વની અનગિનત રહેમાંની વાત કરશીએ, જે આપણને આપણા
            પરિસ્થિતિઓનું અને વિશ્વનું સંચાલન સમજવામાં મદદ કરે છે.
          </p>
          <p>
            અધ્યાય વિશેષતા (Chapter Overview): પ્રાકૃતિક વિજ્ઞાન એ એવ વિજ્ઞાન છે
            જે આપણા પ્રાકૃતિક વિશ્વને સમજવાનો પ્રયાસ કરે છે. આ અધ્યાયમાં, અમે
            પ્રાકૃતિક વિશ્વના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ કરીશું.
            આમાં, આપણે પ્રાકૃતિક જીવનની સમજણી કરવા અને પ્રાકૃતિક ઘટનાઓને
            વિજ્ઞાનિક દૃષ્ટિકોણથી અધ્યયન કરવામાં મદદ કરીશું.
          </p>
          <p>
            પ્રાકૃતિક વિજ્ઞાન અને જીવન (Natural Science and Life): આ અધ્યાયમાં,
            આપણે પ્રાકૃતિક વિજ્ઞાન અને જીવનનો સંકષ્પ્ત સમજણી કરીશું. અમે
            પ્રાકૃતિક વિજ્ઞાનની મૂખ્ય વિશેષતાઓ અને જીવનના આધારભૂત તત્વોને
            સમજશું.
          </p>
          <p>
            પ્રાકૃતિક વિજ્ઞાન અને વિશ્વ (Natural Science and the Universe): આ
            અધ્યાયમાં, અમે આપણા બ્રહ્માંડ અને પ્રાકૃતિક વિજ્ઞાનનો સંકષ્પ્ત સંબંધ
            સમજશું. આમાં, આપણે આકાશગંગા અને ભૌતિક ગણ્યાંકોની સમજણી કરીશું.
          </p>
          <p>
            પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણ (Natural Science and the
            Environment): આ અધ્યાયમાં, અમે પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણનો
            પ્રમુખ માધ્યમ અને તેની પરિસ્થિતિનો અધ્યયન કરીશું. આમાં, આપણે
            પર્યાવરણના મહત્વના વિશેષતાઓ અને પ્રદૂષણનો પ્રભાવ સમજશું.
          </p>
        </div>
        <div>
          <h1 className="chapter-title">પ્રાકૃતિક વિજ્ઞાન MCQs</h1>
          <div class="question">
            <p>1. પ્રાકૃતિક વિજ્ઞાન શાનો અધ્યયન કરે છે?</p>
            <div class="options">
              <input type="radio" name="q1" value="a" /> (a) પશુઓ અને પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q1" value="b" /> (b) માનવો
              <br />
              <input type="radio" name="q1" value="c" /> (c) પ્રાકૃતિક વિશ્વનું
              વર્તમાન
              <br />
              <input type="radio" name="q1" value="d" /> (d) બાજુનાં જવાનો
              <br />
            </div>
          </div>
          <div class="question">
            <p>
              2. પ્રાકૃતિક વિજ્ઞાન શાની અદ્યતન પધ્ધતિઓ અને સાધનો વિશે મળવો છે?
            </p>
            <div class="options">
              <input type="radio" name="q2" value="a" /> (a) પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q2" value="b" /> (b) જીવશાસ્ત્ર
              <br />
              <input type="radio" name="q2" value="c" /> (c) માનવ શરીર
              <br />
              <input type="radio" name="q2" value="d" /> (d) સામુદ્રિક જીવજંતુઓ
              <br />
            </div>
          </div>

          <div class="question">
            <p>3. પ્રાકૃતિક વિજ્ઞાનમાં પ્રયોગશાસ્ત્રનું મક્સદ શું છે?</p>
            <div class="options">
              <input type="radio" name="q3" value="a" /> (a) પ્રયોગો અને
              પરીક્ષણોનો પ્રયોગ
              <br />
              <input type="radio" name="q3" value="b" /> (b) વિજ્ઞાની માહિતીનું
              ત્યાગ
              <br />
              <input type="radio" name="q3" value="c" /> (c) થિયોરીનું ત્યાગ
              <br />
              <input type="radio" name="q3" value="d" /> (d) ગણિતનું ત્યાગ
              <br />
            </div>
          </div>

          <div class="question">
            <p>4. પ્રાકૃતિક વિજ્ઞાનમાં વાત કરવાનો એક પ્રમુખ માધ્યમ શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) પ્રણાલીક અન્વેષણ
              <br />
              <input type="radio" name="q4" value="b" /> (b) પ્રથમિક સંશોધન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રયોગશાસ્ત્ર
              <br />
              <input type="radio" name="q4" value="d" /> (d) ગણિત
              <br />
            </div>
          </div>

          <div class="question">
            <p>5. પ્રાકૃતિક વિજ્ઞાનનો પ્રમુખ લક્ષ્ય શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) આવાજનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="b" /> (b) ગ્રહોનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રાણીઓનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="d" /> (d) પ્રકૃતિનું અધ્યયન
              <br />
            </div>
          </div>
          <input type="submit" value="Submit Answere" />
        </div>
        <div>
          <h1 className="chapter-title">Chapter 2: રાસાયણિક વિજ્ઞાન</h1>
          <div>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): આ અધ્યાયમાં, અમે ભૌતિક
              વિજ્ઞાનની મૌલિક સિદ્ધાંતો, ગણિતીય મોડેલ્સ, અને ભૌતિક જગ્યાઓના
              મહત્વના તત્વોનો અધ્યયન કરીશું. આમાં, ભૌતિક સિદ્ધાંતોનું પરિચય અને
              તેમની અગત્યનીયતાઓ માટેની માહિતી સાંભળશું.
            </p>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): પ્રાકૃતિક વિજ્ઞાન એ એવ વિજ્ઞાન
              છે જે આપણા પ્રાકૃતિક વિશ્વને સમજવાનો પ્રયાસ કરે છે. આ અધ્યાયમાં,
              અમે પ્રાકૃતિક વિશ્વના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ
              કરીશું. આમાં, આપણે પ્રાકૃતિક જીવનની સમજણી કરવા અને પ્રાકૃતિક
              ઘટનાઓને વિજ્ઞાનિક દૃષ્ટિકોણથી અધ્યયન કરવામાં મદદ કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને જીવન (Natural Science and Life): આ
              અધ્યાયમાં, આપણે પ્રાકૃતિક વિજ્ઞાન અને જીવનનો સંકષ્પ્ત સમજણી
              કરીશું. અમે પ્રાકૃતિક વિજ્ઞાનની મૂખ્ય વિશેષતાઓ અને જીવનના આધારભૂત
              તત્વોને સમજશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને વિશ્વ (Natural Science and the Universe): આ
              અધ્યાયમાં, અમે આપણા બ્રહ્માંડ અને પ્રાકૃતિક વિજ્ઞાનનો સંકષ્પ્ત
              સંબંધ સમજશું. આમાં, આપણે આકાશગંગા અને ભૌતિક ગણ્યાંકોની સમજણી
              કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણ (Natural Science and the
              Environment): આ અધ્યાયમાં, અમે પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણનો
              પ્રમુખ માધ્યમ અને તેની પરિસ્થિતિનો અધ્યયન કરીશું. આમાં, આપણે
              પર્યાવરણના મહત્વના વિશેષતાઓ અને પ્રદૂષણનો પ્રભાવ સમજશું.
            </p>
          </div>
          <h1 className="chapter-title">પ્રાકૃતિક વિજ્ઞાન MCQs</h1>
          <div class="question">
            <p>1. ભૌતિક વિજ્ઞાન શાનો અધ્યયન કરે છે?</p>
            <div class="options">
              <input type="radio" name="q1" value="a" /> (a) માનવ શરીર
              <br />
              <input type="radio" name="q1" value="b" /> (b) બિજળીનું વર્તમાન
              <br />
              <input type="radio" name="q1" value="c" /> (c) પ્રાકૃતિક ઘટનાઓ
              <br />
              <input type="radio" name="q1" value="d" /> (d) ક્રોશિયામ શાનો
              ખસેડતું છે?
              <br />
            </div>
          </div>
          <div class="question">
            <p>
              2. પ્રાકૃતિક વિજ્ઞાન શાની અદ્યતન પધ્ધતિઓ અને સાધનો વિશે મળવો છે?
            </p>
            <div class="options">
              <input type="radio" name="q2" value="a" /> (a) પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q2" value="b" /> (b) જીવશાસ્ત્ર
              <br />
              <input type="radio" name="q2" value="c" /> (c) માનવ શરીર
              <br />
              <input type="radio" name="q2" value="d" /> (d) સામુદ્રિક જીવજંતુઓ
              <br />
            </div>
          </div>

          <div class="question">
            <p>3. પ્રાકૃતિક વિજ્ઞાનમાં પ્રયોગશાસ્ત્રનું મક્સદ શું છે?</p>
            <div class="options">
              <input type="radio" name="q3" value="a" /> (a) પ્રયોગો અને
              પરીક્ષણોનો પ્રયોગ
              <br />
              <input type="radio" name="q3" value="b" /> (b) વિજ્ઞાની માહિતીનું
              ત્યાગ
              <br />
              <input type="radio" name="q3" value="c" /> (c) થિયોરીનું ત્યાગ
              <br />
              <input type="radio" name="q3" value="d" /> (d) ગણિતનું ત્યાગ
              <br />
            </div>
          </div>

          <div class="question">
            <p>4. પ્રાકૃતિક વિજ્ઞાનમાં વાત કરવાનો એક પ્રમુખ માધ્યમ શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) પ્રણાલીક અન્વેષણ
              <br />
              <input type="radio" name="q4" value="b" /> (b) પ્રથમિક સંશોધન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રયોગશાસ્ત્ર
              <br />
              <input type="radio" name="q4" value="d" /> (d) ગણિત
              <br />
            </div>
          </div>

          <div class="question">
            <p>5. પ્રાકૃતિક વિજ્ઞાનનો પ્રમુખ લક્ષ્ય શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) આવાજનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="b" /> (b) ગ્રહોનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રાણીઓનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="d" /> (d) પ્રકૃતિનું અધ્યયન
              <br />
            </div>
          </div>
          <input type="submit" value="Submit Answere" />
        </div>
        <div>
          <h1 className="chapter-title">Chapter 3: જીવવિજ્ઞાન </h1>
          <div>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): આ અધ્યાયમાં, અમે ભૌતિક
              વિજ્ઞાનની મૌલિક સિદ્ધાંતો, ગણિતીય મોડેલ્સ, અને ભૌતિક જગ્યાઓના
              મહત્વના તત્વોનો અધ્યયન કરીશું. આમાં, ભૌતિક સિદ્ધાંતોનું પરિચય અને
              તેમની અગત્યનીયતાઓ માટેની માહિતી સાંભળશું.
            </p>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): પ્રાકૃતિક વિજ્ઞાન એ એવ વિજ્ઞાન
              છે જે આપણા પ્રાકૃતિક વિશ્વને સમજવાનો પ્રયાસ કરે છે. આ અધ્યાયમાં,
              અમે પ્રાકૃતિક વિશ્વના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ
              કરીશું. આમાં, આપણે પ્રાકૃતિક જીવનની સમજણી કરવા અને પ્રાકૃતિક
              ઘટનાઓને વિજ્ઞાનિક દૃષ્ટિકોણથી અધ્યયન કરવામાં મદદ કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને જીવન (Natural Science and Life): આ
              અધ્યાયમાં, આપણે પ્રાકૃતિક વિજ્ઞાન અને જીવનનો સંકષ્પ્ત સમજણી
              કરીશું. અમે પ્રાકૃતિક વિજ્ઞાનની મૂખ્ય વિશેષતાઓ અને જીવનના આધારભૂત
              તત્વોને સમજશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને વિશ્વ (Natural Science and the Universe): આ
              અધ્યાયમાં, અમે આપણા બ્રહ્માંડ અને પ્રાકૃતિક વિજ્ઞાનનો સંકષ્પ્ત
              સંબંધ સમજશું. આમાં, આપણે આકાશગંગા અને ભૌતિક ગણ્યાંકોની સમજણી
              કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણ (Natural Science and the
              Environment): આ અધ્યાયમાં, અમે પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણનો
              પ્રમુખ માધ્યમ અને તેની પરિસ્થિતિનો અધ્યયન કરીશું. આમાં, આપણે
              પર્યાવરણના મહત્વના વિશેષતાઓ અને પ્રદૂષણનો પ્રભાવ સમજશું.
            </p>
          </div>
          <h1 className="chapter-title">પ્રાકૃતિક વિજ્ઞાન MCQs</h1>
          <div class="question">
            <p>1. ભૌતિક વિજ્ઞાન શાનો અધ્યયન કરે છે?</p>
            <div class="options">
              <input type="radio" name="q1" value="a" /> (a) માનવ શરીર
              <br />
              <input type="radio" name="q1" value="b" /> (b) બિજળીનું વર્તમાન
              <br />
              <input type="radio" name="q1" value="c" /> (c) પ્રાકૃતિક ઘટનાઓ
              <br />
              <input type="radio" name="q1" value="d" /> (d) ક્રોશિયામ શાનો
              ખસેડતું છે?
              <br />
            </div>
          </div>
          <div class="question">
            <p>
              2. પ્રાકૃતિક વિજ્ઞાન શાની અદ્યતન પધ્ધતિઓ અને સાધનો વિશે મળવો છે?
            </p>
            <div class="options">
              <input type="radio" name="q2" value="a" /> (a) પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q2" value="b" /> (b) જીવશાસ્ત્ર
              <br />
              <input type="radio" name="q2" value="c" /> (c) માનવ શરીર
              <br />
              <input type="radio" name="q2" value="d" /> (d) સામુદ્રિક જીવજંતુઓ
              <br />
            </div>
          </div>

          <div class="question">
            <p>3. પ્રાકૃતિક વિજ્ઞાનમાં પ્રયોગશાસ્ત્રનું મક્સદ શું છે?</p>
            <div class="options">
              <input type="radio" name="q3" value="a" /> (a) પ્રયોગો અને
              પરીક્ષણોનો પ્રયોગ
              <br />
              <input type="radio" name="q3" value="b" /> (b) વિજ્ઞાની માહિતીનું
              ત્યાગ
              <br />
              <input type="radio" name="q3" value="c" /> (c) થિયોરીનું ત્યાગ
              <br />
              <input type="radio" name="q3" value="d" /> (d) ગણિતનું ત્યાગ
              <br />
            </div>
          </div>

          <div class="question">
            <p>4. પ્રાકૃતિક વિજ્ઞાનમાં વાત કરવાનો એક પ્રમુખ માધ્યમ શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) પ્રણાલીક અન્વેષણ
              <br />
              <input type="radio" name="q4" value="b" /> (b) પ્રથમિક સંશોધન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રયોગશાસ્ત્ર
              <br />
              <input type="radio" name="q4" value="d" /> (d) ગણિત
              <br />
            </div>
          </div>

          <div class="question">
            <p>5. પ્રાકૃતિક વિજ્ઞાનનો પ્રમુખ લક્ષ્ય શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) આવાજનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="b" /> (b) ગ્રહોનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રાણીઓનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="d" /> (d) પ્રકૃતિનું અધ્યયન
              <br />
            </div>
          </div>
          <input type="submit" value="Submit Answere" />
        </div>
        <div>
          <h1 className="chapter-title">Chapter 4: ભૌતિક વિજ્ઞાન (Physics)</h1>
          <div>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): આ અધ્યાયમાં, અમે ભૌતિક
              વિજ્ઞાનની મૌલિક સિદ્ધાંતો, ગણિતીય મોડેલ્સ, અને ભૌતિક જગ્યાઓના
              મહત્વના તત્વોનો અધ્યયન કરીશું. આમાં, ભૌતિક સિદ્ધાંતોનું પરિચય અને
              તેમની અગત્યનીયતાઓ માટેની માહિતી સાંભળશું.
            </p>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): પ્રાકૃતિક વિજ્ઞાન એ એવ વિજ્ઞાન
              છે જે આપણા પ્રાકૃતિક વિશ્વને સમજવાનો પ્રયાસ કરે છે. આ અધ્યાયમાં,
              અમે પ્રાકૃતિક વિશ્વના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ
              કરીશું. આમાં, આપણે પ્રાકૃતિક જીવનની સમજણી કરવા અને પ્રાકૃતિક
              ઘટનાઓને વિજ્ઞાનિક દૃષ્ટિકોણથી અધ્યયન કરવામાં મદદ કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને જીવન (Natural Science and Life): આ
              અધ્યાયમાં, આપણે પ્રાકૃતિક વિજ્ઞાન અને જીવનનો સંકષ્પ્ત સમજણી
              કરીશું. અમે પ્રાકૃતિક વિજ્ઞાનની મૂખ્ય વિશેષતાઓ અને જીવનના આધારભૂત
              તત્વોને સમજશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને વિશ્વ (Natural Science and the Universe): આ
              અધ્યાયમાં, અમે આપણા બ્રહ્માંડ અને પ્રાકૃતિક વિજ્ઞાનનો સંકષ્પ્ત
              સંબંધ સમજશું. આમાં, આપણે આકાશગંગા અને ભૌતિક ગણ્યાંકોની સમજણી
              કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણ (Natural Science and the
              Environment): આ અધ્યાયમાં, અમે પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણનો
              પ્રમુખ માધ્યમ અને તેની પરિસ્થિતિનો અધ્યયન કરીશું. આમાં, આપણે
              પર્યાવરણના મહત્વના વિશેષતાઓ અને પ્રદૂષણનો પ્રભાવ સમજશું.
            </p>
          </div>
          <h1 className="chapter-title">પ્રાકૃતિક વિજ્ઞાન MCQs</h1>
          <div class="question">
            <p>1. ભૌતિક વિજ્ઞાન શાનો અધ્યયન કરે છે?</p>
            <div class="options">
              <input type="radio" name="q1" value="a" /> (a) માનવ શરીર
              <br />
              <input type="radio" name="q1" value="b" /> (b) બિજળીનું વર્તમાન
              <br />
              <input type="radio" name="q1" value="c" /> (c) પ્રાકૃતિક ઘટનાઓ
              <br />
              <input type="radio" name="q1" value="d" /> (d) ક્રોશિયામ શાનો
              ખસેડતું છે?
              <br />
            </div>
          </div>
          <div class="question">
            <p>
              2. પ્રાકૃતિક વિજ્ઞાન શાની અદ્યતન પધ્ધતિઓ અને સાધનો વિશે મળવો છે?
            </p>
            <div class="options">
              <input type="radio" name="q2" value="a" /> (a) પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q2" value="b" /> (b) જીવશાસ્ત્ર
              <br />
              <input type="radio" name="q2" value="c" /> (c) માનવ શરીર
              <br />
              <input type="radio" name="q2" value="d" /> (d) સામુદ્રિક જીવજંતુઓ
              <br />
            </div>
          </div>

          <div class="question">
            <p>3. પ્રાકૃતિક વિજ્ઞાનમાં પ્રયોગશાસ્ત્રનું મક્સદ શું છે?</p>
            <div class="options">
              <input type="radio" name="q3" value="a" /> (a) પ્રયોગો અને
              પરીક્ષણોનો પ્રયોગ
              <br />
              <input type="radio" name="q3" value="b" /> (b) વિજ્ઞાની માહિતીનું
              ત્યાગ
              <br />
              <input type="radio" name="q3" value="c" /> (c) થિયોરીનું ત્યાગ
              <br />
              <input type="radio" name="q3" value="d" /> (d) ગણિતનું ત્યાગ
              <br />
            </div>
          </div>

          <div class="question">
            <p>4. પ્રાકૃતિક વિજ્ઞાનમાં વાત કરવાનો એક પ્રમુખ માધ્યમ શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) પ્રણાલીક અન્વેષણ
              <br />
              <input type="radio" name="q4" value="b" /> (b) પ્રથમિક સંશોધન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રયોગશાસ્ત્ર
              <br />
              <input type="radio" name="q4" value="d" /> (d) ગણિત
              <br />
            </div>
          </div>

          <div class="question">
            <p>5. પ્રાકૃતિક વિજ્ઞાનનો પ્રમુખ લક્ષ્ય શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) આવાજનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="b" /> (b) ગ્રહોનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રાણીઓનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="d" /> (d) પ્રકૃતિનું અધ્યયન
              <br />
            </div>
          </div>
          <input type="submit" value="Submit Answere" />
        </div>
        <div>
          <h1 className="chapter-title">Chapter 5: ખગોળશાસ્ત્ર</h1>
          <div>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): આ અધ્યાયમાં, અમે ભૌતિક
              વિજ્ઞાનની મૌલિક સિદ્ધાંતો, ગણિતીય મોડેલ્સ, અને ભૌતિક જગ્યાઓના
              મહત્વના તત્વોનો અધ્યયન કરીશું. આમાં, ભૌતિક સિદ્ધાંતોનું પરિચય અને
              તેમની અગત્યનીયતાઓ માટેની માહિતી સાંભળશું.
            </p>
            <p>
              અધ્યાય વિશેષતા (Chapter Overview): પ્રાકૃતિક વિજ્ઞાન એ એવ વિજ્ઞાન
              છે જે આપણા પ્રાકૃતિક વિશ્વને સમજવાનો પ્રયાસ કરે છે. આ અધ્યાયમાં,
              અમે પ્રાકૃતિક વિશ્વના મૌલિક સિદ્ધાંતો અને તત્વોને સમજવાનો પ્રયાસ
              કરીશું. આમાં, આપણે પ્રાકૃતિક જીવનની સમજણી કરવા અને પ્રાકૃતિક
              ઘટનાઓને વિજ્ઞાનિક દૃષ્ટિકોણથી અધ્યયન કરવામાં મદદ કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને જીવન (Natural Science and Life): આ
              અધ્યાયમાં, આપણે પ્રાકૃતિક વિજ્ઞાન અને જીવનનો સંકષ્પ્ત સમજણી
              કરીશું. અમે પ્રાકૃતિક વિજ્ઞાનની મૂખ્ય વિશેષતાઓ અને જીવનના આધારભૂત
              તત્વોને સમજશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને વિશ્વ (Natural Science and the Universe): આ
              અધ્યાયમાં, અમે આપણા બ્રહ્માંડ અને પ્રાકૃતિક વિજ્ઞાનનો સંકષ્પ્ત
              સંબંધ સમજશું. આમાં, આપણે આકાશગંગા અને ભૌતિક ગણ્યાંકોની સમજણી
              કરીશું.
            </p>
            <p>
              પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણ (Natural Science and the
              Environment): આ અધ્યાયમાં, અમે પ્રાકૃતિક વિજ્ઞાન અને પર્યાવરણનો
              પ્રમુખ માધ્યમ અને તેની પરિસ્થિતિનો અધ્યયન કરીશું. આમાં, આપણે
              પર્યાવરણના મહત્વના વિશેષતાઓ અને પ્રદૂષણનો પ્રભાવ સમજશું.
            </p>
          </div>
          <h1 className="chapter-title">પ્રાકૃતિક વિજ્ઞાન MCQs</h1>
          <div class="question">
            <p>1. ભૌતિક વિજ્ઞાન શાનો અધ્યયન કરે છે?</p>
            <div class="options">
              <input type="radio" name="q1" value="a" /> (a) માનવ શરીર
              <br />
              <input type="radio" name="q1" value="b" /> (b) બિજળીનું વર્તમાન
              <br />
              <input type="radio" name="q1" value="c" /> (c) પ્રાકૃતિક ઘટનાઓ
              <br />
              <input type="radio" name="q1" value="d" /> (d) ક્રોશિયામ શાનો
              ખસેડતું છે?
              <br />
            </div>
          </div>
          <div class="question">
            <p>
              2. પ્રાકૃતિક વિજ્ઞાન શાની અદ્યતન પધ્ધતિઓ અને સાધનો વિશે મળવો છે?
            </p>
            <div class="options">
              <input type="radio" name="q2" value="a" /> (a) પ્લાન્ટ્સ
              <br />
              <input type="radio" name="q2" value="b" /> (b) જીવશાસ્ત્ર
              <br />
              <input type="radio" name="q2" value="c" /> (c) માનવ શરીર
              <br />
              <input type="radio" name="q2" value="d" /> (d) સામુદ્રિક જીવજંતુઓ
              <br />
            </div>
          </div>

          <div class="question">
            <p>3. પ્રાકૃતિક વિજ્ઞાનમાં પ્રયોગશાસ્ત્રનું મક્સદ શું છે?</p>
            <div class="options">
              <input type="radio" name="q3" value="a" /> (a) પ્રયોગો અને
              પરીક્ષણોનો પ્રયોગ
              <br />
              <input type="radio" name="q3" value="b" /> (b) વિજ્ઞાની માહિતીનું
              ત્યાગ
              <br />
              <input type="radio" name="q3" value="c" /> (c) થિયોરીનું ત્યાગ
              <br />
              <input type="radio" name="q3" value="d" /> (d) ગણિતનું ત્યાગ
              <br />
            </div>
          </div>

          <div class="question">
            <p>4. પ્રાકૃતિક વિજ્ઞાનમાં વાત કરવાનો એક પ્રમુખ માધ્યમ શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) પ્રણાલીક અન્વેષણ
              <br />
              <input type="radio" name="q4" value="b" /> (b) પ્રથમિક સંશોધન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રયોગશાસ્ત્ર
              <br />
              <input type="radio" name="q4" value="d" /> (d) ગણિત
              <br />
            </div>
          </div>

          <div class="question">
            <p>5. પ્રાકૃતિક વિજ્ઞાનનો પ્રમુખ લક્ષ્ય શું છે?</p>
            <div class="options">
              <input type="radio" name="q4" value="a" /> (a) આવાજનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="b" /> (b) ગ્રહોનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="c" /> (c) પ્રાણીઓનું અધ્યયન
              <br />
              <input type="radio" name="q4" value="d" /> (d) પ્રકૃતિનું અધ્યયન
              <br />
            </div>
          </div>
          <input type="submit" value="Submit Answere" />
        </div>
        <h1 className="index-title">Contact Us</h1>
        <section class="contact-form" id="contact">
          <form action="#" method="post">
            <div class="input-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="input-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="input-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
