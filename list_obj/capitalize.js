// function that convert all word in capitalize

function titleCase(str) {
    str = str.split(" ")
      .map(x => x.charAt(0).toUpperCase() +
          x.slice(1).toLowerCase()).join(" ");
    console.log(str);
    return str;
  }

  titleCase("I'm a little tea pot");