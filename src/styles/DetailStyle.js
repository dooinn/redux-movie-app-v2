import styled, { css } from 'styled-components'


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

.save__btn{
   position: absolute;
   top: 5%;
   left: 90%;
    z-index: 990;
    outline: none;
    border: none;
    background: transparent;
    transition: .3s;
    cursor: pointer;
}

.save__text{
    color: white;
   
}


.save__btn:hover{
    transform: scale(0.9);
    

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

}

.casts__wrap{
    width: 100%;
    height: 30rem;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
    justify-content: center;
}

.casts__wrap::-webkit-scrollbar{
    display: none;
}
  

.cast__info{
    margin-bottom: 1rem;
    position: relative;
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

.similarMovie__container{
    padding: 1rem;
}

.similarMovie__wrap{
    width: 100%;
    height: auto;
    display: flex;
    overflow: auto;


    
}

.movie__poster {
    max-width: 10rem;
    height: auto;
    padding: 0.1rem;
    cursor:pointer;
transition: 0.3s;
}


.movie__poster:hover {
    filter:grayscale(100%);
    transform: scale(0.9);
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

@media screen and (max-width: 768px){
    

    .poster__background{
    width: 100%;
    height: 40rem;
    object-fit: cover;
    object-position: center;
    position: relative;

}

.contents__container{
    display: 100%;
    height: 40rem;

}

    .contents__subcontainer{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}



.casts__wrap{
    width: 40rem;
    height: auto;
    overflow-x:scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.casts__wrap::-webkit-scrollbar{
display: hidden;
}




.cast__info{

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

 
   


}

.profile__pic{
    width: 5em;
    height: 5rem;
    padding: 0.3rem;
    transition: .3s;
    cursor: pointer;
}




.video__container{
width: 100%;

}

.movie__poster{
    width: 7rem;
}


}
`;
const transform = css`
    transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
    position: fixed;
    left: 0; 
    right: 0; 
    top: 0; 
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${props => props.active ? 100 : -1};
 
    figure {
        position: fixed;
        left: 0; right: 0; top: 0; bottom: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background: rgba(0, 0, 0, .7);
    }

    article {
        display: flex;
        position: fixed;
        border-radius: 25px;
        min-width: 400px;
        max-width: 700px;
        min-height: auto;
        max-height: 500px;
        transition: left .4s;
        left: 50%; 
        top: ${props => props.active ? 50 : 100}%;
        top: 50%;
        left: ${props => props.active ? 50 : -200}%;
        background: white;
        box-shadow: 0 0 15px rgba(0, 0, 0, .5);
        z-index: 999;
        ${props => props.active && transform};
        color: black;
        padding: 1rem;
        background: black;
        color: white;

    }

    .column-left-column{
        padding: 1rem;
    }

    .column-right-column{
        padding: 1rem;
        overflow: auto;
    }

    @media screen and (max-width: 768px){
        article{
            flex-direction: column;
            justify-content: center;
        }

    }
`;