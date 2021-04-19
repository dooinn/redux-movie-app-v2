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
height: 100%;
top: 0;
left: -100%;
z-index: 999;
background-image: url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 350ms;
opacity: 0.9;

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


.search__input {
    width: 40rem;
    padding: 1rem;
    outline: none;
    border-radius: 25px;
    border: none
    
}

@media screen and (max-width: 768px){
    .search__input{
        width: 100%;
       
        
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

.category__container:hover{
    text-decoration: underline;
}

.category__container a{
    background:#ad8c34;
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

.category__container a{

    padding: 0.7rem 1rem;

  
}

}



`;



