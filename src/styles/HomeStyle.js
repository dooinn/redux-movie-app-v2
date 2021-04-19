import styled from 'styled-components'


export const Section = styled.div`
width: 100vw;
height:auto;
margin-top: 5rem;
position: relative;

.movieCategory__container{
    width: 100%;
    padding: 1rem;
    position:absolute;
    z-index: 90;
    box-shadow: -15px 124px 61px 200px rgba(0,0,0,1);
    border: none;
}
.movie__container{
    width: 100%;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

}

.movie__container::-webkit-scrollbar{
    display: none;
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

.carousel__container{
    width: 100%;
    height: auto;

}

.slider__container{
    width: 100%;
    height: 100%;
    position: relative;

}

.slider__background{
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: top;

}

.description__container{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    box-shadow: 900px -2px 110px 34px rgba(0,0,0,.7) inset;
}

.description__box{
    width: 45rem;
    height: 100%;
    color: white;
    padding: 4rem 6rem;
}

.description__box h1{
    font-size: 4rem;
    font-weight: 700;
}

.detail__btn{
    background: #ad8c34;
    padding: 1rem 2rem;
    color: white;

    
}

.detail__btn:hover{
    text-decoration:underline;
}

.sliderBtn__container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 45%;
    padding: 0rem 1rem;

}
.sliderBtn{
    font-size: 3rem;
    background: none;
    outline: none;
    border: none;
    color: gray;
    cursor:pointer;
}

.sliderBtn:hover {
    color: white;
}

.category__text {
    color: white;
}

@media screen and (max-width: 768px){
    .description__box{
    width: 27rem;
    padding: 7rem 0rem 0rem 4rem;
}

.description__box h1{
    font-size: 3rem;
    font-weight: 700;
}

.detail__btn{

    padding: 0.7rem 1rem;
    color: white;

    
}

.movie__poster{
    width: 7rem;

}
}


`;

