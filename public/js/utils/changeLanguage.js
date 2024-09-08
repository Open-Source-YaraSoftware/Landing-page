export function changeLanguage(event){
    let lang = event.target.value;
    if (lang === 'es') {
        window.location.href = './index-es.html';
    } else if (lang === 'en') {
        window.location.href = './index.html';
    }
}