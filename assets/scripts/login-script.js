/* Comment : Membuat variabel untuk setiap elemen view. */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Comment : Membuat variabel untuk menyimpan informasi email dan pasword. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {

    /* Comment : Namum jika tidak sesuai maka akan menampilkan bahwa input salah. */
    showPopUp();
  }
});
