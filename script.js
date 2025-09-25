console.log('Take Me To Your Leader');

function navToggle() {
  console.log('Nav contact confirmed');

  let dropdownNav = document.querySelector('#headerHam');

  console.log(dropdownNav);

  if (window.getComputedStyle(dropdownNav).display === 'none') {
    dropdownNav.style.display = 'flex';
    dropdownNav.style.flexDirection = 'column';
    dropdownNav.style.alignItems = 'flex-end';
  } else { dropdownNav.style.display = 'none';
}
}