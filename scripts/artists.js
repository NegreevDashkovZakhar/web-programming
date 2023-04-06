const renderArtists = async () => {
    const result = await fetch('http://localhost/php/artists/songs_count.php');
    const artists = await result.json();
    const entries_list = document.getElementById('entries_list');
    artists.forEach(artist => {
      entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${artist.artist_name}.jpg" />
      <a class="entry__author">${artist.artist_name}</a>
      <p class="entry__right_column">${artist.songs_count}</p>
    </div>`
    });
}

window.addEventListener('DOMContentLoaded',renderArtists);