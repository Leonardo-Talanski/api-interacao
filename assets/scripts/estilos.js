const reset = document.createElement('link');
reset.rel = 'stylesheet';
reset.href = './assets/styles/reset.css';



const styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', './assets/styles/style.css');


const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'https://fonts.googleapis.com';

const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href ='https://fonts.gstatic.com';
gstatic.crossorigin = ' ';

    const ubuntu = document.createElement('link');
    ubuntu.rel = 'stylesheet';
    ubuntu.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,300;1,400&display=swap';


document.head.append(reset,styles, googleapis, gstatic, ubuntu);