/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { NavLink } from "../Header";
import { X } from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledContent>
        <DismissWrapper>
          <button onClick={onDismiss}>
            <X />
          </button>
        </DismissWrapper>

        <Side />
        <nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </nav>
        <Side>
          <FooterWrapper>
            <footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </footer>
          </FooterWrapper>
        </Side>
      </StyledContent>
    </StyledOverlay>
  );
};

export default MobileMenu;

const DismissWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  button {
    background: none;
    border: none;
  }
`;

const StyledOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(220deg, 3%, 20%, 0.8);
`;

const Side = styled.div`
  flex: 1;
`;

const StyledContent = styled(DialogContent)`
  margin-left: auto;
  display: flex;
  flex-direction: column;

  background-color: var(--color-white);
  height: 100%;

  padding-left: 5rem;

  width: 65%;

  @media ${QUERIES.mobileAndDown} {
    width: 80%;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 32px;

  footer {
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
      text-decoration: none;
      color: var(--color-gray-500);
    }
  }
`;
