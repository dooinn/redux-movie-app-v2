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
    height: 100vh;
    margin-top: 5rem;
    position: absolute;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    -webkit-box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    -moz-box-shadow: 17px 1px 239px 12px rgba(0,0,0,0.84) inset;
    background: rgba(0,0,0,0.4);
}

.contents__subcontainer{
    width: 100%;
    height: auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.casts__container{
    flex: 10%;
    padding: 1rem;
}

.casts__wrap{
    width: 100%;
    height: 30rem;
    overflow: auto;
}

.profile__pic{
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
}

.description__container{
    flex: 40%;
    padding: 1rem;

}

.similarMovie__wrap{
    width: 100%;
    height: auto;
    display: flex;
    overflow: auto;
    
}

.movie__poster {
    width: 5rem;
    height: auto;
    padding: 0.1rem;

}


.genre__wrap {
    width: 100%;
    display: flex;
  
}

.genre__tag{
    padding: 0.4rem 0.6rem;
    background: #000000;
    margin-right: 0.3rem;
    border-radius: 1rem;
  
}

.similarMovie__container{
    width: 100%;


}

.video__container{
    flex: 50%;
    padding: 1rem;

}

`;