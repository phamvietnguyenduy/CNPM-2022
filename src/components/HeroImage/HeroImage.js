import React from "react";
import { Wrapper, Content } from "./HeroImage.styles";
export default function HeroImage({ image }) {
  return (
    <Wrapper image={image}>
      <Content>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </Content>
    </Wrapper>
  );
}
