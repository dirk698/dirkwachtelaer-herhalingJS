function toonWinnaars() {
  var winnaars = new Array("Frankrijk", "Kroatië", "België");
  for (i = 1; i < 4; i++)
    document.write("<p>Op plaats " + i + " staat: " + winnaars[i - 1] + "</p>");
}
