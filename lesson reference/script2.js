console.log('Hello World');

// Single Line comment
/* 
Multi
Line
Comment
*/

/*
const - keyword to declare a variable
userName - found on variable name
= - sets the value
'erin' = (string) value of variable
*/
// Variables
const userName = 'erin'; // String
console.log(userName);
let userAge = '38'; // Number
let isPresent = true; // Boolean
// var --- Depricated, not guaranteed to work forever

// Regular Function
function character() {
  console.log('Hello from function character');

  const novice = 1; // Creates the variable used below under let characterLevel

  const characterName = 'Star'; // String value ' '
  let characterLevel = novice; // Variable value
  let isOnline = false; // Boolean value

  // Variable Chaining - Everything you want in one line
  // Log value is everything inside () - remember to add spaces around ' Strings ', or everything will be SmashedAsOneWord - Spaces can only be represented as Strings
  // Can do ' String ' + Variable OR 'String' + ' ' + Variable
  console.log(
    'Variable Chaining: Welcome Back ' +
      characterName +
      ' Level ' +
      characterLevel +
      ' Online ' +
      isOnline
  );
  // Template literal
  // Uses ` and `
  // ${} = Variable caller
  // Does the same thing as Doing the + + + method, already includes spaces
  console.log(
    `Template Literal: Welcome back ${characterName} Level ${characterLevel} Online ${isOnline}`
  );
}

// Function call / Function trigger - Activates the function
character();

//
//

function hamburgerToggle() {
  console.log('hamburgerTogle Activation Check');

  // "document" always refers to HTML document
  const headerNavUl = document.querySelector('.headerNavUl'); // Intentionally used .class because there is only one element with that name (.navList)
  // If there were more elements with the class .navList it would effect all of them MY CODE USED headerNavUl
  console.log(headerNavUl);

  // INLINE STYLING - This method injects inline CSS into the HTML
  headerNavUl.style.display = 'flex';
  // add aditional lines for additional css changes
  headerNavUl.style.flexDirection = 'column';
  headerNavUl.style.alignItems = 'center';
  headerNavUl.style.justifyContent = 'center';

  /* Not sure why use this one vs .style. - Uses code defined in CSS rather than inside JS?
  // Changes the active class name of the element via CSS file
  // Class name that is changed is defined in HTML - "<ul class="headerNavUl hidden">"
  // Adding hidden defines the default state to be the value of ".hidden" in external CSS, in this case "display:none"
  //
  // headerNavUl.classList.add('show');
  // headerNavUl.classList.remove('hidden')
  // By using this method, you tell the site to STOP (remove) using the default class name of "hidden" and then add a NEW class to the element, using properties/values that are defined in the external CSS as ".show"
  //
  // This would refer to this part of the CSS file:
  //
      .hidden {
        display: none;  if using this method you do not need display:none on the headerNavUl element above 
      }
  //
      .show {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  */

// For some reason this makes the hamburgerToggle function work idk why
// globalThis.hamburgerToggle = hamburgerToggle;
