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

nav {
    padding-top:10px;
    padding-top:10px;

    ul, li {
        margin:0;
        padding:0;
        list-style:none;
    }

    ul {
        display:flex;
        align-items:center;
        height:40px;
    }

    li {
        margin-left:20px;
        margin-right:20px;

        a {
            color:black;
            font-size:14px;
            text-decoration:none;

            &:hover {
                color:#999;
            }

            &.button {
                background-color:#FF8100;
                border-radius:4px;
                color:white;
                padding: 5px 10px;
            }
            &.button:hover {
                background-color:#E57706;
            }
        }
    }
}
`;

export default HeaderArea;