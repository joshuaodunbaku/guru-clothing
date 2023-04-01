import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  /* // font-size: 20px; */
  align-items: center;
  transition: height 2s ease;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      max-width: 100%;
      max-height: 300px;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
      color: white;
      // background-color: #3d3d3d;
      background-color: #000000;
      border: 0;
      border-radius: 2px;
      &:hover {
        box-shadow: 2px 0px 5px #a7a7a7;
      }
      &:active {
        outline: 3px solid #707070;
        // border: 1px solid #dbdbdbcc;
      }
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`;

// .checkout-item-container {

// }
