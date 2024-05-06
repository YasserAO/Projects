export function setClassname(){
    let navBar = document.getElementById('navigationBar');
    if(navigationBar){
        if(window.innerWidth >= 768){
            navBar.className='navBarWideScreen';
        }
        else {
            navBar.className='navBar';
        }
    }
}