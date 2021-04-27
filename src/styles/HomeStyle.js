import styled from 'styled-components'


export const Section = styled.div`
width: 100vw;
height:auto;
margin-top: 5rem;
position: relative;

.seeAll-link{
    color: white;
    text-decoration: none;
    margin-left: 1rem;
}

.seeAll-link:hover{
    text-decoration: underline;
}

.movieCategory__container{
    width: 100%;
    padding: 1rem;
    position:absolute;
    z-index: 90;
    box-shadow: -15px 124px 61px 200px rgba(0,0,0,1);
    border: none;
}

.category_header{
    display: flex;
  align-items: center;
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
    position: relative;

}

.poster__overlay{
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    padding: 1rem;
    color: white;
    align-items: center;
}

.poster__overlay:hover{
    opacity: 1;
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
    height: 75vh;

}

.slider__container{
    width: 100%;
    height: 100%;
    position: relative;

}

.slider__background{
    width: 100%;
    height: 100%;
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
    background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 1rem 2rem;
    color: white;
    transition: .3s;

}

.detail__btn:hover{
    background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
transform: scale(1.2);
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
    padding:1rem;
    margin-top: 5rem;
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

