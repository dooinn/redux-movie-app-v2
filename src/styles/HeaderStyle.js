import styled from 'styled-components'

export const Section = styled.nav`
width: 100vw;
height: 5rem;
background: #000000;
position: fixed;
z-index: 999;
top: 0;
left:0;
box-shadow: 0px -20px 75px 65px rgba(0,0,0,0.99);



a{
    color: white;
}

.modal {
width: 100%;
height: 100vh;
top: -100%;
left: 0;
z-index: 9999;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 350ms;
background: rgba(0,0,0,0.9)


}

.modal.active{
top:0;
left: 0;
transition: 350ms;
z-index: 900;

}



.close__btn{
color:white;
font-size:2rem;
position: absolute;
top:5%;
right:5%;
cursor:pointer;
transition: 0.3s;


}

.close__btn:hover{
transform: scale(1.2);

}

.searchSwitch__btn{
    border: none;
    outline: none;
    padding: 1rem;
    background: none;
    color: white;
    cursor: pointer;
}

.switch__btn {
    font-size: 3rem;
    color: gray;
}

.switch__btn:hover{
    color: white;
}

.search__title{
    font-size: 6rem;
    color: white;
    margin-bottom: 2rem;
}


.search__input {
    width: 40rem;
    padding: 1rem;
    outline: none;
    border-radius: 25px;
    border: none
    
}

@media screen and (max-width: 768px){

    .modal{
        padding: 1rem;
    }
    .search__input{
        width: 100%;

    
    }

    .search__title{
        font-size: 4rem;
        
    }

    .searchSwitch__btn{
        font-size: 2rem;

    }

}



`;

export const SearchResultContainer = styled.div`
width: 100%;
height: auto;
display: flex;
overflow-y: hidden;
overflow-x: scroll;

&::-webkit-scrollbar{
    display:none;
}

.movie__poster{
    width: 12rem;
    height: auto;
    padding: 0.5rem;
    transition: .3s;
}

.movie__poster:hover{
    transform: scale(.95);
    filter: grayscale(100%);
}


`;

export const NavBar = styled.nav`
width: 100%;
height: 100%;
display: flex;
padding: 0 2rem;
justify-content: space-between;
color: white;



.logo__container{
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items:center;
}

.search__container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
   
}

.search__box{
    width: 18rem;
    display: flex;
    padding: 0.2rem 0.3rem 0.2rem 1rem;
    justify-content: space-between;
    align-items:center;
    background-color: white;
    color: #A9A9A9;
    border-radius: 25px;
    transition: 0.3s;
    cursor: pointer;
}

.search__box:hover{
    transform: scale(1.01);
}

.search__icon{
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items:center;
    background:black;
    border-radius:50%;
    color: white;
}

.category__container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items:center;


}

.search__icon__sm{
    display: none;
}



.category__container a{
background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 1rem 2rem;
color: white;

 
  
}

.category__container a:hover{
background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 1rem 2rem;
color: white;

 
  
}

@media screen and (max-width: 768px){
    .search__container{
        display: none;
       
        
    }
    .search__icon__sm{
    display: block;
    margin-right:1rem;
    cursor:pointer;
}



}



`;



