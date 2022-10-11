function close_window() {
  if (confirm("⇽Close this Window to go back⇽")) {
    close();
  }
}

const options = {
    title: false,
    portrait: false,
    byline: false,
    controls: false,
    loop: true,
    color: '000000',
    maxwidth: 500
  };


// const playerwindowPlayer = new Vimeo.Player('playeruntitled', options);


const playerwindowPlayer = new Vimeo.Player('playerwindow', options);
