import styled from 'styled-components';

export const Section = styled.div`
padding: 3rem;
color: white;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
margin-top: 7em;
flex-direction: column;




`;

export const MovieGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2rem;
padding: 2rem;

.movie__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    

}

.movie__container img {
    width: 100%;
    height:auto;
}

.overlay__btn{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
align-items: center;
justify-content: center;

}

.overlay__btn:hover{
    opacity:1;
    background-color:rgba(0,0,0,.6)
}

.movie__link{
    display:flex;
    justify-content: center;
    padding: 1rem;
    color: gray;
}
.movie__link:hover{

color: white;
}


.delete__btn {
    padding: 1rem;
    border: none;
    background: transparent;
    color: gray;
    cursor: pointer;

}

.delete__btn:hover{
    color: white;
    
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;

    }


`;