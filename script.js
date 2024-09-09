document.addEventListener('DOMContentLoaded', function () {
    showImg('all');
});

function showImg(type) {
    document.getElementById('mobile').style.display = 'none';
    document.getElementById('car').style.display = 'none';
    document.getElementById('bike').style.display = 'none';

    if (type === 'all') {
        document.getElementById('mobile').style.display = 'block';
        document.getElementById('car').style.display = 'block';
        document.getElementById('bike').style.display = 'block';
    } else {
        document.getElementById(type).style.display = 'block';
    }
}

document.getElementById('btn-all').addEventListener('click', function () {
    showImg('all');
});

document.getElementById('btn-mobile').addEventListener('click', function () {
    showImg('mobile');
});

document.getElementById('btn-car').addEventListener('click', function () {
    showImg('car');
});

document.getElementById('btn-bike').addEventListener('click', function () {
    showImg('bike');
});
