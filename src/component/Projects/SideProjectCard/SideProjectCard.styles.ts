import styled from 'styled-components';

export const SideProjectCardWrapper = styled.div`
  border-radius: 1.5rem;
  max-width: 35rem;
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  &:hover {
    background-color: rgba(172, 172, 172, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    opacity: 0.8;
  }
`;

export const SideProjectImgWrapper = styled.div`
  width: 150px;
  height: 75px;
  overflow: hidden;
  border-radius: 8px;
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SidePojectCardAncer = styled.a`
  width: fit-content;
  height: fit-content;
`;
