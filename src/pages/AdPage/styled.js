import styled from 'styled-components';

const Fake = styled.div`
  background-color:#DDD;
  height:${props => props.height || 20}px;
`;

const PageArea = styled.div`
  display:flex;
  margin-top:20px;

  .box {
    background-color:#FFF;
    border-radius:5px;
    box-shadow:0px 0px 4px #999;
    margin-bottom:20px;
  }

  .box--padding {
    padding:10px;
  }


  .leftSide {
    flex:1;
    margin-right:20px;

    .box {
      display:flex;
    }

    .adImage {
      width:320px;
      height:320px;
      margin-right:20px;

      .image-container img {
        display:flex;
        align-items:center;
        justify-content:center;
        background-size:cover;
        height:320px;
      }
    }

    .adInfo {
      flex:1;

      .adName {
        margin-bottom:20px;

        h2 {
          margin:0;
          margin-top:20px;
        }

        small {
          color:#999;
        }
      }
      .adDescription {
        
        small {
          color:#999;
        }
      }
    }
  }

  .rightSide {
    width:250px;

    .price span {
      color:#0000FF;
      display:block;
      font-size:25px;
      font-weight:bold;
    }

    .contactSellerLink {
      background-color:#0000FF;
      color:#FFF;~
      height:30px;
      border-radius:5px;
      box-shadow:0px 0px 4px #999;
      display:flex;
      justify-content:center;
      text-decoration:none;
      margin-bottom:20px;
    }

    .createdby strong {
      display:block;
    }

    .createdby small {
      display:block;
      color:#999;
      margin-top:10px;
    }
  }
`;

const OthersArea = styled.div`
  h2 {
    font-size:20px;
  }

  .list {
    display:flex;

    .adItem {
      width:25%;
    }
  }
`;

const BreadChumb = styled.div`
  a {
    display:inline-block;
    margin:0px 5px;
    text-decoration:underline;
    color:#000;
  }
`;

export {
  PageArea, Fake, OthersArea, BreadChumb,
};