console.log("scrip runing......")
document.querySelector(' .cross').style.display = 'none';
document.querySelector(' .hame').addEventListener('click', () => {
    document.querySelector( '.sidebarGO').classList.toggle('sidebarGO');

    if(document.querySelector( '.sidebarGO').classList.contains('sidebarGO')){
        document.querySelector('.hame').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.hame').style.display = 'inline';
    }

});

