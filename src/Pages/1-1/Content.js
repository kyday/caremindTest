import React from "react";
import styled from "styled-components";

function Content(props) {
  return (
    <ContentLayout>
      <h3>Horizontal Mobile Navbar</h3>
      <p>
        This example demonstrates how a navigation menu on a mobile/smart phone
        could look like.
      </p>
      <p>
        Click on the hamburger menu (three bars) in the top right corner, to
        toggle the menu.
      </p>
      <p>
        <strong>
          Note that this example should'nt be used if you have a lot of links,
          as they will "break" the navbar when there's too many (especially on
          very small screens).
        </strong>
      </p>
    </ContentLayout>
  );
}

export default Content;

export const ContentLayout = styled.article`
  overflow: hidden;
  padding: 1rem 1rem;
  background-color: #555;
  color: #fff;
`;
