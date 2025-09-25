console.log('Take Me To Your Leader');

function navToggle() {
  console.log('Nav contact confirmed');

  let dropdownNav = document.querySelector('.headerNavList');

  console.log(dropdownNav);

  if (dropdownNav.style.display === 'none') {
    dropdownNav.style.display = 'flex';
    dropdownNav.style.flexDirection = 'column';
    dropdownNav.style.alignItems = 'flex-end';
  } else { dropdownNav.style.display = 'none';
}
}