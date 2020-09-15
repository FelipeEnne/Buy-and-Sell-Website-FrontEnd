import styled from 'styled-components';

const HeaderArea = styled.div`
background-color:#FFF;
height:60px;
border-bottom:1px solid #CCC;

.container {
    max-width:1000px;
    margin:auto;
    display:flex;
}

a {
    text-decoration:none;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:60px;

    .logoB,
    .logoE,
    .logoS {
        font-size:27px;
        font-weight:bold;
    }

    .logoB { color:#ff7272 }
    .logoE { color:#5a5a5a }
    .logoS { color:#6969f1 }

}
`;

export default HeaderArea;