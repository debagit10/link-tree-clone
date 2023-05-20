const copyButtons = document.querySelectorAll('.copy');

async function copyText (e) {
    e.preventDefault();
    console.log('copied')
    const link = this.getAttribute('link');
    console.log(link)
    try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text" + link)
    } catch(err) {
        console.error(err)
    }
}

copyButtons.forEach(copyButton => copyButton.addEventListener('click', copyText))