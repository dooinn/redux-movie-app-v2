import styled from 'styled-components'

export const Section = styled.div`
width: 100vw;
height: 100vh;
margin-top: 5rem;
position: relative;

.poster__background{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;




}

.contents__container{
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    -webkit-box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    -moz-box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    background: rgba(0,0,0,0.7);
}

.contents__subcontainer{
    width: 100%;
    height: auto;
    padding: 2rem;
    display: flex;
    color: white;
    margin-top: 5rem;
}

.name__container{
    font-size: 3rem;

}


.description__container{
    width: 100%;
    height: 20rem;;
    
}


.biography__container{
    width: 100%;
    height: 100%;
    overflow: auto;
}

.movieCredits__container{
width: 70vw;
display: flex;
overflow: auto;
}

.movie__poster{
    width: 15rem;
    height: auto;
    padding: 0.5rem;
}


`;