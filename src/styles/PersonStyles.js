import styled from 'styled-components'

export const Section = styled.div`
width: 100vw;
height: 100vh;
margin-top: 5rem;

.poster__background{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;


}

.contents__container{
    width: 100%;
    height: 100%;
    margin-top: 5rem;
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
}

.name__container{
    font-size: 3rem;

}


.description__container{
    width: 20rem;
    height: 10rem;
    position: absolute;
    bottom: 40%;
    right:7%;


}
.biography__container{
    width: 100%;
    height: 100%;
    overflow: auto;
}


`;