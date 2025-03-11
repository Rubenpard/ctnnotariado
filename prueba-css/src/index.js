var arrayTest = [1, 2, 3, 3, 2, 1, 4];
var expectedResult = 4;

function dubbed(array) {
  return array.reduce((acc, curr) => acc ^ curr, 0);
}

var yourResult = dubbed(arrayTest);

const isCorrect = expectedResult === yourResult;

document.getElementById("app").innerHTML = `

<div class="page">

<header class="page__header">
  <h1 class="challenge__title">Unique Element Challenge</h1>
  <img src="./src/assets/logo.svg" alt="Ancert logo" class="challenge__logo">
</header>

<div class="challenge">
  
    <section class="challenge__section">
      <h2 class="challenge__subtitle">Target</h2>
      <p class="challenge__description">
        Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.
      </p>
      <h2 class="challenge__subtitle">Considerations</h2>
      <ul class="challenge__list">
        <li class="challenge__list-item">Values are duplicated only twice.</li>
        <li class="challenge__list-item">There is only one non duplicate value.</li>
        <li class="challenge__list-item">The non duplicate value can be placed anywhere on the array.</li>
        <li class="challenge__list-item">The result must be an integer.</li>
      </ul>
    </section>

    <section class="challenge__section challenge__test">
      
      <div class="challenge__test-data">
      <h2 class="challenge__test-data--subtitle">Test data</h2>
      <h2 class="challenge__test-data--data"> ${arrayTest.join(", ")}</h2>
      </div>

    <div class="challenge__results">
      <div class="challenge__result challenge__result--expected">
        <h3 class="challenge__result--title">Expected result</h3>
        <div class="challenge__result--value">${expectedResult}</div>
      </div>
      <div class="challenge__result challenge__result--your">
        <h3 class="challenge__result--title">Your result</h3>
        <div class="challenge__result--value">${yourResult}</div>
      </div>
      </div>
    </section>
  </div>
</div>
`;
