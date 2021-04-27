import styled from 'styled-components'

export const Section = styled.div`
width: 100vw;
height: auto;
margin-top: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
padding: 1rem;

.movie-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
}

.poster-link{
    width: 100%;
    height: auto;
}

.poster-iamge{
    width: 100%;
    height: auto;
    object-fit: cover;
    transition:.3s;
    padding:1rem;
}

.post-iamge:hover{
    transform:scale(0.9);
}
`;