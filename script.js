function showContent(id) {
    document.querySelectorAll('.content').forEach(function(el) {

        el.classList.add('hidden');
    });
    document.getElementById(id + 'Content').classList.remove('hidden');
}


