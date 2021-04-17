import styled from 'styled-components'

export const Section = styled.div`
width: 100vw;
height:auto;
margin-top: 10vh;


.movie__container{
    width: 100%;
    display: flex;
    overflow: auto;
}

.movie__wrap{
    width: 100%;
    padding: 0.3rem;

}

.movie__poster{
    width: 10rem;
    height: auto;
    cursor:pointer;
transition: 0.3s;
}

.movie__poster:hover{
    filter:grayscale(100%);
    transform: scale(0.9);
}

`;