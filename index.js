(() => {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  document.getElementsByClassName('copyright')[0].innerHTML = `Copyright &copy; ${currentYear} Lidia Ataupillco Ramos`;
})();
